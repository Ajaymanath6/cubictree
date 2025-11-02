import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import AuctionsPage from './pages/AuctionsPage';
import AdPublishingPage from './pages/AdPublishingPage';

/**
 * App - Main application component with routing
 */
function App() {
  return (
    <Routes>
      {/* Main Application Routes */}
      <Route element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="auctions" element={<AuctionsPage />} />
        <Route path="ads" element={<AdPublishingPage />} />
        
        {/* Redirect old routes */}
        <Route path="ad-publishing" element={<Navigate to="/ads" replace />} />
      </Route>

      {/* Future routes for authentication, detail pages, etc. */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/auctions/:id" element={<AuctionDetailPage />} /> */}
      {/* <Route path="/ads/:id" element={<AdDetailPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
