
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
      <div className="w-full h-[40vh] relative">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 blog-container">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-200 bg-blue-900/60 backdrop-blur-sm rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-4">
            <img 
              src={post.author.avatarUrl} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-4 border-2 border-white"
            />
            <div>
              <p className="font-medium text-white">{post.author.name}</p>
              <p className="text-sm text-gray-300">{post.date} · {post.readTime} min read</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article>
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
