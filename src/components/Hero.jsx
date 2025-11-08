import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center py-24">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-black/10 shadow-sm mb-4">
            <Rocket className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-medium text-gray-700">Tech • Interactive • Modern</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building playful, modern digital experiences
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            I craft interactive products with a focus on performance, accessibility, and delightful micro-interactions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/80 backdrop-blur border border-black/10 font-medium shadow hover:bg-white">Contact Me</a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
    </section>
  );
}
