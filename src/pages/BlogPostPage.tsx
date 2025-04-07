
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
              
              {/* Added visual elements */}
              <div className="my-10 p-6 bg-blue-50 rounded-lg border border-blue-100 relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1/4">
                  <img 
                    src="/images/photo-1482938289607-e9573fc25ebb" 
                    alt="Reading inspiration" 
                    className="h-full w-full object-cover opacity-25"
                  />
                </div>
                <div className="relative z-10 max-w-[75%]">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Enjoyed this article?</h3>
                  <p className="text-gray-700 mb-4">Discover more insights by exploring related content or joining our newsletter.</p>
                  <div className="flex items-center space-x-4">
                    <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium">More articles</Link>
                    <span className="text-gray-300">|</span>
                    <Link to="/categories" className="text-blue-600 hover:text-blue-800 font-medium">Browse categories</Link>
                  </div>
                </div>
              </div>
              
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
