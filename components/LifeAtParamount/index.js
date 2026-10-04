import React from "react";
import "../../styles/lifeAtParamount.scss";
import Link from "next/link";
import { ArrowRight, Camera, Sparkles, Image as ImageIcon } from "lucide-react";

const LifeAtParamount = () => {
  return (
    <section className="life-paramount">
      <div className="life-container">
        <div className="life-banner">
          <img
            src="/imgs/bgschool34.jpg"
            alt="Life at Paramount Academy"
          />

          <div className="life-scrim" />

          <div className="life-content">
            <div className="life-pill">
              <Camera size={14} />
              <span>Campus Life & Moments</span>
            </div>

            <h2>Life at Paramount Academy</h2>
            <p>
              Experience a dynamic campus where academic rigor meets sports,
              creativity, arts, and lifelong friendships.
            </p>

            <div className="life-actions">
              <Link href="/gallery" className="view-all-btn">
                <ImageIcon size={16} />
                <span>Explore Photo Gallery</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="life-floating-badge">
            <Sparkles size={16} className="sparkle-gold" />
            <span>500+ Annual Activities & Memories</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtParamount;

