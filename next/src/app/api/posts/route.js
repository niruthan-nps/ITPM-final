import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  const { content, image } = await req.json();

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const post = await prisma.post.create({
      data: {
        content,
        image,
        authorId: decoded.userId,
      },
    });

    await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        totalBlogs: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const posts = await prisma.post.findMany({
      where: { authorId: decoded.userId },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}
