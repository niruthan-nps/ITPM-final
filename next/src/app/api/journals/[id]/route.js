import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

function verifyToken(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) throw new Error("Unauthorized");

  return jwt.verify(token, process.env.JWT_SECRET);
}

// GET One Journal
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const decoded = verifyToken(req);
    const journal = await prisma.journal.findUnique({
      where: { id, userId: decoded.userId },
    });

    if (!journal)
      return NextResponse.json({ error: "Journal not found" }, { status: 404 });

    return NextResponse.json(journal);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error fetching journal" },
      { status: 401 }
    );
  }
}

// UPDATE Journal
export async function PUT(req, { params }) {
  const { id } = params;
  const { topic, body, location } = await req.json();

  try {
    const decoded = verifyToken(req);
    const journal = await prisma.journal.update({
      where: { id, userId: decoded.userId },
      data: { topic, body, location },
    });

    return NextResponse.json(journal);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error updating journal" },
      { status: 401 }
    );
  }
}

// DELETE Journal
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const decoded = verifyToken(req);
    await prisma.journal.delete({
      where: { id, userId: decoded.userId },
    });

    // Decrement totalJournals after deletion
    await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        totalJournals: {
          decrement: 1,
        },
      },
    });

    return NextResponse.json({ message: "Journal deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error deleting journal" },
      { status: 401 }
    );
  }
}
