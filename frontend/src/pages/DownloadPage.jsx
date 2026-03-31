import React from 'react';
import { Download, FileArchive, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

export const DownloadPage = () => {
  const handleDownload = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = '/blisscare-complete-package.zip';
    link.download = 'blisscare-complete-package.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-emerald-100">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileArchive className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            BlissCare Landing Page
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Complete Package Ready to Download
          </p>

          {/* Package Info */}
          <div className="bg-emerald-50 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">📦 Package Contents:</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">14 React Components (all sections)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Mock data file (easy customization)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">App.js & CSS files</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Complete documentation (3 guides)</span>
              </li>
            </ul>
          </div>

          {/* File Details */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-1">34 KB</div>
              <div className="text-sm text-gray-600">File Size</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-1">ZIP</div>
              <div className="text-sm text-gray-600">Format</div>
            </div>
          </div>

          {/* Download Button */}
          <Button
            onClick={handleDownload}
            size="lg"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
          >
            <Download className="w-6 h-6" />
            Download Complete Package
          </Button>

          {/* Footer Note */}
          <p className="text-sm text-gray-500 text-center mt-6">
            Free • No signup required • Ready to use
          </p>
        </div>

        {/* Quick Start */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🚀 Quick Start:</h3>
          <ol className="space-y-2 text-gray-700">
            <li>1. Extract ZIP to your React project</li>
            <li>2. Install dependencies: <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm install lucide-react react-router-dom</code></li>
            <li>3. Add Shadcn components: <code className="bg-gray-100 px-2 py-1 rounded text-sm">npx shadcn-ui@latest add button input textarea accordion</code></li>
            <li>4. Start dev server: <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm run dev</code></li>
          </ol>
        </div>
      </div>
    </div>
  );
};
