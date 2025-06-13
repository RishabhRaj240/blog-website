
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogData";
import { Clock, User, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  onDelete?: (id: string) => void;
  showDelete?: boolean;
}

const BlogCard = ({ post, featured = false, onDelete, showDelete = false }: BlogCardProps) => {
  const { toast } = useToast();

  const handleDelete = () => {
    console.log("Delete button clicked for blog:", post.id);
    if (onDelete) {
      console.log("Calling onDelete function with id:", post.id);
      onDelete(post.id);
      toast({
        title: "Blog deleted",
        description: "Your blog post has been deleted successfully.",
      });
    } else {
      console.log("No onDelete function provided");
    }
  };

  return (
    <div 
      className={`
        group flex flex-col overflow-hidden border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white relative mx-4 sm:mx-0
        ${featured ? 'lg:flex-row' : ''}
      `}
    >
      {/* Delete button - only show for user blogs */}
      {showDelete && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                size="sm"
                className="h-7 w-7 sm:h-8 sm:w-8 p-0 bg-red-500/80 hover:bg-red-600 backdrop-blur-sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("Delete trigger clicked");
                }}
              >
                <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()} className="mx-4 sm:mx-0 max-w-md">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-base sm:text-lg">Delete Blog Post</AlertDialogTitle>
                <AlertDialogDescription className="text-sm">
                  Are you sure you want to delete "{post.title}"? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                <AlertDialogCancel className="text-sm">Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete();
                  }} 
                  className="bg-red-500 hover:bg-red-600 text-sm"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}

      <Link to={`/blog/${post.slug}`} className="contents">
        <div className={`${featured ? 'lg:w-1/2' : 'w-full'} h-40 sm:h-48 lg:h-52 overflow-hidden relative`}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Floating category badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
            <span className="inline-block px-2 py-1 sm:px-3 text-xs font-semibold text-white bg-blue-600/80 backdrop-blur-sm rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className={`${featured ? 'lg:w-1/2' : 'w-full'} p-4 sm:p-6 flex flex-col bg-white relative overflow-hidden`}>
          {/* Subtle background animation */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-12 -translate-y-12 sm:translate-x-16 sm:-translate-y-16 group-hover:translate-x-6 group-hover:-translate-y-6 sm:group-hover:translate-x-8 sm:group-hover:-translate-y-8"></div>
          
          <div className="relative z-10">
            <div className="mb-3">
              <span className="inline-block px-2 py-1 sm:px-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {post.category}
              </span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-2 sm:mb-3 hover:text-blue-600 transition-all duration-300 transform group-hover:translate-x-1 line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 sm:mb-4 flex-grow leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-md transition-all duration-300 group-hover:border-blue-200"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    <User className="h-3 w-3 text-gray-400" />
                    <p className="text-xs font-medium text-gray-900 truncate max-w-20 sm:max-w-none">{post.author.name}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <p className="text-xs text-gray-500">{post.date} · {post.readTime} min</p>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 transform group-hover:translate-x-1 group-hover:shadow-md text-xs sm:text-sm px-2 sm:px-3"
              >
                <span className="hidden sm:inline">Read More →</span>
                <span className="sm:hidden">Read →</span>
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
