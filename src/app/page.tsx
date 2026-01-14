"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlist = [
    {
      title: "Takkan Terganti",
      artist: "Marcell (Speed Up)",
      src: "/audio/takkan terganti - marcel siahaan - speed up reverb.mp3"
    },
    {
      title: "Perahu Kertas",
      artist: "Tulus (Speed Up)",
      src: "/audio/Perahu Kertas - Tulus speed up lyrics.mp3"
    }
  ];

  /* Handle Song Change Effect */
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(e => console.log("Play error", e));
    }
  }, [currentSongIndex]); // Depend on index change

  const startExperience = () => {
    setIsOpen(true);
    // Ensure we start fresh or continue
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.error("Autoplay failed", e);
      });
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col font-display">
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        src={playlist[currentSongIndex].src} 
        onEnded={nextSong}
        preload="auto"
      />

      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[60%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[90%] h-[50%] bg-[#f43f5e]/15 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse-slower"></div>
      </div>

      {!isOpen ? (
        /* WELCOME SCREEN */
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center w-full px-6 py-8 gap-10 animate-fade-in">
          {/* Central Badge */}
          <div className="relative group">
            <div className="absolute inset-0 -m-4 border border-primary/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-0 -m-8 border border-primary/10 rounded-full animate-pulse-slower"></div>
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-glow border-[6px] border-white/10 bg-background-dark">
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-[2s] ease-in-out">
                <Image 
                  src="/images/couple.jpg" 
                  alt="Haikal & Qodimah" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-primary/20 to-primary/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                <span className="material-symbols-outlined text-[32px] mb-2 text-white/90 animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span className="text-7xl font-script leading-none drop-shadow-lg">2</span>
                <span className="text-lg font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">Years</span>
                <span className="text-xs font-light tracking-wider opacity-90 mt-1">Together</span>
              </div>
            </div>
          </div>

          {/* Names */}
          <div className="flex flex-col items-center text-center space-y-3 z-10">
            <h1 className="text-4xl md:text-5xl font-script text-white drop-shadow-md leading-tight pt-2 px-2">
              Kai <span className="text-primary mx-1">&</span> Rofi
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent my-3"></div>
            <p className="text-[#eaddd7] text-base font-normal leading-relaxed max-w-xs">
              Two years of love, laughter, and learning side by side.
            </p>
          </div>

          {/* Action Button */}
          <div className="relative z-10 w-full px-6 pb-12 pt-4 flex flex-col items-center animate-slide-up">
            <button 
              onClick={startExperience}
              className="group relative flex w-full max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30 transition-all hover:bg-[#d6204b] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2 truncate z-10">
                <span>Tap ya Sayang</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </button>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-6 font-medium">Since 2024</p>
          </div>
        </div>
      ) : (
        /* LETTER SCREEN */
        <>
           <header className="relative z-20 flex items-center justify-between px-4 py-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <button 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center size-10 rounded-full text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">2nd Anniversary</h1>
            <div className="size-10"></div> 
          </header>

          <main className="relative z-10 flex-1 w-full max-w-md mx-auto px-5 pb-52 pt-2 flex flex-col animate-fade-in">
            <div className="relative w-full mt-4 group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 size-12 rounded-full flex items-center justify-center shadow-glow">
                  <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-paper-dark rounded-3xl shadow-2xl shadow-black/20 dark:shadow-black/50 overflow-hidden border border-slate-100 dark:border-white/5 relative">
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>
                
                <div className="p-8 pt-12 flex flex-col h-full min-h-[500px]">
                  <div className="self-end mb-6 opacity-60">
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 px-2 py-1 rounded">Jan 15, 2026</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                    Dear Ade,
                  </h2>
                  
                  <div className="space-y-5 text-slate-600 dark:text-white/90 leading-relaxed text-[17px]">
                    <p>
                      Happy 2nd Anniversary, Sayang.
                    </p>
                    <p>
                      Mas nulis ini buat ngasih tau Ade seberapa berartinya Ade buat Mas, bahkan di tengah chaos-nya duniMas akhir-akhir ini.
                    </p>
                    <p>
                      Mas mau minta maaf banget ya, belakangan ini waktuku kesita banget sama tugas-tugas proyek UAS. Rasanya sedih banget gabisa ngasih perhatian dan waktu sesering biasanya ke Ade di momen spesial ini.
                    </p>
                    <p>
                      Juga, maafin Mas ya karena udah 2 tahun ini kita LDR dan Mas belum bisa nepatin janji buat nemuin Ade secara langsung. Sabar ya, Mas usahain secepatnya kita bisa ketemu.
                    </p>
                    <p>
                      Makasih banyak udah jadi pacar yang super sabar dan pengertian. Support Ade itu bensin buat Mas tetep jalan.
                    </p>
                    <p className="font-medium text-primary/90">
                      I love you, Rofi.
                    </p>
                  </div>
                  
                  <div className="flex-1 min-h-[40px]"></div>
                  
                  <div className="mt-8 flex flex-col items-end">
                    <div className="w-16 h-0.5 bg-primary/30 mb-4 rounded-full"></div>
                    <span className="text-slate-500 dark:text-white/60 text-sm mb-1">With all my love,</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white font-display">Mas (Kai)</span>
                  </div>
                </div>
                
                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-20"></div>
              </div>
              
              {/* Stack Effect Cards */}
              <div className="absolute top-2 left-2 right-2 -bottom-2 bg-white/50 dark:bg-paper-dark/50 rounded-3xl -z-10 border border-white/5"></div>
              <div className="absolute top-4 left-4 right-4 -bottom-4 bg-white/20 dark:bg-paper-dark/30 rounded-3xl -z-20 border border-white/5"></div>
            </div>
          </main>

          {/* Music Player Bar */}
          <div className="fixed bottom-0 left-0 w-full p-6 z-30 bg-gradient-to-t from-background-light via-background-light/90 to-transparent dark:from-background-dark dark:via-background-dark/90 pb-8 animate-slide-up">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-5 flex items-center gap-3 p-3 rounded-2xl bg-white/70 dark:bg-paper-dark/70 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-lg shadow-black/5">
                <div className="relative size-12 shrink-0 rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-primary/80 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`material-symbols-outlined text-white text-[20px] ${isPlaying ? 'animate-spin-slow' : ''}`}>music_note</span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 px-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">{playlist[currentSongIndex].title}</h3>
                  <p className="text-[11px] font-semibold text-primary/80 uppercase tracking-wide">{playlist[currentSongIndex].artist}</p>
                </div>
                
                <div className="flex items-center gap-2 pr-1">
                  <button 
                    onClick={prevSong}
                    className="size-8 flex items-center justify-center rounded-full text-slate-600 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[24px]">skip_previous</span>
                  </button>
                  <button 
                    onClick={togglePlay}
                    className="size-9 flex items-center justify-center rounded-full text-slate-900 dark:text-white hover:scale-105 active:scale-95 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[32px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {isPlaying ? "pause_circle" : "play_circle"}
                    </span>
                  </button>
                  <button 
                    onClick={nextSong}
                    className="size-8 flex items-center justify-center rounded-full text-slate-600 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[24px]">skip_next</span>
                  </button>
                </div>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 text-white font-bold text-lg py-4 rounded-2xl shadow-glow flex items-center justify-center gap-2 group">
                <span>I Love You</span>
                <span className="material-symbols-outlined group-hover:scale-125 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
