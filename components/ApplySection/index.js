import React from "react";
import "../../styles/applySection.scss";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, GraduationCap } from "lucide-react";

const ApplySection = () => {
  return (
    <section className="apply-section">
      <div className="apply-scrim" />

      <div className="apply-container">
        <div className="apply-pill">
          <Sparkles size={14} className="sparkle-gold" />
          <span>ADMISSIONS OPEN FOR SESSION 2026-27</span>
        </div>

        <h2>
          Where Every Child’s Dream Takes Flight <br />
          <span>Nurturing Knowledge, Values & Confidence</span>
        </h2>

        <p className="apply-desc">
          Join a vibrant community committed to academic excellence, sportsmanship, and character development. Limited seats available from Nursery to XII.
        </p>

        <div className="apply-buttons">
          <Link href="/admission-enquiry" className="apply-btn-primary">
            <GraduationCap size={18} />
            <span>Apply For Admission</span>
            <ArrowRight size={16} />
          </Link>

          <a href="tel:+919685137237" className="apply-btn-call">
            <PhoneCall size={16} />
            <span>Call Admissions: +91 9685137237</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;

