import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowDownToLine } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/75 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Clean Minimalism */}
          <a
            href="#home"
            id="brand-logo-link"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              AL
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-blue-400 font-semibold border border-white/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="view-resume-nav-btn"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-4 py-2 rounded-full border border-white/10 bg-zinc-900/80 hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>View Resume</span>
            </button>

            <a
              id="download-resume-nav-btn"
              href={PERSONAL_INFO.resumeUrl}
              download="R_Anantha_Lakshmi_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-white hover:bg-blue-50 px-4 py-2 rounded-full transition-colors shadow-sm cursor-pointer"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="R_Anantha_Lakshmi_Resume.pdf"
              id="mobile-quick-resume-btn"
              className="sm:hidden inline-flex items-center gap-1 text-[11px] font-bold text-black bg-white px-3 py-1.5 rounded-full"
            >
              <ArrowDownToLine className="w-3 h-3" />
              <span>Resume</span>
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 shadow-2xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              id="mobile-view-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-slate-200 bg-zinc-900 border border-white/10 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View Resume (Interactive)</span>
            </button>

            <a
              id="mobile-download-resume-btn"
              href={PERSONAL_INFO.resumeUrl}
              download="R_Anantha_Lakshmi_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-black bg-white hover:bg-blue-50 rounded-full transition-colors"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download Official Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
