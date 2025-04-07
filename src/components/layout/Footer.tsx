
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="blog-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-serif text-xl font-bold text-gray-900">
              Mind<span className="text-blue-600">Bloom</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Sharing insights, ideas and inspiration for modern minds.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-blue-600 text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-blue-600 text-sm">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm">About</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/technology" className="text-gray-600 hover:text-blue-600 text-sm">Technology</Link>
              </li>
              <li>
                <Link to="/categories/lifestyle" className="text-gray-600 hover:text-blue-600 text-sm">Lifestyle</Link>
              </li>
              <li>
                <Link to="/categories/productivity" className="text-gray-600 hover:text-blue-600 text-sm">Productivity</Link>
              </li>
              <li>
                <Link to="/categories/design" className="text-gray-600 hover:text-blue-600 text-sm">Design</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Subscribe</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest posts delivered right to your inbox.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-grow text-sm rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white text-sm rounded-r-md px-4 hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} MindBloom. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
