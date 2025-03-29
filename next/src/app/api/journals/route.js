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
    return NextResponse.json(journal, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating journal" },
      { status: 500 }
    );
  }
}
