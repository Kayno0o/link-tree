import React from 'react';
import type { NextPage } from 'next';
import { faDeviantart, faDiscord, faInstagram, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons';
import LinkPage from '../components/LinkPage';
import { faB } from '@fortawesome/free-solid-svg-icons';

const TuigaPage: NextPage = () => {
  const instagram = 'https://instagram.com/_unonao_';
  const spotify = 'https://open.spotify.com/user/873skvipz7wzxzn78hxtgi82d?si=lNoFWjBJQwysFpJ-Mv-t9A';
  const discord = 'Tuiga.#3877';
  const tiktok = 'https://vm.tiktok.com/ZMYhMbBNt/';
  const bereal = 'https://bere.al/theunonao';

  return (
    <LinkPage
      title="Noa Audebert"
      profileSrc="/tuiga_profile.jpg"
      wallpaperSrc="/tuiga_wallpaper.jpg"
      icons={[
        { href: instagram, icon: faInstagram },
        { href: spotify, icon: faSpotify },
        { href: tiktok, icon: faTiktok },
        { href: bereal, icon: faB },
      ]}
      links={[
        {
          children: 'Instagram',
          className: 'bg-gradient-to-br from-blue-100 to-pink-200',
          href: instagram,
          icon: { color: '#000', icon: faInstagram },
        },
        {
          children: 'Spotify',
          className: 'bg-gradient-to-br from-white to-green-100',
          href: spotify,
          icon: { color: '#1DB954', icon: faSpotify },
        },
        {
          children: 'Discord',
          className: 'bg-gradient-to-br from-purple-200 to-slate-200',
          href: discord,
          type: 'copy',
          icon: { color: '#7289da', icon: faDiscord },
        },
        {
          children: 'Tiktok',
          className: 'bg-gradient-to-br from-blue-200 to-pink-200',
          href: tiktok,
          icon: { color: '#ff0050', icon: faTiktok },
        },
        {
          children: 'BeReal',
          className: 'bg-gradient-to-br from-white to-slate-200',
          href: bereal,
          icon: { color: '#000', icon: faB },
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

export default TuigaPage;
