// import basic module
import React from 'react';

// import image and logo
import manaLogo from './assets/manalogo.png';
import manaLanding from './assets/img/landingPhoto.png';

const navigation = [
  { name: '下载', href: '#', current: false },
  { name: '手册', href: '#', current: false },
  { name: '公告', href: '#', current: false },
  { name: '关于', href: '#', current: false },
  { name: '支持我们', href: '#', current: false },
];

function NavigationBar() {
  return (
    <div>
      <div className="w-full flex justify-between item-center px-5 py-5 drop-shadow-md bg-white top-0 left-0 fixed h-1/8">
        <div className="flex-shrink-0 flex items-center px-3 py-3 active:text-mana-dark-purple hover:text-mana-dark-purple duration-300 hover:scale-110" href="#">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO"
          />
          <h1 className="px-3 font-['FZYiHei-M20T'] cursor-pointer select-none">魔法金属官方网站</h1>

        </div>
        <div className="font-['FZYiHei-M20T'] flex flex-nowrap items-center justify-center gap-x-5">
          {navigation.map((item, index) => (
            <a className={`select-none px-6 py-4 content-center whitespace-nowrap rounded-full active:text-mana-dark-purple hover:text-mana-dark-purple hover:scale-110 duration-300  ${index === 4 ? 'bg-mana-purple text-white hover:text-white hover:bg-mana-dark-purple hover:rotate-3' : ' '}`} key={item.name} href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

// tailwind 3.0 yyds
function App() {
  return (
    <main className="flex flex-col w-full mt-[6rem]">
      <NavigationBar />
      <div className="w-full bg-gray-100 flex justify-between p-12 h-screen overflow-visible px-10 py-10 flex-wrap">
        <div className="flex-col w-1/2 self-center px-10">
          <h1 className="text-[6rem] py-5 text-mana-black tracking-wide leading-snug">
            {' '}
            最
            <strong className="text-mana-purple text-[10rem]">强大</strong>
            的
            {' '}
            <br />
            {' '}
            RPG模组！
          </h1>
          <p className="py-5 text-[1.5rem]">
            想体验丰富的角色扮演吗？
            <br />
            是否渴望过在麦块世界有多人职业的玩法？
            <br />
            史上最强大MMORPG模组可以给你完整的体验！
          </p>
          <button type="button" className="bg-mana-purple text-white text-[2rem] hover:text-white hover:scale-110 hover:bg-mana-dark-purple hover:rotate-3 px-16 py-5 rounded-lg duration-300">立即下载</button>
        </div>
        <div className="flex">
          <img src={manaLanding} alt="魔法金属" className="object-cover aspect-square px-8 py-8 m-8" />
        </div>
      </div>
    </main>
  );
}

export default App;
