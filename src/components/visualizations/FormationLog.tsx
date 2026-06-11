import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Activity, 
  Zap, 
  Info, 
  ChevronDown, 
  Gauge, 
  RotateCw, 
  Flame, 
  Compass, 
  Check, 
  AlertCircle, 
  HelpCircle, 
  Award,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface LogPoint {
  depth: number;
  gamma: number;
  resistivity: number;
  lithology: string;
  hasHydrocarbons: boolean;
  isWaterWet: boolean;
}

export const FormationLog: React.FC = () => {
  // Start drilling at 10,000 ft
  const initialDepth = 10000;
  
  const [depth, setDepth] = useState(initialDepth);
  const [isDrilling, setIsDrilling] = useState(false);
  const [rop, setRop] = useState(60); // ft/hr (Rate of Penetration)
  const [logData, setLogData] = useState<LogPoint[]>([]);
  const [hoveredPoint, setHoveredPoint] = useState<LogPoint | null>(null);
  
  // Game & Interactive states
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; success: boolean } | null>(null);
  const [activeTab, setActiveTab] = useState<'chart' | 'theory' | 'workbench'>('chart');
  const [totalDrilled, setTotalDrilled] = useState(0);

  // Formation profiles mapped by mod 500 ft
  const getFormationAtDepth = (d: number) => {
    const modDepth = Math.floor(d) % 500;
    
    if (modDepth >= 0 && modDepth < 100) {
      return { 
        name: 'Impermeable Shale', 
        baseGamma: 125, 
        baseRes: 2.5, 
        color: '#4b5563', 
        hatch: 'pat-shale', 
        desc: 'Dense, muddy shale. Acting as an excellent structural seal for underlying strata.', 
        pay: false, 
        wet: false 
      };
    } else if (modDepth >= 100 && modDepth < 170) {
      return { 
        name: 'Siltstone Transition', 
        baseGamma: 75, 
        baseRes: 7.2, 
        color: '#d97706', 
        hatch: 'pat-silt', 
        desc: 'Fine-grained quartz transition zone. Moderate reservoir quality.', 
        pay: false, 
        wet: false 
      };
    } else if (modDepth >= 170 && modDepth < 280) {
      // Hydrocarbon Pay Sandstone
      return { 
        name: 'Pay Zone Sandstone', 
        baseGamma: 28, 
        baseRes: 68.0, 
        color: '#fbbf24', 
        hatch: 'pat-sand', 
        desc: 'Highly porous sandstone bearing crude oil. High electrical resistance indicates trapped oil.', 
        pay: true, 
        wet: false 
      };
    } else if (modDepth >= 280 && modDepth < 350) {
      return { 
        name: 'Low Porosity Limestone', 
        baseGamma: 18, 
        baseRes: 28.0, 
        color: '#e2e8f0', 
        hatch: 'pat-lime', 
        desc: 'Dense carbonate bench. Hard drilling behavior, low natural radioactivity.', 
        pay: false, 
        wet: false 
      };
    } else if (modDepth >= 350 && modDepth < 430) {
      // Water-bearing Sandstone
      return { 
        name: 'Brine Saturated Aquifer', 
        baseGamma: 32, 
        baseRes: 1.4, 
        color: '#38bdf8', 
        hatch: 'pat-wet', 
        desc: 'Highly porous clean sandstone saturated with highly conductive geological saltwater.', 
        pay: false, 
        wet: true 
      };
    } else {
      return { 
        name: 'Basement Shale Shield', 
        baseGamma: 135, 
        baseRes: 1.8, 
        color: '#374151', 
        hatch: 'pat-shale', 
        desc: 'Extremely compacted basement shale forming a tight regional geological base.', 
        pay: false, 
        wet: false 
      };
    }
  };

  // Generate background/initial logs for instant visual richness
  useEffect(() => {
    // Generate pre-drilled log history (150 ft of history)
    const seedData: LogPoint[] = [];
    const minDepth = initialDepth - 120;
    
    for (let d = minDepth; d <= initialDepth; d += 1) {
      const fm = getFormationAtDepth(d);
      // Give realistic random variations of logging sensors
      const randGamma = Math.max(5, Math.min(150, fm.baseGamma + Math.sin(d * 0.4) * 8 + (Math.random() - 0.5) * 5));
      const randRes = Math.max(0.1, fm.baseRes * (1 + (Math.random() - 0.5) * 0.1));
      
      seedData.push({
        depth: d,
        gamma: randGamma,
        resistivity: randRes,
        lithology: fm.name,
        hasHydrocarbons: fm.pay,
        isWaterWet: fm.wet,
      });
    }
    setLogData(seedData);
  }, []);

  // Drilling loop simulation
  useEffect(() => {
    if (!isDrilling) return;

    // Tick speed correlates to Rate of Penetration
    // Fast ROP = logs faster but spacing is more sparse representing actual muddy downhole conditions
    const intervalMs = Math.max(80, 200 - rop);
    
    const interval = setInterval(() => {
      setDepth(prev => {
        const step = 0.5; // drilling increment per tick
        const nextDepth = prev + step;
        setTotalDrilled(prevAcq => prevAcq + step);
        
        const fm = getFormationAtDepth(nextDepth);
        
        // Sampling Resolution - simulates how fast mud logging transmits (Telemetry updates)
        // At high ROPs, mud pulse data can be slightly aliased or noisy
        const samplingNoiseScale = rop > 100 ? 12 : 5;
        const randGamma = Math.max(5, Math.min(150, fm.baseGamma + Math.sin(nextDepth * 0.4) * 6 + (Math.random() - 0.5) * samplingNoiseScale));
        const randRes = Math.max(0.1, fm.baseRes * (1 + (Math.random() - 0.5) * (rop > 100 ? 0.2 : 0.08)));
        
        setLogData(prevData => {
          // Keep maximum 300 data points to prevent performance degradation
          const trimmed = prevData.length > 300 ? prevData.slice(1) : prevData;
          return [...trimmed, {
            depth: nextDepth,
            gamma: randGamma,
            resistivity: randRes,
            lithology: fm.name,
            hasHydrocarbons: fm.pay,
            isWaterWet: fm.wet,
          }];
        });

        return nextDepth;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isDrilling, rop]);

  // Current formation profiles
  const currentFm = useMemo(() => getFormationAtDepth(depth), [depth]);
  const currentGamma = logData.length > 0 ? logData[logData.length - 1].gamma : currentFm.baseGamma;
  const currentResistivity = logData.length > 0 ? logData[logData.length - 1].resistivity : currentFm.baseRes;

  // Render variables
  const visibleDepthWindow = 100; // view logs covering the last 100 feet
  const minVisibleDepth = depth - visibleDepthWindow;
  const maxVisibleDepth = depth;

  // Filter and map plot points relative to current scrolling viewport
  const visibleLogPoints = useMemo(() => {
    return logData.filter(pt => pt.depth >= minVisibleDepth && pt.depth <= maxVisibleDepth);
  }, [logData, minVisibleDepth, maxVisibleDepth]);

  // Map Resistivity log to log-scale pixel percentage (0-100% of Track 3 width)
  const getResistivityXPercent = (r: number) => {
    const minLog = -0.5; // log10(0.3)
    const maxLog = 2.3;  // log10(200)
    const clampedLog = Math.log10(Math.max(0.3, r));
    const fraction = (clampedLog - minLog) / (maxLog - minLog);
    return Math.max(0, Math.min(1, fraction)) * 100;
  };

  // Map Gamma Ray to percentage (0 - 150 API)
  const getGammaXPercent = (g: number) => {
    return (Math.max(0, Math.min(150, g)) / 150) * 100;
  };

  // Map depth to Y coordinates (0 to 100%)
  const getDepthYPercent = (d: number) => {
    return ((d - minVisibleDepth) / visibleDepthWindow) * 100;
  };

  // Multi-choice geological classification game handler
  const handleClassify = (guessType: 'sandstone' | 'shale' | 'limestone' | 'transit') => {
    const isSand = currentFm.name.includes('Sandstone');
    const isShale = currentFm.name.includes('Shale');
    const isLime = currentFm.name.includes('Limestone');
    const isTransit = currentFm.name.includes('Siltstone');

    let isCorrect = false;
    let feedbackMsg = '';

    if (guessType === 'sandstone' && (isSand || currentFm.wet)) {
      isCorrect = true;
      feedbackMsg = currentFm.wet 
        ? "Excellent! High porous sand but note the very LOW resistivity (< 2 Ohm-m) indicating a brine aquifer (Water-wet Sand)!"
        : "Bullseye! clean sandstone with low Gamma (~28 API) and massive Resistivity (~68 Ohm-m). Classic Oil/Gas reservoir pay zone!";
    } else if (guessType === 'shale' && isShale) {
      isCorrect = true;
      feedbackMsg = "Correct! High natural radioactivity (API > 110) and low resistivity. Highly dense clay/shale composition.";
    } else if (guessType === 'limestone' && isLime) {
      isCorrect = true;
      feedbackMsg = "Well interpreted! Ultra-low Gamma radiation with solid density and high-contrast moderate resistivity. Limestone carbonate bench!";
    } else if (guessType === 'transit' && isTransit) {
      isCorrect = true;
      feedbackMsg = "Spot on! Intermediate Gamma (~75 API) with sandy-silt transition bands.";
    } else {
      feedbackMsg = `Incorrect classification. Let's study the charts: Gamma = ${currentGamma.toFixed(1)} API, Resistivity = ${currentResistivity.toFixed(1)} Ohm-m. This matches ${currentFm.name}.`;
    }

    if (isCorrect) {
      setXp(p => p + 50 + (streak * 10));
      setStreak(s => s + 1);
      setFeedback({ text: feedbackMsg, success: true });
    } else {
      setStreak(0);
      setFeedback({ text: feedbackMsg, success: false });
    }
  };

  // Reset drill bit and scores
  const resetDrillingState = () => {
    setDepth(initialDepth);
    setTotalDrilled(0);
    setXp(0);
    setStreak(0);
    setFeedback(null);
    setIsDrilling(false);
    
    // Regenerate initial seed
    const seed: LogPoint[] = [];
    for (let d = initialDepth - 120; d <= initialDepth; d += 1) {
      const fm = getFormationAtDepth(d);
      seed.push({
        depth: d,
        gamma: Math.max(5, Math.min(150, fm.baseGamma + Math.sin(d * 0.4) * 8 + (Math.random() - 0.5) * 5)),
        resistivity: Math.max(0.1, fm.baseRes * (1 + (Math.random() - 0.5) * 0.1)),
        lithology: fm.name,
        hasHydrocarbons: fm.pay,
        isWaterWet: fm.wet,
      });
    }
    setLogData(seed);
  };

  return (
    <div id="formation-log-root" className="bg-zinc-950 rounded-3xl p-4 sm:p-6 md:p-8 border border-zinc-800/80 shadow-2xl space-y-6 text-zinc-100 flex flex-col relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* SVG Pattern Definitions for Geological Cross-sections */}
      <svg className="hidden">
        <defs>
          {/* Sandstone Pattern (yellow with brown dots) */}
          <pattern id="pat-sand" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="#fef08a" />
            <circle cx="2" cy="2" r="1.1" fill="#ca8a04" opacity="0.6" />
            <circle cx="8" cy="4" r="0.9" fill="#ca8a04" opacity="0.5" />
            <circle cx="4" cy="9" r="1.3" fill="#ca8a04" opacity="0.6" />
            <circle cx="10" cy="10" r="0.7" fill="#ca8a04" opacity="0.4" />
          </pattern>
          
          {/* Shale Pattern (charcoal background with thin horizontal laminations) */}
          <pattern id="pat-shale" width="24" height="10" patternUnits="userSpaceOnUse">
            <rect width="24" height="10" fill="#4b5563" />
            <line x1="0" y1="2" x2="24" y2="2" stroke="#1f2937" strokeWidth="1" opacity="0.8" />
            <line x1="0" y1="7" x2="24" y2="7" stroke="#374151" strokeWidth="1" opacity="0.7" />
          </pattern>
          
          {/* Limestone Pattern (off-white brick wall texture) */}
          <pattern id="pat-lime" width="20" height="12" patternUnits="userSpaceOnUse">
            <rect width="20" height="12" fill="#e2e8f0" />
            <line x1="0" y1="6" x2="20" y2="6" stroke="#94a3b8" strokeWidth="1.2" />
            <line x1="0" y1="12" x2="20" y2="12" stroke="#94a3b8" strokeWidth="1.2" />
            <line x1="10" y1="0" x2="10" y2="6" stroke="#94a3b8" strokeWidth="1.2" />
            <line x1="20" y1="6" x2="20" y2="12" stroke="#94a3b8" strokeWidth="1.2" />
            <line x1="0" y1="6" x2="0" y2="12" stroke="#94a3b8" strokeWidth="1.2" />
          </pattern>

          {/* Siltstone Pattern (amber-gold diagonal stripes and subtle dots) */}
          <pattern id="pat-silt" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#d97706" />
            <line x1="0" y1="16" x2="16" y2="0" stroke="#78350f" strokeWidth="1" opacity="0.6" />
            <circle cx="4" cy="12" r="1" fill="#78350f" opacity="0.6"/>
            <circle cx="12" cy="4" r="1" fill="#78350f" opacity="0.6"/>
          </pattern>

          {/* Wet Sandstone Pattern (soft azure blue overlaid with water wave ripples) */}
          <pattern id="pat-wet" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#7dd3fc" />
            <circle cx="3" cy="3" r="1.1" fill="#0284c7" opacity="0.5" />
            <circle cx="11" cy="9" r="1.1" fill="#0284c7" opacity="0.5" />
            <path d="M 0,12 Q 4,9 8,12 T 16,12" fill="none" stroke="#0284c7" strokeWidth="0.8" opacity="0.4" />
            <path d="M 0,4 Q 4,1 8,4 T 16,4" fill="none" stroke="#0284c7" strokeWidth="0.8" opacity="0.4" />
          </pattern>
        </defs>
      </svg>

      {/* Title & Stats Badges */}
      <div id="formation-header" className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-zinc-800/80 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
            <Layers className="text-emerald-400 animate-pulse" size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/15">
                Real-Time Acquisition
              </span>
              {isDrilling && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mt-1">
              MWD Stratigraphic Evaluation Log
            </h2>
            <p className="text-xs text-zinc-400">
              Interactive dual-sensor borehole profiling. Identify hydrocarbons, water layers, and geological boundaries.
            </p>
          </div>
        </div>

        {/* Drilling Scores HUD */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="flex-1 lg:flex-none flex items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl">
            <div className="flex items-center gap-2">
              <Award className="text-yellow-500" size={18} />
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Geologist XP</span>
            </div>
            <span className="font-mono text-base font-bold text-yellow-400">{xp} xp</span>
          </div>

          <div className="flex-1 lg:flex-none flex items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl">
            <div className="flex items-center gap-2">
              <Flame className={streak > 0 ? "text-orange-500 animate-bounce" : "text-zinc-600"} size={18} />
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Multiplier Streak</span>
            </div>
            <span className="font-mono text-base font-bold text-orange-400">x{streak}</span>
          </div>
        </div>
      </div>

      {/* Main Grid Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Simulation Interactive Drill HUD & Controls (3 cols) */}
        <div id="formation-sidebar" className="lg:col-span-4 space-y-6">
          
          {/* Active Wellbore Status & Animation */}
          <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Acquisition Status</span>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                isDrilling ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {isDrilling ? 'Active Drilling' : 'Standby'}
              </span>
            </div>

            {/* Wellbore Schematic Column with Spinning Bit Drill Rig */}
            <div className="relative h-28 bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-transparent to-transparent" />
              
              {/* Vertical Borehole bounds */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-10 border-x border-zinc-800 bg-zinc-900/60" />
              
              {/* Drill String representation */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-3 w-4 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 border-x border-zinc-700">
                {/* Joints of the pipe */}
                <div className="absolute top-4 inset-x-0 h-1.5 bg-zinc-800" />
                <div className="absolute top-14 inset-x-0 h-1.5 bg-zinc-800" />
              </div>

              {/* Bit body & cutter cones */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-2 font-mono">
                <motion.div 
                  animate={isDrilling ? { rotate: [0, 360], scale: [1, 1.05, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-8 h-8 rounded-full border border-orange-500/30 flex items-center justify-center bg-orange-600/20 shadow-[0_0_12px_rgba(249,115,22,0.3)] relative"
                >
                  <RotateCw size={14} className="text-orange-400" />
                  <span className="absolute -top-4 -left-4 text-[8px] tracking-tight bg-zinc-950 rounded border border-zinc-700 px-1 font-sans text-zinc-500 uppercase">BIT</span>
                </motion.div>
              </div>

              {/* Real-time Mud Telemetry Waves pulsing upward */}
              <AnimatePresence>
                {isDrilling && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: [0, 0.8, 0], y: -80, scale: [1, 1.5, 2] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute left-[38%] -translate-x-1/2 bottom-6 text-cyan-400 pointer-events-none"
                    >
                      <Zap size={14} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: [0, 0.8, 0], y: -80, scale: [1, 1.5, 2] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                      className="absolute left-[62%] -translate-x-1/2 bottom-6 text-cyan-400 pointer-events-none"
                    >
                      <Zap size={14} />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Readout Panels */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/80">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Bit Depth</p>
                <p className="text-lg font-bold text-white mt-1">{depth.toFixed(1)} <span className="text-xs text-zinc-600">ft</span></p>
              </div>
              <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/80">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Total Acquired</p>
                <p className="text-lg font-bold text-emerald-400 mt-1">+{totalDrilled.toFixed(0)} <span className="text-xs text-zinc-600">ft</span></p>
              </div>
            </div>

            {/* Logging sensor indicators */}
            <div className="space-y-2 border-t border-zinc-800 pt-3">
              <div className="flex justify-between items-center bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <Activity className="text-emerald-500" size={14} />
                  <span className="text-xs text-zinc-400">Gamma Ray Sensor</span>
                </div>
                <span className="font-mono text-sm font-bold text-emerald-400">{currentGamma.toFixed(1)} API</span>
              </div>
              
              <div className="flex justify-between items-center bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <Zap className="text-yellow-500" size={14} />
                  <span className="text-xs text-zinc-400">Resistivity (LWD)</span>
                </div>
                <span className="font-mono text-sm font-bold text-yellow-400">{currentResistivity.toFixed(1)} Ohm-m</span>
              </div>
            </div>
          </div>

          {/* Controller Board */}
          <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 space-y-4">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <Compass size={14} className="text-emerald-400" /> Borehole Controls
            </h3>

            {/* Drilling Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsDrilling(!isDrilling)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all ${
                  isDrilling 
                    ? 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30' 
                    : 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 active:scale-95 shadow-[0_4px_16px_rgba(16,185,129,0.2)]'
                }`}
              >
                {isDrilling ? <Pause size={14} /> : <Play size={14} />}
                {isDrilling ? 'STILL DRILLING' : 'START DRILL'}
              </button>

              <button
                onClick={resetDrillingState}
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl border border-zinc-700 text-zinc-400 hover:text-white transition-all active:scale-90"
                title="Reset Logging Run"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Rate of Penetration slider */}
            <div className="space-y-2 border-t border-zinc-800 pt-3">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400 flex items-center gap-2"><Gauge size={12} /> Rate of Penetration (ROP)</span>
                <span className="font-mono font-bold text-white">{rop} ft/hr</span>
              </div>
              <input
                type="range"
                min="30"
                max="150"
                step="10"
                value={rop}
                onChange={e => setRop(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-zinc-950 rounded-lg h-1.5 outline-none"
              />
              <div className="flex justify-between text-[9px] text-zinc-500 font-bold uppercase">
                <span>Slow (High Res)</span>
                <span>Fast (Low Res)</span>
              </div>
            </div>
          </div>

          {/* Real-time Lithology Guide Card */}
          <div className="bg-emerald-500/5 rounded-2xl p-5 border border-emerald-500/10 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <Info size={16} />
              <h4 className="text-xs font-bold uppercase tracking-wider">Geologist Quick Guide</h4>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              <b className="text-zinc-200">Shale:</b> High radiation (90-150 API) & Low resistivity due to heavy clay moisture.
              <br className="my-1"/>
              <b className="text-zinc-200">Hydrocarbon Sand:</b> Low radiation (20-40 API) & exceptionally high resistivity (30-100 Ohm-m) as trapped crude/gas resists electrical currents.
              <br className="my-1"/>
              <b className="text-zinc-200">Brine Aquifer:</b> Low radiation but ultra-low resistivity (<span className="text-cyan-400">&lt;2 Ohm-m</span>) because marine saltwater conducts electricity aggressively.
            </p>
          </div>

        </div>

        {/* Right Side: Log Tracks (8 columns total) */}
        <div id="formation-logs-container" className="lg:col-span-8 space-y-4">
          
          {/* Navigation/Workbench tabs */}
          <div className="flex gap-2 border-b border-zinc-800 pb-2">
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'chart' ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Logging Log Curve
            </button>
            <button
              onClick={() => setActiveTab('workbench')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'workbench' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Interpretation Workbench
              {streak > 0 && <span className="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">{streak}</span>}
            </button>
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'theory' ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Educational Theory
            </button>
          </div>

          {activeTab === 'chart' && (
            <div className="space-y-4">
              
              {/* Plot tracks label headers */}
              <div className="grid grid-cols-12 gap-1 px-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center border-b border-zinc-800 pb-2">
                <div className="col-span-5 border-r border-zinc-800/80 pr-2">
                  <span className="text-emerald-400 block text-left">Track 1: Gamma Ray</span>
                  <div className="flex justify-between text-[9px] font-mono mt-1 text-zinc-600">
                    <span>0 API</span>
                    <span>75 API (Shale Base)</span>
                    <span>150 API</span>
                  </div>
                </div>
                <div className="col-span-2 px-1">
                  <span className="text-zinc-300 block">Lithology</span>
                  <div className="font-mono text-[9px] mt-1 text-zinc-600">
                    <span>Depth</span>
                  </div>
                </div>
                <div className="col-span-5 border-l border-zinc-800/80 pl-2">
                  <span className="text-amber-500 block text-right">Track 2: Resistivity</span>
                  <div className="flex justify-between text-[9px] font-mono mt-1 text-zinc-600">
                    <span>0.1 Ohm-m</span>
                    <span>10 Ohm-m</span>
                    <span>200 Ohm-m (Log Scale)</span>
                  </div>
                </div>
              </div>

              {/* Strip Chart Viewport */}
              <div className="bg-black/60 rounded-3xl border border-zinc-800/80 p-4 relative h-[460px] flex flex-col justify-between select-none">
                
                {/* Background gridlines */}
                <div className="absolute inset-x-4 top-4 bottom-4 pointer-events-none flex h-[410px]">
                  {/* Track 1 vertical grid lines */}
                  <div className="w-[41.6%] relative border-r border-dashed border-zinc-800/60 pr-1 flex justify-between h-full opacity-30">
                    <div className="w-px bg-zinc-700 h-full" />
                    <div className="w-px bg-zinc-700 h-full border-r border-emerald-500/20" /> {/* shale line */}
                    <div className="w-px bg-zinc-700 h-full" />
                  </div>
                  
                  {/* Spacer */}
                  <div className="w-[16.6%] relative h-full" />
                  
                  {/* Track 2 vertical log lines */}
                  <div className="w-[41.6%] relative border-l border-dashed border-zinc-800/60 pl-1 flex justify-between h-full opacity-30">
                    <div className="w-px bg-zinc-700 h-full" />
                    <div className="w-px bg-zinc-700 h-full" />
                    <div className="w-px bg-zinc-700 h-full" />
                  </div>
                </div>

                {/* Main Interactive SVG Chart Rendering */}
                <div className="relative flex-1 w-full h-[400px] overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full">
                    
                    {/* Horizontal Depth grid lines every 10 ft */}
                    {Array.from({ length: 11 }).map((_, idx) => {
                      const gridDepthDecimal = minVisibleDepth + (idx * 10);
                      const roundedGridDepth = Math.floor(gridDepthDecimal / 10) * 10;
                      const yPos = getDepthYPercent(roundedGridDepth);
                      
                      if (yPos >= 0 && yPos <= 100) {
                        return (
                          <g key={idx}>
                            <line 
                              x1="0%" 
                              y1={`${yPos}%`} 
                              x2="100%" 
                              y2={`${yPos}%`} 
                              stroke="#27272a" 
                              strokeWidth="0.8" 
                              strokeDasharray="4 4"
                            />
                            <text
                              x="50%"
                              y={`${yPos}%`}
                              dy="3"
                              fill="#71717a"
                              fontSize="8"
                              fontFamily="monospace"
                              textAnchor="middle"
                              className="bg-black/90"
                            >
                              {roundedGridDepth} ft
                            </text>
                          </g>
                        );
                      }
                      return null;
                    })}

                    {/* LITHOLOGY CENTER COLUMN FILL */}
                    {visibleLogPoints.map((pt, i) => {
                      if (i === 0) return null;
                      const prevPt = visibleLogPoints[i - 1];
                      const y1 = getDepthYPercent(prevPt.depth);
                      const y2 = getDepthYPercent(pt.depth);
                      const fm = getFormationAtDepth(pt.depth);
                      
                      return (
                        <rect
                          key={i}
                          x="44.5%"
                          y={`${y1}%`}
                          width="11%"
                          height={`${Math.max(1, y2 - y1)}%`}
                          fill={`url(#${fm.hatch})`}
                          className="opacity-90"
                        />
                      );
                    })}

                    {/* Side vertical boundary borders for Lithology */}
                    <line x1="44.2%" y1="0%" x2="44.2%" y2="100%" stroke="#3f3f46" strokeWidth="1.5" />
                    <line x1="55.8%" y1="0%" x2="55.8%" y2="100%" stroke="#3f3f46" strokeWidth="1.5" />

                    {/* Wellbore central core drill line */}
                    <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#1f2937" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.6"/>

                    {/* VISUAL SHADING FOR ROCK CLASSES (Track 1 Shading) */}
                    {visibleLogPoints.length > 1 && (
                      <g opacity="0.15">
                        {/* Sandstone reservoir shading (shading under curve < 50 for sand) */}
                        <path
                          d={`
                            M ${getGammaXPercent(150) * 0.416}%,0%
                            ${visibleLogPoints.map(pt => `${getGammaXPercent(pt.gamma) * 0.416}%,${getDepthYPercent(pt.depth)}%`).join(' ')}
                            L 0%,100%
                            L 0%,0%
                            Z
                          `}
                          fill="#eab308"
                        />
                      </g>
                    )}

                    {/* TRACK 1: GAMMA PLOT (Green Line) */}
                    {visibleLogPoints.length > 1 && (
                      <polyline
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={visibleLogPoints.map(pt => `${getGammaXPercent(pt.gamma) * 0.416}%,${getDepthYPercent(pt.depth)}%`).join(' ')}
                      />
                    )}

                    {/* TRACK 2: RESISTIVITY PLOT (Gold Amber Line in Track 3 range 58% to 100%) */}
                    {visibleLogPoints.length > 1 && (
                      <polyline
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={visibleLogPoints.map(pt => `${getResistivityXPercent(pt.resistivity) * 0.416 + 58.4}%,${getDepthYPercent(pt.depth)}%`).join(' ')}
                      />
                    )}

                    {/* Dynamic Drill Bit Pointer at Current Depth (Bottom) */}
                    <g transform={`translate(0, ${getDepthYPercent(depth)})`}>
                      {/* Flashing target cursor line */}
                      <line x1="0%" y1="0" x2="100%" y2="0" stroke="#f43f5e" strokeWidth="1.2" strokeDasharray="2 2" />
                      
                      {/* Drill Bit icon at center */}
                      <circle cx="50%" cy="0" r="6" fill="#f43f5e" className="animate-pulse" />
                      <path d="M 50% 0 L 48% -8 L 52% -8 Z" fill="#f43f5e" />
                    </g>
                    
                    {/* Hover indicator crosshair tracker */}
                    {hoveredPoint && (
                      <g transform={`translate(0, ${getDepthYPercent(hoveredPoint.depth)})`}>
                        <line x1="0%" y1="0" x2="100%" y2="0" stroke="#a855f7" strokeWidth="1" />
                        <circle cx={`${getGammaXPercent(hoveredPoint.gamma) * 0.416}%`} cy="0" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                        <circle cx={`${getResistivityXPercent(hoveredPoint.resistivity) * 0.416 + 58.4}%`} cy="0" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                        <circle cx="50%" cy="0" r="4" fill="#a855f7" />
                      </g>
                    )}
                  </svg>

                  {/* Interactive cursor hover detector panel overlays */}
                  <div 
                    className="absolute inset-0 cursor-crosshair"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const yRatio = (e.clientY - rect.top) / rect.height;
                      const hoveredDepthDecimal = minVisibleDepth + yRatio * visibleDepthWindow;
                      
                      // Find nearest logged state point
                      if (logData.length > 0) {
                        const nearest = logData.reduce((prev, curr) => 
                          Math.abs(curr.depth - hoveredDepthDecimal) < Math.abs(prev.depth - hoveredDepthDecimal) ? curr : prev
                        );
                        setHoveredPoint(nearest);
                      }
                    }}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  
                </div>

                {/* Log Hydrocarbon Indicators warning strip overlay */}
                {currentFm.pay && (
                  <div className="absolute right-6 top-6 bg-gradient-to-r from-yellow-500/10 to-yellow-500/20 text-yellow-300 text-[10px] font-bold px-3 py-1.5 rounded-xl border border-yellow-500/30 flex items-center gap-2 animate-bounce uppercase tracking-wider">
                    <Flame size={12} className="text-yellow-400 animate-pulse" /> TARGET PAYZONE CONTACT! High logs Resistivity confirm hydrocarbons
                  </div>
                )}

                {currentFm.wet && (
                  <div className="absolute right-6 top-6 bg-cyan-950/80 text-cyan-400 text-[10px] font-bold px-3 py-1.5 rounded-xl border border-cyan-500/30 flex items-center gap-2 uppercase tracking-wider">
                    <AlertCircle size={12} className="text-cyan-400" /> Marine Aquifer Contact - High water saturation (Low resistivity)
                  </div>
                )}

                {/* Floating tooltip widget on hover */}
                <AnimatePresence>
                  {hoveredPoint && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-3 bg-zinc-900/95 border border-zinc-700/80 p-3 sm:p-4 rounded-xl shadow-xl w-[92%] sm:w-auto sm:min-w-[340px] text-xs font-sans space-y-2 backdrop-blur-md"
                    >
                      <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5">
                        <span className="font-mono font-bold text-purple-400">DEPTH: {hoveredPoint.depth.toFixed(1)} ft</span>
                        <span className="text-[10px] uppercase font-bold text-zinc-500">{hoveredPoint.lithology}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">Gamma Ray:</span>
                          <span className="font-mono text-emerald-400 font-bold">{hoveredPoint.gamma.toFixed(1)} API</span>
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">Resistivity:</span>
                          <span className="font-mono text-amber-500 font-bold">{hoveredPoint.resistivity.toFixed(1)} Ohm-m</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-zinc-400">
                        {hoveredPoint.hasHydrocarbons 
                          ? "📢 Geotechnical Confirmation: Clean porous sandstone. High resistivity points to crude oil reservoir presence!" 
                          : hoveredPoint.isWaterWet 
                          ? "💦 Saline Wet Sands: Highly saturated salt water sand layer. Low electrical resistivity." 
                          : "🔒 Structural Seal: Low-permeability stratum containing dense mud/shale properties."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
              
              {/* Interactive bottom hint */}
              <p className="text-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                💡 Hover your cursor over any portion of the strip chart to display high-resolution telemetry readouts.
              </p>
            </div>
          )}

          {activeTab === 'workbench' && (
            <div className="space-y-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-6">
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <Activity size={20} className="text-emerald-400" /> Downhole Lithological Analyst Desk
                </h3>
                <p className="text-xs text-zinc-400">
                  Observe the current live downhole readings, check the properties, and click correct classifications to capture certified geologist XP levels.
                </p>
              </div>

              {/* Current Instrument Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-zinc-950 p-4 border border-zinc-850 rounded-2xl font-mono text-center">
                <div className="p-3 border-r border-zinc-800/80">
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Live Depth</p>
                  <p className="text-xl font-bold text-white">{depth.toFixed(1)} ft</p>
                </div>
                <div className="p-3 border-r border-zinc-800/80">
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1 text-emerald-400">Gamma Sensor</p>
                  <p className="text-xl font-bold text-emerald-400">{currentGamma.toFixed(1)} API</p>
                </div>
                <div className="p-3">
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1 text-amber-500">Resistivity</p>
                  <p className="text-xl font-bold text-amber-500">{currentResistivity.toFixed(1)} Ω·m</p>
                </div>
              </div>

              {/* Action Board */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 text-center">Identify current geological formation stratum:</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button 
                    onClick={() => handleClassify('shale')}
                    className="py-4 px-3 bg-zinc-850 hover:bg-zinc-800 active:scale-95 border border-zinc-750 rounded-xl text-xs font-bold transition-all text-center space-y-1 block"
                  >
                    <span className="block text-[10px] text-zinc-400 uppercase font-bold">Radioactive Layer</span>
                    <span className="text-white block font-sans">Shale / Clay</span>
                  </button>
                  <button 
                    onClick={() => handleClassify('sandstone')}
                    className="py-4 px-3 bg-zinc-850 hover:bg-zinc-800 active:scale-95 border border-zinc-750 rounded-xl text-xs font-bold transition-all text-center space-y-1 block"
                  >
                    <span className="block text-[10px] text-zinc-400 uppercase font-bold">Porous clean sand</span>
                    <span className="text-white block font-sans">Sandstone / Pay Sand</span>
                  </button>
                  <button 
                    onClick={() => handleClassify('limestone')}
                    className="py-4 px-3 bg-zinc-850 hover:bg-zinc-800 active:scale-95 border border-zinc-750 rounded-xl text-xs font-bold transition-all text-center space-y-1 block"
                  >
                    <span className="block text-[10px] text-zinc-400 uppercase font-bold">Carbonate Bench</span>
                    <span className="text-white block font-sans">Calcitic Limestone</span>
                  </button>
                  <button 
                    onClick={() => handleClassify('transit')}
                    className="py-4 px-3 bg-zinc-850 hover:bg-zinc-800 active:scale-95 border border-zinc-750 rounded-xl text-xs font-bold transition-all text-center space-y-1 block"
                  >
                    <span className="block text-[10px] text-zinc-400 uppercase font-bold">Siliceous Mix</span>
                    <span className="text-white block font-sans">Siltstone Transition</span>
                  </button>
                </div>
              </div>

              {/* Quiz / Classification feedback */}
              <AnimatePresence mode="wait">
                {feedback && (
                  <motion.div
                    key={feedback.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl border text-xs flex gap-3 leading-relaxed ${
                      feedback.success 
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' 
                        : 'bg-rose-500/10 text-rose-300 border-rose-500/20'
                    }`}
                  >
                    <div className="mt-0.5 min-w-[18px]">
                      {feedback.success ? <Check className="text-emerald-400" size={18} /> : <AlertCircle className="text-rose-400" size={18} />}
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider mb-0.5 text-[10px]">
                        {feedback.success ? `CORRECT EVALUATION! (+${50 + (streak - 1) * 10} XP)` : 'GEOSTEERING LOG DILEMMA'}
                      </h4>
                      <p>{feedback.text}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          )}

          {activeTab === 'theory' && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <HelpCircle size={20} className="text-emerald-400" /> MWD Logging Sensors & Physics
                </h3>
                <p className="text-xs text-zinc-400">
                  Learn how Logging-While-Drilling (LWD) tools physically transmit and interpret logs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-2xl space-y-2">
                  <h4 className="font-bold text-emerald-400 flex items-center gap-2">
                    <Activity size={14} /> Gamma Ray (GR) Radiation Physics
                  </h4>
                  <p className="text-zinc-400">
                    Naturally occurring isotopes (Potassium-40, Uranium, Thorium) reside heavily inside micaceous shale clay. 
                    MWD tools hold extremely sensitive sodium iodide scintillation counters that measure these passive gamma radioactive emissions as we drill. 
                    Low passive counts suggest sand reservoirs; high counts identify barrier shales.
                  </p>
                </div>

                <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-2xl space-y-2">
                  <h4 className="font-bold text-amber-400 flex items-center gap-2">
                    <Zap size={14} /> Resistivity Log (R-log) induction
                  </h4>
                  <p className="text-zinc-400">
                    LWD tools send out high-frequency electromagnetic current loops into surrounding formations to compute voltage resistance. 
                    Since silica rocks filled with oil/gas are highly insulating, they resist voltage paths. 
                    Conversely, pockets of saline saltwater or heavy moisture-bearing clay have dense ionic pathways, proving highly conductive (low resistivity).
                  </p>
                </div>
              </div>

              <div className="bg-emerald-500/5 p-4 border border-emerald-500/10 rounded-2xl text-xs space-y-2">
                <h4 className="font-bold text-emerald-300">🎓 Strategic Evaluation Tip</h4>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Always correlate Track 1 and Track 2! A sandstone indicator alone (low Gamma) does not mean oil. 
                  You must confirm elevated resistivity. If resistivity stays flat below 3 Ohm-m, you are merely drilling a water sand. 
                  If resistivity spikes above 30 Ohm-m, congratulations, you have encountered hydrocarbons!
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
