"use client";
import React, { useState } from 'react';
import "../../styles/midcontent.scss";
import {
  BookOpen, Trophy, Wrench, Sparkles, GraduationCap,
  Users, ShieldCheck, Star, CheckCircle2, ArrowRight,
  Compass, Eye, School, Play, Sparkle
} from "lucide-react";
import StatsCount from '../StatsCount/Index';
import Leadership from '../Leadership';
import ParentsTestimonials from '../ParentsTestimonials';
import LifeAtParamount from '../LifeAtParamount';
import ApplySection from '../ApplySection';
import Link from 'next/link';

const content = {
  about: {
    tabLabel: "About PAS",
    icon: School,
    badge: "Welcome to Paramount",
    title: "We Provide Quality Education For Every Student",
    desc: "At Paramount Academy School, we focus on providing quality education, modern learning methods, and a supportive environment to help every student grow academically and personally.",
    features: ["Experienced Teachers", "Modern Classrooms", "Activity Based Learning", "Safe & Friendly Environment"],
    link: "/about"
  },
  mission: {
    tabLabel: "Our Mission",
    icon: Compass,
    badge: "Purpose & Dedication",
    title: "Empowering Young Minds, Every Single Day",
    desc: "The mission of Paramount Academy is to empower young minds through quality education, strong values, and holistic development — a balanced environment that encourages curiosity, creativity and independent thinking.",
    features: ["Holistic Student Development", "Quality & Progressive Education", "Strong Moral Values", "Modern Teaching Methods"],
    link: "/about?type=affiliation"
  },
  vision: {
    tabLabel: "Our Vision",
    icon: Eye,
    badge: "Future Ready Leadership",
    title: "Preparing Minds For A Brighter Tomorrow",
    desc: "Education is not only about gaining knowledge but also about shaping character, inspiring excellence, and preparing young minds for a brighter future — confident, compassionate and responsible individuals.",
    features: ["Excellence in Learning", "Character & Leadership Development", "Creative & Independent Thinking", "Future Ready Students"],
    link: "/about?type=school-history"
  },
};

const whyItems = [
  { icon: BookOpen, title: "Quality CBSE Education", desc: "A strong academic foundation with the CBSE curriculum and modern learning methods." },
  { icon: Trophy, title: "Sports & Outdoor Activities", desc: "Regular sports events and competitions for physical development." },
  { icon: Wrench, title: "Workshops & Skill Development", desc: "Hands-on workshops that build creativity and practical knowledge." },
  { icon: Sparkles, title: "Cultural & School Events", desc: "Cultural programs and celebrations that build confidence and talent." },
  { icon: GraduationCap, title: "Special Classes", desc: "Extra classes to help students strengthen weak areas and excel." },
  { icon: Users, title: "Experienced Teachers", desc: "Dedicated teachers giving personal attention to every student." },
  { icon: ShieldCheck, title: "Safe & Positive Environment", desc: "A disciplined, motivating environment for confident growth." },
  { icon: Star, title: "All Round Development", desc: "Education, sports, creativity and life skills — nurtured together with personal mentorship for every student.", highlight: true },
];

const Content = ({ activeSection }) => {
  const [activeTab, setActiveTab] = useState("about");
  const data = content[activeTab];

  return (
    <div className="row middle-component">

      {/* ── ABOUT / MISSION / VISION — Modern Interactive Tabs ── */}
      <section className="ledger-section" id="about">
        <div className="ledger-container">

          <div className="section-head-badge">
            <Sparkle size={14} className="badge-sparkle" />
            <span>DISCOVER OUR INSTITUTION</span>
          </div>

          <div className="ledger-tabrail">
            {Object.keys(content).map((key) => {
              const TabIcon = content[key].icon;
              return (
                <button
                  key={key}
                  className={`ledger-tab ${activeTab === key ? "is-active" : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  <TabIcon size={16} />
                  <span>{content[key].tabLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="ledger-card">
            <div className="ledger-card-text">
              <span className="card-inner-badge">{data.badge}</span>
              <h2 className="ledger-title">{data.title}</h2>
              <p className="ledger-desc">{data.desc}</p>

              <div className="ledger-chips">
                {data.features.map((f, i) => (
                  <span className="ledger-chip" key={i}>
                    <CheckCircle2 size={16} className="chip-icon" /> {f}
                  </span>
                ))}
              </div>

              <div className="ledger-action">
                <Link href={data.link} className="ledger-more-btn">
                  <span>Know More Details</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="ledger-card-media">
              <div className="video-card-container">
                <div className="video-frame-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/WgMVSf2TMbo?autoplay=1&mute=1&controls=1"
                    title="Life at Paramount Academy"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>
                <div className="video-card-glass-badge">
                  <div className="play-pulse-icon">
                    <Play size={12} fill="#0d281e" />
                  </div>
                  <span>Life at Paramount Academy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE US — Bento Grid ── */}
      <section className="why-bento">
        <div className="why-bento-container">

          <div className="why-bento-header">
            <span className="why-bento-eyebrow">Why Choose Us</span>
            <h2 className="why-bento-title">
              Why Families Choose <span>Paramount Academy</span>
            </h2>
            <p className="why-bento-desc">
              A CBSE-based school dedicated to academic excellence and overall
              personality development — through sports, culture, workshops and
              focused attention on every child.
            </p>
          </div>

          <div className="why-bento-grid">
            {whyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div className={`why-bento-card ${item.highlight ? "is-highlight" : ""}`} key={i}>
                  <div className="why-card-top">
                    <span className="why-bento-icon"><Icon size={22} /></span>
                    {item.highlight && <span className="highlight-pill">Featured Pillar</span>}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <StatsCount />
      <Leadership />
      <LifeAtParamount />
      <ParentsTestimonials />
      <ApplySection />

    </div>
  );
};

export default Content;