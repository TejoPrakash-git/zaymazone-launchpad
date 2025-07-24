import { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Package, 
  Star, 
  Upload, 
  Eye, 
  Edit, 
  Trash2,
  Plus,
  BarChart3,
  Users,
  ShoppingCart
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function SellerDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const stats = [
    {
      title: "Total Revenue",
      value: "$12,450",
      change: "+12.5%",
      icon: <DollarSign className="w-6 h-6" />,
      trend: "up"
    },
    {
      title: "Orders",
      value: "347",
      change: "+8.2%",
      icon: <ShoppingCart className="w-6 h-6" />,
      trend: "up"
    },
    {
      title: "Products",
      value: "56",
      change: "+3",
      icon: <Package className="w-6 h-6" />,
      trend: "up"
    },
    {
      title: "Avg Rating",
      value: "4.8",
      change: "+0.2",
      icon: <Star className="w-6 h-6" />,
      trend: "up"
    }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", product: "Wireless Headphones", amount: "$89.99", status: "completed" },
    { id: "ORD-002", customer: "Jane Smith", product: "Smart Watch", amount: "$299.99", status: "processing" },
    { id: "ORD-003", customer: "Mike Johnson", product: "Phone Case", amount: "$24.99", status: "shipped" },
    { id: "ORD-004", customer: "Sarah Wilson", product: "Bluetooth Speaker", amount: "$149.99", status: "pending" }
  ];

  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: "$89.99", 
      stock: 45, 
      sales: 156, 
      rating: 4.8,
      status: "active"
    },
    { 
      id: 2, 
      name: "Smart Watch Pro", 
      price: "$299.99", 
      stock: 12, 
      sales: 89, 
      rating: 4.6,
      status: "active"
    },
    { 
      id: 3, 
      name: "Phone Case Premium", 
      price: "$24.99", 
      stock: 0, 
      sales: 234, 
      rating: 4.9,
      status: "out_of_stock"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success/20 text-success';
      case 'processing': return 'bg-warning/20 text-warning';
      case 'shipped': return 'bg-primary/20 text-primary';
      case 'pending': return 'bg-muted/20 text-muted-foreground';
      case 'active': return 'bg-success/20 text-success';
      case 'out_of_stock': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Seller Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
          </div>
          <div className="flex gap-2">
            {['24h', '7d', '30d', '90d'].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
                className={selectedPeriod === period ? "bg-gradient-primary" : ""}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm flex items-center ${
                      stat.trend === 'up' ? 'text-success' : 'text-destructive'
                    }`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <div className="text-primary-foreground">
                      {stat.icon}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-muted/30">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Sales Chart */}
              <Card className="lg:col-span-2 card-futuristic">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Sales Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Interactive sales chart would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="ghost">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Product
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Upload className="w-4 h-4 mr-2" />
                    Bulk Upload
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Users className="w-4 h-4 mr-2" />
                    Customer Support
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your latest customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.customer}</p>
                        </div>
                        <div>
                          <p className="font-medium">{order.product}</p>
                          <p className="text-sm text-muted-foreground">{order.amount}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Product Management</h2>
              <Button className="bg-gradient-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>

            <Card className="card-glass">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border/50">
                      <tr>
                        <th className="text-left p-4">Product</th>
                        <th className="text-left p-4">Price</th>
                        <th className="text-left p-4">Stock</th>
                        <th className="text-left p-4">Sales</th>
                        <th className="text-left p-4">Rating</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-border/30">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-primary rounded-lg"></div>
                              <span className="font-medium">{product.name}</span>
                            </div>
                          </td>
                          <td className="p-4 font-medium">{product.price}</td>
                          <td className="p-4">
                            <span className={product.stock === 0 ? 'text-destructive' : ''}>
                              {product.stock}
                            </span>
                          </td>
                          <td className="p-4">{product.sales}</td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              {product.rating}
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className={getStatusColor(product.status)}>
                              {product.status.replace('_', ' ')}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-2xl font-bold">Order Management</h2>
            <Card className="card-glass">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Order management interface would be implemented here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <Card className="card-glass">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Reviews management interface would be implemented here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <h2 className="text-2xl font-bold">Payment Tracking</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-futuristic">
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Pending Payments</span>
                    <span className="font-semibold">$2,450.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Balance</span>
                    <span className="font-semibold text-success">$8,750.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Earnings</span>
                    <span className="font-semibold">$45,680.00</span>
                  </div>
                  <Button className="w-full bg-gradient-primary">
                    Request Payout
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle>Payout Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Next Payout</span>
                      <span className="font-medium">Dec 15, 2023</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      3 days remaining until next scheduled payout
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}