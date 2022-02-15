import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Containers
const Navigation = lazy(() => import('components/navigation/Navigation'));

function App() {
  const renderWaiting = () => (
    <Box display="flex" mt={5} mb={3} justifyContent="center">
      <CircularProgress size={36} />
    </Box>
  );

  return (
    <div className="App">
      <Suspense fallback={renderWaiting()}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigation />} />
          </Routes>
        </BrowserRouter>
      </Suspense>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ zIndex: 9999 }}
      />
    </div>
  );
}

export default App;
