import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.body.parentElement;

    if (menuOpen) {
      html.classList.add('overflow-y-hidden', 'touch-none');
    }
    return () => {
      if (menuOpen) {
        html.classList.remove('overflow-y-hidden', 'touch-none');
      }
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 flex justify-between p-4 bg-white w-full">
      <h1 className="z-50">Logo</h1>
      <div className="absolute w-full z-40 top-0 left-0 h-full bg-white"></div>
      <div
        className={`navmenu flex gap-16 touch-manipulation flex-col p-4 pt-20 bg-neutral-100 absolute w-full z-30 h-screen transition-all duration-500 overflow-auto overscroll-none top-0 left-0 ${
          menuOpen ? 'mt-0' : 'mt-[-200%]'
        }`}
      >
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">6</a>
        <a href="">7</a>
        <a href="">8</a>
        <a href="">9</a>
      </div>
      <button
        className="z-50 pr-4"
        onClick={() => setMenuOpen((state) => !state)}
      >
        H
      </button>
    </header>
  );
}
