import { useState } from 'react';
import { Login } from './components/Login';
import { TenantDashboard } from './components/TenantDashboard';
import { AdminDashboard } from './components/AdminDashboard';

type UserRole = 'tenant' | 'admin' | null;

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (role: 'tenant' | 'admin') => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {userRole === 'tenant' && <TenantDashboard onLogout={handleLogout} />}
      {userRole === 'admin' && <AdminDashboard onLogout={handleLogout} />}
    </div>
  );
}