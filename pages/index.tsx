import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import CustomLink from '../components/CustomLink';
import {
  faDeviantart,
  faInstagram,
  faLinkedinIn,
  faReddit,
  faRedditAlien,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import IconLink from '../components/IconLink';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-[1] flex-col items-center justify-between gap-10">
        <div className="flex w-full flex-col items-center gap-8">
          <img
            src="/profile.jpeg"
            alt="profile picture"
            className="w-40 rounded-full border-2 border-white shadow-md"
          />

          <h1 className="text-center text-4xl font-bold text-white">Kevyn Fyleyssant</h1>
        </div>

        <div className="flex h-8 gap-6">
          <IconLink href="https://instagram.com/kevy.n" icon={faInstagram} />
          <IconLink href="https://open.spotify.com/user/8fd163ej8oxnv15eryot9m2x7" icon={faSpotify} />
          <IconLink href="https://www.reddit.com/user/Kaynooo_" icon={faRedditAlien} />
          <IconLink href="https://www.linkedin.com/in/k%C3%A9vyn-fyleyssant-3947ba1b7/" icon={faLinkedinIn} />
          <IconLink href="mailto:kevyn.fyleyssant@gmail.com" icon={faEnvelope} />
        </div>

        <div className="flex w-full flex-[1] flex-col gap-6">
          <CustomLink
            href="https://instagram.com/kevy.n"
            className="bg-gradient-to-br from-blue-100 to-pink-200"
            icon={{ color: '#000', icon: faInstagram }}
          >
            Instagram
          </CustomLink>
          <CustomLink
            href="https://open.spotify.com/user/8fd163ej8oxnv15eryot9m2x7"
            icon={{ color: '#1DB954', icon: faSpotify }}
            className="bg-gradient-to-br from-white to-green-100"
          >
            Spotify
          </CustomLink>
          <CustomLink
            href="https://www.reddit.com/user/Kaynooo_"
            icon={{ color: '#FF4500', icon: faReddit }}
            className="bg-gradient-to-br from-orange-100 to-white"
          >
            Reddit
          </CustomLink>
          <CustomLink
            href="https://www.linkedin.com/in/k%C3%A9vyn-fyleyssant-3947ba1b7/"
            icon={{ color: '#0A66C2', icon: faLinkedinIn }}
            className="bg-gradient-to-br from-white to-blue-100"
          >
            Linkedin
          </CustomLink>
          <CustomLink
            href="https://www.youtube.com/channel/UC4A28B66oMFK5IhLW4ropUg"
            icon={{ color: '#FF0000', icon: faYoutube }}
            className="bg-gradient-to-br from-red-100 to-white"
          >
            Youtube
          </CustomLink>
          <CustomLink
            href="https://www.deviantart.com/ethemos"
            icon={{ color: '#00E59B', icon: faDeviantart }}
            className="my-auto bg-gradient-to-br from-white to-teal-100"
          >
            Wallpaper Author
          </CustomLink>
        </div>

        <Link href="https://kayn.ooo" className="mt-auto justify-self-end text-2xl font-bold text-slate-300">
          <h2>Kayn.ooo</h2>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
