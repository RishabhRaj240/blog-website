
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
        group flex flex-col overflow-hidden border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white relative
        ${featured ? 'md:flex-row' : ''}
      `}
    >
      {/* Delete button - only show for user blogs */}
      {showDelete && (
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                size="sm"
                className="h-8 w-8 p-0 bg-red-500/80 hover:bg-red-600 backdrop-blur-sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("Delete trigger clicked");
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete "{post.title}"? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete();
                  }} 
                  className="bg-red-500 hover:bg-red-600"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}

      <Link to={`/blog/${post.slug}`} className="contents">
        <div className={`${featured ? 'md:w-1/2' : 'w-full'} h-52 overflow-hidden relative`}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Floating category badge */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600/80 backdrop-blur-sm rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className={`${featured ? 'md:w-1/2' : 'w-full'} p-6 flex flex-col bg-white relative overflow-hidden`}>
          {/* Subtle background animation */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8"></div>
          
          <div className="relative z-10">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {post.category}
              </span>
            </div>
            
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 hover:text-blue-600 transition-all duration-300 transform group-hover:translate-x-1">
              {post.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md transition-all duration-300 group-hover:border-blue-200"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    <User className="h-3 w-3 text-gray-400" />
                    <p className="text-xs font-medium text-gray-900">{post.author.name}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <p className="text-xs text-gray-500">{post.date} · {post.readTime} min read</p>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 transform group-hover:translate-x-1 group-hover:shadow-md"
              >
                Read More →
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
