import React from 'react';
import { useI18n } from '../hooks/useI18n';

const Home = () => {
  const { t } = useI18n('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-lufga-bold text-gray-800 mb-6">
            {t('home.lets')} <br /> {t('home.explore')} <br />
            <span className="text-primary"> {t('home.toma')}</span> <br />
            {t('home.boutique')}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('home.title')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              {t('home.cta')}
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              {t('home.subtitle')}
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-lufga-bold text-center text-gray-800 mb-12">
            Welcome to Your Fresh Start
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-lufga-medium text-gray-800 mb-3">
                Modern Tech Stack
              </h3>
              <p className="text-gray-600">
                Built with React, Tailwind CSS, i18n, and Redux for a modern development experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-lufga-medium text-gray-800 mb-3">
                Multi-Language Support
              </h3>
              <p className="text-gray-600">
                Full Arabic and English support with RTL layout capabilities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-lufga-medium text-gray-800 mb-3">
                Fast & Responsive
              </h3>
              <p className="text-gray-600">
                Optimized for performance with responsive design for all devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lufga-bold text-gray-800 mb-8">
              Ready to Build Something Amazing?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-lufga-medium text-gray-800 mb-6">
                Your Fresh Start Includes:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Tailwind CSS Setup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">i18n (Arabic & English)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">RTL Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Redux Store</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">React Router</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Custom Fonts (Lufga)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Custom Theme Colors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Clean Project Structure</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600">
              Start building your application by adding components to the <code className="bg-gray-200 px-2 py-1 rounded">src/components</code> directory 
              and pages to the <code className="bg-gray-200 px-2 py-1 rounded">src/pages</code> directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;