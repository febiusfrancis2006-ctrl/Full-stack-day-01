
import './App.css'

import {  Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'
import Buttons from './components/buttons.jsx'
import Profile from './components/profile.jsx'
import Faculty from './components/faculty.jsx'
import Counter from './components/counter.jsx'

function Home() {
    return (
        <>
            <Header />
            <Buttons />
            <Profile />
            
            <div className="facultyy">
                <Faculty faculty={{
                    name: "Ram",
                    dept: "CSE",
                    email: "5001@gmail.com",
                    age: "35"
                }}/>

                <Faculty faculty={{
                    name: "Sunil",
                    dept: "CIVIL",
                    email: "5002@gmail.com",
                    age: "39"
                }}/>

                <Faculty faculty={{
                    name: "Priya",
                    dept: "MECH",
                    email: "5005@gmail.com",
                    age: "45"
                }}/>
            </div>
            <Counter />
        </>
    );
}

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our Student Dashboard.</p>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Email: student@gmail.com</p>
            <p>Phone: 9876543210</p>
        </div>
    );
}

function App() {
    return (
        
            <div className="App">

                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div>
    
    );
}
           
export default App;
