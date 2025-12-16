import React, { useState } from 'react';
import { Menu, X, Smartphone, MapPin, CreditCard, Clock, Shield, UserCheck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom'; 

// --- Helper: Feature Card for Section 3 ---
const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-[#3CFF14]/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-[#3CFF14]" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-[#121212] mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

// --- 1. Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full h-[120px] flex items-center px-6 md:px-20 z-50">
      <div className="flex justify-between items-center w-full max-w-[1283px] mx-auto">
        <div className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer">
  <img 
    src="/Bozzo logo.png" 
    alt="Bozzo Logo" 
    className="h-16 w-auto object-contain"
  />
  <span>BOZZO</span>
</div>


        <div className="hidden md:flex items-center gap-8 text-white/80 font-medium text-[16px]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#3CFF14] transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => window.open("https://wa.me/918088811165", "_blank")}
          className="hidden md:block px-6 py-3 bg-white text-black rounded-xl shadow-[0_0_15px_rgba(60,255,20,0.3)] font-bold hover:bg-gray-100 transition"
        >
          Connect on What'sApp
        </button>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-[#121212] border-t border-gray-800 p-6 flex flex-col gap-4 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white/80 font-medium text-lg" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <button className="w-full py-3 bg-white text-black rounded-xl font-bold mt-2">
            Download App
          </button>
        </div>
      )}
    </nav>
  );
};

// --- 2. Hero Section ---
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[900px] bg-[#121212] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(137.89%_137.89%_at_-4700%_-4700%,#3CFF14_0.91%,rgba(60,255,20,0)_0.91%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#121212_0%,#121212_50%,rgba(18,18,18,0.8)_100%)] pointer-events-none"></div>

      {/* Main Container Wrapper */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-[150px] md:pt-[176px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-[660px] flex-1">
            <h1 className="text-white font-bold text-[40px] md:text-[60px] leading-[1.1]">
              The Best Way To Get Cab, Wherever You're Going
            </h1>
            <p className="text-white/70 text-[16px] md:text-[20px] leading-[28px] max-w-[576px]">
              Book reliable and comfortable rides instantly. Professional drivers,
              transparent pricing, and seamless experience at your fingertips.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-4 mt-6 items-center">
              {/* App Store Button */}
              <button
                type="button"
                className="group bg-black transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 border-2 border-white rounded-lg"
                aria-label="Download on the App Store"
              >
                <img
                  src="/apple.png"
                  alt="App Store"
                  className="h-[50px] w-auto object-contain transition-all duration-300 group-hover:invert"
                />
              </button>

              {/* Play Store Button */}
              <button
                type="button"
                className="group bg-black transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 border-2 border-white rounded-lg"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/playstore.png"
                  alt="Google Play"
                  className="h-[50px] w-auto object-contain transition-all duration-300 group-hover:invert"
                />
              </button>
            </div>

            {/* Stats / Ratings */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[rgba(60,255,20,0.1)] flex items-center justify-center border border-transparent">
                  <div className="w-6 h-6 border-2 border-[#3CFF14] rounded-full"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-[24px]">4.9</div>
                  <div className="text-white/60 text-[14px]">User Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[rgba(60,255,20,0.1)] flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-[#3CFF14] rounded-full"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-[24px]">100K+</div>
                  <div className="text-white/60 text-[14px]">Safe Rides</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex flex-1 justify-end items-center relative">
            <img
              src="/header.jpg" // Removed 'public' prefix (standard practice for React/Next.js)
              alt="Cab Service Hero"
              className="w-[100px] md:w-[500px] h-auto object-contain drop-shadow-[0_0_30px_rgba(60,255,20,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 3. About Section ---
const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center px-6 md:px-9 py-20 bg-white w-full">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[85px] w-full max-w-[1278px]">

        <div className="w-full lg:w-[697px] h-[400px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl">
             <img 
                src="public/img2.jpg" 
                alt="About Our Cab Service" 
                className="w-full h-full object-cover"
             />
        </div>

        <div className="flex flex-col items-start gap-4 w-full lg:w-[496px]">
          <p className="text-[14px] font-bold leading-5 tracking-[0.7px] uppercase text-[#00D26A]">
            About Us
          </p>
          <h2 className="text-[32px] md:text-[48px] font-bold leading-tight md:leading-[48px] text-[#121212]">
            Your Trusted Partner for Safe Rides
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[29px] text-[#888888] w-full">
            We are an online cab booking aggregator, providing customers with
            reliable and premium car rental services. We offer top-notch cab hiring
            facilities with professional drivers, ensuring you reach your
            destination safely and comfortably.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none">
                <circle cx="10" cy="10" r="8.3" stroke="#00D26A" strokeWidth="1.6" />
                <path d="M7 10l3 3 5-6" stroke="#00D26A" strokeWidth="1.6" />
              </svg>
              <p className="text-[16px] leading-6 text-[#121212]">Professional & verified drivers</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none">
                <circle cx="10" cy="10" r="8.3" stroke="#00D26A" strokeWidth="1.6" />
                <path d="M7 10l3 3 5-6" stroke="#00D26A" strokeWidth="1.6" />
              </svg>
              <p className="text-[16px] leading-6 text-[#121212]">Transparent pricing with no hidden charges</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none">
                <circle cx="10" cy="10" r="8.3" stroke="#00D26A" strokeWidth="1.6" />
                <path d="M7 10l3 3 5-6" stroke="#00D26A" strokeWidth="1.6" />
              </svg>
              <p className="text-[16px] leading-6 text-[#121212]">High-quality, safe taxi services</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none">
                <circle cx="10" cy="10" r="8.3" stroke="#00D26A" strokeWidth="1.6" />
                <path d="M7 10l3 3 5-6" stroke="#00D26A" strokeWidth="1.6" />
              </svg>
              <p className="text-[16px] leading-6 text-[#121212]">24/7 customer support available</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none">
                <circle cx="10" cy="10" r="8.3" stroke="#00D26A" strokeWidth="1.6" />
                <path d="M7 10l3 3 5-6" stroke="#00D26A" strokeWidth="1.6" />
              </svg>
              <p className="text-[16px] leading-6 text-[#121212]">GPS tracking for all rides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. Key Features Section ---
const KeyFeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#3CFF14] font-bold tracking-wider uppercase text-sm mb-3">Key Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] mb-6">Why Choose Our <span className="text-[#3CFF14]">Booking App</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our certified cab booking app offers mobility solutions by connecting customers to drivers, 
            enabling convenience and transparency for millions of consumers.
          </p>
        </div>

        {/* 3-Column Layout: Left Features | Center Image | Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <FeatureCard 
              title="Easy Booking Process" 
              description="Booking from our app is very easy. Enter your pickup and drop-off locations, select the type of service, and confirm."
              icon={MapPin}
            />
            <FeatureCard 
              title="Connect With Drivers" 
              description="Get a ride confirmation alert instantly. Connect directly with drivers and track them over call."
              icon={UserCheck}
            />
            <FeatureCard 
              title="Real-Time Tracking" 
              description="Track the status of your assigned vehicle in real-time on a map, including estimated time of arrival."
              icon={Smartphone}
            />
          </div>

          {/* Center Column: Phone Image */}
          <div className="flex justify-center items-center py-10 lg:py-0">
              <img 
               src="public/img3.png" 
               alt="App Mockup" 
               className="w-full max-w-[320px] md:max-w-[380px] drop-shadow-2xl"
              />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <FeatureCard 
              title="Multiple Payment Options" 
              description="Pay easily with cash, card, or digital wallets. Secure transactions with instant receipts."
              icon={CreditCard}
            />
            <FeatureCard 
              title="Schedule Rides" 
              description="Plan ahead by scheduling rides for later. Perfect for airport pickups and important appointments."
              icon={Clock}
            />
            <FeatureCard 
              title="Safety First" 
              description="All drivers are verified. Share your ride details with family and access emergency support anytime."
              icon={Shield}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 5. Contact Section ---
const ContactSection = () => {
  return (
    <section id="contact" className="w-full px-6 py-20 bg-white/50 flex justify-center">
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-[580px] flex flex-col gap-6">
          
          <span className="text-[14px] font-bold tracking-[0.7px] uppercase text-[#3CFF14]">
            Get In Touch
          </span>

          <h2 className="font-sora font-bold text-[48px] leading-[48px] text-[#121212]">
            We’d Love to Hear From You
          </h2>

          <p className="text-[18px] leading-[28px] text-[#888] max-w-[555px]">
            If you need any assistance, our team is here for you! Reach out to us 
            and get your queries solved. We’d be happy to hear from you.
          </p>

          {/* CONTACT DETAILS */}
          <div className="flex flex-col gap-6">

            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#3CFF14]/10 rounded-xl flex justify-center items-center">
                <div className="w-5 h-5 border-2 border-[#3CFF14]"></div>
              </div>

              <div>
                <h3 className="font-sora font-bold text-[16px] text-[#121212]">
                  Address
                </h3>
                <p className="text-[#888] text-[16px] leading-[24px]">
                  Hyderabad
                </p>
                <p className="text-[#888] text-[16px] leading-[24px]">
                  Telungana
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#3CFF14]/10 rounded-xl flex justify-center items-center">
                <div className="w-5 h-5 border-2 border-[#3CFF14]"></div>
              </div>

              <div>
                <h3 className="font-sora font-bold text-[16px] text-[#121212]">
                  Phone
                </h3>
                <p className="text-[#888] text-[16px] leading-[24px]">
                  +91  80888-11165
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#3CFF14]/10 rounded-xl flex justify-center items-center">
                <div className="w-5 h-5 border-2 border-[#3CFF14]"></div>
              </div>

              <div>
                <h3 className="font-sora font-bold text-[16px] text-[#121212]">
                  Email
                </h3>
                <p className="text-[#888] text-[16px] leading-[24px]">
                  Bozzocab@gmail.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="w-full max-w-[630px] bg-[#FAFAFA] border border-[#E6E6E6] shadow-md rounded-[16px] p-6 flex flex-col gap-4">
          
          <h3 className="text-[20px] font-sora font-bold">Get In Touch</h3>

          {/* First + Last Name */}
          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] font-medium">First Name</label>
              <input
                className="w-full h-12 border border-[#E6E6E6] rounded-xl px-3 text-[14px]"
                placeholder="John"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] font-medium">Last Name</label>
              <input
                className="w-full h-12 border border-[#E6E6E6] rounded-xl px-3 text-[14px]"
                placeholder="Doe"
              />
            </div>

          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium">Phone Number</label>
            <input
              className="w-full h-12 border border-[#E6E6E6] rounded-xl px-3 text-[14px]"
              placeholder="+91 (555) 123-4567"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium">Message</label>
            <textarea
              className="w-full min-h-[100px] border border-[#E6E6E6] rounded-xl p-3 text-[14px]"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {/* Submit */}
          <button className="mt-2 w-full bg-[#3CFF14] text-black font-semibold py-3 rounded-xl">
            Submit
          </button>

        </form>

      </div>
    </section>
  );
};


// --- 6. Featured/Download App Section (NEW SECTION 5) ---
const FeaturedTestSeries = () => {
  return (
    <section className="w-full px-6 py-20 flex justify-center">
      {/* Container */}
      <div className="relative w-full max-w-[1278px] bg-[#F9F9F9] rounded-[24px] flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-[60px] md:py-0 md:h-[395px] overflow-hidden">

        {/* LEFT TEXT BLOCK */}
        <div className="flex flex-col gap-6 z-10 w-full md:w-1/2">
          
          {/* Heading */}
          <h2 className="font-bold text-[32px] md:text-[40px] leading-tight text-[#0D0D0D]">
              Download the App
          </h2>

          {/* Subheading */}
          <p className="font-normal text-[18px] md:text-[20px] leading-[30px] text-[#888]">
            Get exclusive features and book rides faster with our mobile app. Available on iOS and Android.
          </p>

          <div className="flex flex-row gap-4 mt-6 items-center">

              {/* App Store Button */}
              <button
                type="button"
                className="group bg-black rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 border border-white/30"
                aria-label="Download on the App Store"
              >
                <img 
                  src="/apple.png" 
                  alt="App Store" 
                  className="h-[45px] w-auto object-contain transition-all duration-300 group-hover:invert" 
                />
              </button>

              {/* Play Store Button */}
              <button
                type="button"
                className="group bg-black rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 border border-white/30"
                aria-label="Get it on Google Play"
              >
                <img 
                  src="/playstore.png" 
                  alt="Google Play" 
                  className="h-[45px] w-auto object-contain transition-all duration-300 group-hover:invert" 
                />
              </button>

            </div>
        </div>

        {/* RIGHT MOCKUP IMAGE (Added Here) */}
        <div className="mt-10 md:mt-0 relative flex justify-center md:justify-end w-full md:w-1/2">
             <img 
                src="public/img3.png" 
                alt="App Mockup" 
                className="w-[180px] md:w-[250px] object-contain drop-shadow-xl"
             />
        </div>

      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] px-5 md:px-10 py-16">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">

          {/* Column 1: Brand */}
          <div className="w-full md:w-[528px] flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#3CFF14] rounded-xl shadow-[0_0_15px_rgba(60,255,20,0.3)] flex items-center justify-center">
                <p className="font-bold text-xl text-black">B</p>
              </div>
              <p className="font-bold text-xl text-white">OZZO</p>
            </div>

            <p className="text-white/60 text-base leading-6 max-w-[320px]">
              Your trusted partner for safe, reliable, and comfortable rides. Book anytime, anywhere.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#3CFF14] hover:text-black text-white transition-colors">
                <Facebook size={20} />
              </button>

              <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#3CFF14] hover:text-black text-white transition-colors">
                <Twitter size={20} />
              </button>

              <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#3CFF14] hover:text-black text-white transition-colors">
                <Instagram size={20} />
              </button>

              <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#3CFF14] hover:text-black text-white transition-colors">
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="w-full md:w-[248px] flex flex-col gap-4">
            <h4 className="text-white text-lg font-bold">Company</h4>

            <ul className="flex flex-col gap-3">
              <li><a className="text-white/60 hover:text-[#3CFF14] transition-colors" href="#about">About Us</a></li>
              <li><a className="text-white/60 hover:text-[#3CFF14] transition-colors" href="#features">Features</a></li>
              <li><a className="text-white/60 hover:text-[#3CFF14] transition-colors" href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="w-full md:w-[248px] flex flex-col gap-4">
            <h4 className="text-white text-lg font-bold">Legal</h4>

            <ul className="flex flex-col gap-3">
              {/* UPDATED: Using Link for Privacy Policy to avoid reload */}
              <li>
                <Link to="/privacy" className="text-white/60 hover:text-[#3CFF14] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                 <Link to="/terms" className="text-white/60 hover:text-[#3CFF14] transition-colors">
                  Terms and Condtions
                </Link>
              </li>
              <li>
                 <Link to="/cookie" className="text-white/60 hover:text-[#3CFF14] transition-colors">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/Refund" className="text-white/60 hover:text-[#3CFF14] transition-colors">
                  Refund Policy
                </Link>


              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

// --- 8. Main Home Layout ---
// RENAMED from App to Home to avoid conflict with your App.jsx router file
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <KeyFeaturesSection /> 
        <ContactSection /> 
        <FeaturedTestSeries /> 
      </main>
      <Footer />
    </div>
  );
};

export default Home;