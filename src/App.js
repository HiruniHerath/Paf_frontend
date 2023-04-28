import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Home from './pages/index';
import Login from './pages/login';
import Register from './pages/register'
import Offers from './pages/offers'
import CreatePost from './pages/createpost'
import ViewPost from './pages/viewpost'


function App() {
  return (
    <BRouter>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/offer" element={<Offers />} />
      <Route exact path="/createpost" element={<CreatePost />} />
      <Route exact path="/viewpost" element={<ViewPost />} />
      </Routes>
    </BRouter>
  );
}

export default App;
