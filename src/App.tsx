// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import Home from './pages/home/home';
import Footer from './components/layouts/footer';
import Overview from './pages/destinations/overview';
import Universities from './pages/destinations/universities';
import Destinations from './pages/destinations';
import UniNCourceDetails from './pages/destinations/uniNCourceDetails';
import Counsellors from './pages/counsellors';
import Careers from './pages/careers';
import './App.scss'
import MyProfile from './pages/myAccount/myProfile';
import Dashboard from './pages/myAccount/dashboard';
import Cart from './pages/myAccount/cart';
import Counsellor from './pages/myAccount/myCounsellor';
import Settings from './pages/myAccount/settings';
// import MyAccount from './pages/myAccount';
import MyAccount from './pages/myAccount/myAccount';
import StudentsPlaced from './pages/myAccount/myCounsellor/studentsPlaced';
import Chats from './pages/chats';
import TopToast from './components/elements/toasts';
import Documents from './pages/myAccount/documents';

import BookSlot from './pages/myAccount/myCounsellor/bookSlot';
import Protected from './components/protectedRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />


      <div className='my-10'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/destinations/:countryName' element={<Destinations />}>
            <Route path="/destinations/:countryName" element={<Overview />} />
            <Route path="/destinations/:countryName/universities" element={<Universities />} />
          </Route>
          <Route path="/destinations/:countryName/university-details" element={<UniNCourceDetails />} />
          <Route path='/counsellors' element={<Counsellors />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/chats' element={<Protected><Chats /></Protected>} />
          <Route path='/my-account' element={<Protected><MyAccount /></Protected>}>
            <Route path='/my-account/dashboard' element={<Dashboard />} />
            <Route path='/my-account/my-profile' element={<MyProfile />} />
            <Route path='/my-account/my-counsellor' element={<Counsellor />} />
            <Route path='/my-account/book-counsellor' element={<BookSlot />} />

            <Route path='/my-account/my-counsellor/students-placed' element={<StudentsPlaced />} />
            <Route path='/my-account/documents' element={<Documents />} />

            <Route path='/my-account/cart' element={<Cart />} />
            <Route path='/my-account/settings' element={<Settings />} />
          </Route>
        </Routes>

      </div>


      <Footer />
    </Router>
  );
};

export default App;