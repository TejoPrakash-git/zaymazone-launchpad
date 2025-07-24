import { ArrowRight, Star, TrendingUp, Users, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Future</span> of
                <br />
                E-commerce
                <br />
                <span className="text-foreground">is Here</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Experience next-generation shopping with AI-powered recommendations, 
                seamless transactions, and immersive product discovery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/become-seller">
                <Button className="btn-hero text-lg px-8 py-6">
                  Start Selling Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="btn-ghost text-lg px-8 py-6">
                  Explore Products
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">1M+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground">Sellers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">10M+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="card-glass p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Curated products from verified sellers</p>
              </div>

              <div className="card-glass p-6 hover-lift animate-fade-in mt-8" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Smart Analytics</h3>
                <p className="text-sm text-muted-foreground">AI-driven insights for sellers</p>
              </div>

              <div className="card-glass p-6 hover-lift animate-fade-in mt-4" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Connect with global buyers</p>
              </div>

              <div className="card-glass p-6 hover-lift animate-fade-in mt-12" style={{ animationDelay: '0.8s' }}>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Easy Shopping</h3>
                <p className="text-sm text-muted-foreground">One-click purchase experience</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-60 animate-glow-pulse" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-accent rounded-full opacity-40 animate-glow-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}