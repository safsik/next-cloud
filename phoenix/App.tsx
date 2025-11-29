import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Menu, 
  X, 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award,
  ChevronRight,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

// --- Components ---

const Button = ({ children, primary, className, onClick }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1";
  const primaryStyle = "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50";
  const secondaryStyle = "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-orange-500/50";

  return (
    <button onClick={onClick} className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle} ${className || ''}`}>
      {children}
    </button>
  );
};

const SectionTitle = ({ title, subtitle, center }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <h3 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">
      {subtitle}
    </h3>
    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
      {title}
    </h2>
    <div className={`h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mt-4 rounded-full ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:bg-slate-800 relative overflow-hidden">
    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-500"></div>
    <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-orange-500">
      <Icon className="w-7 h-7 text-orange-500" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="text-center p-6">
    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-2">
      {number}
    </div>
    <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">{label}</div>
  </div>
);

// --- Main Application ---

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <Flame className="w-8 h-8 text-orange-500 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-orange-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Phoenix<span className="text-orange-500">Group</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button primary className="px-5 py-2 text-sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-orange-500 py-2 border-b border-slate-800/50"
                >
                  {link.name}
                </a>
              ))}
              <Button primary className="w-full justify-center mt-4">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-medium text-sm mb-6 animate-fadeIn">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Innovating for the Future
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Rise Above <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-400">
                The Ordinary
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              We empower ambitious enterprises to transform, adapt, and scale. 
              Phoenix Group combines strategic foresight with technological 
              innovation to build the businesses of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button primary onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth'})}>
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </Button>
              <Button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth'})}>
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            <StatCard number="500+" label="Global Clients" />
            <StatCard number="$2B" label="Assets Managed" />
            <StatCard number="98%" label="Success Rate" />
            <StatCard number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle 
            subtitle="Our Expertise" 
            title="Strategic Solutions for Growth" 
            center 
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={TrendingUp}
              title="Strategic Ventures"
              description="We identify and cultivate high-potential opportunities, providing the capital and guidance needed to scale rapidly in competitive markets."
            />
            <FeatureCard 
              icon={Zap}
              title="Digital Transformation"
              description="Overhaul legacy systems with cutting-edge cloud infrastructure, AI integration, and scalable software architectures."
            />
            <FeatureCard 
              icon={Shield}
              title="Risk Intelligence"
              description="Navigate uncertainty with our predictive analytics and cybersecurity frameworks designed to protect your most valuable assets."
            />
            <FeatureCard 
              icon={Globe}
              title="Global Expansion"
              description="Seamlessly enter new markets with our regulatory expertise, local partnerships, and supply chain optimization strategies."
            />
            <FeatureCard 
              icon={Users}
              title="Talent Ecosystems"
              description="Build high-performance teams through our proprietary recruitment networks and leadership development programs."
            />
            <FeatureCard 
              icon={Award}
              title="Sustainability"
              description="Implement eco-conscious strategies that reduce carbon footprints while increasing operational efficiency and brand value."
            />
          </div>
        </div>
      </section>

      {/* About/Showcase Section */}
      <section id="about" className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                {/* Abstract Image Representation */}
                <div className="aspect-[4/3] bg-slate-800 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
                    alt="Corporate Architecture" 
                    className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-500 rounded-lg">
                      <Flame className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">The Phoenix Philosophy</h4>
                      <p className="text-slate-400 text-sm">Constant reinvention leads to eternal success.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements behind image */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-orange-500/20 rounded-2xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border-2 border-slate-700 rounded-2xl"></div>
            </div>

            <div className="w-full md:w-1/2">
              <SectionTitle 
                subtitle="Who We Are" 
                title="Forged in Fire, Built for the Future" 
              />
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                At Phoenix Group, we believe that true resilience isn't just about surviving challenges—it's about using them as fuel for growth. Founded by a coalition of industry veterans, we specialize in revitalizing stagnant enterprises and accelerating startups.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Industry-leading consultancy framework",
                  "Proprietary AI-driven market analysis",
                  "Network of 500+ strategic partners"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <ChevronRight className="text-orange-500 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button primary>Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to rise?
                </h2>
                <p className="text-slate-400 mb-8">
                  Schedule a consultation with our experts to discover how Phoenix Group can ignite your business potential.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-orange-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email Us</p>
                      <p className="text-white font-medium">hello@phoenixgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-orange-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Call Us</p>
                      <p className="text-white font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-orange-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Visit Us</p>
                      <p className="text-white font-medium">100 Innovation Blvd, Tech City</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">First Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Last Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <Button primary className="w-full justify-center">
                  Send Message
                </Button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold text-white">Phoenix<span className="text-slate-500">Group</span></span>
            </div>
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Phoenix Group. All rights reserved.
            </div>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;