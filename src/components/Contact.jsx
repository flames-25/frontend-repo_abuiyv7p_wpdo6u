import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold">Let’s build something together</h2>
          <p className="mt-2 text-gray-600">Have a project in mind or just want to say hi? I’d love to hear from you.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/10 bg-white hover:bg-slate-50">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/10 bg-white hover:bg-slate-50">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
