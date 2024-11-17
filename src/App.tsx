import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import TutorList from './pages/TutorList';
import Dashboard from './pages/Dashboard';
import './i18n';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-center" />
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tutors" element={<TutorList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}