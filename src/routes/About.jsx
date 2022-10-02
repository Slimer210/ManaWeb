import React from 'react';

const creditList = [
  { role: '下载', name: 'download' },
  { role: '手册', name: 'docs' },
  { role: '公告', name: 'announcement' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
];

const thanksList = [
  { role: '下载', name: 'download' },
  { role: '手册', name: 'docs' },
  { role: '公告', name: 'announcement' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
  { role: '关于', name: 'about' },
];

export default function About() {
  return (
    <div className='flex flex-col my-24 items-center px-[5vw] gap-y-[1vw]'>
      <h1 className="text-6xl font-sans text-mana-purple tracking-widest my-12">关於魔法金属</h1>
      <article className='font-body text-2xl'>
      木秀于林，风必摧之。如果身边都是木，就是不一样的风景。 鹤立鸡群，倍受排挤。你可以选择离开鸡群。 人生最浪费生命的就是在没有选择时，进入某一个团体一段时间，却非逼着自己浪费时间做些蠢事去合群。 道不同不相为谋，人贵在有自知之明。
      </article>
      <h2 className="text-5xl font-sans text-mana-purple tracking-widest my-12">成员名单</h2>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 w-4/5 place-items-center">
      {creditList.map((item) => (
            <div className='flex flex-row gap-x-4'>
              <h6 className='text-2xl font-serif'>{item.role}</h6>
              <h6 className='text-2xl font-serif text-mana-purple'>{item.name}</h6>
            </div>
          ))}
      </div>
      <h2 className="text-5xl font-sans text-mana-purple tracking-widest my-12">特别感谢</h2>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 w-4/5 place-items-center">
      {thanksList.map((item) => (
            <div className='flex flex-row gap-x-4'>
              <h6 className='text-2xl font-serif'>{item.role}</h6>
              <h6 className='text-2xl font-serif text-mana-purple'>{item.name}</h6>
            </div>
          ))}
      </div>
    </div>

  );
}
