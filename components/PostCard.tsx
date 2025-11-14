import Image from 'next/image';
import { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString('es-PA', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <article className="card-soft overflow-hidden flex flex-col">
      <div className="relative h-48 w-full bg-calmint-peach/30">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <p className="text-xs text-calmint-dark/60">Publicado el {formattedDate}</p>
        <h3 className="font-display text-lg text-calmint-dark">{post.title}</h3>
        <p className="text-sm text-calmint-dark/75">{post.description}</p>
      </div>
    </article>
  );
}
