import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Containers
const Navigation = lazy(() => import('components/navigation/Navigation'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div />}>
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
