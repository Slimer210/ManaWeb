/* eslint-disable max-len */
import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Support() {
  return (
    <div className="my-24">
      <div className="p-12">
        <h2 className="text-6xl font-sans text-mana-purple tracking-widest">您的支持，是我们的最大动力！</h2>
      </div>
      <article className=" px-12">
        <p className="whitespace-pre-line my-8">
          魔法金屬是一個規模不小的模組，然而我們的野心並不僅止於此。我們希望魔法金屬中可以有自己的音樂、更豐富的點裝甚至3D模型、更多樣的怪物外觀甚至是一個仿造其他線上遊戲，由我們直接且長期營運的大型官方伺服器等。
        </p>
        <p className="whitespace-pre-line my-8">
          然而很不幸的，很多事情不是目前的我們可以自行解決的，音樂需要請專業作曲家製作、模型或許也需要找外包、過大的系統也可能導致我們需要找更多的工程師來編寫、連伺服器要開設的話都會是一個長期的開銷、這些都不是我們僅憑對這個模組的熱忱就可以解決的事情。
          因此我們決定開放玩家贊助、你們的贊助不僅可以獲得白金作為回饋、也可以幫助我們讓魔法金屬走得更寬、更遠。
        </p>
        <p className="whitespace-pre-line my-8">
          與此同時，你也不用擔心、魔法金屬的贊助將不會讓模組成為一個Pay To Win的模組、我們希望玩家們將白金使用在那些非必要，不會影響遊戲進程的物品上，例如點裝、寵物等等，因此贊助系統開放後，我們將下架白金商店中那些影響平衡性的物品、並在之後的版本不斷更新新的時裝商品。
        </p>
        <p className="whitespace-pre-line my-8">
          我們希望魔法金屬會成為一個偉大的模組，而你可以幫助我們一同實現這個目標。
          當然，若你沒有這個經濟能力也沒關係，下載時透過官方網站下載，並關閉Adblock等阻擋廣告的工具，願意的話順手按一下廣告就可以讓我們擁有一些廣告收益囉。
        </p>
      </article>
      <div className="flex flex-row p-12 justify-between items-center">
        <div className="flex flex-col basis-2/3">
          <h2 className="text-5xl font-sans text-mana-purple tracking-widest">赞助我们，您将会得到：</h2>
          <ul className="py-12 font-body">
            <li className="py-8 flex text-3xl">
              <div className="rounded-full bg-mana-purple p-2 mx-2">
                <Icon icon="icon-park-outline:clothes-crew-neck" className="text-white"/>
              </div>
              用于购买服饰的
              <strong className="text-mana-purple">白金</strong>
              ，在玩家中亮出最特别的自己！
            </li>
            <li className="py-8 flex text-3xl">
              <div className="rounded-full bg-mana-purple p-2 mx-2">
                <Icon icon="ant-design:tag-outlined" className="text-white"/>
              </div>
              赞助者
              <strong className="text-mana-purple">专属称号</strong>
              ，不是所有人都能得到！
            </li>
            <li className="py-8 flex text-3xl">
              <div className="rounded-full bg-mana-purple p-2 mx-2">
                <Icon icon="akar-icons:heart" className="text-white" />
              </div>
              一颗专属你的
              <strong className="text-mana-purple">爱心</strong>
              ，感谢您的支持！
            </li>
            <li className="py-8 flex text-3xl">
              未来将有更多的
              <strong className="text-mana-purple">福利</strong>
              等着你！
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-8 basis-1/3 ">
          <h2 className="self-center text-5xl">您可以透过</h2>
          <Link to="/" className="flex flex-row rounded-lg bg-paypal-blue items-center justify-center w-full p-4">
            <Icon icon="bi:paypal" className="text-white text-xl mx-4" />
            <h2 className="text-white text-2xl">使用PayPal转账</h2>
          </Link>
          <Link to="/" className="flex flex-row rounded-lg bg-patreon-orange items-center justify-center w-full p-4">
            <Icon icon="bxl:patreon" className="text-white text-xl mx-4" />
            <h2 className="text-white text-2xl">购买Patreon会员</h2>
          </Link>
          <h2 className="self-center text-3xl">或银行转账</h2>
          <div className="flex flex-col items-center justify-around space-between rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 w-full h-[24rem]">
            <h2 className='text-4xl font-body text-white font-bold'>玉山銀行</h2>
            <h2 className='text-6xl font-body text-white font-bold'>​0015 9766 4115 9</h2>
            <h2 className='text-xl font-body text-white font-bold'>转账请附玩家名称</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
