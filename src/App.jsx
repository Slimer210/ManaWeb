/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
// import basic module

import React from 'react';
import { Icon } from '@iconify/react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter, Routes, Route, Link, NavLink,
} from 'react-router-dom';

import Main from './routes/Main';
import Download from './routes/Download';
import Docs from './routes/Docs';
import About from './routes/About';
import Announcement from './routes/Announcement';
import Support from './routes/Support';

// import image and logo
import manaLogo from './assets/manalogo.png';
import openGraphImage from './assets/img/OpenGraphImage.jpg';

const navigationItem = [
  { name: '下载', href: 'download' },
  { name: '手册', href: 'docs' },
  { name: '公告', href: 'announcement' },
  { name: '关于', href: 'about' },
];

function NavigationBar() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>魔法金屬官方網站</title>
        <link href="http://mysite.com/example" />
        <meta property="og:image" content={openGraphImage} />
      </Helmet>
      <nav className="w-full flex grow justify-between item-center px-5 py-5 drop-shadow-md bg-white top-0 left-0 fixed h-24 z-40">
        <Link to="/" className="cursor-pointer select-none flex-shrink-0 flex items-center px-3 py-3 active:text-mana-dark-purple hover:text-mana-dark-purple duration-300 hover:scale-110">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO"
          />
          <h1 className="pl-4 text-2xl">魔法金属</h1>
        </Link>
        <div className="font-sans-serif flex flex-nowrap items-center justify-center gap-x-5">
          {navigationItem.map((item) => (
            <NavLink
              to={item.href}
              className="select-none px-8 py-4 text-[1.2rem] content-center whitespace-nowrap rounded-lg active:text-mana-dark-purple hover:text-mana-dark-purple hover:scale-110 duration-300"
              key={item.name}
            >
              {item.name}

            </NavLink>
          ))}
          <NavLink to="support" className="select-none px-8 py-4 text-[1.2rem] content-center whitespace-nowrap rounded-lg active:text-mana-dark-purple hover:scale-110 duration-300 bg-mana-purple text-white hover:text-white hover:bg-mana-dark-purple hover:rotate-3 shadow-md">支持我们</NavLink>
        </div>
      </nav>
    </>
  );
}
const footerItem = [
  { name: 'Discord', href: 'https://discord.gg/JGTVQzD', icon: 'akar-icons:discord-fill' },
  { name: 'CurseForge', href: 'https://www.curseforge.com/minecraft/mc-mods/manametal', icon: 'simple-icons:curseforge' },
  { name: 'Facebook', href: 'https://www.facebook.com/manametalmod/', icon: 'ant-design:facebook-filled' },
];

function Footer() {
  return (
    <footer className="w-full flex flex-row justify-between">
      <h2 className="p-8 font-sans text-mana-purple">魔法金属 Est. 2020</h2>
      <div className="flex flex-row items-center">
        {footerItem.map((item) => (
          <a href={item.href} className="px-8" aria-label="item.icon"><Icon className="text-2xl text-mana-purple" icon={item.icon} /></a>
        ))}
      </div>
    </footer>
  );
}

// tailwind 3.0 yyds
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="docs" element={<Docs />} />
        <Route path="support" element={<Support />} />
        <Route path="download" element={<Download />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
