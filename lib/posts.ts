import { prisma } from './db';

export type Post = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
};

export async function getAllPosts(): Promise<Post[]> {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });
  return posts;
}

export async function createPost(data: {
  title: string;
  description: string;
  imageUrl: string;
}): Promise<Post> {
  const post = await prisma.post.create({
    data: {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl
    }
  });

  return post;
}
