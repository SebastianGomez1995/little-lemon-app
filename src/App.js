import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';



function App() {
  return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
            <Footer/>
        </Router>
  );
}

export default App;
