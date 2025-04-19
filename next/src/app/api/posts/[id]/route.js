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

// GET One Post
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const decoded = verifyToken(req);
    const post = await prisma.post.findUnique({
      where: { id: Number(id), authorId: decoded.userId },
    });

    if (!post)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error fetching post" },
      { status: 401 }
    );
  }
}

// UPDATE Post
export async function PUT(req, { params }) {
  const { id } = params;
  const { content, image } = await req.json();

  try {
    const decoded = verifyToken(req);
    const post = await prisma.post.update({
      where: { id: Number(id), authorId: decoded.userId },
      data: { content, image },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error updating post" },
      { status: 401 }
    );
  }
}

// DELETE Post
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const decoded = verifyToken(req);
    await prisma.post.delete({
      where: { id: Number(id), authorId: decoded.userId },
    });

    // Decrement totalBlogs after deletion
    await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        totalBlogs: {
          decrement: 1,
        },
      },
    });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error deleting post" },
      { status: 401 }
    );
  }
}
