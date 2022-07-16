/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import manaLogo from '../assets/manalogo.png';
import backgroundImage from '../assets/img/landingPhoto.png';
import mana_fireball_icon from '../assets/img/mana_fireball_icon.png';
import mana_food_icon from '../assets/img/mana_food_icon.png';
import mana_mineral_icon from '../assets/img/mana_mineral_icon.png';
import mana_earth_icon from '../assets/img/mana_earth_icon.png';
import mana_money_icon from '../assets/img/mana_money_icon.png';

const manaIMG = [
  { src: 'https://i.imgur.com/2Sbpaf3.png' },
  { src: 'https://i.imgur.com/jGPnM44.png' },
  { src: 'https://i.imgur.com/RgCaQc0.png' },
  { src: 'https://i.imgur.com/9oDnM9h.png' },
  { src: 'https://i.imgur.com/R6ArUQV.png' },
  { src: 'https://i.imgur.com/8My4DFK.png' },
];

const articles = [
  {
    title: '魔法金属更新公告', content: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', image: 'https://i.imgur.com/Kwys2KL.png', tag: '更新公告',
  },
  {
    title: '魔法金属更新公告2', content: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', image: 'https://i.imgur.com/Kwys2KL.png', tag: '2更新公告',
  },
  {
    title: '魔法金属更新公告3', content: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ', image: 'https://i.imgur.com/Kwys2KL.png', tag: '3更新公告',
  },
];

export default function Main() {
  return (
    <main>
      <div className="mt-24 w-full flex flex-col mobile:flex-row justify-between overflow-visible px-10 h-[90vh]">
        <div className="self-center pl-24 text-center laptop:text-left basis-1/2 flex flex-col">
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
          <Link className="w-[16rem] bg-mana-purple mt-6 text-white text-3xl hover:text-white hover:scale-110 hover:bg-mana-dark-purple hover:rotate-3 px-16 py-5 rounded-lg duration-300 shadow-xl" to="download">立即下载</Link>
        </div>
        <div className="relative p-[1rem] m-20 rounded-lg bg-cover basis-1/2" style={{ backgroundImage: `url("${backgroundImage}")` }}>
          <div className="flex flex-column rounded-lg absolute -left-16 top-4 bg-slate-50 px-8 py-6 shadow-xl text-2xl text-mana-black items-center basis-1/2">
            <img className="w-12 h-12 mr-4" src={mana_money_icon} alt="" />
            <p>
              金钱
              <span className="!text-mana-purple">交易系统</span>
            </p>
          </div>
          <div className="flex flex-column rounded-lg absolute bottom-4 -right-16 bg-slate-50 px-8 py-6 shadow-xl text-2xl text-mana-black items-center">
            <img className="w-16 h-16 mr-4" src={mana_earth_icon} alt="" />
            <p>
              多元
              <span className="!text-mana-purple">生态系统</span>
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
          <h1 className="px-5 py-3 text-[2rem] !text-mana-black">模组特色</h1>
        </div>
        <div className="flex justify-center items-center gap-4 mx-32 mb-32">
          <div className="box-border p-6 h-min bg-white shadow-xl rounded-lg flex-1">
            <img className="w-16 h-16 mb-6" src={mana_food_icon} alt="食物" />
            <h1 className="text-5xl tracking-widest">
              饮食与
              <br />
              生活技能
            </h1>
            <p className="py-5 text-xl leading-8 font-body tracking-widest">
              不局限於香草麥塊的食物，
              <br />
              多種料理和飲料相關食譜！
              <br />
              成為每一項生活技能的達人吧！
            </p>
          </div>
          <div className="box-border p-6 h-[28rem] bg-mana-purple shadow-xl text-white rounded-lg flex flex-col flex-1">
            <img className="w-16 h-16 mb-6" src={mana_fireball_icon} alt="战斗" />
            <h1 className="text-5xl tracking-widest">职业PVE系统</h1>
            <p className="py-5 text-xl leading-8 font-body tracking-widest h-full">
              九大職業帶來全新玩法
              <br />
              各職業的所屬技能以及絕技，
              <br />
              於各路夥伴中獨樹一幟！
            </p>
            <button type="button" className="bg-white w-full text-center p-6 !text-mana-purple text-2xl rounded-md">
              阅读更多
            </button>
          </div>
          <div className="box-border h-min p-6 shadow-xl bg-white rounded-lg flex-1">
            <img className="w-16 h-16 mb-6" src={mana_mineral_icon} alt="矿物" />
            <h1 className="text-5xl tracking-widest">
              非常丰富
              <br />
              的原矿
            </h1>
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
      <div className="bg-slate-100">
        <div className="flex flex-row items-center px-12 py-8">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO"
          />
          <h1 className="px-5 py-3 text-[2rem] !text-mana-black">模组截图</h1>
        </div>
        <div className="grid grid-cols-2 gap-12 p-12">
          {manaIMG.map((item) => (
            <div>
              <img src={item.src} className="rounded-lg" alt=" " />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white">
        <div className="flex flex-row items-center px-12 py-3">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO"
          />
          <h1 className="px-5 py-3 text-[2rem] !text-mana-black">最新公告</h1>
        </div>
        <div className="flex flex-col mobile:flex-row items-stretch">
          {articles.map((item) => (
            <div className="flex-col m-12 drop-shadow-lg rounded-lg border-2">
              <img src={item.image} className="aspect-square object-cover rounded-lg shadow-none" alt=" " />
              <h2 className="text-mana-purple px-6 pt-4 font-body tracking-wide">{item.tag}</h2>
              <h1 className="text-mana-black px-6 pb-2 text-[2rem] tracking-wide">{item.title}</h1>
              <div className="pb-6"><p className="line-clamp-3 px-6 font-body tracking-wide">{item.content}</p></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center px-12 w-full">
          <h1 className="text-[5rem] text-mana-black tracking-wide leading-snug align-center text-center">
            {' '}
            还在犹豫什么？
            <br />
            <strong className="text-mana-purple text-center">立即下载</strong>
            吧！
          </h1>
          <div>
            <p className="py-5 text-2xl leading-9 font-body tracking-widest text-center">
              是不是蠢蠢欲動了呢？趕快下載體驗吧！
              <br />
              當你猶豫就是你想要了，即刻前往魔法金屬的世界探索一番吧！！
            </p>
          </div>
          <Link to="download" className="bg-mana-purple mt-6 text-white text-3xl hover:text-white hover:scale-110 hover:bg-mana-dark-purple hover:rotate-3 px-16 py-5 rounded-lg duration-300 shadow-xl" href="download">立即下载</Link>
        </div>
      </div>

    </main>
  );
}
