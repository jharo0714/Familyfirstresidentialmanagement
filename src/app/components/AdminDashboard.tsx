import { useState } from 'react';
import { LogOut, LayoutDashboard, FileText, Users, Settings } from 'lucide-react';
import { MyRequests } from './MyRequests';
import { ManageRequests } from './ManageRequests';

interface AdminDashboardProps {
  onLogout: () => void;
}

type TabType = 'overview' | 'requests' | 'tenants' | 'settings';

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Property Manager Dashboard</h1>
            <p className="text-gray-600">Welcome back, Admin</p>
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
              <LayoutDashboard className="h-5 w-5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('requests')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'requests'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FileText className="h-5 w-5" />
              <span>Manage Requests</span>
            </button>

            <button
              onClick={() => setActiveTab('tenants')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'tenants'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Tenants</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'overview' && <AdminOverview />}
          {activeTab === 'requests' && <ManageRequests />}
          {activeTab === 'tenants' && <TenantsView />}
          {activeTab === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  );
}

function AdminOverview() {
  return (
    <div>
      <h2 className="text-2xl mb-6">Dashboard Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-2">Total Properties</p>
          <p className="text-3xl text-blue-600">24</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-2">Active Tenants</p>
          <p className="text-3xl text-green-600">68</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-2">Pending Requests</p>
          <p className="text-3xl text-orange-600">12</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-2">This Month Revenue</p>
          <p className="text-3xl text-purple-600">$170K</p>
        </div>
      </div>

      {/* Urgent Requests */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-xl mb-4">Urgent Requests</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex-1">
              <p className="text-gray-900">Water heater not working</p>
              <p className="text-sm text-gray-600">123 Maple St, Apt 4B - John Doe</p>
            </div>
            <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">
              Emergency
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex-1">
              <p className="text-gray-900">Electrical outlet sparking</p>
              <p className="text-sm text-gray-600">456 Oak Ave, Unit 2 - Sarah Johnson</p>
            </div>
            <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">
              High Priority
            </span>
          </div>
        </div>
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl mb-4">Recent Payments</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600">Tenant</th>
                <th className="text-left py-3 px-4 text-gray-600">Property</th>
                <th className="text-left py-3 px-4 text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 text-gray-600">Date</th>
                <th className="text-left py-3 px-4 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">123 Maple St, Apt 4B</td>
                <td className="py-3 px-4">$2,500</td>
                <td className="py-3 px-4">May 1, 2026</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Sarah Johnson</td>
                <td className="py-3 px-4">456 Oak Ave, Unit 2</td>
                <td className="py-3 px-4">$3,200</td>
                <td className="py-3 px-4">May 1, 2026</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Mike Williams</td>
                <td className="py-3 px-4">789 Pine Rd, Apt 1A</td>
                <td className="py-3 px-4">$1,800</td>
                <td className="py-3 px-4">May 5, 2026</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function TenantsView() {
  return (
    <div>
      <h2 className="text-2xl mb-6">Tenants</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600">Name</th>
                <th className="text-left py-3 px-4 text-gray-600">Property</th>
                <th className="text-left py-3 px-4 text-gray-600">Rent</th>
                <th className="text-left py-3 px-4 text-gray-600">Lease End</th>
                <th className="text-left py-3 px-4 text-gray-600">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">123 Maple St, Apt 4B</td>
                <td className="py-3 px-4">$2,500/mo</td>
                <td className="py-3 px-4">Dec 31, 2026</td>
                <td className="py-3 px-4">john.doe@email.com</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Sarah Johnson</td>
                <td className="py-3 px-4">456 Oak Ave, Unit 2</td>
                <td className="py-3 px-4">$3,200/mo</td>
                <td className="py-3 px-4">Jun 30, 2027</td>
                <td className="py-3 px-4">sarah.j@email.com</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Mike Williams</td>
                <td className="py-3 px-4">789 Pine Rd, Apt 1A</td>
                <td className="py-3 px-4">$1,800/mo</td>
                <td className="py-3 px-4">Mar 15, 2027</td>
                <td className="py-3 px-4">mike.w@email.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SettingsView() {
  return (
    <div>
      <h2 className="text-2xl mb-6">Settings</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-600">Settings and configuration options will appear here.</p>
      </div>
    </div>
  );
}
