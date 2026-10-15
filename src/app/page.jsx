"use client";
import "./home.css";
import Showreel from "@/components/Showreel/Showreel";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import Spotlight from "@/components/Spotlight/Spotlight";
import DolceWhy from "@/components/DolceWhy/DolceWhy";
import CourseInstructor from "@/components/CourseInstructor/CourseInstructor";
import CourseIncludes from "@/components/CourseIncludes/CourseIncludes";
import ClientTestimonials from "@/components/ClientTestimonials/ClientTestimonials";
import CourseInvestment from "@/components/CourseInvestment/CourseInvestment";
import CourseGuarantee from "@/components/CourseGuarantee/CourseGuarantee";
import Footer from "@/components/Footer/Footer";
import CourseDisciplines from "@/components/CourseDisciplines/CourseDisciplines";
import Copy from "@/components/Copy/Copy";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHOW_CLIENT_REVIEWS = false;
const SHOW_SPOTLIGHT = false;
const SHOW_SHOWREEL = false;

const Page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="dolce-hero-portrait">
          <picture>
            <source media="(max-width: 640px)" srcSet="/dolce/hero-chef-mobile-popsicles.png" />
            <img src="/dolce/hero-capa-chef-popsicles.png" alt="Matheus Engel, chef da Dolce.me, apresentando picolés gourmet" />
          </picture>
        </div>
        <div className="hero-rotating-seal" aria-hidden="true">
          <svg viewBox="0 0 200 200" role="presentation">
            <defs>
              <path
                id="hero-seal-path"
                d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
              />
            </defs>
            <text>
              <textPath href="#hero-seal-path" startOffset="0%" textLength="515" lengthAdjust="spacing">
                <tspan>DESCOMPLICANDO </tspan>
                <tspan className="hero-seal-pink">PICOLÉS</tspan>
                <tspan> · DESCOMPLICANDO </tspan>
                <tspan className="hero-seal-pink">PICOLÉS</tspan>
                <tspan> ·</tspan>
              </textPath>
            </text>
          </svg>
          <span className="hero-seal-popsicle">
            <img src="/dolce/popsicle-icon-pink-hq.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="hero-content-main">
            <div className="hero-header">
              <div className="hero-brand-lockup">
                <img src="/dolce/curso-logo-trimmed.png" alt="Descomplicando Picolés" />
                <Copy animateOnScroll={false} delay={0.2}>
                  <h1>Aprenda a criar picolés cremosos, recheados e cobertos com chocolate, mesmo começando do zero.</h1>
                </Copy>
              </div>
            </div>

            <div className="hero-footer-outer">
              <Copy animateOnScroll={false} delay={0.5}>
                <p className="sm">&copy; Dolce.me Brigadeiria</p>
              </Copy>
            </div>

            <div className="hero-footer">
              <Copy animateOnScroll={false} delay={0.35}>
                <p className="lg">
                  Mais do que seguir receitas, aprenda as técnicas por trás de cada etapa da produção e descubra como desenvolver seus próprios sabores para começar a vender ou acrescentar um novo produto ao seu cardápio.
                </p>
              </Copy>

              <a
                className="hero-premium-cta"
                href="https://pay.kiwify.com.br/MzpjRKm"
                target="_blank"
                rel="noreferrer"
              >
                <span>Quero aprender agora</span>
                <span className="hero-premium-cta-icon" aria-hidden="true"><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {SHOW_SHOWREEL && <Showreel />}

      <CourseDisciplines />

      <DolceWhy />

      <CourseInstructor />

      <CourseIncludes />

      <ClientTestimonials />

      <CourseInvestment />

      <CourseGuarantee />

      {SHOW_CLIENT_REVIEWS && <>
      <section className="client-reviews-header-container">
        <div className="container">
          <div className="client-reviews-header-content">
            <div className="client-reviews-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>Feito para funcionar de verdade</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="client-reviews-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  Picolés desenvolvidos, testados, ajustados e vendidos dentro da
                  Dolce.me antes de se transformarem em curso.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <ClientReviews />
      </>}

      {SHOW_SPOTLIGHT && <Spotlight />}

      <Footer />
    </>
  );
};

export default Page;
