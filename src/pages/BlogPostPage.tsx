
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import type { BlogPost } from "@/data/blogData";
import { ArrowLeft, Clock, User, Share2, Calendar } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Look for the post in both default blogs and user blogs
    const userBlogs = JSON.parse(localStorage.getItem('userBlogs') || '[]');
    const allBlogs = [...userBlogs, ...blogPosts];
    const foundPost = allBlogs.find(p => p.slug === slug);
    
    setPost(foundPost || null);
    setIsVisible(true);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Hero Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Back Button */}
            <div className="absolute top-8 left-8">
              <Button 
                onClick={() => window.history.back()}
                variant="secondary"
                size="sm"
                className={`bg-white/90 hover:bg-white transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="blog-container">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600/80 backdrop-blur-sm rounded-full mb-4">
                    {post.category}
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {post.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-container py-12">
            <div className="max-w-4xl mx-auto">
              {/* Article Meta */}
              <div className={`flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
                <div className="flex items-center space-x-3">
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <p className="font-medium text-gray-900">{post.author.name}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="ml-auto">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div className={`prose prose-lg max-w-none transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
                <div className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                  {post.excerpt}
                </div>
                
                <div className="text-gray-700 leading-relaxed space-y-6">
                  {post.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </div>

              {/* Related Content Section */}
              <div className={`mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    Enjoyed this article?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Discover more amazing content from our community of writers.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/blog'}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Explore More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPostPage;
