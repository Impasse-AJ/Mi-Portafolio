/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  FileText, 
  Server, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Check, 
  RotateCw,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data.ts';

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'terminal'>('architecture');
  const [probeStatus, setProbeStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [probeLogs, setProbeLogs] = useState<string[]>([]);

  const handleRunProbe = () => {
    if (probeStatus === 'running') return;
    setProbeStatus('running');
    setProbeLogs([]);

    const steps = [
      '⚡ [DNS] Resolving DNS proxy layers via Cloudflare...',
      '🛡️ [SSL] Validating Let\'s Encrypt TLS certificate through Caddy...',
      '🐧 [VPS] Connecting to virtual private server via SSH tunnel...',
      '🐳 [Docker] Verifying containers status in Docker Compose network...',
      '📦 [API] Pinging Spring Boot backend API health-check endpoint...',
      '💾 [DB] Testing MySQL database master persistence state...',
      '✨ [SUCCESS] All systems online. pokemon-world.es running beautifully.'
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setProbeLogs(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setProbeStatus('success');
        }
      }, (index + 1) * 600);
    });
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-8 md:py-16 overflow-hidden">
      {/* Dynamic Background Grid Pattern & Ambient Gradients */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent pointer-events-none z-0" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Profile Info Columns */}
        <div className="col-span-1 lg:col-span-7 space-y-6 text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/25 rounded-full text-[11px] font-mono font-semibold text-green-400 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            Disponible para Oportunidades Junior o Prácticas
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
              Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-blue-400 font-semibold tracking-wide">
              {PERSONAL_INFO.title}
            </h2>
          </div>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            {PERSONAL_INFO.headline}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-blue-400 font-bold">FRONTEND</div>
              <div className="text-slate-400 mt-0.5">React · TS · Vite</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-blue-400 font-bold">BACKEND</div>
              <div className="text-slate-400 mt-0.5">Spring Boot · PHP</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-blue-400 font-bold">DATOS</div>
              <div className="text-slate-400 mt-0.5">Python Scraping</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-blue-400 font-bold">INFRA</div>
              <div className="text-slate-400 mt-0.5">Docker · VPS · Cloudflare</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3.5 pt-2">
            <button
              onClick={() => handleNavClick('projects')}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Proyectos Desplegados
              <ArrowRight size={14} />
            </button>
            
            <button
              onClick={onOpenCV}
              className="flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer hover:border-slate-600"
            >
              <FileText size={14} />
              Imprimir / Ver CV
            </button>

            {/* Icon Links */}
            <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80 backdrop-blur-sm pl-2">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                title="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="p-2 text-slate-400 hover:text-green-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                title="Send Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Technical Interactive Visual Dashboard */}
        <div className="col-span-1 lg:col-span-5 h-full flex flex-col justify-center">
          <div className="relative w-full rounded-2xl bg-slate-950/85 border border-slate-800/90 shadow-2xl shadow-blue-500/4 overflow-hidden">
            
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                <span className="text-slate-400 text-[11px] font-mono ml-2 flex items-center gap-1.5 font-semibold">
                  <Terminal size={12} className="text-blue-400" /> Web Console v2.0
                </span>
              </div>
              <div className="flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 font-mono text-[10px] text-slate-500">
                127.0.0.1:3000
              </div>
            </div>

            {/* Panel selector tabs */}
            <div className="flex bg-slate-900/30 border-b border-slate-800/80 px-2 text-xs font-mono">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-2 flex items-center gap-1.5 border-b-2 cursor-pointer transition-all ${
                  activeTab === 'architecture'
                    ? 'border-blue-500 text-blue-400 font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <Layers size={11} /> Configuración de Servidor
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-2 flex items-center gap-1.5 border-b-2 cursor-pointer transition-all ${
                  activeTab === 'terminal'
                    ? 'border-blue-500 text-blue-400 font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <Activity size={11} /> Prueba de Despliegue
              </button>
            </div>

            {/* Inner Panels */}
            <div className="p-5 h-[280px] overflow-y-auto text-xs leading-relaxed font-mono">
              
              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <div className="text-[11px] text-slate-400 leading-normal mb-1 flex items-center gap-1 bg-slate-900/50 p-2 rounded border border-slate-800/30">
                    <Sparkles size={12} className="text-yellow-400 flex-shrink-0" />
                    <span>Diseño de ruteo ssl inverso en mis servidores</span>
                  </div>

                  {/* Flow Map Visual */}
                  <div className="space-y-2.5">
                    {/* CDN & Proxy */}
                    <div className="flex justify-between gap-2.5">
                      <div className="flex-1 p-2 rounded-lg bg-orange-950/20 border border-orange-500/20 text-center">
                        <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">Cloudflare</div>
                        <div className="text-slate-400 text-[10px] mt-0.5">DNS Shield & SSL</div>
                      </div>
                      <div className="flex items-center justify-center p-1 text-slate-600">→</div>
                      <div className="flex-1 p-2 rounded-lg bg-teal-950/20 border border-teal-500/20 text-center">
                        <div className="text-[10px] text-teal-400 font-bold uppercase tracking-wider">Caddy Proxy</div>
                        <div className="text-slate-400 text-[10px] mt-0.5">Auto-SSL TLS (reverse)</div>
                      </div>
                    </div>

                    <div className="text-center text-slate-700 py-0.5">↓</div>

                    {/* Server Docker Containers */}
                    <div className="p-2.5 rounded-lg bg-blue-950/15 border border-blue-500/20">
                      <div className="flex items-center justify-between border-b border-blue-900/40 pb-1.5 mb-1.5">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1">
                          <Server size={10} /> VPS Linux (Docker Compose)
                        </span>
                        <span className="text-[9px] bg-green-500/10 text-green-400 px-1.5 py-0.2 rounded font-semibold border border-green-500/20">Active</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] font-semibold">
                        <div className="p-1 rounded bg-slate-900/80 border border-slate-800 text-center">
                          <div className="text-blue-300">React App</div>
                          <div className="text-slate-500 text-[8px] font-normal leading-0">Vite · FE</div>
                        </div>
                        <div className="p-1 rounded bg-slate-900/80 border border-slate-800 text-center">
                          <div className="text-blue-300">Spring Boot</div>
                          <div className="text-slate-500 text-[8px] font-normal leading-0">Java API</div>
                        </div>
                        <div className="p-1 rounded bg-slate-900/80 border border-slate-800 text-center text-green-400">
                          <div>MySQL DB</div>
                          <div className="text-slate-500 text-[8px] font-normal leading-0">Isolated</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="space-y-3">
                  {probeStatus === 'idle' && (
                    <div className="flex flex-col items-center justify-center h-[200px] text-slate-500 text-center space-y-3">
                      <Terminal size={32} className="text-slate-700 animate-pulse" />
                      <div className="space-y-1">
                        <p className="text-slate-300 font-semibold text-xs">Simulador de Verificación de Producción</p>
                        <p className="text-[10px] max-w-xs text-slate-500">¿Quieres ver cómo interactúan SSL, Caddy y Docker Compose? Haz clic para iniciar un escaneo de red.</p>
                      </div>
                      <button
                        onClick={handleRunProbe}
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-blue-400 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <RotateCw size={12} /> Ejecutar diagnóstico
                      </button>
                    </div>
                  )}

                  {probeStatus === 'running' && (
                    <div className="space-y-2 font-mono text-[11px]">
                      {probeLogs.map((log, index) => (
                        <div key={index} className="text-slate-300 animate-slideUp">
                          {log}
                        </div>
                      ))}
                      <div className="flex items-center gap-1.5 text-blue-400 pt-1">
                        <RotateCw size={12} className="animate-spin" /> Escaneando la infraestructura...
                      </div>
                    </div>
                  )}

                  {probeStatus === 'success' && (
                    <div className="space-y-2 font-mono text-[11px] h-full flex flex-col justify-between">
                      <div className="space-y-1.5 max-h-[170px] overflow-y-auto">
                        {probeLogs.map((log, index) => (
                          <div 
                            key={index} 
                            className={index === probeLogs.length - 1 ? "text-green-400 font-bold" : "text-slate-400"}
                          >
                            {log}
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto border-t border-slate-800/80 pt-2 flex items-center justify-between">
                        <span className="text-[10px] text-green-400 flex items-center gap-1">
                          <ShieldCheck size={14} /> PING: 24ms · HTTPS: ACTIVE
                        </span>
                        <button
                          onClick={() => setProbeStatus('idle')}
                          className="text-[10px] text-blue-400 hover:underline cursor-pointer"
                        >
                          Limpiar consola
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Info footer bar for console */}
            <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>HOST: VPS-AMD64-MADRID</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> docker-compose daemon running
              </span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
