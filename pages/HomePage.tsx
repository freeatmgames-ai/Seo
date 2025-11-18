
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-white">
      <div className="container mx-auto px-6 text-center">
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
            Growth-Focused SEO.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            I help businesses achieve their goals with clear, measurable, and data-driven search strategies.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-up" data-aos-delay="200">
          <Link 
            to="/casestudies" 
            className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            View My Work
          </Link>
          <Link 
            to="/about" 
            className="w-full sm:w-auto bg-transparent text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
