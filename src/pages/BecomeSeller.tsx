import { useState } from 'react';
import { CheckCircle, Upload, Users, TrendingUp, DollarSign, Shield, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/layout/Header';
import { useToast } from '@/hooks/use-toast';

export default function BecomeSeller() {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Reach Millions",
      description: "Connect with over 1M+ active buyers globally"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Smart Analytics",
      description: "AI-powered insights to boost your sales"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Fees",
      description: "Low commission rates and transparent pricing"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Fast, secure, and reliable payment processing"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 24 hours.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Join Zaymazone</span>
            <br />
            Seller Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business with our cutting-edge e-commerce platform. 
            Start selling to millions of customers worldwide.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-glass hover-lift">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-foreground">
                    {benefit.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-futuristic">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Seller Registration</CardTitle>
              <CardDescription>
                Step {currentStep} of 3 - Complete your seller profile
              </CardDescription>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mt-4">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-smooth"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input id="businessName" required className="bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactPerson">Contact Person *</Label>
                        <Input id="contactPerson" required className="bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required className="bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required className="bg-muted/50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type *</Label>
                      <Select required>
                        <SelectTrigger className="bg-muted/50">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="llc">LLC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessDescription">Business Description</Label>
                      <Textarea 
                        id="businessDescription" 
                        placeholder="Tell us about your business..."
                        className="bg-muted/50"
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-lg font-semibold mb-4">Bank & Identity Verification</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="bankName">Bank Name *</Label>
                        <Input id="bankName" required className="bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number *</Label>
                        <Input id="accountNumber" required className="bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="routingNumber">Routing Number *</Label>
                        <Input id="routingNumber" required className="bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxId">Tax ID/EIN *</Label>
                        <Input id="taxId" required className="bg-muted/50" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Identity Verification Documents *</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="border-dashed border-2 border-border/50 hover:border-primary/50 transition-smooth">
                          <CardContent className="flex flex-col items-center justify-center p-6">
                            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground text-center">
                              Upload Government ID
                              <br />
                              <span className="text-xs">(Driver's License, Passport)</span>
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-dashed border-2 border-border/50 hover:border-primary/50 transition-smooth">
                          <CardContent className="flex flex-col items-center justify-center p-6">
                            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground text-center">
                              Upload Business License
                              <br />
                              <span className="text-xs">(If applicable)</span>
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-lg font-semibold mb-4">Sample Products</h3>
                    
                    <p className="text-muted-foreground">
                      Upload 3-5 sample products to showcase your catalog quality.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <Card key={index} className="border-dashed border-2 border-border/50 hover:border-primary/50 transition-smooth">
                          <CardContent className="flex flex-col items-center justify-center p-8">
                            <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                            <p className="text-sm text-muted-foreground text-center">
                              Upload Product {index}
                              <br />
                              <span className="text-xs">Images & Details</span>
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="bg-muted/30 rounded-lg p-6">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-2" />
                        What happens next?
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Review process takes 24-48 hours</li>
                        <li>• You'll receive email confirmation once approved</li>
                        <li>• Access to seller dashboard and tools</li>
                        <li>• Start listing and selling immediately</li>
                      </ul>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Previous
                    </Button>
                  )}
                  <Button type="submit" className="btn-hero ml-auto">
                    {currentStep === 3 ? 'Submit Application' : 'Continue'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah's Boutique", sales: "$50K+", rating: 4.9 },
              { name: "Tech Gadgets Pro", sales: "$120K+", rating: 4.8 },
              { name: "Handmade Crafts", sales: "$30K+", rating: 5.0 }
            ].map((story, index) => (
              <Card key={index} className="card-glass hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground font-bold">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{story.name}</h3>
                  <p className="text-2xl font-bold text-gradient mb-2">{story.sales}</p>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{story.rating}/5.0</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}