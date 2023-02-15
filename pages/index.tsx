import React from 'react';
import type { NextPage } from 'next';
import {
  faDeviantart,
  faInstagram,
  faLinkedinIn,
  faReddit,
  faRedditAlien,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LinkPage from '../components/LinkPage';

const HomePage: NextPage = () => {
  return (
    <LinkPage
      title="Kevyn Fyleyssant"
      profileSrc="/profile.jpeg"
      wallpaperSrc={`/wallpaper.jpg`}
      icons={[
        { href: 'https://instagram.com/kevy.n', icon: faInstagram },
        { href: 'https://open.spotify.com/user/8fd163ej8oxnv15eryot9m2x7', icon: faSpotify },
        { href: 'https://www.reddit.com/user/Kaynooo_', icon: faRedditAlien },
        { href: 'https://www.linkedin.com/in/k%C3%A9vyn-fyleyssant-3947ba1b7/', icon: faLinkedinIn },
        { href: 'mailto:kevyn.fyleyssant@gmail.com', icon: faEnvelope },
      ]}
      links={[
        {
          children: 'Instagram',
          className: 'bg-gradient-to-br from-blue-100 to-pink-200',
          href: 'https://instagram.com/kevy.n',
          icon: { color: '#000', icon: faInstagram },
        },
        {
          children: 'Spotify',
          className: 'bg-gradient-to-br from-white to-green-100',
          href: 'https://open.spotify.com/user/8fd163ej8oxnv15eryot9m2x7',
          icon: { color: '#1DB954', icon: faSpotify },
        },
        {
          children: 'Reddit',
          className: 'bg-gradient-to-br from-orange-100 to-white',
          href: 'https://www.reddit.com/user/Kaynooo_',
          icon: { color: '#FF4500', icon: faReddit },
        },
        {
          children: 'Linkedin',
          className: 'bg-gradient-to-br from-white to-blue-100',
          href: 'https://www.linkedin.com/in/k%C3%A9vyn-fyleyssant-3947ba1b7/',
          icon: { color: '#0A66C2', icon: faLinkedinIn },
        },
        {
          children: 'Youtube',
          className: 'bg-gradient-to-br from-red-100 to-white',
          href: 'https://www.youtube.com/channel/UC4A28B66oMFK5IhLW4ropUg',
          icon: { color: '#FF0000', icon: faYoutube },
        },
        {
          children: 'Wallpaper Author',
          className: 'my-auto bg-gradient-to-br from-white to-teal-100',
          href: 'https://www.deviantart.com/ethemos',
          icon: { color: '#00E59B', icon: faDeviantart },
        },
      ]}
    />
  );
};

export default HomePage;
