import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  const { topic, body, location } = await req.json();

  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const journal = await prisma.journal.create({
      data: {
        topic,
        body,
        location,
        userId: decoded.userId,
      },
    });

    await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        totalJournals: {
          increment: 1,
        },
      },
    });
    return NextResponse.json(journal, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating journal" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const journals = await prisma.journal.findMany({
      where: { userId: decoded.userId },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(journals);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching journals" },
      { status: 500 }
    );
  }
}
