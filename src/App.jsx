import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

const navigation = [
  { name: '下載', href: '#', current: true },
  { name: '手冊', href: '#', current: false },
  { name: '公告', href: '#', current: false },
  { name: '關於', href: '#', current: false },
  { name: '支持我們', href: '#', current: false },
]

function navigationBar() {

}

function MyComponent() {
  return (
    <div>Fcuk my liv</div>
  )
}

function App() {
  const myVariable = "my"
  return (
  <Disclosure as="nav">
    <div className="flex justify-between px-5 py-5 drop-shadow-xl">
      <h1>MANAWeb</h1>
    <div className="items-right">
    {navigation.map((item) => (
    <a className="px-8 py-5 "key={item.name} href={item.href}>{item.name}</a>
  ))}
</div></div>
</Disclosure>
  )
  
}

export default App