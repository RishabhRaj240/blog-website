
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <div 
      className={`
        group flex flex-col overflow-hidden border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md
        ${featured ? 'md:flex-row' : ''}
      `}
    >
      <div className={`${featured ? 'md:w-1/2' : 'w-full'} h-52 overflow-hidden`}>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className={`${featured ? 'md:w-1/2' : 'w-full'} p-6 flex flex-col`}>
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            {post.category}
          </span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <p className="text-xs font-medium text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.date} · {post.readTime} min read</p>
            </div>
          </div>
          <Button asChild variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
            <Link to={`/blog/${post.slug}`}>Read</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
