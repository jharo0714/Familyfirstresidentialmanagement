import { useState } from 'react';
import { LogOut, Home, Wrench, Leaf, CreditCard, Clock } from 'lucide-react';
import { SubmitRequest } from './SubmitRequest';
import { MyRequests } from './MyRequests';
import { PaymentPortal } from './PaymentPortal';

interface TenantDashboardProps {
  onLogout: () => void;
}

type TabType = 'overview' | 'submit-request' | 'my-requests' | 'payment';

export function TenantDashboard({ onLogout }: TenantDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Tenant Portal</h1>
            <p className="text-gray-600">Welcome back, John Doe</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white min-h-[calc(100vh-73px)] border-r border-gray-200">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'overview'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('submit-request')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'submit-request'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Wrench className="h-5 w-5" />
              <span>Submit Request</span>
            </button>

            <button
              onClick={() => setActiveTab('my-requests')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'my-requests'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Clock className="h-5 w-5" />
              <span>My Requests</span>
            </button>

            <button
              onClick={() => setActiveTab('payment')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'payment'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <CreditCard className="h-5 w-5" />
              <span>Make Payment</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'submit-request' && <SubmitRequest />}
          {activeTab === 'my-requests' && <MyRequests userType="tenant" />}
          {activeTab === 'payment' && <PaymentPortal />}
        </main>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div>
      <h2 className="text-2xl mb-6">Dashboard Overview</h2>

      {/* Property Info Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-xl mb-4">Your Property</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Address</p>
            <p className="text-lg">123 Maple Street, Apt 4B</p>
          </div>
          <div>
            <p className="text-gray-600">Lease End Date</p>
            <p className="text-lg">December 31, 2026</p>
          </div>
          <div>
            <p className="text-gray-600">Monthly Rent</p>
            <p className="text-lg">$2,500</p>
          </div>
          <div>
            <p className="text-gray-600">Next Payment Due</p>
            <p className="text-lg text-orange-600">June 1, 2026</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Active Requests</p>
              <p className="text-2xl">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Completed</p>
              <p className="text-2xl">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Payment Status</p>
              <p className="text-2xl text-orange-600">Due Soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
              <Wrench className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Kitchen sink leaking - Request #2847</p>
              <p className="text-sm text-gray-600">Status updated to "In Progress"</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-green-100 text-green-600 p-2 rounded-lg">
              <CreditCard className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Rent payment processed</p>
              <p className="text-sm text-gray-600">$2,500 for April 2026</p>
            </div>
            <span className="text-sm text-gray-500">April 1, 2026</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Landscaping request completed - Request #2834</p>
              <p className="text-sm text-gray-600">Front yard trimming</p>
            </div>
            <span className="text-sm text-gray-500">April 15, 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
