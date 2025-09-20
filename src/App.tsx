import { Phone, Mail, Coffee, Award, Users, Star, MapPin, Clock, Instagram } from 'lucide-react';

function App() {
  const services = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Coffee Training",
      description: "Comprehensive training program covering espresso extraction, milk steaming, latte art, and customer service skills."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Business Consultation",
      description: "Professional business consultation including operations management, staff training, customer experience optimization, and coffee shop management."
    }
  ];

  const products = [
    {
      name: "Espresso Machine",
      description: "Professional Simonelli Appia Life espresso machine perfect for training and small coffee shops.",
      image: "/espresso machine.jpeg"
    },
    {
      name: "Espresso with Grinder",
      description: "Sage espresso machine with integrated grinder for complete brewing solutions.",
      image: "/espresso.jpeg"
    },
    // {
    //   name: "Coffee Grinder",
    //   description: "Fellow precision burr grinder for consistent grind size and optimal extraction.",
    //   image: "/coffee grinder.jpeg"
    // },
    {
      name: "Distributor",
      description: "MHW-3BOMBER coffee distribution tool for even grounds distribution before tamping.",
      image: "/distributor.jpeg"
    },
    {
      name: "Tamper",
      description: "MHW-3BOMBER professional-grade tamper for consistent espresso extraction and perfect puck preparation.",
      image: "/tamper.jpeg"
    },
    {
      name: "Knock Box",
      description: "MHW-3BOMBER square knock box for disposing of used coffee grounds efficiently and cleanly.",
      image: "/knock box.jpeg"
    },
    {
      name: "Green Beans Moisture Measurement",
      description: "SINAR TECHNOLOGY professional moisture meter for testing green coffee beans quality and storage conditions.",
      image: "/green beans mlisture measurement .jpeg"
    },
    {
      name: "Small Espresso Machine",
      description: "Compact professional espresso machine perfect for home use or small coffee shops.",
      image: "/Small Espresso Machine.jpeg"
    }
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/971581966701?text=Hi, I would like to know more about your training services and products.', '_blank');
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:1991suleimanali@gmail.com?subject=Training Inquiry&body=Hello, I am interested in learning more about your services and products.';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/espresso-doctor-logo.png" 
                alt="Espresso Doctor Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">Espresso Doctor Training Institute</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Services</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Products</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Gallery</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contact</a>
            </nav>
            <div className="flex space-x-3">
              <button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
              <button 
                onClick={handleEmailContact}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Email</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Master the Art of 
                <span className="text-amber-600"> Espresso</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your coffee knowledge with professional training programs designed by industry experts. 
                From barista skills to business management, we provide comprehensive education for coffee professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Training Journey
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  Explore Services
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/espresso-doctor-logo.png" 
                alt="Professional Barista Training"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Certified Training</p>
                    <p className="text-gray-600 text-sm">Professional Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional coffee training and business consultation services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-amber-600 mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button 
                  onClick={handleWhatsAppContact}
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors flex items-center space-x-2"
                >
                  <span>Enroll Me</span>
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Products On Sale</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional tools and materials to support your coffee training and business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <button 
                    onClick={handleWhatsAppContact}
                    className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                  >
                    Enroll Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Demonstrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our training videos showcasing the products and techniques we teach
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video 
                controls 
                className="w-full h-64 object-cover"
                poster="/picture1.jpeg"
              >
                <source src="/vida1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Products Showcase 1</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Professional coffee training demonstration showcasing our equipment and techniques.
                </p>
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  Enroll Me
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video 
                controls 
                className="w-full h-64 object-cover"
                poster="/picture2.jpeg"
              >
                <source src="/vida2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Products Showcese Video 2</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Advanced coffee preparation techniques and machine operation training.
                </p>
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  Enroll Me
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video 
                controls 
                className="w-full h-64 object-cover"
                poster="/picture3.jpeg"
              >
                <source src="/vida3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Products Showcese Video 3</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Complete barista training program covering all aspects of coffee preparation.
                </p>
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  Enroll Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our training facility, equipment, and student experiences
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 5, 6, 7, 8, 9, 10].map((num) => (
              <div 
                key={num}
                className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <img 
                  src={`/picture${num}.jpeg`}
                  alt={`Gallery Image ${num}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our students have to say about their training experience
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Student Testimonial</h3>
                <p className="text-gray-600">Listen to our student's experience</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <audio controls className="w-full">
                  <source src="/audio.ogg" type="audio/ogg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Click play to hear our student's testimonial about their training experience
                </p>
              </div>
              
              <div className="text-center mt-6">
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  Start Your Training Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Course Fees & Payment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable training programs with flexible payment options
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Course Fees */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Fees</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-lg font-medium text-gray-700">Full Payment</span>
                  <span className="text-2xl font-bold text-amber-600">1,500 AED</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-lg font-medium text-gray-700">Installments (2 payments)</span>
                  <span className="text-2xl font-bold text-amber-600">750 AED each</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-medium text-gray-700">Kenyan Shillings</span>
                  <span className="text-xl font-bold text-gray-600">≈ 60,000 KSH</span>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Bank Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Bank Name:</span>
                  <span className="ml-2 text-gray-600">Abu Dhabi Commercial Bank PJSC</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Account Title:</span>
                  <span className="ml-2 text-gray-600">SULEIMAN NGALA ALI</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Account Number:</span>
                  <span className="ml-2 text-gray-600">12004306820001</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">IBAN:</span>
                  <span className="ml-2 text-gray-600 font-mono">AE560030012004306820001</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Currency:</span>
                  <span className="ml-2 text-gray-600">AED</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Branch:</span>
                  <span className="ml-2 text-gray-600">IBD - KHALDIYA TOWER BRANCH</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Swift Code:</span>
                  <span className="ml-2 text-gray-600 font-mono">ADCBAEAA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={handleWhatsAppContact}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Enroll Now - Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <Clock className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Operating Hours</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Morning Sessions</h3>
                <p className="text-lg">8:00 AM - 11:00 AM</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Evening Sessions</h3>
                <p className="text-lg">6:00 PM - 9:00 PM</p>
              </div>
            </div>
            <p className="text-xl mt-6 opacity-90">Monday to Friday</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Espresso Doctor</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in the coffee industry, the Espresso Doctor Training Institute 
                has been the premier destination for professional coffee education. Our founder, a certified 
                coffee expert and machine technician, has trained thousands of baristas and coffee shop owners.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700">1000+ Students Trained</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700">Certified Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700">Industry Expert</span>
                </div>
              </div>
              <button 
                onClick={handleEmailContact}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                Get In Touch
              </button>
            </div>
            <div className="relative">
              <img 
                src="/about.jpeg" 
                alt="Coffee Training Expert"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to discuss your training needs or product inquiries. We're here to help you succeed in the coffee industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div 
              onClick={handleWhatsAppContact}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="text-green-600 mb-4">
                <Phone className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Get instant responses to your questions about training programs and products. Chat with us directly.
              </p>
              <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                Start WhatsApp Chat →
              </div>
            </div>
            
            <div 
              onClick={handleEmailContact}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="text-amber-600 mb-4">
                <Mail className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-600 mb-6">
                Send us detailed inquiries about our training programs, schedules, and product specifications.
              </p>
              <div className="text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                Send Email →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/espresso-doctor-logo.png" 
                  alt="Espresso Doctor Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-semibold">Espresso Doctor Training Institute</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional coffee training and equipment solutions for the modern coffee industry.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="text-gray-400 hover:text-white transition-colors block">Training Services</a>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors block">Products</a>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors block">Gallery</a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors block">About Us</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-400">1991suleimanali@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-400">+971 58 196 6701</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-400">Coffee Training Center, Downtown</span>
                </div>
                <div className="pt-4">
                  <h5 className="text-md font-semibold mb-3">Follow Us</h5>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/sulespresso_ali?igsh=cXNqMDB4YXN6dzhk&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@espresso.doctor?_t=ZS-8zrYidw3jFK&_r=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Espresso Doctor Training Institute. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;