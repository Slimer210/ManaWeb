/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
// import basic module
import React from 'react';
import { Helmet } from 'react-helmet';

// import image and logo
import manaLogo from './assets/manalogo.png';
import backgroundImage from './assets/img/landingPhoto.png';
import mana_fireball_icon from './assets/img/mana_fireball_icon.png';
import mana_food_icon from './assets/img/mana_food_icon.png';
import mana_mineral_icon from './assets/img/mana_mineral_icon.png';

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>魔法金屬官方網站</title>
        <link href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full flex grow justify-between item-center px-5 py-5 drop-shadow-md bg-white top-0 left-0 fixed h-24 z-40">
        <div className="cursor-pointer select-none flex-shrink-0 flex items-center px-3 py-3 active:text-mana-dark-purple hover:text-mana-dark-purple duration-300 hover:scale-110" href="#">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO"
          />
          <h1 className="pl-4 text-2xl">魔法金属官方网站</h1>
        </div>
        <div className="font-sans-serif flex flex-nowrap items-center justify-center gap-x-5">
          {navigation.map((item, index) => (
            <a className={`select-none px-8 py-4 text-[1.2rem] content-center whitespace-nowrap rounded-lg active:text-mana-dark-purple hover:text-mana-dark-purple hover:scale-110 duration-300 ${index === 4 ? 'bg-mana-purple text-white hover:text-white hover:bg-mana-dark-purple hover:rotate-3 shadow-md' : ' '}`} key={item.name} href={item.href}>{item.name}</a>
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
      <div className="w-full flex justify-between h-[calc(100vh-6rem)] overflow-visible px-10 mx-auto">
        <div className="flex-col self-center px-10 text-center laptop:text-left flex-shrink-0">
          <h1 className="text-[5rem] text-mana-black tracking-wide leading-snug">
            {' '}
            最
            <strong className="text-mana-purple text-[8rem]">强大</strong>
            的
            {' '}
            <br />
            {' '}
            RPG模组
          </h1>
          <p className="py-5 text-2xl leading-9 font-body tracking-widest">
            想體驗豐富的角色扮演嗎？
            <br />
            是否渴望過在麥塊世界有多人職業的玩法？
            <br />
            史上最強大MMORPG模組可以給你完整的體驗！
          </p>
          <button type="button" className="bg-mana-purple mt-6 text-white text-3xl hover:text-white hover:scale-110 hover:bg-mana-dark-purple hover:rotate-3 px-16 py-5 rounded-lg duration-300 shadow-xl">立即下载</button>
        </div>
        <div className="relative p-[1rem] w-full max-w-5xl h-4/5 m-20 rounded-lg" style={{ backgroundImage: `url("${backgroundImage}")` }}>
          <div className="rounded-lg absolute -left-16 top-4 bg-slate-50 px-8 py-6 shadow-xl text-2xl text-mana-black">
            <p>
              全新
              <span className="!text-mana-purple">战斗系统</span>
            </p>
          </div>
          <div className="rounded-lg absolute bottom-4 -right-16 bg-slate-50 px-8 py-6 shadow-xl text-2xl text-mana-black">
            <p>
              全新
              <span className="!text-mana-purple">交易系统</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex flex-row items-center px-12 py-8">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO"
          />
          <h1 className="px-5 py-3 text-[1.8rem] !text-mana-black">模组特色</h1>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-4 mx-12 mb-32">
          <div className="box-border p-6 h-min bg-white shadow-xl rounded-lg flex-1">
            <img className="w-16 h-16 mb-6" src={mana_food_icon} alt="食物" />
            <h1 className="text-4xl tracking-widest">饮食与生活技能</h1>
            <p className="py-5 text-xl leading-8 font-body tracking-widest">
              不局限於香草麥塊的食物，
              <br />
              多種料理和飲料相關食譜！
              <br />
              成為每一項生活技能的達人吧！
            </p>
          </div>
          <div className="box-border p-6 h-[26rem] bg-mana-purple shadow-xl text-white rounded-lg flex-1 flex flex-col">
            <img className="w-16 h-16 mb-6" src={mana_fireball_icon} alt="战斗" />
            <h1 className="text-4xl tracking-widest">职业PVE系统</h1>
            <p className="py-5 text-xl leading-8 font-body tracking-widest h-full">
              九大職業帶來全新玩法
              <br />
              各職業的所屬技能以及絕技，
              <br />
              於各路夥伴中獨樹一幟！
            </p>
            <button type="button" className="bg-white w-full text-center p-6 !text-mana-purple text-xl rounded-md">
              阅读更多
            </button>
          </div>
          <div className="box-border h-min p-6 shadow-xl bg-white rounded-lg flex-1">
            <img className="w-16 h-16 mb-6" src={mana_mineral_icon} alt="矿物" />
            <h1 className="text-4xl tracking-widest">超丰富原矿</h1>
            <p className="py-5 text-xl leading-8 font-body tracking-widest">
              香草生存的礦物太少了？
              <br />
              此模組擁有著超大量種類的原礦，
              <br />
              挖礦愛好者的首選！
            </p>
          </div>
        </div>
      </div>
      <div className="bg-mana-light-purple">
        <div className="flex flex-row items-center px-12 py-8">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO"
          />
          <h1 className="px-5 py-3">模组截图</h1>
        </div>
        <p>-----</p>
      </div>
    </main>
  );
}

export default App;
