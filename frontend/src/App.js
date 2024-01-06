import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/getuser/User';
import './App.css'; 
import  Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';

// function User() {
//   return <h1>Home Page</h1>;
// }

// function UserAddPage() {
//   return <h1>User Add Page</h1>;
// }

// function UpdateUserPage() {
//   return <h1>Update User Page</h1>;
// }

function App() {
  return (
    <div className="App">
      <Router>
        {/* Wrap your routes with the ErrorBoundary */}
        <Routes>

          <Route path="/" element={<User/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
