
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts, categories } from "@/data/blogData";
import NotFound from "./NotFound";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(cat => cat.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return <NotFound />;
  }

  const categoryPosts = blogPosts.filter(post => post.category.toLowerCase() === category.name.toLowerCase());

  return (
    <MainLayout>
      <div className="blog-container py-12">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
        <p className="text-gray-600 mb-8">{category.description}</p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {categoryPosts.length > 0 ? (
              <div className="space-y-8">
                {categoryPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No posts found</h3>
                <p className="text-gray-600">Check back later for new content in this category.</p>
              </div>
            )}
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

export default CategoryPage;
