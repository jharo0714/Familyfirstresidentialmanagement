import { useState } from 'react';
import { Building2, Home, KeyRound, Heart, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginProps {
  onLogin: (role: 'tenant' | 'admin') => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'tenant' | 'admin'>('tenant');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, validate credentials
    onLogin(userType);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=1200&fit=crop"
            alt="Beautiful home interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <Building2 className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-4xl">Family First Residential Management</h1>
                <p className="text-blue-100">Caring for their home, so you can care for them.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <Home className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl mb-1">Welcome Home</h3>
                <p className="text-blue-100">Your comfortable living space is our top priority</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <KeyRound className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl mb-1">Easy Management</h3>
                <p className="text-blue-100">Submit requests and make payments with just a few clicks</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl mb-1">We Care</h3>
                <p className="text-blue-100">Dedicated support team available to help you 24/7</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl mb-1">Secure & Private</h3>
                <p className="text-blue-100">Your information is protected with industry-leading security</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl mb-1">500+</div>
              <div className="text-blue-100 text-sm">Happy Residents</div>
            </div>
            <div>
              <div className="text-3xl mb-1">98%</div>
              <div className="text-blue-100 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl mb-1">24/7</div>
              <div className="text-blue-100 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center bg-blue-600 text-white h-16 w-16 rounded-full mb-4">
              <Building2 className="h-8 w-8" />
            </div>
            <h1 className="text-3xl mb-2">Premier Properties</h1>
            <p className="text-gray-600">Your Home, Our Priority</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl mb-2">Welcome Back!</h2>
              <p className="text-gray-600">Sign in to access your resident portal</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-3">I am a...</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUserType('tenant')}
                    className={`py-3 px-4 rounded-lg border-2 transition-all ${
                      userType === 'tenant'
                        ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-sm'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Home className={`h-5 w-5 mx-auto mb-1 ${userType === 'tenant' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <div className="text-sm">Tenant</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('admin')}
                    className={`py-3 px-4 rounded-lg border-2 transition-all ${
                      userType === 'admin'
                        ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-sm'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Shield className={`h-5 w-5 mx-auto mb-1 ${userType === 'admin' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <div className="text-sm">Manager</div>
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Sign In to Portal
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-700 mb-1">
                <strong>Demo Mode:</strong> Enter any email and password to explore
              </p>
              <p className="text-xs text-gray-600">
                Select Tenant or Manager above to see different dashboards
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Need help? Contact us at{' '}
            <a href="mailto:support@premierproperties.com" className="text-blue-600 hover:underline">
              support@premierproperties.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
