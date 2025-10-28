import { Home, Phone, MapPin, Mail, Heart, Users, Shield, Gift, Clock, Facebook, Instagram, MessageCircle, Mail as EmailIcon, BookOpen, HandHeart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Our Children', href: '/children' },
    { name: 'Programs', href: '/programs' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const getInvolved = [
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Sponsor a Child', href: '/sponsor' },
    { name: 'Donate', href: '/donate' },
    { name: 'Partnerships', href: '/partnerships' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-4 h-4" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: '#' },
    { name: 'TikTok', icon: <MessageCircle className="w-4 h-4" />, href: '#' },
    { name: 'Email', icon: <EmailIcon className="w-4 h-4" />, href: 'mailto:info@hopehaven.org' }
  ];

  const impactStats = [
    { icon: <Users className="w-4 h-4" />, text: '1,247 Children Helped' },
    { icon: <Shield className="w-4 h-4" />, text: '15 Years of Service' },
    { icon: <Gift className="w-4 h-4" />, text: '89 Active Volunteers' },
    { icon: <Heart className="w-4 h-4" />, text: '23 Communities Served' }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Impact Stats Strip */}
      <div className="bg-blue-800/50 border-b border-blue-700/30">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-blue-100">
                {stat.icon}
                <span className="text-sm font-medium">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">FAAB</h3>
                <p className="text-blue-200 text-xs">Charity Organisation</p>
              </div>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              Providing safe shelter, education, and love to vulnerable children. 
              Every child deserves a chance to thrive and dream.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+254720846532</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@faabcharityorganisation.org</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-blue-100 text-sm">About Us</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-blue-200/80 hover:text-blue-100 transition-colors text-sm block py-1 flex items-center gap-2"
                    >
                      {link.name === 'Our Children' && <Users className="w-3 h-3" />}
                      {link.name === 'Programs' && <BookOpen className="w-3 h-3" />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-100 text-sm">Get Involved</h4>
              <ul className="space-y-2">
                {getInvolved.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-blue-200/80 hover:text-blue-100 transition-colors text-sm block py-1 flex items-center gap-2"
                    >
                      {service.name === 'Volunteer' && <HandHeart className="w-3 h-3" />}
                      {service.name === 'Sponsor a Child' && <Users className="w-3 h-3" />}
                      {service.name === 'Donate' && <Heart className="w-3 h-3" />}
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Hours */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3 text-blue-100 text-sm">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-blue-700/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110 text-blue-100"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-blue-100 text-sm">Visit Us</h4>
              <div className="text-blue-200/80 text-sm space-y-1">
                <div>Mon-Sun: 8AM-6PM</div>
                <div className="text-blue-300 text-xs">Appointments recommended</div>
              </div>
            </div>

            {/* Urgent Call to Action */}
            <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Heart className="w-3 h-3 text-red-400 fill-current" />
                <span className="text-red-100 text-sm font-semibold">Urgent Need</span>
              </div>
              <p className="text-red-200 text-xs">
                School supplies & winter clothes needed for 50+ children
              </p>
              <button className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white text-xs py-1.5 px-3 rounded transition-colors">
                Help Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">
            <div className="flex items-center gap-2 text-blue-200/70 text-xs">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400 fill-current" />
              <span>for every child's future</span>
            </div>
            
            <div className="flex items-center gap-4 text-blue-200/70 text-xs">
              <a href="/privacy" className="hover:text-blue-100 transition-colors">Privacy Policy</a>
              <a href="/transparency" className="hover:text-blue-100 transition-colors">Transparency</a>
              <a href="/financials" className="hover:text-blue-100 transition-colors">Financial Reports</a>
              <span>Registered Charity #12345</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-blue-950 border-t border-blue-800/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="flex items-center gap-4 text-blue-300 text-xs">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                <span>Verified Non-Profit</span>
              </div>
              <div className="flex items-center gap-1">
                <Gift className="w-3 h-3" />
                <span>Tax-Deductible Donations</span>
              </div>
            </div>
            
            <div className="text-blue-400 text-xs">
              &copy; 2025 FAAB Charity Organisation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;