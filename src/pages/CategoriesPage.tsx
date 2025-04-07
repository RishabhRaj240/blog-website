
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import CategoryCard from "@/components/blog/CategoryCard";
import { categories } from "@/data/blogData";

const CategoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="blog-container py-12">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Categories</h1>
        
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
