import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ArrowDownToLine,
  FileText,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Camera,
  Upload,
  Check
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem("profilePhoto");
      if (saved) return saved;
    } catch (e) {
      console.warn("Could not read localStorage", e);
    }
    return PERSONAL_INFO.photoUrl || "/profile-photo.png";
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!file.type.match(/^image\/(jpeg|jpg|png|webp)$/i)) {
      alert("Please select a valid image file (JPG, JPEG, PNG, or WEBP).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPhotoSrc(result);
        setImgError(false);
        try {
          localStorage.setItem("profilePhoto", result);
        } catch (err) {
          console.warn("Failed to save to localStorage", err);
        }
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleOpenPicker = () => {
    fileInputRef.current?.click();
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-clean-grid bg-radial-subtle"
    >
      {/* Subtle clean minimalist ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Hidden Real HTML File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        onChange={handleFileChange}
        className="hidden"
        id="profile-photo-file-input"
        aria-label="Upload Profile Photo"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Clean Minimalist Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Tag */}
            <div
              id="hero-tag-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>{PERSONAL_INFO.subLabel}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-400">
                {PERSONAL_INFO.shortName}
              </span>
            </h1>

            {/* Strong Professional Headline */}
            <h2 className="text-lg sm:text-xl font-semibold text-blue-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span>{PERSONAL_INFO.role}</span>
            </h2>

            {/* Supporting Summary from Resume */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
              B.Tech CSM student at <strong className="text-white font-medium">{PERSONAL_INFO.college}</strong> with hands-on experience building AI/ML and Python-based applications. Passionate about <span className="text-slate-200">Artificial Intelligence</span>, <span className="text-slate-200">Machine Learning</span>, <span className="text-slate-200">Python Development</span>, <span className="text-slate-200">Intelligent Web Applications</span>, and <span className="text-slate-200">Data & Analytics</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs text-black bg-white hover:bg-blue-50 transition-all shadow-sm transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-download-resume-btn"
                href={PERSONAL_INFO.resumeUrl}
                download="R_Anantha_Lakshmi_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-xs text-white bg-zinc-900 border border-white/10 hover:border-white/20 hover:bg-zinc-800 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-blue-400" />
                <span>Download Resume</span>
              </a>

              <button
                id="hero-preview-resume-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-medium text-xs text-slate-400 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links from Resume - Clean Minimalism Rounded Buttons */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/5 w-full max-w-xl">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mr-1">
                Connect:
              </span>

              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="text-xs text-slate-500 font-mono ml-auto hidden sm:inline-block">
                {PERSONAL_INFO.email}
              </span>
            </div>

          </div>

          {/* Right Column: Clean Minimalist Portrait Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Soft Ambient Radial Blur Behind Photo */}
              <div className="absolute inset-0 bg-blue-500/15 rounded-3xl blur-2xl -z-10" />

              {/* Minimalist Card Container */}
              <div className="relative bg-zinc-900/50 border border-white/5 rounded-3xl p-6 sm:p-7 shadow-2xl flex flex-col items-center text-center backdrop-blur-md">
                
                {/* Clean Circular Portrait Frame with LinkedIn-style Edit Trigger */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 mb-3 group">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl" />
                  
                  {/* Avatar Container */}
                  <div className="w-full h-full rounded-full border-2 border-blue-500/50 p-1 relative z-10 overflow-hidden bg-zinc-950 shadow-inner flex items-center justify-center">
                    {!imgError ? (
                      <img
                        id="profile-hero-photo"
                        src={photoSrc}
                        alt="R. Anantha Lakshmi"
                        onError={() => setImgError(true)}
                        className="w-full h-full rounded-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-extrabold select-none shadow-inner">
                        AL
                      </div>
                    )}
                  </div>

                  {/* Small Circular Camera Icon on avatar edge */}
                  <button
                    id="profile-avatar-camera-btn"
                    onClick={handleOpenPicker}
                    title="Change Profile Photo"
                    aria-label="Change Profile Photo"
                    className="absolute bottom-1 right-1 z-20 w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white border-2 border-zinc-950 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                {/* Change Photo Button underneath avatar */}
                <div className="mb-4">
                  <button
                    id="change-profile-photo-btn"
                    onClick={handleOpenPicker}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      uploadSuccess
                        ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
                        : "bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white"
                    }`}
                  >
                    {uploadSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Photo Updated!</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-3.5 h-3.5 text-blue-400" />
                        <span>Change Photo</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Identity & Status */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
                  {PERSONAL_INFO.role}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  B.Tech CSM student (3rd Year) at {PERSONAL_INFO.college}
                </p>

                {/* Minimalist Badge Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 w-full pt-4 border-t border-white/5">
                  <span className="px-3 py-1 bg-zinc-800/80 border border-white/5 rounded-lg text-xs text-slate-300">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-zinc-800/80 border border-white/5 rounded-lg text-xs text-slate-300">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-zinc-800/80 border border-white/5 rounded-lg text-xs text-slate-300">
                    Flask
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 font-medium">
                    CGPA: {PERSONAL_INFO.cgpa}
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <a
            href="#about"
            onClick={handleScrollToAbout}
            id="hero-scroll-indicator"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors group cursor-pointer"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 group-hover:text-blue-400">
              Explore Profile
            </span>
            <div className="w-5 h-8 rounded-full border border-white/10 group-hover:border-blue-500/50 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
