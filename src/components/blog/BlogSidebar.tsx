
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogData";
import { Search } from "lucide-react";

const BlogSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Search</h3>
        <div className="flex">
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none focus-visible:ring-blue-500"
          />
          <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
            <Search size={18} />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link 
                to={`/categories/${category.slug}`}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-500">{category.postCount}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="font-medium text-gray-900 hover:text-blue-600 text-sm line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Subscribe</h3>
        <p className="text-sm text-gray-600 mb-4">Get the latest posts delivered to your inbox.</p>
        <Input
          type="email"
          placeholder="your@email.com"
          className="mb-2 focus-visible:ring-blue-500"
        />
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
      </div>
    </div>
  );
};

export default BlogSidebar;
