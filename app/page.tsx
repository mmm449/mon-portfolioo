'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from "./navbar";
import { supabase } from "../library/supabaseClient";

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

export default function Home() {

  const [projets, setProjets] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProjets() {

      const { data, error } = await supabase.from('Projets').select('*');
      if (!error && data) {
        setProjets(data);
      }
    }
    fetchProjets();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      {/*SECTION */}
      <main className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">
            Disponible pour de nouveaux projets !
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
            Salut, je suis Magomed <span className="text-blue-500 border-b-4 border-blue-100">Developpeur Web</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Débutant Développeur Web Passionné | Apprenant Angular, React & Next.js.
          </p>
          <div className="flex gap-5 pt-5">
            <a href="#projets" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95">
              Voir mes projets
            </a>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full flex items-center justify-center border-8 border-white shadow-2xl overflow-hidden">
            <Player
              autoplay
              loop
              src="/animation.json"
              style={{ height: '80%', width: '80%' }}
            />
          </div>
        </div>
      </main>

      {/* SECTION COMPETENCES */}
      <section id="competences" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Mes Compétences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ANGULAR */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 cursor-default">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110">
                🅰️
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">Angular</h3>
            </div>

            {/* REACT */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-300/20 transition-all duration-300 cursor-default">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110">
                ⚛️
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">React</h3>
            </div>

            {/* NEXT JS */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 cursor-default">
              <div className="w-14 h-14 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110">
                N
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-900 transition-colors">Next JS</h3>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Projets Récents</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projets && projets.map((projet: any) => (
              <div key={projet.title} className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500">

                {/* Image du projet */}
                <div className="aspect-video relative overflow-hidden flex items-center justify-center bg-slate-100">
                  {projet.image_url ? (
                    <img
                      src={projet.image_url}
                      alt={projet.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${projet.title?.includes('Natur') ? 'from-emerald-400 to-teal-500' : 'from-orange-400 to-red-500'}`}>
                      <span className="text-white text-5xl mb-2">{projet.title?.includes('Natur') ? '🪴' : '👥'}</span>
                    </div>
                  )}
                </div>

                {/* Infos du projet */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{projet.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">{projet.description}</p>
                  <a
                    href={projet.git_hub}
                    target="_blank"
                    className={`inline-block px-6 py-2.5 text-white font-bold rounded-xl transition-all duration-300 text-sm ${projet.title?.includes('Natur') ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-orange-600 hover:bg-orange-700'}`}
                  >
                    Voir le projet →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Section Contact*/}
      <section id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Un projet ? Contactez-moi !</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Je suis actuellement à la recherche de nouvelles opportunités
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="mailto:maigovmagomed357@gmail.com"
              className="flex items-center justify-center gap-3 w-60 h-14 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              <span className="flex items-center justify-center w-8 h-8 text-xl">📧</span>
              <span className="flex items-center">Mon Email</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 w-60 h-14 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-100 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              <span className="flex items-center justify-center w-8 h-8 text-xl -mt-1">💼</span>
              <span className="flex items-center">Mon LinkedIn</span>
            </a>
            <a href="https://discord.com/users/lightt7565" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 w-60 h-14 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              <img src="https://cdn3.emoji.gg/emojis/222991-discordlogo.gif"
                className="w-12 h-12 object-contain inline-block"
                alt="discordlogo" />
              <span>Mon Discord</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} — Magomed Portfolio</p>
      </footer>
    </div>
  );
}