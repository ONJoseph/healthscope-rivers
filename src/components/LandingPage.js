import React from 'react';

function LandingPage() {
  return (
    <div className="bg-white text-center py-10">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Welcome to HealthScope Rivers</h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore healthcare facilities in Rivers State with our interactive digital map.
      </p>
      <a href="/map" className="text-white bg-green-500 px-4 py-2 rounded">Get Started</a>
    </div>
  );
}

export default LandingPage;
