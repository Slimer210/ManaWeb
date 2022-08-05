import React from 'react';
import {
  Link,
} from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';
import manaLogo from '../assets/manalogo.png';
import { version5x } from '../data/version.json';

moment.locale('zh-tw');

export default function Download() {
  return (
    <div className="m-12">
      <div className="flex flex-col mt-24 flex-1 items-center justify-center min-h-[82vh] max-h-fit">
        <img alt="" src={manaLogo} className="w-1/2 h-auto absolute top-1/2 left-1/2 opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="flex flex-col items-center relative z-10">
          <h1 className="text-[6rem] text-mana-black tracking-wide leading-snug text-center">
            今天就开启
            <br />
            你的
            <span className="text-mana-purple font-semibold">魔法之旅!</span>
          </h1>
          <p className="flex font-body py-8 text-center text-2xl tracking-widest">
            官方推薦直使用最新版本遊玩，以獲得最佳遊戲體驗。
            <br />
            欲體驗舊版本的內容，往下滑可查看所有舊版本的更新日誌及下載鏈接。
          </p>
          <div className="m-8 flex tablet:flex-row flex-col">
            <Link to="/" className="text-white bg-mana-purple m-8 px-12 py-8 rounded-lg text-[2.5rem] border-8 border-solid border-mana-purple self-center whitespace-nowrap">
              下载自动安装器
            </Link>
            <Link to="/" className="text-mana-purple bg-slate-50 m-8 px-12 py-8 rounded-lg text-[2.5rem] border-8 border-solid border-mana-purple self-center whitespace-nowrap">
              手动安装
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center py-8">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO"
          />
          <h1 className="px-5 text-[2rem] !text-mana-black">所有版本</h1>
        </div>
        <h1 className="py-3 text-mana-purple text-[2rem]">版本5.x</h1>
        <div className="table border-black border-collapse table-auto w-full my-3 rounded-lg">
          <tr className="bg-mana-purple text-white content-start">
            <th className="py-4 text-[1.5rem] font-normal">版本</th>
            <th className="py-4 text-[1.5rem] font-normal">释出日期</th>
            <th className="py-4 text-[1.5rem] font-normal">更新日志</th>
            <th className="py-4 text-[1.5rem] font-normal">下载链接</th>
          </tr>
          {version5x.map((data) => (
            <tr>
              {[
                data.version,
              ].map((item) => (
                <td className="px-4 py-4 text-[1.5rem] font-normal border-2 border-slate-100">{item}</td>
              ))}
              {[
                data.releaseDate,
              ].map((item) => (
                <td className="px-4 py-4 text-[1.5rem] font-normal border-2 border-slate-100">
                  {moment(item).format('LL')}
                </td>
              ))}
              {[
                data.releaseNotesLink,
              ].map((item) => (
                <td className="px-4 py-4 text-[1.5rem] font-normal border-2 border-slate-100">
                  <a href={item} className="text-mana-purple font-body font-normal">查看</a>
                </td>
              ))}
              {[
                data.downloadLink,
              ].map((item) => (
                <td className="px-4 py-4 text-[1.5rem] font-normal border-2 border-slate-100">
                  <a href={item} className="text-mana-purple font-body font-normal">下载</a>
                </td>
              ))}
            </tr>
          ))}
        </div>
      </div>
    </div>
  );
}
