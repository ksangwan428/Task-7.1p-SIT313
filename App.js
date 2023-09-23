import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardList from './CardList';
import Header from './Header';
import Bottom from './bottom';
import Kartik from './kartik';
import CardList123 from './Cardlist1';
import LoginPage from './routes/LoginPage';  // Import LoginPage
import SignupPage from './routes/Signup';


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />

                    <Route path="/" element={
                        <>
                            <img src={require('./c.jpg')} alt="chitkara" style={{ width: '100%', height: '50%' }} />
                            <CardList />
                            <CardList123 />
                            {/* Note: This seems like a typo or an undefined component. Please fix or remove <staffList2/> */}
                            <Bottom />
                            <Kartik />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
