
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import BlogForm from "@/components/blog/BlogForm";

const WriteBlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 blog-container py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Share Your Story
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Create compelling content that inspires and engages your audience. Your voice matters.
            </p>
          </div>
          
          <BlogForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default WriteBlogPage;
