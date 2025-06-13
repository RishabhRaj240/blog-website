
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { PenTool, Sparkles } from "lucide-react";

const BlogPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <MainLayout>
      <div className="relative">
        {/* Hero Section with animation */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-20 mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="blog-container relative z-10">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                Discover Amazing Content
              </h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Explore insightful articles, tutorials, and stories from passionate writers around the world.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Link to="/write">
                  <PenTool className="h-5 w-5 mr-2" />
                  Write Your Story
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="blog-container pb-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <div 
                    key={post.id}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className={`lg:w-1/3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '500ms' }}>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;
