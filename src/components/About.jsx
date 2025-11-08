export default function About() {
  const skills = ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js', 'Python', 'FastAPI', 'MongoDB'];
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m a creative developer focused on crafting immersive, performant interfaces. I love bridging design and engineering to build products that feel alive.
          </p>
          <p className="mt-3 text-gray-600">
            Outside of coding, you’ll find me exploring new tools, sketching ideas, and learning through playful experiments.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Skills & Tools</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="text-sm px-3 py-1 rounded-full bg-slate-100 border border-black/5">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
