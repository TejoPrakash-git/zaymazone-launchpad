import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Smartphone, ArrowRight, Users, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/layout/Header';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'otp'>('email');
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: `Welcome back! Redirecting to your ${userType} dashboard...`,
    });
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} Login`,
      description: `Redirecting to ${provider} authentication...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* User Type Selection */}
          <Card className="card-futuristic mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={userType === 'buyer' ? 'default' : 'outline'}
                  className={`h-20 flex-col ${userType === 'buyer' ? 'bg-gradient-primary' : 'btn-ghost'}`}
                  onClick={() => setUserType('buyer')}
                >
                  <Users className="w-6 h-6 mb-2" />
                  <span>Buyer</span>
                </Button>
                <Button
                  variant={userType === 'seller' ? 'default' : 'outline'}
                  className={`h-20 flex-col ${userType === 'seller' ? 'bg-gradient-primary' : 'btn-ghost'}`}
                  onClick={() => setUserType('seller')}
                >
                  <Store className="w-6 h-6 mb-2" />
                  <span>Seller</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Login Form */}
          <Card className="card-glass">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Welcome to <span className="text-gradient">Zaymazone</span>
              </CardTitle>
              <CardDescription>
                Sign in to your {userType} account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs value={loginMethod} onValueChange={(value) => setLoginMethod(value as 'email' | 'otp')}>
                <TabsList className="grid w-full grid-cols-2 bg-muted/30">
                  <TabsTrigger value="email">Email Login</TabsTrigger>
                  <TabsTrigger value="otp">OTP Login</TabsTrigger>
                </TabsList>

                <TabsContent value="email" className="space-y-4 mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 bg-muted/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          className="pl-10 pr-10 bg-muted/50"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-border" />
                        <span>Remember me</span>
                      </label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full btn-hero">
                      Sign In
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="otp" className="space-y-4 mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="pl-10 bg-muted/50"
                          required
                        />
                      </div>
                    </div>

                    <Button type="button" variant="outline" className="w-full">
                      Send OTP
                    </Button>

                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        className="bg-muted/50 text-center tracking-widest"
                        maxLength={6}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-hero">
                      Verify & Sign In
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('Google')}
                    className="btn-ghost"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('Facebook')}
                    className="btn-ghost"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('Apple')}
                    className="btn-ghost"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.747.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.001 12.017.001z"/>
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary hover:underline font-medium">
                    Sign up now
                  </Link>
                </p>
                {userType === 'buyer' && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Want to sell on Zaymazone?{' '}
                    <Link to="/become-seller" className="text-primary hover:underline font-medium">
                      Become a seller
                    </Link>
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}