
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/blogData";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.slug}`} className="block group">
      <div className="border border-gray-200 p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300 transform group-hover:translate-y-[-5px]">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{category.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">{category.postCount} articles</span>
          <span className="text-gray-500 group-hover:text-blue-600 transition-colors flex items-center">
            Explore <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
