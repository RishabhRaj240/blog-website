
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/data/blogData";
import NotFound from "./NotFound";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <MainLayout>
      <div className="blog-container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center mb-8">
                <img 
                  src={post.author.avatarUrl} 
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.date} · {post.readTime} min read</p>
                </div>
              </div>
              
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-72 object-cover rounded-lg mb-8"
              />
              
              <div 
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="border-t border-gray-200 mt-12 pt-8">
                <h3 className="font-serif text-xl font-bold mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
                </div>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPostPage;
