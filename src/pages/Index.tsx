
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogData";

const Index = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="blog-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Discover Ideas That<br />
                <span className="text-blue-600">Shape Your World</span>
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Explore thoughtful insights on technology, productivity, design, and modern living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/blog">Explore Articles</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/photo-1531297484001-80022131f5a1" 
                alt="Blog Cover" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="blog-container">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Featured Post</h2>
          <BlogCard post={featuredPost} featured={true} />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="blog-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900">Recent Posts</h2>
            <Button asChild variant="outline">
              <Link to="/blog">View All</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="blog-container">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Explore Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/categories/${category.slug}`}>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.postCount} posts</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="blog-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-8 opacity-90">Get the latest posts delivered straight to your inbox</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-900"
              />
              <Button className="bg-white text-blue-700 hover:bg-gray-100">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
