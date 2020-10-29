import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SecondCard from  './components/SecondCard/SecondCard';
import ThirdCard from './components/ThirdCard/ThirdCard';
import MainCard from './components/MainCard/MainCard';
import ClientCard from './components/ClientCard/ClientCard';
import PerformanceCard from './components/PerformanceCard/PerformanceCard';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  return (
    <div className="App">
     <Navbar />
     <SecondCard />
     <ThirdCard />
     <MainCard />
     <ClientCard />
     <PerformanceCard />
     <BlogCard />
     
     
    
     
    </div>
  );
}

export default App;
