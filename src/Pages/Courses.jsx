import React from 'react';

const Courses = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg">
            Explore our wide range of courses designed for your success.
          </p>
        </div>
      </header>
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-2">React for Beginners</h3>
            <p className="text-gray-600 mb-4">
              Learn the basics of React and build your first web app.
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Advanced JavaScript</h3>
            <p className="text-gray-600 mb-4">
              Master JavaScript concepts and become an expert developer.
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Web Design Basics</h3>
            <p className="text-gray-600 mb-4">
              Learn the principles of web design and create stunning websites.
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
