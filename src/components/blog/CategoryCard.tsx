
import { Link } from "react-router-dom";
import { Category } from "@/data/blogData";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.slug}`} className="block">
      <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600">{category.postCount} posts</span>
          <span className="text-sm text-gray-500">View →</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
