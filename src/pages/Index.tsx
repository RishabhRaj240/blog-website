
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogData";
import { ArrowRight, BookOpen, CheckCircle, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="blog-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-blue-700 bg-blue-100 mb-4">
                Discover MindBloom
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Ideas That <span className="text-blue-600 italic">Transform</span> Your Perspective
              </h1>
              <p className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed">
                Join thousands of readers who gain fresh insights on technology, productivity, 
                design, and modern living every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                  <Link to="/blog">Start Reading <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/categories">Browse Categories</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  <img src="/images/photo-1492562080023-ab3db95bfbce" className="w-8 h-8 rounded-full border-2 border-white" alt="Reader" />
                  <img src="/images/photo-1534528741775-53994a69daeb" className="w-8 h-8 rounded-full border-2 border-white" alt="Reader" />
                  <img src="/images/photo-1506794778202-cad84cf45f1d" className="w-8 h-8 rounded-full border-2 border-white" alt="Reader" />
                </div>
                <span className="ml-4 text-sm text-gray-600">Joined by 10,000+ readers</span>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-full opacity-70"></div>
              <img 
                src="/images/photo-1531297484001-80022131f5a1" 
                alt="Blog Cover" 
                className="rounded-lg shadow-xl relative z-10 transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="blog-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Why Our Readers Love MindBloom</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Curated content that helps you grow professionally and personally, delivered in a format that respects your time.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Stay Ahead</h3>
              <p className="text-gray-600">Get insights on emerging trends before they become mainstream.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Deep Dives</h3>
              <p className="text-gray-600">Thoughtful analysis that goes beyond surface-level content.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Join a community of like-minded individuals seeking growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="blog-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900">Editor's Pick</h2>
            <Button asChild variant="ghost" className="text-blue-600">
              <Link to="/blog">View All Articles <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <BlogCard post={featuredPost} featured={true} />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-white">
        <div className="blog-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900">Latest Insights</h2>
            <Button asChild variant="outline">
              <Link to="/blog">Browse All</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="blog-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What Our Readers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied readers who have transformed their perspective with MindBloom.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/images/photo-1494790108377-be9c29b29330" alt="Sarah J." className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">UX Designer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"MindBloom has become my go-to source for design insights. The articles are thoughtful and actionable - I've applied so many ideas to my work."</p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/images/photo-1507003211169-0a1dd7228f2d" alt="Michael T." className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Michael Thomas</p>
                  <p className="text-sm text-gray-500">Tech Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The technology insights from MindBloom have directly influenced several key decisions in my startup. Worth every minute spent reading."</p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/images/photo-1534528741775-53994a69daeb" alt="Emma L." className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Emma Lopez</p>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The weekly newsletter is something I genuinely look forward to. Each article provides valuable insights that have helped me grow professionally."</p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="blog-container">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Popular Categories</h2>
              <p className="text-gray-600">Explore our diverse range of topics</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/categories">All Categories</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => (
              <Link key={category.id} to={`/categories/${category.slug}`}>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300 h-full bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-sm font-medium text-blue-600">
                      {category.postCount} articles
                    </span>
                    <span className="text-gray-500 hover:text-blue-600 transition-colors">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Expand Your Horizons?</h2>
            <p className="mb-8 opacity-90 text-lg md:text-xl leading-relaxed">
              Join our community of over 10,000 readers who receive thought-provoking content delivered directly to their inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 rounded-md focus:outline-none text-gray-900 text-lg"
              />
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg">
                Subscribe Free <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-80">
              No spam, unsubscribe anytime. Read our <Link to="#" className="underline">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
