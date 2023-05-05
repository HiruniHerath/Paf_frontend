import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Home from './pages/index';
import Login from './pages/login';
import Register from './pages/register'
import Offers from './pages/offers'
import CreatePost from './pages/createpost'
import ViewPost from './pages/viewpost'
import Createprofile from './pages/createprofile'
import Editprofile from './pages/editprofile'
import Profile from './pages/profile'

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
      <Route exact path="/createprofile" element={<Createprofile />} />
      <Route exact path="/editprofile" element={<Editprofile />} />
      <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BRouter>
  );
}

export default App;
