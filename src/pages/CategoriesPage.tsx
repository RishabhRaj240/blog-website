
import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import CategoryCard from "@/components/blog/CategoryCard";
import { categories } from "@/data/blogData";
import { BookOpen, Sparkles } from "lucide-react";

const CategoriesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <MainLayout>
      <div className="relative py-24 mb-12 overflow-hidden">
        {/* Enhanced background with animations */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/photo-1506744038136-46273834b3fb" 
            alt="Categories background" 
            className="w-full h-full object-cover scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-900/70 to-black/90"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="blog-container relative z-20">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-full mb-8 border border-blue-400/30 shadow-xl">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">Explore Our Content Categories</h1>
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-gray-200 text-xl leading-relaxed">
              Discover curated articles across a variety of topics, all designed to provide you with valuable insights and perspectives that matter.
            </p>
          </div>
        </div>
      </div>
      
      <div className="blog-container pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
        
        {/* Enhanced visual element with animations */}
        <div className={`mt-20 relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '800ms' }}>
          <img 
            src="/images/photo-1500673922987-e212871fec22" 
            alt="Reading inspiration" 
            className="w-full h-80 object-cover transition-all duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-transparent flex items-center">
            <div className="p-12 max-w-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="h-6 w-6 text-white animate-pulse" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white">Expand Your Knowledge</h3>
              </div>
              <p className="text-white/95 text-lg leading-relaxed">
                Our curated categories cover everything from cutting-edge technology trends to inspiring lifestyle insights. Find your next favorite read and join a community of curious minds.
              </p>
            </div>
          </div>
          
          {/* Floating animation elements */}
          <div className="absolute top-8 right-8 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-12 right-16 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
