"use client";

import { useEffect, useState } from "react";

const nodes = [
  { code: "AMS-04", coords: "52.3676 N, 4.9041 E", base: 23 },
  { code: "JFK-11", coords: "40.6413 N, 73.7781 W", base: 31 },
  { code: "SIN-02", coords: "1.3521 N, 103.8198 E", base: 42 },
  { code: "FRA-07", coords: "50.1109 N, 8.6821 E", base: 38 },
  { code: "TYO-09", coords: "35.6762 N, 139.6503 E", base: 29 }
];

const exits = [
  "ams-04.ghostatlasip.com",
  "jfk-11.ghostatlasip.com",
  "sin-02.ghostatlasip.com",
  "fra-07.ghostatlasip.com",
  "tyo-09.ghostatlasip.com"
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatClock(d: Date) {
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
}

export function JadeRoutingConsole() {
  const [clock, setClock] = useState("00:00:00");
  const [exitIdx, setExitIdx] = useState(0);
  const [latencies, setLatencies] = useState(nodes.map((node) => node.base));

  useEffect(() => {
    setClock(formatClock(new Date()));
    const timer = setInterval(() => setClock(formatClock(new Date())), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setExitIdx((i) => (i + 1) % exits.length);
      setLatencies((prev) =>
        prev.map((latency) => Math.max(14, Math.min(90, latency + Math.round((Math.random() - 0.48) * 8))))
      );
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10">
      <svg viewBox="0 0 24 24" className="absolute -left-7 -top-7 h-6 w-6 opacity-45" aria-hidden="true">
        <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" />
        <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" />
      </svg>

      <div className="relative overflow-hidden rounded-[22px] border border-deep/10 bg-gradient-to-b from-white to-[#f5fbf8] shadow-jade-lg">
        <div className="pointer-events-none absolute inset-x-0 top-12 h-32 animate-scan bg-gradient-to-b from-transparent via-jade/10 to-transparent" />
        <div className="flex items-center justify-between bg-gradient-to-r from-deep to-[#155243] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-jade-bg">Routing console</span>
          </div>
          <span className="font-mono text-[10px] text-jade-bg/60">{clock} UTC</span>
        </div>

        <div className="border-b border-deep/10 bg-grid-jade px-5 pb-3 pt-4">
          <svg viewBox="0 0 520 168" className="h-[150px] w-full overflow-visible" aria-hidden="true">
            <path
              d="M28 118 C104 26 178 142 256 76 S406 18 492 104"
              className="fill-none stroke-deep/20"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M28 118 C104 26 178 142 256 76 S406 18 492 104"
              className="animate-route-dash fill-none stroke-jade"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="10 12"
            />
            <circle r="5" className="fill-deep drop-shadow-[0_0_8px_rgba(47,127,109,0.45)]">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M28 118 C104 26 178 142 256 76 S406 18 492 104" />
            </circle>
            <g className="fill-white stroke-jade" strokeWidth="2">
              <circle cx="28" cy="118" r="6" />
              <circle cx="256" cy="76" r="7" />
              <circle cx="492" cy="104" r="6" />
            </g>
          </svg>
          <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-deep/50 max-sm:grid-cols-1">
            <span>entry: iad-04</span>
            <span>policy: stealth</span>
            <span>exit: {exits[exitIdx]}</span>
          </div>
        </div>

        <div className="pb-2 pt-1">
          <div className="grid grid-cols-[62px_1fr_66px] gap-3 px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.12em] text-deep/40">
            <span>Node</span>
            <span>Coordinates</span>
            <span className="text-right">Latency</span>
          </div>
          {nodes.map((node, index) => {
            const active = index === exitIdx % nodes.length;
            const good = latencies[index] < 45;
            return (
              <div
                key={node.code}
                className="grid grid-cols-[62px_1fr_66px] items-center gap-3 border-t border-deep/5 px-5 py-2.5 font-mono text-xs transition-colors data-[active=true]:bg-jade/10"
                data-active={active}
              >
                <span className="flex items-center gap-2 text-ink">
                  <span className={`h-1.5 w-1.5 rounded-full shadow-[0_0_0_4px_rgba(47,127,109,0.1)] ${active ? "bg-deep" : "bg-jade"}`} />
                  {node.code}
                </span>
                <span className="text-[10.5px] text-ink/45">{node.coords}</span>
                <span className={`text-right font-medium ${good ? "text-jade" : "text-ink/65"}`}>{latencies[index]}ms</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute -bottom-6 -left-7 flex items-center gap-2.5 rounded-2xl border border-deep/10 bg-white px-4 py-3 shadow-jade max-sm:static max-sm:mt-3 max-sm:w-fit">
        <span className="h-2 w-2 rounded-full bg-jade animate-pulse" />
        <div>
          <div className="text-[11px] font-semibold text-ink">Session rotated</div>
          <div className="font-mono text-[10px] text-ink/50">exit - {exits[exitIdx]}</div>
        </div>
      </div>
      <div className="absolute -right-5 -top-5 rounded-full border border-deep/10 bg-white px-4 py-2 font-mono text-[10.5px] text-jade shadow-jade max-sm:static max-sm:mt-3 max-sm:w-fit">
        POOL 72,441,208 IPs
      </div>
    </div>
  );
}
