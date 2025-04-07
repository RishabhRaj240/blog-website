
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="blog-container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-6">About MindBloom</h1>
          
          <img 
            src="/images/photo-1721322800607-8c38375eef04" 
            alt="About MindBloom" 
            className="w-full h-72 object-cover rounded-lg mb-8"
          />
          
          <div className="prose-custom">
            <p>
              MindBloom started in 2022 with a simple mission: to create a space where ideas could flourish and insights could be shared in an increasingly distracted world.
            </p>
            
            <p>
              We believe in the power of thoughtful content that goes beyond surface-level advice. Our articles are researched carefully, written deliberately, and designed to provide genuine value to our readers.
            </p>
            
            <h2>Our Mission</h2>
            
            <p>
              We aim to provide content that helps our readers:
            </p>
            
            <ul>
              <li>Stay informed about emerging technologies and digital trends</li>
              <li>Discover practical approaches to personal productivity</li>
              <li>Explore design principles that shape our digital and physical worlds</li>
              <li>Cultivate habits that support a balanced, intentional lifestyle</li>
            </ul>
            
            <h2>The Team</h2>
            
            <p>
              Our writers come from diverse backgrounds including technology, design, academia, and business. What unites us is a shared passion for exploring ideas and communicating them clearly.
            </p>
            
            <h2>Our Approach</h2>
            
            <p>
              Every article published on MindBloom follows a rigorous process:
            </p>
            
            <ol>
              <li>Deep research on the topic, consulting primary sources and experts</li>
              <li>Thoughtful writing that prioritizes clarity and practical application</li>
              <li>Careful editing to ensure accuracy and readability</li>
              <li>Beautiful presentation that respects your reading experience</li>
            </ol>
            
            <h2>Connect With Us</h2>
            
            <p>
              We love hearing from our readers! Whether you have a question about an article, a suggestion for a topic, or just want to say hello, don't hesitate to reach out.
            </p>
          </div>
          
          <div className="mt-8 p-8 bg-gray-50 rounded-lg">
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
