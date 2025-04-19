import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// GET Single Post
export async function GET(req, { params }) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(params.id) },
      include: { author: true },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching post" }, { status: 500 });
  }
}

// UPDATE Post
export async function PUT(req, { params }) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];
  const { content, image } = await req.json();

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const post = await prisma.post.update({
      where: { id: Number(params.id), authorId: decoded.userId },
      data: { content, image },
      include: { author: true },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Error updating post" }, { status: 500 });
  }
}

// DELETE Post
export async function DELETE(req, { params }) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await prisma.post.delete({
      where: { id: Number(params.id), authorId: decoded.userId },
    });

    await prisma.user.update({
      where: { id: decoded.userId },
      data: { totalBlogs: { decrement: 1 } },
    });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting post" }, { status: 500 });
  }
}
