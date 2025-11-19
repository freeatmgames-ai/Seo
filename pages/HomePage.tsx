
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-gray-50 overflow-hidden flex items-center justify-center">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase shadow-sm" data-aos="fade-down">
              SEO & Growth Strategist
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
              Scale Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Online Presence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              I transform data into revenue. From technical audits to content ecosystems, I build sustainable SEO engines that drive real business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-up" data-aos-delay="300">
              <Link 
                to="/casestudies" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-md border border-gray-200 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 transition-all transform hover:-translate-y-1"
              >
                Let's Talk Strategy
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 opacity-70" data-aos="fade-up" data-aos-delay="400">
               <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Trusted to deliver results</p>
            </div>
          </div>

          {/* Right Column: Dynamic Visuals */}
          <div className="relative hidden lg:block h-[600px]" data-aos="fade-left" data-aos-delay="200">
             {/* Decorative Floating Elements - simulating a dashboard/success view */}
             <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Main Dashboard Card */}
                <div className="relative w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-20 flex flex-col p-6 animate-float">
                   {/* Abstract Header Image */}
                   <div className="h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                   </div>
                   {/* Fake Content Lines */}
                   <div className="space-y-4 flex-grow">
                      <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                      
                      {/* Bar Chart Visualization */}
                      <div className="h-24 mt-6 flex items-end justify-between space-x-2 pb-2 border-b border-gray-50">
                         <div className="w-full bg-blue-100 rounded-t-md h-[40%] transition-all duration-1000 hover:bg-blue-200"></div>
                         <div className="w-full bg-blue-200 rounded-t-md h-[60%] transition-all duration-1000 hover:bg-blue-300"></div>
                         <div className="w-full bg-blue-300 rounded-t-md h-[80%] transition-all duration-1000 hover:bg-blue-400"></div>
                         <div className="w-full bg-blue-600 rounded-t-md h-[100%] relative group cursor-pointer">
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-bold py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                              +350% Growth
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Floating Widget 1: Search Rank */}
                <div className="absolute top-[15%] left-[10%] w-52 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 z-30 animate-float-delayed-1">
                   <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-green-100 rounded-lg text-green-600 shadow-inner">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <div>
                         <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Keyword Rank</p>
                         <p className="text-lg font-bold text-gray-800">#1 Position</p>
                      </div>
                   </div>
                </div>

                {/* Floating Widget 2: Traffic Graph */}
                <div className="absolute bottom-[20%] right-[5%] w-60 bg-white p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 z-30 animate-float-delayed-2">
                   <div className="flex justify-between items-end mb-3">
                      <div>
                         <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Monthly Visitors</p>
                         <p className="text-2xl font-bold text-gray-800">45.2K</p>
                      </div>
                      <div className="text-green-500 text-sm font-bold flex items-center bg-green-50 px-2 py-1 rounded-full">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7l-5 5 1.5 1.5L12 10l4 4 1.5-1.5L12 7z" clipRule="evenodd" /></svg>
                        24%
                      </div>
                   </div>
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-[75%]"></div>
                   </div>
                </div>

                {/* Decorative Elements behind */}
                <div className="absolute top-1/3 right-10 w-24 h-24 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-20 w-32 h-32 bg-gradient-to-tr from-blue-300 to-cyan-400 rounded-full opacity-20 blur-xl animate-pulse delay-700"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed-1 {
            animation: float 7s ease-in-out infinite;
            animation-delay: 1s;
        }
        
        .animate-float-delayed-2 {
            animation: float 8s ease-in-out infinite;
            animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
