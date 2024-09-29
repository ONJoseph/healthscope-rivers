import React from 'react';

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-semibold text-green-600 mb-4">About HealthScope Rivers</h2>
      <p className="text-gray-700 mb-6">
        HealthScope Rivers is an interactive map designed to highlight healthcare facilities
        across Rivers State. Our goal is to improve access to healthcare information and support
        government planning and public awareness.
      </p>
      <h3 className="text-2xl font-semibold text-green-600 mb-4">Data Sources</h3>
      <p className="text-gray-700 mb-6">
        We collect data from government reports, open data sources, and on-the-ground research
        to ensure accuracy and comprehensiveness.
      </p>
      <h3 className="text-2xl font-semibold text-green-600 mb-4">Challenges in Healthcare</h3>
      <p className="text-gray-700 mb-6">
        Many regions in Rivers State face challenges in accessing timely and quality healthcare.
        By visualizing the data, we aim to help local authorities and NGOs prioritize interventions.
      </p>
    </div>
  );
}

export default AboutPage;
