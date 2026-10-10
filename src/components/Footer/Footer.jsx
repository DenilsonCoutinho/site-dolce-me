"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_ARC_TEXT = "Picolé bom é aquele que vira memória  · ";
const FOOTER_ARC_REPEAT = 14;
const FOOTER_ARC_PATH = "M 0,280 C 300,280 450,40 700,40 C 950,40 1100,280 1400,280";
const FOOTER_NAV_LEFT = [{ label: "O curso", href: "#curso" }, { label: "Receitas", href: "#sabores" }];
const FOOTER_NAV_RIGHT = [{ label: "Picolés gourmet", href: "#sabores" }, { label: "Começar agora", href: "https://pay.kiwify.com.br/MzpjRKm" }];
const FOOTER_SOCIALS = ["Instagram", "Dolce.me", "Picolés gourmet"];

export default function Footer() {
  const footerRef = useRef(null);
  const footerArcRef = useRef(null);
  const footerTextPathRef = useRef(null);

  useGSAP(() => {
    const footerArc = footerArcRef.current;
    const footerTextPath = footerTextPathRef.current;
    if (!footerArc || !footerTextPath) return;
    let footerTrigger;
    const setup = () => {
      footerTrigger?.kill();
      gsap.set(footerArc, { clearProps: "all" });
      footerTextPath.setAttribute("startOffset", "-30%");
      footerTrigger = ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
        refreshPriority: -1,
        onUpdate: (self) => footerTextPath.setAttribute("startOffset", `${-30 + self.progress * 60}%`),
      });
    };
    setup();
    let timer;
    const onResize = () => { clearTimeout(timer); timer = setTimeout(setup, 250); };
    window.addEventListener("resize", onResize);
    return () => { footerTrigger?.kill(); clearTimeout(timer); window.removeEventListener("resize", onResize); };
  }, { scope: footerRef });

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-wrapper">
        <div className="footer-arc" ref={footerArcRef}>
          <svg viewBox="0 0 1400 300" xmlns="http://www.w3.org/2000/svg" className="footer-arc-svg">
            <defs><path id="footer-arc-path" d={FOOTER_ARC_PATH} fill="none" /></defs>
            <text className="footer-arc-text"><textPath ref={footerTextPathRef} href="#footer-arc-path" startOffset="0%">{FOOTER_ARC_TEXT.repeat(FOOTER_ARC_REPEAT)}</textPath></text>
          </svg>
        </div>
        <div className="footer-content">
          <div className="footer-center">
            <div className="footer-brand"><h1 className="subheader">feito com carinho pela</h1><h1>Dolce.me</h1></div>
            <div className="footer-newsletter"><input type="email" placeholder="Digite seu e-mail" className="footer-newsletter-input" /><button className="footer-newsletter-btn"><p className="mono sm">Quero entrar</p></button></div>
          </div>
          <div className="footer-nav-row">
            <div className="footer-nav footer-nav-left">{FOOTER_NAV_LEFT.map(({ label, href }) => <Link href={href} key={label} className="footer-nav-link"><p className="mono sm">{label}</p></Link>)}</div>
            <div className="footer-nav footer-nav-right">{FOOTER_NAV_RIGHT.map(({ label, href }) => <Link href={href} key={label} className="footer-nav-link"><p className="mono sm">{label}</p></Link>)}</div>
          </div>
          <div className="footer-contact"><div className="footer-socials">{FOOTER_SOCIALS.map((name) => <Link href="/" key={name} className="footer-social-link"><p className="mono sm">{name}</p></Link>)}</div><p className="sm" id="footer-contact-email">contato@dolceme.com.br</p></div>
        </div>
        <div className="footer-bottom"><p className="sm">© Dolce.me Brigadeiria</p><p className="sm">Feito com carinho</p></div>
      </div>
    </footer>
  );
}
