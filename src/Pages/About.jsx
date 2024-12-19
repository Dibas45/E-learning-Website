import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Learn more about our mission, vision, and the team behind E-Learning.
          </p>
        </div>
      </header>
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-gray-600 text-center leading-7 max-w-3xl mx-auto">
          At E-Learning, our mission is to make quality education accessible to
          everyone, everywhere. We strive to empower individuals with the skills
          they need to succeed in their careers and personal lives.
        </p>
      </section>
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Dibas Poudel</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Shishir Kc</h3>
            <p className="text-gray-600">Rapper</p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Sornim KC</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
        <div className="bg-white p-6 shadow rounded text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Bipin Oli</h3>
            <p className="text-gray-600">Hency don</p>
          </div>
      </section>
    </div>
  );
};

export default About;
