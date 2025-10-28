import { useState } from 'react';
import { 
  Search, 
  Heart, 
  Users, 
  User, 
  Menu, 
  X, 
  Home,
  MapPin,
  Phone,
  Gift,
  Calendar,
  Shield,
  BookOpen,
  HandHeart
} from 'lucide-react';

const Header = ({ donationCount, onDonationUpdate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated auth state

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Children', href: '/children' },
    { name: 'Programs', href: '/programs' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Success Stories', href: '/stories' },
    { name: 'About Us', href: '/about' }
  ];

  const userMenuItems = isLoggedIn 
    ? [
        { name: 'My Profile', href: '/profile' },
        { name: 'My Sponsorships', href: '/sponsorships' },
        { name: 'Donation History', href: '/donations' },
        { name: 'Volunteer Schedule', href: '/schedule' },
        { name: 'Account Settings', href: '/settings' },
        { name: 'Sign Out', href: '/logout', action: () => setIsLoggedIn(false) }
      ]
    : [
        { name: 'Sign In', href: '/signin', action: () => setIsLoggedIn(true) },
        { name: 'Create Account', href: '/signup', action: () => setIsLoggedIn(true) }
      ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-blue-100">
      {/* Top Bar - Foundation Info */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-700">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>+254720846532</span>
              </div>
            </div>
            <div className="text-blue-600">
              <span className="font-semibold">Urgent Need:</span> School Supplies & Winter Clothes
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 font-serif">FAAB</h1>
              <p className="text-xs text-blue-600 -mt-1 hidden sm:block">Charity Organisation</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden lg:flex space-x-8">
            {navigationLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-blue-800 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-blue-50 rounded-full px-4 py-2 border border-blue-200 focus-within:border-blue-400 transition-colors">
              <Search className="w-4 h-4 text-blue-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search our programs..." 
                className="bg-transparent outline-none text-blue-800 placeholder-blue-400 text-sm w-40"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Donate Button */}
              <button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-colors px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg hover:shadow-blue-500/25"
                title="Make a Donation"
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Donate</span>
              </button>
              
              {/* Sponsor Button */}
              <button 
                className="text-blue-700 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50 relative"
                title="Sponsor a Child"
              >
                <Users className="w-5 h-5" />
                {donationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {donationCount}
                  </span>
                )}
              </button>

              {/* Favorites/Bookmarks */}
              <button 
                className="text-blue-700 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50"
                title="Saved Children"
              >
                <BookOpen className="w-5 h-5" />
              </button>

              {/* User Profile Dropdown */}
              <div className="relative">
                <button 
                  className="text-blue-700 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50 flex items-center gap-1"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  title={isLoggedIn ? "My Account" : "Sign In"}
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm font-medium">
                    {isLoggedIn ? "Account" : "Sign In"}
                  </span>
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-lg border border-blue-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-blue-100">
                      <p className="text-sm font-semibold text-blue-900">Faab Charity Organisation</p>
                      <p className="text-xs text-blue-600">Making a difference together</p>
                    </div>
                    
                    {userMenuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          if (item.action) {
                            e.preventDefault();
                            item.action();
                            setIsUserMenuOpen(false);
                          }
                        }}
                        className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors text-sm flex items-center gap-2"
                      >
                        {item.name === 'My Sponsorships' && <Users className="w-4 h-4" />}
                        {item.name === 'Donation History' && <Gift className="w-4 h-4" />}
                        {item.name === 'Volunteer Schedule' && <Calendar className="w-4 h-4" />}
                        {item.name}
                      </a>
                    ))}
                    
                    {isLoggedIn && (
                      <div className="border-t border-blue-100 mt-2 pt-2">
                        <div className="px-4 py-1 text-xs text-blue-500 flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Impact Score: 150 points
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-blue-700 p-2 rounded-full hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-blue-100 pt-4">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-blue-800 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name === 'Our Children' && <Users className="w-4 h-4" />}
                  {link.name === 'Programs' && <BookOpen className="w-4 h-4" />}
                  {link.name === 'Volunteer' && <HandHeart className="w-4 h-4" />}
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Search */}
              <div className="flex items-center bg-blue-50 rounded-lg px-4 py-3 border border-blue-200 mt-2">
                <Search className="w-4 h-4 text-blue-500 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search our programs..." 
                  className="bg-transparent outline-none text-blue-800 placeholder-blue-400 flex-1"
                />
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Donate Now
                </button>
                <button 
                  className="flex-1 border border-blue-500 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Sponsor
                </button>
              </div>

              {/* Mobile Auth Buttons */}
              {!isLoggedIn && (
                <div className="flex gap-3 pt-2">
                  <button 
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign In
                  </button>
                  <button 
                    className="flex-1 border border-blue-500 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;