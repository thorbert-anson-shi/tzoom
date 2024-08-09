"use server";

import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

export async function fetchText() {
  const texts = await prisma.text.findMany();
  return texts;
}

export async function submitText(text: string) {
  const result = await prisma.text.create({
    data: {
      content: text,
      author: "anonymous"
    },
  });
  return result;
}