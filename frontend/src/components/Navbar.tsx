import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <nav className="bg-gray-50 border-b-0 shadow-md p-4 flex justify-between items-center">
      <div className="text-green-900 text-2xl font-bold ml-10">CREDIT-APP</div>
      <div className="flex items-center space-x-4 mr-12">
        {currentUser ? (
          <div className="flex items-center space-x-2">
            <FaUser className="text-green-900" />
            <span className="text-green-900 font-medium">{currentUser.displayName || currentUser.email}</span>
            <button onClick={handleLogout} className="text-black">
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
