import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Signup } from './pages/Singup'
import './App.css'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { AppointmentsList } from './pages/AppointmentList'
import { Footer } from './pages/Footer';
import Services from './pages/Services'
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Navbar />
          <div className="flex-grow">
            <Routes>
              {/* Public routes */}
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/services' element={<Services />} />
              
              {/* Protected route */}
              <Route path='/appointment' element={
                <ProtectedRoute>
                  <AppointmentsList />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App
