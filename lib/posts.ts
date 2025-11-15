// lib/posts.ts
import { prisma } from "./prisma";

export type Post = {
  id: number; // AHORA ES number, no string
  title: string;
  description: string;
  imageUrl: string | null;
  createdAt: Date;
};

export async function getPosts(): Promise<Post[]> {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return posts;
}

export async function createPost(data: {
  title: string;
  description: string;
  imageUrl?: string;
}): Promise<Post> {
  const post = await prisma.post.create({
    data: {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl ?? null,
    },
  });

  return post;
}

export async function deleteLastPost(): Promise<void> {
  const lastPost = await prisma.post.findFirst({
    orderBy: { createdAt: "desc" },
  });

  if (!lastPost) return;

  await prisma.post.delete({
    where: { id: lastPost.id },
  });
}
