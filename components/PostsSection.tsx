import { Post } from '@/lib/posts';
import PostCard from './PostCard';

interface PostsSectionProps {
  posts: Post[];
}

export default function PostsSection({ posts }: PostsSectionProps) {
  return (
    <section
      id="novedades"
      className="section-padding bg-gradient-to-b from-calmint-peach/30 to-calmint-cream"
    >
      <div className="container-calmint">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="heading-display mb-3">Novedades Calmint</h2>
          <p className="subheading">
            Descubre lanzamientos, combinaciones de aromas, ideas de rituales y
            pequeñas inspiraciones para disfrutar tus productos Calmint.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="card-soft p-6 text-center text-sm text-calmint-dark/70">
            Pronto estaremos compartiendo novedades, colecciones especiales e
            ideas para usar tus velas, aceites y jabones Calmint.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
