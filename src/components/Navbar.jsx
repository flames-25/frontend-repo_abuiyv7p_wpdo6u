import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-semibold text-lg tracking-tight"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            dev/portfolio
          </span>
        </button>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <button onClick={() => scrollTo('projects')} className="hover:text-gray-900">Projects</button>
          <button onClick={() => scrollTo('about')} className="hover:text-gray-900">About</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-gray-900">Contact</button>
        </nav>
        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-gray-700">
            <button onClick={() => scrollTo('projects')} className="py-2 text-left">Projects</button>
            <button onClick={() => scrollTo('about')} className="py-2 text-left">About</button>
            <button onClick={() => scrollTo('contact')} className="py-2 text-left">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}
