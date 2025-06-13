
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Image as ImageIcon, Save, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

const BlogForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    imageUrl: "",
    author: {
      name: "",
      avatarUrl: ""
    }
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create blog post object
      const blogPost = {
        id: Date.now().toString(),
        slug: generateSlug(formData.title),
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        imageUrl: formData.imageUrl || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        author: {
          name: formData.author.name,
          avatarUrl: formData.author.avatarUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
        },
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        readTime: Math.max(1, Math.ceil(formData.content.split(' ').length / 200))
      };

      // Get existing blogs from localStorage
      const existingBlogs = JSON.parse(localStorage.getItem('userBlogs') || '[]');
      
      // Add new blog to the beginning
      const updatedBlogs = [blogPost, ...existingBlogs];
      
      // Save to localStorage
      localStorage.setItem('userBlogs', JSON.stringify(updatedBlogs));

      // Show success toast
      toast({
        title: "Blog Published Successfully!",
        description: "Your blog post has been saved and published.",
        duration: 3000,
      });

      // Reset form
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        category: "",
        imageUrl: "",
        author: {
          name: "",
          avatarUrl: ""
        }
      });

      // Navigate to blog page after a short delay
      setTimeout(() => {
        navigate('/blog');
      }, 1500);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your blog post. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BlogFormData, value: string) => {
    if (field === 'author') return;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAuthorChange = (field: 'name' | 'avatarUrl', value: string) => {
    setFormData(prev => ({
      ...prev,
      author: {
        ...prev.author,
        [field]: value
      }
    }));
  };

  return (
    <div className="animate-fade-in">
      <Card className="max-w-4xl mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 mx-auto">
            <PenTool className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="font-serif text-3xl text-gray-900">Create New Blog Post</CardTitle>
          <p className="text-gray-600 mt-2">Share your thoughts with the world</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium text-gray-700">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter your blog title..."
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium text-gray-700">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  placeholder="e.g., Technology, Lifestyle..."
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt" className="text-sm font-medium text-gray-700">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                placeholder="Brief description of your blog post..."
                className="transition-all duration-300 focus:scale-[1.01] focus:shadow-md resize-none"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Featured Image URL
              </Label>
              <Input
                id="imageUrl"
                value={formData.imageUrl}
                onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="authorName" className="text-sm font-medium text-gray-700">Author Name</Label>
                <Input
                  id="authorName"
                  value={formData.author.name}
                  onChange={(e) => handleAuthorChange('name', e.target.value)}
                  placeholder="Your name..."
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="authorAvatar" className="text-sm font-medium text-gray-700">Author Avatar URL</Label>
                <Input
                  id="authorAvatar"
                  value={formData.author.avatarUrl}
                  onChange={(e) => handleAuthorChange('avatarUrl', e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content" className="text-sm font-medium text-gray-700">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                placeholder="Write your blog content here..."
                className="transition-all duration-300 focus:scale-[1.01] focus:shadow-md resize-none min-h-[300px]"
                required
              />
            </div>

            <div className="flex justify-end pt-6">
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Publishing...
                  </>
                ) : (
                  <>
                    <Save className="h-5 w-5 mr-2" />
                    Publish Blog Post
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogForm;
