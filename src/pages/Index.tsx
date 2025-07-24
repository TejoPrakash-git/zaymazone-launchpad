import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Truck, Shield, Headphones, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const categories = [
    { name: "Electronics", count: "15K+ Products", color: "bg-gradient-primary" },
    { name: "Fashion", count: "25K+ Products", color: "bg-gradient-accent" },
    { name: "Home & Garden", count: "12K+ Products", color: "bg-gradient-primary" },
    { name: "Sports", count: "8K+ Products", color: "bg-gradient-accent" },
    { name: "Books", count: "20K+ Products", color: "bg-gradient-primary" },
    { name: "Beauty", count: "18K+ Products", color: "bg-gradient-accent" }
  ];

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Delivery",
      description: "Free shipping on orders over $50"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments", 
      description: "100% secure payment processing"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Processing",
      description: "Lightning-fast order processing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-gradient">Zaymazone</span>?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of online shopping with our advanced platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-glass hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Shop by <span className="text-gradient">Categories</span></h2>
            <p className="text-xl text-muted-foreground">
              Discover millions of products across all categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="card-glass hover-lift cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seller CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start <span className="text-gradient">Selling</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful sellers on our platform. Start your business journey today 
              with our easy-to-use seller tools and reach millions of customers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/become-seller">
                <Button className="btn-hero text-lg px-8 py-6">
                  Become a Seller
                </Button>
              </Link>
              <Link to="/seller-dashboard">
                <Button variant="outline" className="btn-ghost text-lg px-8 py-6">
                  Seller Dashboard
                </Button>
              </Link>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">2.5M+</div>
                <div className="text-sm text-muted-foreground">Orders Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">4.8★</div>
                <div className="text-sm text-muted-foreground">Avg. Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">Z</span>
                </div>
                <span className="text-2xl font-bold text-gradient">Zaymazone</span>
              </div>
              <p className="text-muted-foreground">
                The future of e-commerce. Shop smart, sell smarter.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Buyers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/products" className="hover:text-primary transition-smooth">Browse Products</Link></li>
                <li><Link to="/deals" className="hover:text-primary transition-smooth">Today's Deals</Link></li>
                <li><Link to="/wishlist" className="hover:text-primary transition-smooth">My Wishlist</Link></li>
                <li><Link to="/orders" className="hover:text-primary transition-smooth">Track Orders</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Sellers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/become-seller" className="hover:text-primary transition-smooth">Start Selling</Link></li>
                <li><Link to="/seller-dashboard" className="hover:text-primary transition-smooth">Seller Dashboard</Link></li>
                <li><Link to="/seller-tools" className="hover:text-primary transition-smooth">Seller Tools</Link></li>
                <li><Link to="/seller-support" className="hover:text-primary transition-smooth">Seller Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary transition-smooth">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact Us</Link></li>
                <li><Link to="/returns" className="hover:text-primary transition-smooth">Returns</Link></li>
                <li><Link to="/shipping" className="hover:text-primary transition-smooth">Shipping Info</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 Zaymazone. All rights reserved. Built for Thenam Software Solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
