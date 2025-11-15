// components/PostCard.tsx
import Image from "next/image";

type PostCardProps = {
  post: {
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    createdAt: string;
  };
};

export default function PostCard({ post }: PostCardProps) {
  // Si no hay imagen en la base de datos, usamos una imagen genérica
  const imageSrc = post.imageUrl ?? "/images/posts/default.jpg";

  return (
    <article className="rounded-3xl border border-calmint-peach/40 bg-white/80 shadow-sm overflow-hidden">
      <div className="relative h-48 w-full bg-calmint-peach/30">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-calmint-sage">
          {new Date(post.createdAt).toLocaleDateString("es-PA", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
        <h3 className="text-lg font-semibold text-calmint-ink">
          {post.title}
        </h3>
        <p className="text-sm text-calmint-ink/70">
          {post.description}
        </p>
      </div>
    </article>
  );
}
