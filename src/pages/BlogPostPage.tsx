
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/data/blogData";
import NotFound from "./NotFound";
import { Clock, User, Share, Heart, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  const [isVisible, setIsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <MainLayout>
      <div className="w-full h-[50vh] relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <div className="w-32 h-32 border border-white rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <div className="w-24 h-24 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 blog-container">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-200 bg-blue-900/60 backdrop-blur-sm rounded-full mb-4 border border-blue-400/30">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={post.author.avatarUrl} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                />
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <User className="h-4 w-4 text-white/80" />
                    <p className="font-medium text-white">{post.author.name}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-white/80" />
                    <p className="text-sm text-gray-300">{post.date} · {post.readTime} min read</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`text-white hover:bg-white/20 transition-all duration-300 ${isLiked ? 'text-red-400' : ''}`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`text-white hover:bg-white/20 transition-all duration-300 ${isBookmarked ? 'text-yellow-400' : ''}`}
                >
                  <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Share className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className={`lg:w-2/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div 
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Enhanced visual elements with animations */}
              <div className="my-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 relative overflow-hidden shadow-lg">
                <div className="absolute right-0 top-0 bottom-0 w-1/3">
                  <img 
                    src="/images/photo-1482938289607-e9573fc25ebb" 
                    alt="Reading inspiration" 
                    className="h-full w-full object-cover opacity-20 rounded-2xl"
                  />
                </div>
                <div className="absolute top-4 right-8 w-16 h-16 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative z-10 max-w-[70%]">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Enjoyed this article?</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">Discover more insights by exploring related content or joining our newsletter for the latest updates.</p>
                  <div className="flex items-center space-x-6">
                    <Link 
                      to="/blog" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 hover:translate-x-1"
                    >
                      More articles →
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link 
                      to="/categories" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 hover:translate-x-1"
                    >
                      Browse categories →
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 mt-12 pt-8">
                <h3 className="font-serif text-xl font-bold mb-6">Share this article</h3>
                <div className="flex space-x-4">
                  {['Twitter', 'Facebook', 'LinkedIn', 'Reddit'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="px-4 py-2 text-gray-600 hover:text-white hover:bg-blue-600 border border-gray-200 hover:border-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className={`lg:w-1/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPostPage;
