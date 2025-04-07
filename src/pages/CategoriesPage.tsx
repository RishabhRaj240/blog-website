
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
      <div className="relative py-20 mb-12 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/photo-1506744038136-46273834b3fb" 
            alt="Categories background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/80"></div>
        </div>
        
        <div className="blog-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/30 backdrop-blur-sm rounded-full mb-6 border border-blue-400/30">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Explore Our Content Categories</h1>
            <p className="text-gray-200 text-lg">
              Discover curated articles across a variety of topics, all designed to provide you with valuable insights and perspectives.
            </p>
          </div>
        </div>
      </div>
      
      <div className="blog-container pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        {/* Added visual element */}
        <div className="mt-16 relative overflow-hidden rounded-xl">
          <img 
            src="/images/photo-1500673922987-e212871fec22" 
            alt="Reading inspiration" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Expand Your Knowledge</h3>
              <p className="text-white/90 max-w-md">
                Our curated categories cover everything from tech trends to lifestyle insights. Find your next favorite read.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
