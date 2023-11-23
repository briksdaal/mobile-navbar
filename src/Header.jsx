import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const root = document.querySelector('#root');

    if (menuOpen) {
      html.classList.add('overflow-y-hidden');
      body.classList.add('overflow-y-hidden');
      body.classList.add('relative');
      root.classList.add('overflow-y-hidden');
    } else {
      html.classList.remove('overflow-y-hidden');
      body.classList.remove('overflow-y-hidden');
      body.classList.remove('relative');
      root.classList.remove('overflow-y-hidden');
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 flex justify-between p-4 bg-white w-full">
      <h1 className="z-20">Logo</h1>
      <div className="absolute w-full z-10 top-0 left-0 h-full bg-white"></div>
      <div
        className={`absolute w-full h-screen transition-all duration-500 top-0 left-0 ${
          menuOpen ? 'mt-0' : 'mt-[-200%]'
        }`}
      >
        <div className="flex gap-8 flex-col h-full p-4 pt-20 bg-neutral-100">
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
        </div>
      </div>
      <button className="z-20" onClick={() => setMenuOpen((state) => !state)}>
        H
      </button>
    </header>
  );
}
