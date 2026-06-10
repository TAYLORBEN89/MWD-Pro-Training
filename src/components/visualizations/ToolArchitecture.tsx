import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Battery, 
  Cpu, 
  Radio, 
  Activity, 
  Shield, 
  Zap, 
  Compass, 
  Thermometer, 
  Database, 
  Waves, 
  Clock, 
  ChevronRight, 
  Lightbulb,
  Info
} from 'lucide-react';

interface ComponentDetail {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  details: string[];
  color: string;
  glowColor: string;
  techLabel: string;
}

const components: ComponentDetail[] = [
  {
    id: 'pulser',
    name: 'Telemetry / Mud Pulser',
    icon: Radio,
    description: 'The physical voice of the collar string. Converts processed downhole sensor data into robust, digitized physical mud pressure pulses traveling miles back to the surface.',
    details: [
      'High-thrust solenoid poppet valve system',
      'Dynamic flow-restrictor orifice to generate pulse signals',
      'Continuous-wave or positive pulse transmission options',
      'Erosion-resistant stellite alloy components for mud grit protection'
    ],
    color: 'bg-blue-500',
    glowColor: 'rgba(59,130,246,0.5)',
    techLabel: 'MPU-700 TELEMETRY COLLAR'
  },
  {
    id: 'electronics',
    name: 'Control Electronics Module',
    icon: Cpu,
    description: 'The computational CPU brain. Integrates robust physical insulation with multi-channel analog-to-digital converters to translate downhole measurements into logical telemetry packages.',
    details: [
      'High-Temperature rated silicon (-40°C to +175°C environment limit)',
      '128MB solid-state non-volatile backup flight recorder memory',
      'Optimized digital clock frequency scaling for low-power operation',
      'Dual redundant electrical bus interfaces with over-voltage safety'
    ],
    color: 'bg-purple-500',
    glowColor: 'rgba(168,85,247,0.5)',
    techLabel: 'MWD-CTRL v4.9 MASTER CPU'
  },
  {
    id: 'sensors',
    name: 'Downhole Sensor Package',
    icon: Activity,
    description: 'The optical equivalent downhole. houses ruggedized, ultra-accurate crystal quartz accelerometers and magnetic fluxgate magnetometers.',
    details: [
      '3-Axis Solid-State Accelerometers for accurate physical inclination',
      '3-Axis Orthogonal Magnetometers measuring complete magnetic field strength of earth',
      'Gamma-Ray Geiger photomultiplier tube mapping formations and lithology standards',
      'Active physical shock, impact, and high-frequency vibration damping frames'
    ],
    color: 'bg-emerald-500',
    glowColor: 'rgba(16,185,129,0.5)',
    techLabel: '3-AXIS D-SENSE MATRIX PLATFORM'
  },
  {
    id: 'power',
    name: 'Power Regulation System',
    icon: Battery,
    description: 'The steady fuel supply. Converts raw downhole chemical or kinetic power into regulated, clean direct current (DC) distribution pipelines.',
    details: [
      'Super-high-capacity Lithium-Thionyl Chloride (Li-SOCl2) cell cartridge',
      'Up to 150 hours of active drilling telemetry per battery pod',
      'Automated hybrid turbine-generator power hand-off module',
      'Short-circuit, physical rupture and thermal run-away escape vents'
    ],
    color: 'bg-amber-500',
    glowColor: 'rgba(245,158,11,0.5)',
    techLabel: 'PWR-CAP DUAL REDUNDANT BATTERY CARTRIDGE'
  }
];

export const ToolArchitecture: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('sensors');
  
  // Real-time fluctuating telemetry simulation state
  const [simulationData, setSimulationData] = useState({
    pressurePulse: 118.4,
    signalStrength: -3.2,
    coreTemp: 142.3,
    memoryUsed: 12.8,
    inclination: 42.6,
    azimuth: 128.4,
    gamma: 74.5,
    voltage: 28.6,
    mops: 42.1
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulationData(prev => ({
        pressurePulse: Math.min(130, Math.max(105, prev.pressurePulse + (Math.random() - 0.5) * 4)),
        signalStrength: Math.min(-2.8, Math.max(-4.2, prev.signalStrength + (Math.random() - 0.5) * 0.2)),
        coreTemp: Math.min(145, Math.max(139, prev.coreTemp + (Math.random() - 0.5) * 0.3)),
        memoryUsed: Math.min(99.9, Math.max(1.0, prev.memoryUsed + 0.01)),
        inclination: Math.min(90, Math.max(0, prev.inclination + (Math.random() - 0.5) * 0.1)),
        azimuth: Math.min(360, Math.max(0, prev.azimuth + (Math.random() - 0.5) * 0.2)),
        gamma: Math.min(180, Math.max(20, prev.gamma + (Math.random() - 0.5) * 5)),
        voltage: Math.min(29.4, Math.max(27.8, prev.voltage + (Math.random() - 0.5) * 0.05)),
        mops: Math.min(45, Math.max(38, prev.mops + (Math.random() - 0.5) * 0.5))
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const selectedComp = components.find(c => c.id === selectedId) || components[2];

  return (
    <div id="mwd-interactive-blueprint-container" className="bg-zinc-950 rounded-3xl p-4 sm:p-6 md:p-8 border border-zinc-800 shadow-2xl relative overflow-hidden">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col gap-6">
        {/* Header Block with highkey styling */}
        <div id="mwd-blueprint-header" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Compass className="text-emerald-500 animate-pulse" size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight font-display">MWD Advanced Tool Architecture</h3>
              <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-mono">BHA (Bottom Hole Assembly) Diagnostic Cross-Section</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-wider">MWD-GRID LIVE STATUS</span>
          </div>
        </div>

        {/* Info Box Banner */}
        <div className="bg-zinc-900/45 border border-zinc-800 p-3 sm:p-4 rounded-2xl flex items-start gap-3">
          <Info className="text-teal-400 shrink-0 mt-0.5" size={16} />
          <p className="text-xs text-zinc-400 leading-snug">
            <span className="text-white font-bold">Interactive Engineering Spec:</span> Tap the colorful segment components inside the metal collar casing diagram or corresponding action cards below to inspect physical parts, analyze operational electronics, and view diagnostic field stats.
          </p>
        </div>

        {/* Main Work Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Collar Diagram Structure */}
          <div id="collar-diagram-column" className="lg:col-span-5 flex flex-col items-center justify-center bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-4 sm:p-6">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Downhole Assembly Model</span>
            
            <div className="relative flex items-center justify-center w-full max-w-[260px] h-[480px]">
              
              {/* Mud Bypass Flow Indicators */}
              <div className="absolute left-[34px] right-[34px] top-4 bottom-4 pointer-events-none flex justify-between">
                {/* Left mud channel */}
                <svg className="w-2.5 h-full opacity-30 text-teal-500" fill="none">
                  <path d="M5,0 L5,450" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" className="animate-[dash_20s_linear_infinite]" />
                </svg>
                {/* Right mud channel */}
                <svg className="w-2.5 h-full opacity-30 text-teal-500" fill="none">
                  <path d="M5,0 L5,450" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" className="animate-[dash_20s_linear_infinite]" />
                </svg>
              </div>

              {/* Central Metallic Collar SVG Body */}
              <svg 
                viewBox="0 0 140 460"
                className="w-full h-auto max-h-[440px] drop-shadow-[0_0_25px_rgba(0,0,0,0.8)] z-10"
              >
                <defs>
                  {/* Metal Steel Collar Gradients */}
                  <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="30%" stopColor="#475569" />
                    <stop offset="50%" stopColor="#64748b" />
                    <stop offset="70%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>

                  <linearGradient id="threadedBoxGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="50%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>

                  {/* Component specific soft glowing pulses */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Pin Connections (Upper Threaded Joint) */}
                <path d="M 50,5 L 90,5 L 87,22 L 53,22 Z" fill="url(#threadedBoxGrad)" stroke="#475569" strokeWidth="1" />
                <line x1="55" y1="9" x2="85" y2="9" stroke="#1e293b" strokeWidth="1.5" />
                <line x1="56" y1="13" x2="84" y2="13" stroke="#1e293b" strokeWidth="1.5" />
                <line x1="57" y1="17" x2="83" y2="17" stroke="#1e293b" strokeWidth="1.5" />

                {/* Collar top neck shoulder */}
                <path d="M 35,22 L 105,22 L 107,32 L 33,32 Z" fill="url(#metalGrad)" stroke="#334155" strokeWidth="1.2" />

                {/* OUTER COLLAR CASING SHELL (Transparent blueprint overlays) */}
                <rect x="22" y="32" width="96" height="402" rx="4" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.4" />
                
                {/* Internal Flow Conduit wall guides */}
                <line x1="42" y1="32" x2="42" y2="434" stroke="#475569" strokeWidth="0.8" opacity="0.3" />
                <line x1="98" y1="32" x2="98" y2="434" stroke="#475569" strokeWidth="0.8" opacity="0.3" />

                {/* INTERACTIVE CLUSTER SECTIONS */}
                
                {/* 1. Telemetry / Pulser Section Group */}
                <g 
                  className="cursor-pointer group" 
                  onClick={() => setSelectedId('pulser')}
                >
                  <rect 
                    x="44" y="36" width="52" height="92" rx="6" 
                    fill={selectedId === 'pulser' ? '#1d4ed8' : '#1e293b'} 
                    stroke={selectedId === 'pulser' ? '#3b82f6' : '#475569'} 
                    strokeWidth={selectedId === 'pulser' ? 2 : 1}
                    className="transition-colors duration-200"
                    style={{ filter: selectedId === 'pulser' ? 'url(#glow)' : 'none' }}
                  />
                  {/* Pulser mechanical elements blueprint */}
                  <line x1="70" y1="46" x2="70" y2="100" stroke={selectedId === 'pulser' ? '#93c5fd' : '#cbd5e1'} strokeWidth="2.5" opacity="0.8" />
                  <circle cx="70" cy="50" r="7" fill={selectedId === 'pulser' ? '#3b82f6' : '#475569'} stroke="#fff" strokeWidth="1" />
                  {/* Flow orifices inside pulser block */}
                  <path d="M50,90 H90" stroke="#000" strokeWidth="3" opacity="0.3" />
                  <path d="M50,110 H90" stroke="#000" strokeWidth="3" opacity="0.3" />
                  
                  {/* Section Separator Ring */}
                  <rect x="44" y="130" width="52" height="4" fill="#0f172a" />
                </g>

                {/* 2. Control Electronics CPU Section Group */}
                <g 
                  className="cursor-pointer group" 
                  onClick={() => setSelectedId('electronics')}
                >
                  <rect 
                    x="44" y="136" width="52" height="92" rx="6" 
                    fill={selectedId === 'electronics' ? '#6b21a8' : '#1e293b'} 
                    stroke={selectedId === 'electronics' ? '#a855f7' : '#475569'} 
                    strokeWidth={selectedId === 'electronics' ? 2 : 1}
                    className="transition-colors duration-200"
                    style={{ filter: selectedId === 'electronics' ? 'url(#glow)' : 'none' }}
                  />
                  {/* Tech microchip layout in center */}
                  <rect x="58" y="162" width="24" height="24" rx="3" fill="#0f172a" stroke={selectedId === 'electronics' ? '#c084fc' : '#64748b'} strokeWidth="1" />
                  <line x1="58" y1="168" x2="52" y2="168" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="58" y1="174" x2="52" y2="174" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="58" y1="180" x2="52" y2="180" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="82" y1="168" x2="88" y2="168" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="82" y1="174" x2="88" y2="174" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="82" y1="180" x2="88" y2="180" stroke="#cbd5e1" strokeWidth="1" />
                  <circle cx="70" cy="174" r="3" fill="#ef4444" className="animate-pulse" />
                  
                  {/* Section Separator Ring */}
                  <rect x="44" y="230" width="52" height="4" fill="#0f172a" />
                </g>

                {/* 3. Sensor Package Section Group */}
                <g 
                  className="cursor-pointer group" 
                  onClick={() => setSelectedId('sensors')}
                >
                  <rect 
                    x="44" y="236" width="52" height="92" rx="6" 
                    fill={selectedId === 'sensors' ? '#065f46' : '#1e293b'} 
                    stroke={selectedId === 'sensors' ? '#10b981' : '#475569'} 
                    strokeWidth={selectedId === 'sensors' ? 2 : 1}
                    className="transition-colors duration-200"
                    style={{ filter: selectedId === 'sensors' ? 'url(#glow)' : 'none' }}
                  />
                  {/* Orientation rings inside sensor package */}
                  <circle cx="70" cy="272" r="14" fill="none" stroke={selectedId === 'sensors' ? '#34d399' : '#64748b'} strokeWidth="1.5" />
                  <circle cx="70" cy="272" r="8" fill="none" stroke={selectedId === 'sensors' ? '#6ee7b7' : '#475569'} strokeWidth="1" />
                  <line x1="70" y1="254" x2="70" y2="290" stroke="#64748b" strokeWidth="0.8" strokeDasharray="2,2" />
                  <line x1="52" y1="272" x2="88" y2="272" stroke="#64748b" strokeWidth="0.8" strokeDasharray="2,2" />
                  <rect x="58" y="300" width="24" height="15" rx="1" fill="#1e293b" stroke="#34d399" strokeWidth="0.5" />
                  <text x="70" y="309" fill="#10b981" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="monospace">GAMMA</text>

                  {/* Section Separator Ring */}
                  <rect x="44" y="330" width="52" height="4" fill="#0f172a" />
                </g>

                {/* 4. Power System Section Group */}
                <g 
                  className="cursor-pointer group" 
                  onClick={() => setSelectedId('power')}
                >
                  <rect 
                    x="44" y="336" width="52" height="92" rx="6" 
                    fill={selectedId === 'power' ? '#92400e' : '#1e293b'} 
                    stroke={selectedId === 'power' ? '#f59e0b' : '#475569'} 
                    strokeWidth={selectedId === 'power' ? 2 : 1}
                    className="transition-colors duration-200"
                    style={{ filter: selectedId === 'power' ? 'url(#glow)' : 'none' }}
                  />
                  {/* Stacked cylindrical batteries inside */}
                  <rect x="52" y="346" width="36" height="18" rx="2" fill="#0f172a" stroke={selectedId === 'power' ? '#fbbf24' : '#64748b'} strokeWidth="1" />
                  <text x="70" y="357" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CELL A</text>
                  <rect x="52" y="372" width="36" height="18" rx="2" fill="#0f172a" stroke={selectedId === 'power' ? '#fbbf24' : '#64748b'} strokeWidth="1" />
                  <text x="70" y="383" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CELL B</text>
                  <rect x="52" y="398" width="36" height="18" rx="2" fill="#0f172a" stroke={selectedId === 'power' ? '#fbbf24' : '#64748b'} strokeWidth="1" />
                  <text x="70" y="409" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CELL C</text>

                  {/* Redundant safety status line */}
                  <circle cx="70" cy="425" r="2" fill="#34d399" />
                </g>

                {/* Collar lower bottom neck/shoulder */}
                <path d="M 33,434 L 107,434 L 105,444 L 35,444 Z" fill="url(#metalGrad)" stroke="#334155" strokeWidth="1.2" />

                {/* Box Connection (Lower Threaded Joint Receiver) */}
                <path d="M 53,444 L 87,444 L 90,458 L 50,458 Z" fill="url(#threadedBoxGrad)" stroke="#475569" strokeWidth="1" />
                <line x1="56" y1="448" x2="84" y2="448" stroke="#1e293b" strokeWidth="1" />
                <line x1="58" y1="452" x2="82" y2="452" stroke="#1e293b" strokeWidth="1" />
              </svg>

              {/* Dynamic pointer lines pointing to the active section */}
              <div className="absolute right-0 top-0 bottom-0 left-0 pointer-events-none">
                {selectedId === 'pulser' && (
                  <div className="absolute right-4 top-[9%] w-8 border-t border-dashed border-blue-500" />
                )}
                {selectedId === 'electronics' && (
                  <div className="absolute right-4 top-[32%] w-8 border-t border-dashed border-purple-500" />
                )}
                {selectedId === 'sensors' && (
                  <div className="absolute right-4 top-[54%] w-8 border-t border-dashed border-emerald-500" />
                )}
                {selectedId === 'power' && (
                  <div className="absolute right-4 top-[78%] w-8 border-t border-dashed border-amber-500" />
                )}
              </div>
            </div>

            {/* Quick-select Mobile-friendly Mini Casing Buttons */}
            <div id="blueprint-quick-tabs" className="mt-5 w-full grid grid-cols-4 gap-1.5 sm:hidden">
              {components.map((comp) => {
                const Icon = comp.icon;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedId(comp.id)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl border text-[9px] font-bold uppercase transition-all ${
                      selectedId === comp.id 
                        ? `${comp.color} text-white border-transparent` 
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Icon size={16} className="mb-0.5" />
                    <span>{comp.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Details & Dynamic Diagnostics Casing */}
          <div id="collar-details-column" className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Component Detail Module Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden min-h-[440px] xs:min-h-[395px] sm:min-h-[305px] md:min-h-[285px] lg:min-h-[405px] xl:min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-6"
                >
                  {/* Title block */}
                  <div className="space-y-3">
                    {/* Tech label seated ABOVE the icon and heading */}
                    <div className="flex flex-wrap items-center">
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800 tracking-wider">
                        {selectedComp.techLabel}
                      </span>
                    </div>

                    {/* Icon and Heading seated next to each other */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${selectedComp.color} text-zinc-950 shadow-md shrink-0 flex items-center justify-center`}>
                        <selectedComp.icon size={22} className="text-white" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight break-words">
                        {selectedComp.name}
                      </h4>
                    </div>
                  </div>

                  {/* Component Description */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Functional Purpose</span>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                      {selectedComp.description}
                    </p>
                  </div>

                  {/* Blueprint Specifications List */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Engineering Standards</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedComp.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80">
                          <Zap size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-xs text-zinc-300 font-sans leading-normal">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* LIVE TELEMETRY SIMULATOR PANEL (Color coordinated with active component) */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-6 shadow-xl relative">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Database className="text-cyan-400 shrink-0" size={16} />
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    Telemetry / Signal Analyzer Log
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider">SECURE LINK</span>
                </div>
              </div>

              {/* Grid of dynamic numeric registers, highlighting appropriate variables */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                
                {/* PRESSURE PULSE */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'pulser' 
                    ? 'bg-blue-500/10 border-blue-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Pulse Ampl.</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.pressurePulse.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">PSI</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'pulser' ? 'text-blue-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'pulser' ? '• Primary Sensor' : 'Standard Log'}
                  </span>
                </div>

                {/* BAUD RATE / SIGNAL */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'pulser' 
                    ? 'bg-blue-500/10 border-blue-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Signal Strength</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.signalStrength.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">dB</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'pulser' ? 'text-blue-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'pulser' ? '• Telemetry Active' : 'Standard Log'}
                  </span>
                </div>

                {/* TEMPERATURE */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'electronics' 
                    ? 'bg-purple-500/10 border-purple-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Core Temp Limit</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.coreTemp.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">°C</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'electronics' ? 'text-purple-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'electronics' ? '• Thermo Monitor' : 'Standard Log'}
                  </span>
                </div>

                {/* MEMORY SPACE */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'electronics' 
                    ? 'bg-purple-500/10 border-purple-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Flash Buffer</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.memoryUsed.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">MB</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'electronics' ? 'text-purple-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'electronics' ? '• Memory Logging' : 'Standard Log'}
                  </span>
                </div>

                {/* ACCELERATION INCLINATION */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'sensors' 
                    ? 'bg-emerald-500/10 border-emerald-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Well Inclination</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.inclination.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">° / G</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'sensors' ? 'text-emerald-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'sensors' ? '• 3D Gyro Frame' : 'Standard Log'}
                  </span>
                </div>

                {/* MAGNETIC AZIMUTH */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'sensors' 
                    ? 'bg-emerald-500/10 border-emerald-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Comp. Azimuth</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.azimuth.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">° MAG</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'sensors' ? 'text-emerald-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'sensors' ? '• Fluxgate Input' : 'Standard Log'}
                  </span>
                </div>

                {/* GAMMA RAY */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'sensors' 
                    ? 'bg-emerald-500/10 border-emerald-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Litho Gamma</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.gamma.toFixed(0)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">API</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'sensors' ? 'text-emerald-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'sensors' ? '• Geiger Tube' : 'Standard Log'}
                  </span>
                </div>

                {/* VOLTAGE */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'power' 
                    ? 'bg-amber-500/10 border-amber-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Pod Voltage</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.voltage.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">V</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'power' ? 'text-amber-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'power' ? '• Regulated Rails' : 'Standard Log'}
                  </span>
                </div>

                {/* CURRENT DRAW */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  selectedId === 'power' 
                    ? 'bg-amber-500/10 border-amber-500/30' 
                    : 'bg-zinc-950/60 border-zinc-800/60'
                }`}>
                  <span className="text-[9px] font-mono font-bold text-zinc-500 block uppercase tracking-wider">Draw Load</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-base sm:text-lg font-mono font-bold text-white">
                      {simulationData.mops.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">mA</span>
                  </div>
                  <span className={`text-[8px] font-mono font-semibold block mt-1 uppercase ${
                    selectedId === 'power' ? 'text-amber-400' : 'text-zinc-600'
                  }`}>
                    {selectedId === 'power' ? '• Bus Regulation' : 'Standard Log'}
                  </span>
                </div>

              </div>
            </div>

            {/* ACTION CARD LINKS FOR QUICK DETAILS */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-6 shadow-xl">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Inspection Nav</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {components.map((comp) => {
                  const Icon = comp.icon;
                  const isCurrent = selectedId === comp.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setSelectedId(comp.id)}
                      className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                        isCurrent 
                          ? 'bg-zinc-800/80 border-zinc-700 text-white shadow-inner translate-x-1' 
                          : 'bg-zinc-950/40 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-750'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2 rounded-xl shrink-0 ${isCurrent ? comp.color + ' text-zinc-950 shadow-md' : 'bg-zinc-800'}`}>
                          <Icon size={16} className={isCurrent ? 'text-white' : 'text-zinc-400'} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-bold block truncate">{comp.name}</span>
                          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-tight block truncate">
                            {comp.id} module
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={14} className={`text-zinc-600 transition-transform ${isCurrent ? 'transform translate-x-0.5 text-emerald-400' : ''}`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

