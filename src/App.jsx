import React from 'react'
import manaLogo from './assets/manalogo.png'

const navigation = [
  { name: '下載', href: '#', current: false },
  { name: '手冊', href: '#', current: false },
  { name: '公告', href: '#', current: false },
  { name: '關於', href: '#', current: false },
  { name: '支持我們', href: '#', current: false },
]

function NavigationBar() {
  return (
    <div>
      <div className="flex justify-between item-center px-5 py-5 drop-shadow-md bg-white">
        <div className="flex-shrink-0 flex items-center px-3 py-3 active:text-mana-dark-purple hover:text-mana-dark-purple duration-300 hover:scale-110" href="#">
          <img
            className="block w-12 h-12 drop-shadow-none"
            src={manaLogo}
            alt="ManaMetal LOGO" />
          <h1 className="px-3">魔法金屬官方網站</h1></div>
        <div className=" flex flex-nowrap items-center justify-center gap-x-5">
          {navigation.map((item, index) => (
            <a className={`px-6 py-4 content-center whitespace-nowrap rounded-full active:text-mana-dark-purple hover:text-mana-dark-purple hover:scale-110 duration-300  ${index === 4 ? "bg-mana-purple text-white hover:text-white hover:bg-mana-dark-purple" : " "}`} key={item.name} href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const myVariable = "my"
  return (
    <NavigationBar/>
  )
}

export default App