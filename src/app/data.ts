"use server";

import { PrismaClient, Sentence } from '@prisma/client';
import { NextResponse } from 'next/server';

let prisma = new PrismaClient();

export async function fetchText({ mode, length, category }: { mode: string, length: number, category?: string }) {
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
    } else {
      let i = 0;
      // Search through 3 texts before giving up
      while (i < 3) {
        let lp = quoteIdx, rp = quoteIdx + 3, j = 0;
        quote = text.sentences.slice(lp, rp);

        let found = false;
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

export async function submitText(text: { title: string, author: string, content: string }) {
  // Upload whole texts to db
  let textResponse;

  try {
    textResponse = await prisma.text.create({
      data: {
        title: text.title,
        author: text.author,
        content: text.content,
      },
    });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }

  // Split text into sentences to store in db
  let sentences = text.content.split(/(?<=[\.!?])( )/);

  // Update word count on db
  try {
    text.content.split(" ").forEach((word) => {
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