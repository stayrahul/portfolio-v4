// Web Audio API Sound Synthesizer - 100% lightweight & zero external assets
"use client";

class SoundManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio_sound_enabled");
      this.isEnabled = stored === "true";
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggle(): boolean {
    this.isEnabled = !this.isEnabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_sound_enabled", String(this.isEnabled));
    }
    if (this.isEnabled) {
      this.playSuccess();
    }
    return this.isEnabled;
  }

  public getStatus(): boolean {
    return this.isEnabled;
  }

  public setStatus(val: boolean) {
    this.isEnabled = val;
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_sound_enabled", String(val));
    }
  }

  // Subtle tap click
  public playClick() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Ignore audio context errors
    }
  }

  // Subtle hover blip
  public playHover() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.035);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch {
      // Ignore
    }
  }

  // Two-tone success chime
  public playSuccess() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        const startTime = now + idx * 0.07;
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.035, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.16);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.16);
      });
    } catch {
      // Ignore
    }
  }

  // Descending alert/error tone
  public playError() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      [350, 240].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sawtooth";
        const startTime = now + idx * 0.08;
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.03, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.12);
      });
    } catch {
      // Ignore
    }
  }
}

export const soundManager = new SoundManager();
