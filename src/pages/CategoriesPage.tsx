
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import CategoryCard from "@/components/blog/CategoryCard";
import { categories } from "@/data/blogData";
import { BookOpen } from "lucide-react";

const CategoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="blog-container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Content Categories</h1>
          <p className="text-gray-600 text-lg">
            Discover curated articles across a variety of topics, all designed to provide you with valuable insights and perspectives.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
