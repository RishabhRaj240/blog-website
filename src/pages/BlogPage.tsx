
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/data/blogData";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="blog-container py-12">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
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

export default BlogPage;
