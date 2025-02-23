import React, { useState } from 'react';
import { Camera, Search, Twitter, Instagram, Facebook, ChevronDown, Mail, Star, ArrowRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Mountain landscape"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 p-6 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">Images</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-blue-300 transition">Mesmerizing</a>
              <a href="#" className="text-white hover:text-blue-300 transition">Astonishing</a>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-300 transition"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-white hover:text-blue-300 transition"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-white hover:text-blue-300 transition"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Capture the Moment</h1>
          <p className="text-xl text-blue-100 mb-8">Discover and share the world's most beautiful photographs</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search amazing photos..."
                className="w-full px-6 py-4 rounded-full bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-blue-200 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </header>

      {/* Featured Photos Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Featured Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1682686581362-796145f0e123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
              "https://cdn.pixabay.com/photo/2025/01/16/19/34/cortina-dampezzo-9338185_1280.jpg",
              "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            ].map((url, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={url}
                  alt={`Featured photo ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <button className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Photo <ArrowRight className="inline-block ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Popular Category */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Popular"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Popular</h3>
                <p className="text-blue-200">Trending photographs from our community</p>
              </div>
            </div>

            {/* Latest Category */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Latest"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Latest</h3>
                <p className="text-blue-200">Fresh captures from around the globe</p>
              </div>
            </div>

            {/* More Category */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="More"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">More</h3>
                <p className="text-blue-200">Explore our extensive collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-blue-900 bg-opacity-30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Photographers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Nature Photographer",
                text: "This platform has transformed how I share my work. The community is incredibly supportive and inspiring."
              },
              {
                name: "Michael Chen",
                role: "Urban Explorer",
                text: "The exposure I've gained through this platform has led to numerous professional opportunities."
              },
              {
                name: "Emma Davis",
                role: "Portrait Artist",
                text: "I love how easy it is to showcase my portfolio and connect with other creative professionals."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 transform hover:-translate-y-2 transition duration-300">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-4">{testimonial.text}</p>
                <div className="border-t border-blue-200 border-opacity-20 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <Mail className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Inspired</h2>
            <p className="text-blue-200 mb-8">Subscribe to our newsletter for weekly curated photographs and photography tips</p>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white bg-opacity-20 text-white placeholder-blue-200 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 bg-opacity-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="h-6 w-6 text-white" />
                <span className="text-xl font-bold text-white">Images</span>
              </div>
              <p className="text-blue-200">Discover and share the world's most beautiful photographs</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition">Nature</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Urban</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Abstract</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Portrait</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-blue-200 hover:text-white transition"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-blue-200 hover:text-white transition"><Facebook className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800">
            <p className="text-center text-blue-200">&copy; 2025 Images. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;