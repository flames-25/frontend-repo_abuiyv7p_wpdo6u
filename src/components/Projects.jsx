export default function Projects() {
  const items = [
    {
      title: 'Realtime 3D Showcase',
      desc: 'Interactive 3D scene embedded with WebGL and Spline.',
      tags: ['React', 'Spline', 'Three.js'],
      link: '#'
    },
    {
      title: 'Design System Kit',
      desc: 'Reusable components and tokens guided by accessibility.',
      tags: ['Design', 'A11y', 'Storybook'],
      link: '#'
    },
    {
      title: 'Data Visualization Lab',
      desc: 'High-performance charts and dashboards.',
      tags: ['D3', 'Vega', 'Perf'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className="text-gray-600 mt-2">A selection of work exploring interactivity, visuals, and craft.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="h-40 bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-cyan-200" />
              <div className="p-4">
                <h3 className="font-semibold group-hover:text-indigo-700 transition">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 border border-black/5">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
