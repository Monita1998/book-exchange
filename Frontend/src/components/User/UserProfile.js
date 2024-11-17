// frontend/src/components/User/UserProfile.js
import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../../services/api';

const UserProfile = () => {
  const [profile, setProfile] = useState({});
  const [favoriteGenres, setFavoriteGenres] = useState('');
  const [readingPreferences, setReadingPreferences] = useState('');
  const [booksOwned, setBooksOwned] = useState('');
  const [booksWanted, setBooksWanted] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
        setFavoriteGenres(response.favorite_genres || '');
        setReadingPreferences(response.reading_preferences || '');
        setBooksOwned(response.books_owned || '');
        setBooksWanted(response.books_wanted || '');
      } catch (err) {
        console.error('Error fetching profile:', err);
        alert(err.message);
      }
    };
    fetchProfile();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({
        favorite_genres: favoriteGenres,
        reading_preferences: readingPreferences,
        books_owned: booksOwned,
        books_wanted: booksWanted,
      });
      alert('Profile updated successfully');
      setProfile(response); // Update the profile state with the new data
    } catch (err) {
      console.error('Error updating profile:', err);
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleProfileUpdate}>
      <input
        type="text"
        placeholder="Favorite Genres"
        value={favoriteGenres}
        onChange={(e) => setFavoriteGenres(e.target.value)}
      />
      <input
        type="text"
        placeholder="Reading Preferences"
        value={readingPreferences}
        onChange={(e) => setReadingPreferences(e.target.value)}
      />
      <input
        type="text"
        placeholder="Books Owned"
        value={booksOwned}
        onChange={(e) => setBooksOwned(e.target.value)}
      />
      <input
        type="text"
        placeholder="Books Wanted"
        value={booksWanted}
        onChange={(e) => setBooksWanted(e.target.value)}
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfile;