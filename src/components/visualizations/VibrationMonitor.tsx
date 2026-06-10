import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Zap, 
  AlertTriangle, 
  ShieldCheck, 
  Gauge, 
  Sliders, 
  RotateCw, 
  TrendingUp, 
  CircleDot,
  Volume2,
  RefreshCw,
  Cpu
} from 'lucide-react';

export const VibrationMonitor: React.FC = () => {
  const [axialVib, setAxialVib] = useState(2.4);
  const [lateralVib, setLateralVib] = useState(1.8);
  const [torsionalVib, setTorsionalVib] = useState(3.1);
  const [isSimulating, setIsSimulating] = useState(false);
  
  // Real-time orbit position coordinates for the drill tool-string deflection
  const [toolOrbit, setToolOrbit] = useState({ x: 0, y: 0 });

  // Physics animation loop simulating actual rotating/chaotic motion of drill string
  useEffect(() => {
    let frameId: number;
    let angle = 0;
    
    const animate = () => {
      // Speed is affected by torsional vibration (representing sticky torque slip rate)
      angle += 0.04 + (torsionalVib * 0.015);
      
      // Radius represents lateral displacement (whirl eccentricity)
      const radius = lateralVib * 4.2; 
      
      // Chaotic noise represents axial impacts and high frequency shocks
      const noiseAmp = (lateralVib * 0.5) + (axialVib * 0.7);
      const noiseX = (Math.random() - 0.5) * noiseAmp * 5;
      const noiseY = (Math.random() - 0.5) * noiseAmp * 5;
      
      // Orbit coordinate mapping
      const baseX = Math.cos(angle) * radius * 4;
      const baseY = Math.sin(angle) * radius * 4;
      
      setToolOrbit({
        x: baseX + noiseX,
        y: baseY + noiseY
      });
      
      frameId = requestAnimationFrame(animate);
    };
    
    if (isSimulating) {
      frameId = requestAnimationFrame(animate);
    } else {
      // Return to center when stationary
      setToolOrbit(prev => ({
        x: prev.x * 0.9,
        y: prev.y * 0.9
      }));
    }
    
    return () => cancelAnimationFrame(frameId);
  }, [isSimulating, axialVib, lateralVib, torsionalVib]);

  // Telemetry simulation fluctuations
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setAxialVib(prev => Math.max(0.5, Math.min(9.8, prev + (Math.random() - 0.5) * 0.6)));
      setLateralVib(prev => Math.max(0.5, Math.min(9.8, prev + (Math.random() - 0.5) * 0.8)));
      setTorsionalVib(prev => Math.max(0.5, Math.min(9.8, prev + (Math.random() - 0.5) * 0.7)));
    }, 450);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const getStatus = (val: number) => {
    if (val > 7.5) return { color: 'text-red-500', fill: 'bg-red-500', glow: 'rgba(239, 68, 68, 0.4)', label: 'CRITICAL', border: 'border-red-500/30', bgGlow: 'bg-red-500/10' };
    if (val > 4.5) return { color: 'text-amber-500', fill: 'bg-amber-500', glow: 'rgba(245, 158, 11, 0.4)', label: 'WARNING', border: 'border-amber-500/30', bgGlow: 'bg-amber-500/10' };
    return { color: 'text-emerald-500', fill: 'bg-emerald-500', glow: 'rgba(16, 185, 129, 0.4)', label: 'OPTIMAL', border: 'border-emerald-500/20', bgGlow: 'bg-emerald-500/10' };
  };

  // Stress metrics
  const combinedFatigue = Math.min(100, Math.round(((axialVib + lateralVib + torsionalVib) / 30) * 100));
  const fatigueStatus = getStatus(combinedFatigue / 10);

  // Advisory logic
  const getAdvisoryText = () => {
    if (lateralVib > 7.0) {
      return {
        title: "SEVERE BHA WHIRL DETECTED",
        msg: "Collateral pipe impact is critical. Reduce RPM immediately by 15-20% or increase hook weight (WOB) to stabilize physical rotation.",
        color: "text-red-400"
      };
    }
    if (axialVib > 7.0) {
      return {
        title: "HIGH SEVERE BIT BOUNCE",
        msg: "Severe axial impacts on cutter faces. Lift string on-off bottom, adjust active mud flow rates to clear hydraulic shock patterns.",
        color: "text-red-400"
      };
    }
    if (torsionalVib > 7.0) {
      return {
        title: "SEVERE STICK-SLIP OSCILLATIONS",
        msg: "Torsional energy storage and sudden release detected. Engage top-drive soft torque control system, or increase mud RPM slightly.",
        color: "text-amber-400"
      };
    }
    if (combinedFatigue > 55) {
      return {
        title: "ELEVATED SYSTEM FATIGUE",
        msg: "Micro-vibration harmonics are cumulative. Maintain consistent drilling parameters and monitor collar electronics temperature logs closely.",
        color: "text-amber-400"
      };
    }
    return {
      title: "DYNAMIC DRILL STRING HARMONICS NORMAL",
      msg: "Centrifugal whirl is stabilized. Acoustic transmission standard. Drilling parameter margins are within optimal lifetime envelopes.",
      color: "text-emerald-400"
    };
  };

  const advice = getAdvisoryText();

  return (
    <div id="mwd-dynamics-monitor-root" className="bg-zinc-950 rounded-3xl p-4 sm:p-6 border border-zinc-800 shadow-2xl relative overflow-hidden">
      {/* Decorative Grid overlays */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col gap-6">
        
        {/* Header Console */}
        <div id="vibe-header" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-500/10 rounded-xl border border-rose-500/20">
              <Activity className="text-rose-500 animate-pulse" size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight font-display">Diagnostic Dynamics Analyzer</h3>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Real-Time Micro-Vibration & Whirl Telemetry</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button 
              onClick={() => setIsSimulating(!isSimulating)}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                isSimulating 
                  ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20' 
                  : 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-extrabold'
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="animate-spin" size={14} />
                  <span>SUSPEND FEED</span>
                </>
              ) : (
                <>
                  <RotateCw size={14} />
                  <span>START TELEMETRY LOG</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Diagnostic Top-Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT PANEL: 2D Radar Space (whirl orbit) - Perfectly Responsive/Scalable */}
          <div id="vibe-radar-column" className="lg:col-span-4 flex flex-col items-center bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800/80">
            <div className="flex justify-between items-center w-full mb-3">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono">Borehole Cross-Section</span>
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">XY WHIRL</span>
            </div>

            {/* Radar Scope Frame */}
            <div className="relative w-full aspect-square max-w-[210px] sm:max-w-[240px] md:max-w-[220px] bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center p-3 overflow-hidden shadow-inner">
              {/* Concentric Safety Rings */}
              <div className="absolute w-[80%] h-[80%] rounded-full border border-zinc-900/60 flex items-center justify-center">
                <span className="text-[8px] text-zinc-700 font-mono self-start mt-2">SAFE</span>
              </div>
              <div className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-zinc-900/60" />
              <div className="absolute w-[20%] h-[20%] rounded-full border border-zinc-900/80" />
              
              {/* Critical Radial Wall Boundary */}
              <div className="absolute inset-2 rounded-full border border-red-500/15 pointer-events-none" />
              
              {/* Coordinate axis crosshairs */}
              <div className="absolute h-full w-[0.5px] bg-zinc-900/50" />
              <div className="absolute w-full h-[0.5px] bg-zinc-900/50" />
              
              {/* Orbiting tool dot representing physics state */}
              <motion.div 
                animate={{ 
                  x: toolOrbit.x, 
                  y: toolOrbit.y 
                }}
                transition={{ type: "spring", damping: 12, stiffness: 220 }}
                className={`absolute w-3.5 h-3.5 rounded-full z-20 flex items-center justify-center`}
                style={{ 
                  backgroundColor: fatigueStatus.fill === 'bg-emerald-500' ? '#10b981' : fatigueStatus.fill === 'bg-amber-500' ? '#f59e0b' : '#ef4444',
                  boxShadow: `0 0 16px ${fatigueStatus.glow}`
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </motion.div>

              {/* Dynamic Sweep Line (Aviation look) if simulating */}
              {isSimulating && (
                <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-spin [animation-duration:4s] pointer-events-none" />
              )}
            </div>

            {/* Micro Coordinates status under radar */}
            <div className="w-full grid grid-cols-2 gap-2 mt-3 p-2 bg-zinc-950/60 rounded-xl border border-zinc-800/60 text-center font-mono">
              <div>
                <span className="text-[8px] text-zinc-500 block">TOOL X-OFFSET</span>
                <span className="text-xs font-bold text-zinc-300">
                  {toolOrbit.x > 0 ? '+' : ''}{(toolOrbit.x / 10).toFixed(2)} mm
                </span>
              </div>
              <div>
                <span className="text-[8px] text-zinc-500 block">TOOL Y-OFFSET</span>
                <span className="text-xs font-bold text-zinc-300">
                  {toolOrbit.y > 0 ? '+' : ''}{(toolOrbit.y / 10).toFixed(2)} mm
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Compact Controllers with Half-Height wave spectrum bars */}
          <div id="vibe-controllers-column" className="lg:col-span-8 flex flex-col gap-4 justify-between">
            
            {/* Dynamic Status Badges row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              
              <div className="bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-800 flex flex-col">
                <span className="text-[9px] font-mono text-zinc-500 block">SYSTEM STRESS INDEX</span>
                <span className={`text-base font-extrabold font-mono mt-0.5 ${fatigueStatus.color}`}>
                  {combinedFatigue}%
                </span>
              </div>

              <div className="bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-800 flex flex-col">
                <span className="text-[9px] font-mono text-zinc-500 block">HARMONIC ASSESSMENT</span>
                <span className={`text-xs font-extrabold font-mono mt-1 ${fatigueStatus.color}`}>
                  {fatigueStatus.label}
                </span>
              </div>

              <div className="bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-800 col-span-2 sm:col-span-1 flex flex-col justify-center">
                <span className="text-[9px] font-mono text-zinc-500 block">BHA FREQUENCY LIMIT</span>
                <span className="text-xs font-extrabold font-mono text-cyan-400 mt-1">
                  {(42.4 + (torsionalVib * 2.8)).toFixed(1)} Hz
                </span>
              </div>

            </div>

            {/* Slider cards - EXTREMELY COMPACT (Half Height) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { 
                  id: 'axial',
                  lbl: 'Axial (Bit Bounce)', 
                  val: axialVib, 
                  setter: setAxialVib,
                  desc: 'Vertical displacement'
                },
                { 
                  id: 'lateral',
                  lbl: 'Lateral (Whirl)', 
                  val: lateralVib, 
                  setter: setLateralVib,
                  desc: 'Off-center collar whirl'
                },
                { 
                  id: 'torsional',
                  lbl: 'Torsional (Stick-Slip)', 
                  val: torsionalVib, 
                  setter: setTorsionalVib,
                  desc: 'Sticky torque oscillations'
                }
              ].map((item) => {
                const specStatus = getStatus(item.val);
                return (
                  <div 
                    key={item.id} 
                    className={`bg-zinc-900 p-3.5 rounded-2xl border transition-colors duration-200 flex flex-col justify-between h-[155px] ${specStatus.border} ${specStatus.bgGlow}`}
                  >
                    {/* Compact Label & Pill */}
                    <div className="flex justify-between items-start gap-1">
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold text-white block truncate leading-tight tracking-tight uppercase">
                          {item.id}
                        </span>
                        <span className="text-[8px] text-zinc-400 font-mono block truncate">
                          {item.desc}
                        </span>
                      </div>
                      <span className={`text-[8px] font-mono font-extrabold px-1.5 py-0.5 rounded uppercase ${specStatus.color} bg-black/40 border ${specStatus.border} shrink-0`}>
                        {specStatus.label}
                      </span>
                    </div>

                    {/* Wave Spectrum bars - Highly Compacted height (h-6) to ensure compact layout */}
                    <div className="flex items-end gap-0.5 h-6 my-2 bg-black/20 p-1 rounded-md overflow-hidden">
                      {[...Array(12)].map((_, nodeIdx) => {
                        // Height scaling based on current vibration amount plus some dynamic flutter
                        const heightMultiplier = isSimulating 
                          ? 15 + Math.sin((nodeIdx + Date.now()/300)) * (item.val * 8)
                          : item.val * 8;
                        const finalHeight = Math.max(10, Math.min(100, heightMultiplier));
                        
                        return (
                          <div 
                            key={nodeIdx}
                            className={`flex-1 rounded-sm opacity-60 transition-all duration-300 ${specStatus.fill}`}
                            style={{ 
                              height: `${finalHeight}%`,
                              boxShadow: isSimulating && item.val > 5 ? `0 0 4px ${specStatus.glow}` : 'none'
                            }}
                          />
                        );
                      })}
                    </div>

                    {/* Range feedback and input slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline text-[10px] font-mono">
                        <span className="text-zinc-500">Amplitude</span>
                        <span className="text-white font-bold">{item.val.toFixed(1)} G</span>
                      </div>
                      
                      <div className="relative flex items-center">
                        <input 
                          type="range" 
                          min="0.5" 
                          max="10" 
                          step="0.1" 
                          value={item.val}
                          onChange={(e) => item.setter(parseFloat(e.target.value))}
                          style={{
                            background: `linear-gradient(to right, ${specStatus.fill === 'bg-emerald-500' ? '#10b981' : specStatus.fill === 'bg-amber-500' ? '#f59e0b' : '#ef4444'} 0%, ${specStatus.fill === 'bg-emerald-500' ? '#10b981' : specStatus.fill === 'bg-amber-500' ? '#f59e0b' : '#ef4444'} ${(item.val - 0.5) / 9.5 * 100}%, #27272a ${(item.val - 0.5) / 9.5 * 100}%, #27272a 100%)`
                          }}
                          className="w-full h-1 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150"
                        />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Real-Time Advisor Log banner - Styled with context-aware color */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-start gap-3 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-1 pointer-events-none">
            <Cpu className="text-zinc-800" size={32} />
          </div>
          <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800 shrink-0">
            <ShieldCheck className="text-emerald-500 shrink-0 animate-pulse" size={18} />
          </div>
          <div className="min-w-0 flex-1 z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                ACTIVE COGNITIVE RSS-ADVISOR LOG
              </span>
              <span className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 ${advice.color}`}>
                {advice.title}
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug mt-1 font-sans">
              {advice.msg}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
