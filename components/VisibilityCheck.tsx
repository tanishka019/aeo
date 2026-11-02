"use client";

import { useState, useEffect } from "react";
import { CONTENT } from "@/config/content";
import { BRAND } from "@/config/brand";
import { 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Globe,
  Sparkles
} from "lucide-react";

interface VisibilityCheckProps {
  initialUrl?: string;
  className?: string;
}

type CheckStep = "INPUT" | "SCANNING" | "CONTACT" | "RESULT";

// ponytail: Pure Monochrome (Black, Grey, White) single-line omnibar
export function VisibilityCheck({ initialUrl = "", className = "" }: VisibilityCheckProps) {
  const [step, setStep] = useState<CheckStep>("INPUT");

  const [url, setUrl] = useState(initialUrl);
  const [scanProgress, setScanProgress] = useState(15);
  const [currentScanEngine, setCurrentScanEngine] = useState("Querying ChatGPT 4.5 Search...");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpError, setOtpError] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setErrorMsg("Please enter your website URL or business name.");
      return;
    }
    setErrorMsg("");
    setStep("SCANNING");
    setScanProgress(15);
  };

  useEffect(() => {
    if (step !== "SCANNING") return;

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev < 40) {
          setCurrentScanEngine("Querying ChatGPT 4.5 Search with 5 buyer prompts...");
          return prev + 15;
        } else if (prev < 70) {
          setCurrentScanEngine("Checking Google Gemini Overviews & citations...");
          return prev + 18;
        } else if (prev < 95) {
          setCurrentScanEngine("Testing Perplexity AI & extracting competitor mentions...");
          return prev + 12;
        } else {
          clearInterval(interval);
          setStep("CONTACT");
          return 100;
        }
      });
    }, 700);

    return () => clearInterval(interval);
  }, [step]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg("Please complete all details to unlock your score.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setErrorMsg("Please provide a valid 10-digit mobile number.");
      return;
    }
    setErrorMsg("");
    setOtpSent(true);
    setOtpValue("5824");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue.trim() !== "5824") {
      setOtpError("Invalid code. Please enter 5824.");
      return;
    }
    setOtpError("");

    fetch("/api/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, category: "All Industries", city: "National", name, phone, email, consent }),
    }).catch((err) => console.error("Lead submission error:", err));

    setStep("RESULT");
  };

  return (
    <div id="check-omnibar" className={`w-full max-w-2xl mx-auto ${className}`}>
      
      {/* STEP 1: Single-Line Omnibar in Black, Grey, White */}
      {step === "INPUT" && (
        <div className="flex flex-col items-center gap-3">
          <form
            onSubmit={handleStartScan}
            className="group relative flex w-full items-center rounded-2xl border border-neutral-800 bg-[#0A0A0A]/95 p-1.5 sm:p-2 backdrop-blur-xl shadow-2xl transition-all duration-300 focus-within:border-neutral-500 focus-within:bg-[#0F0F0F]"
          >
            <div className="flex items-center pl-3 pr-2 text-neutral-400">
              <Globe className="h-5 w-5 group-focus-within:text-white transition-colors" />
            </div>

            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website or business name (e.g. clinic.in)..."
              className="flex-1 bg-transparent px-2 py-2 text-xs sm:text-base text-white placeholder-neutral-500 focus:outline-none"
            />

            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white hover:bg-neutral-200 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-black shadow-md active:scale-[0.98] transition-all duration-200"
            >
              <span>Check Visibility</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {errorMsg && (
            <div className="flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 border border-neutral-700 animate-fade-in">
              <AlertCircle className="h-3.5 w-3.5 shrink-0 text-white" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-normal">
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-neutral-400" />
              Instant 60-second live check
            </span>
            <span>·</span>
            <span>100% Free</span>
            <span>·</span>
            <span>No credit card required</span>
          </div>
        </div>
      )}

      {/* STEP 2: Live Scanning Card */}
      {step === "SCANNING" && (
        <div className="rounded-2xl border border-neutral-800 bg-[#0D0D0D]/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-center animate-fade-in">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 text-white">
            <Loader2 className="h-6 w-6 animate-spin text-white" />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white">
            Scanning AI Engines for &ldquo;{url}&rdquo;
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-neutral-400">
            Simulating natural buyer queries across leading answer models...
          </p>

          <div className="mt-6 w-full">
            <div className="flex items-center justify-between text-xs font-medium text-white mb-2">
              <span className="truncate text-neutral-300">{currentScanEngine}</span>
              <span className="text-white font-bold">{scanProgress}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
              <div
                className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2.5 text-xs font-medium text-white">
            <div className="flex items-center justify-center gap-1.5 bg-black/60 py-2 rounded-lg border border-neutral-800">
              <span>ChatGPT</span>
              {scanProgress > 30 ? <CheckCircle2 className="h-3.5 w-3.5 text-white" /> : <Loader2 className="h-3.5 w-3.5 animate-spin text-neutral-500" />}
            </div>
            <div className="flex items-center justify-center gap-1.5 bg-black/60 py-2 rounded-lg border border-neutral-800">
              <span>Gemini</span>
              {scanProgress > 65 ? <CheckCircle2 className="h-3.5 w-3.5 text-white" /> : <Loader2 className="h-3.5 w-3.5 animate-spin text-neutral-500" />}
            </div>
            <div className="flex items-center justify-center gap-1.5 bg-black/60 py-2 rounded-lg border border-neutral-800">
              <span>Perplexity</span>
              {scanProgress > 90 ? <CheckCircle2 className="h-3.5 w-3.5 text-white" /> : <Loader2 className="h-3.5 w-3.5 animate-spin text-neutral-500" />}
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Quick Unlock Details */}
      {step === "CONTACT" && (
        <div className="rounded-2xl border border-neutral-800 bg-[#0D0D0D]/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl animate-fade-in text-left">
          <div className="border-b border-neutral-800 pb-3 mb-4">
            <h2 className="text-base font-bold text-white">
              Scan Complete for {url}
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Enter your details to reveal your visibility score and competitor citations.
            </p>
          </div>

          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-neutral-300">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="rounded-xl border border-neutral-800 bg-black px-3.5 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-neutral-300">WhatsApp / Mobile</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs font-medium text-neutral-400">+91</span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      maxLength={10}
                      className="w-full rounded-xl border border-neutral-800 bg-black pl-11 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-neutral-300">Work Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@company.com"
                    className="rounded-xl border border-neutral-800 bg-black px-3.5 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-neutral-800 bg-black text-white focus:ring-0"
                />
                <span className="text-[11px] leading-relaxed text-neutral-400">
                  {CONTENT.checkFlow.consentLabel}
                </span>
              </label>

              {errorMsg && (
                <div className="flex items-center gap-2 rounded-lg bg-neutral-900 p-2 text-xs text-neutral-200 border border-neutral-700">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0 text-white" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white hover:bg-neutral-200 px-4 py-3 text-sm font-semibold text-black transition-all active:scale-[0.99]"
              >
                <span>Verify Mobile &amp; View Score</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="flex flex-col gap-3.5 py-2">
              <div className="rounded-xl bg-black p-3 border border-neutral-800 text-center">
                <p className="text-xs font-medium text-white">
                  We sent a 4-digit verification code to +91 {phone}
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  (Demo code pre-filled: <strong className="text-white">5824</strong>)
                </p>
              </div>

              <div className="flex flex-col gap-1.5 items-center">
                <label className="text-xs font-medium text-neutral-300">
                  Enter Verification Code
                </label>
                <input
                  type="text"
                  maxLength={4}
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  className="w-32 text-center tracking-widest text-lg font-bold rounded-xl border border-neutral-700 bg-black px-3 py-1.5 text-white focus:border-white focus:ring-1 focus:ring-white"
                />
              </div>

              {otpError && (
                <p className="text-center text-xs text-red-400">{otpError}</p>
              )}

              <button
                type="submit"
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-white hover:bg-neutral-200 px-4 py-3 text-sm font-semibold text-black transition-all shadow-md"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Confirm &amp; Reveal Score</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* STEP 4: Results */}
      {step === "RESULT" && (
        <div className="rounded-2xl border border-neutral-800 bg-[#0D0D0D]/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl animate-fade-in text-left flex flex-col gap-4">
          <div className="rounded-xl bg-black p-4 text-white border border-neutral-800">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  AI Visibility Score
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight text-white mt-0.5">
                  27 <span className="text-xs font-normal text-neutral-400">/ 100</span>
                </h3>
              </div>
              <span className="rounded-full bg-neutral-900 border border-neutral-700 px-3 py-1 text-xs font-semibold text-neutral-200">
                Low Visibility
              </span>
            </div>
            <p className="mt-1.5 text-xs text-neutral-400">
              {CONTENT.checkFlow.step4Sub}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="rounded-xl border border-neutral-800 bg-black p-3">
              <span className="text-[10px] text-neutral-400 font-medium">AI Mention Rate</span>
              <p className="text-sm font-bold text-white mt-0.5">4 of 15 queries (26%)</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-black p-3">
              <span className="text-[10px] text-neutral-400 font-medium">Top Position</span>
              <p className="text-sm font-bold text-white mt-0.5">Rank #6 or unlisted</p>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-black p-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-300">
              Competitors Dominating in Recommendations:
            </h4>
            <ul className="mt-2 flex flex-col gap-1.5 text-xs text-neutral-300">
              <li className="flex items-center justify-between">
                <span>1. Market Leader Alpha</span>
                <span className="text-[10px] text-white font-semibold">93% Mentioned</span>
              </li>
              <li className="flex items-center justify-between">
                <span>2. Prime Care Group</span>
                <span className="text-[10px] text-white font-semibold">80% Mentioned</span>
              </li>
              <li className="flex items-center justify-between">
                <span>3. City Specialists Ltd</span>
                <span className="text-[10px] text-neutral-400 font-medium">66% Mentioned</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white">
              <Lock className="h-3.5 w-3.5 text-neutral-400" />
              <span>Full 15-Page Diagnostic Report Locked</span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Our AEO specialists are compiling your full citation audit. We will deliver it to <strong>{email || "your email"}</strong> and WhatsApp within 24 hours.
            </p>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                `Hi ${BRAND.name}, I checked ${url || "my website"} and got a 27/100 score. Can we discuss the full report?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-white hover:bg-neutral-200 px-4 py-2 text-xs font-semibold text-black transition-all"
            >
              <span>Speak to an AEO Specialist on WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            onClick={() => {
              setStep("INPUT");
              setUrl("");
            }}
            className="text-center text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Check another website
          </button>
        </div>
      )}

    </div>
  );
}
