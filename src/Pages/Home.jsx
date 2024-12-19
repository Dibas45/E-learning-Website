import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to E-Learning Platform
          </h1>
          <p className="text-lg mb-6">
            Learn, grow, and achieve your goals with our wide range of courses.
          </p>
          <Link to="/signup" className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Quality Courses"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Quality Courses</h3>
            <p className="text-gray-600">
              Learn from top instructors with industry experience.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Flexible Learning"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">
              Study at your own pace with lifetime access to courses.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Certification"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-gray-600">
              Earn certificates to showcase your skills to potential employers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg mb-6">
            Browse our courses and begin your learning journey today.
          </p>
          <Link to="/courses" className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-100">
            Explore Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
