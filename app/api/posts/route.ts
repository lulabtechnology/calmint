import { NextRequest, NextResponse } from 'next/server';
import { createPost, getAllPosts } from '@/lib/posts';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts', error);
    return NextResponse.json(
      { error: 'Error al obtener los posts' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, imageUrl } = body as {
      title?: string;
      description?: string;
      imageUrl?: string;
    };

    if (!title || !description || !imageUrl) {
      return NextResponse.json(
        { error: 'Faltan campos: título, descripción o imagen.' },
        { status: 400 }
      );
    }

    const post = await createPost({ title, description, imageUrl });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating post', error);
    return NextResponse.json(
      { error: 'Error al crear el post' },
      { status: 500 }
    );
  }
}
