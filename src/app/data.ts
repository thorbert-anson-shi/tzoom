"use server";

import { PrismaClient, Sentence, User } from '@prisma/client';
import { NextResponse } from 'next/server';

let prisma = new PrismaClient();

export async function fetchWords({ mode, length, category }: { mode: string, length: number, category?: string }) {
  const texts = await prisma.text.findMany({
    include: {
      sentences: true,
    }
  });

  if (mode === "quotes") {
    let text = texts[Math.floor(Math.random() * texts.length)];

    let quote: Sentence[] = [];

    let quoteIdx = Math.floor(Math.random() * text.sentences.length);

    // Get quote of free length
    if (length === -1) {
      quote = text.sentences.slice(quoteIdx, quoteIdx + 3);
      // Get quote of specified length
    } else {
      let i = 0;
      // Search through 3 texts before giving up on search
      while (i < 3) {
        let lp = quoteIdx, rp = quoteIdx + 3, j = 0;
        quote = text.sentences.slice(lp, rp);

        let found = false;
        // Search through 100 sentences before giving up on text
        while (j < 100) {
          let quoteLength = quote.reduce((acc, curr) => acc + curr.length, 0);

          // Find a quote that is within the length restrictions
          if (quoteLength <= length) rp++;
          else if (quoteLength > length + 10) lp++;
          else {
            found = true;
            break;
          };

          // Keep looking for quotes
          j++;
        }
        if (found) {
          return NextResponse.json({ title: text.title, author: text.author, content: quote.join(". "), createdAt: text.createdAt, updatedAt: text.updatedAt }, { status: 200 });
        } else {
          i++;
        }
        return NextResponse.json({ error: "No quotes found" }, { status: 404 });
      }
    }
  } else if (mode === "words") {

  }
}

export async function submitText(textData: { title: string, author: string, uploader: User, content: string }) {
  // Upload whole texts to db
  let textResponse;

  // Split text into sentences to store in db
  let sentences = textData.content.split(/(?<=[\.!?])( )/);

  try {
    textResponse = await prisma.text.create({
      data: {
        title: textData.title,
        author: textData.author,
        uploader: { connect: { id: textData.uploader.id } },
        content: textData.content,
        sentences: {
          create: sentences.map((sentence) => {
            return { content: sentence, length: sentence.length }
          })
        }
      },
    });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }

  // Update word count on db
  try {
    textData.content.split(" ").forEach((word) => {
      // Get rid of unwanted characters still stuck onto words
      word = word.replace(/[!?"',:;0-9]/, "");

      prisma.word.upsert({
        where: { word: word },
        update: { count: { increment: 1 } },
        create: { word: word, count: 1 }
      })
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }

  return NextResponse.json({ message: textResponse, sentences: sentences }, { status: 200 });
}