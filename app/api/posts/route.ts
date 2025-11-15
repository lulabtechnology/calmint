// app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createPost, getPosts } from "@/lib/posts";

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error obteniendo posts", error);
    return NextResponse.json(
      { error: "Error obteniendo posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, imageUrl } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Título y descripción son obligatorios" },
        { status: 400 }
      );
    }

    const post = await createPost({
      title,
      description,
      imageUrl,
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creando post", error);
    return NextResponse.json(
      { error: "Error creando post" },
      { status: 500 }
    );
  }
}
