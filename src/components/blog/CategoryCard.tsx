
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/blogData";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  // Generate a background image URL based on category (we'll use placeholder images)
  const getBgImage = (slug: string) => {
    const imageMap: Record<string, string> = {
      'technology': '/images/photo-1487058792275-0ad4aaf24ca7',
      'productivity': '/images/photo-1498050108023-c5249f4df085',
      'design': '/images/photo-1531297484001-80022131f5a1',
      'lifestyle': '/images/photo-1523712999610-f77fbcfc3843',
      'creativity': '/images/photo-1500375592092-40eb2168fd21',
      'business': '/images/photo-1488590528505-98d2b5aba04b'
    };
    return imageMap[slug] || '/images/photo-1531297484001-80022131f5a1';
  };

  return (
    <Link to={`/categories/${category.slug}`} className="block group">
      <div className="relative border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform group-hover:translate-y-[-5px]">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src={getBgImage(category.slug)} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/50 group-hover:from-blue-800/70 transition-all duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="relative p-6 z-10">
          <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{category.name}</h3>
          <p className="text-gray-100 text-sm mb-4 line-clamp-2">{category.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-200">{category.postCount} articles</span>
            <span className="text-white group-hover:text-blue-200 transition-colors flex items-center">
              Explore <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
