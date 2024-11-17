import React from 'react';
import UserProfile from '../components/User/UserProfile';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div class="content">
        <h1>User Profile</h1>
      </div>
      <UserProfile />
      <Footer />
    </div>
  );
};

export default ProfilePage;