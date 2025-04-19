import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const ITEMS_PER_PAGE = 5;

// GET All Posts with Pagination
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const searchQuery = searchParams.get("query") || "";

  try {
    const totalPosts = await prisma.post.count({
      where: {
        content: { contains: searchQuery, mode: "insensitive" },
      },
    });

    const posts = await prisma.post.findMany({
      where: {
        content: { contains: searchQuery, mode: "insensitive" },
      },
      include: { author: true },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });

    return NextResponse.json({
      posts,
      totalPages: Math.ceil(totalPosts / ITEMS_PER_PAGE),
      currentPage: page,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}

// CREATE Post
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
      data: { content, image, authorId: decoded.userId },
      include: { author: true },
    });

    await prisma.user.update({
      where: { id: decoded.userId },
      data: { totalBlogs: { increment: 1 } },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
