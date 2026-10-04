"use client";

import { useState, useEffect } from "react";
import "../../styles/leadership.scss";
import Link from "next/link";
import { ArrowRight, Quote, Sparkles, UserCheck } from "lucide-react";

const leadershipData = [
    {
        name: "Mr. Ashutosh Sethia",
        position: "Director",
        image: "/teachers/director.jpg",
        title: "From the Desk of the Director",
        badge: "Visionary Leadership",
        contentWithQut: [
            "Education is the foundation upon which the future of every society is built. As the Director of Paramount Academy, I strongly believe that every child possesses unique abilities and untapped potential that deserve to be nurtured with care and dedication. Our mission is to provide a supportive and inspiring learning environment where students are encouraged to think independently, explore their talents, and develop the confidence needed to achieve their goals."
        ],
        contentSimple: [
            "At Paramount Academy, we are committed not only to academic excellence but also to fostering strong values, leadership skills, and a sense of responsibility among our students. With the unwavering support of our dedicated teachers and the active cooperation of parents, we strive to prepare young minds to face future challenges with confidence, integrity, and a lifelong passion for learning."
        ]
    },
    {
        name: "Mr. Amit Jain",
        position: "Principal",
        image: "/teachers/amitjain.png",
        title: "From the Desk of the Principal",
        badge: "Academic Excellence",
        contentWithQut: [
            "As the Principal of Paramount Academy, I consider it both a privilege and a responsibility to guide and inspire young minds on their educational journey. I believe that education is far more than academic achievement—it is about helping students discover their strengths, build confidence, and develop a lifelong passion for learning. Our goal is to create a supportive, disciplined, and nurturing environment where every child receives the attention, encouragement, and opportunities needed to reach their full potential."
        ],
        contentSimple: [
            "At Paramount Academy, we emphasize the holistic development of our students by encouraging active participation in academics, sports, cultural activities, and community programs. These experiences help shape well-rounded individuals who are prepared to face future challenges with determination and integrity. With the dedication of our teachers and the continuous support of parents, we remain committed to nurturing responsible, confident, and capable citizens of tomorrow."
        ]
    },
];

export default function Leadership() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (leadershipData.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                return (prev + 1) % leadershipData.length;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const active = leadershipData[activeIndex] || leadershipData[0];

    if (!active) {
        return null;
    }

    return (
        <section className="leadership">

            <div className="leadership__header">
                <span className="leadership__eyebrow">
                    <Sparkles size={13} />
                    <span>School Governance & Leadership</span>
                </span>

                <h2 className="leadership__title">
                    Meet Our <span>Leadership</span> Team
                </h2>
            </div>

            {/* TABS */}
            <div className="leadership__tabs" role="tablist">
                {leadershipData.map((leader, i) => (
                    <button
                        key={`${leader.name}-${i}`}
                        role="tab"
                        type="button"
                        aria-selected={i === activeIndex}
                        className={`leadership__tab ${
                            i === activeIndex ? "is-active" : ""
                        }`}
                        onClick={() => setActiveIndex(i)}
                    >
                        <div className="leadership__tab-info">
                            <span className="leadership__tab-name">
                                {leader.name}
                            </span>
                            <span className="leadership__tab-role">
                                {leader.position}
                            </span>
                        </div>

                        {i === activeIndex && (
                            <span
                                key={activeIndex}
                                className="leadership__tab-progress"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* LETTER CARD */}
            <div className="leadership__letter">

                <div className="leadership__portrait-wrap">
                    <div className="leadership__portrait">
                        <img
                            src={active.image}
                            alt={active.name}
                        />
                    </div>
                    <div className="leadership__portrait-badge">
                        <UserCheck size={14} />
                        <span>{active.badge}</span>
                    </div>
                </div>

                <div className="leadership__body">

                    <div className="leadership__quote-icon-box">
                        <Quote size={32} className="leadership__quote-lucide" />
                    </div>

                    <h3 className="leadership__heading">
                        {active.title}
                    </h3>

                    {/* QUOTE PARAGRAPHS */}
                    <blockquote className="leadership__quote">
                        {active.contentWithQut?.map(
                            (paragraph, index) => (
                                <p key={index}>
                                    "{paragraph}"
                                </p>
                            )
                        )}
                    </blockquote>

                    {/* SIMPLE PARAGRAPHS */}
                    <div className="leadership__simple">
                        {active.contentSimple?.map(
                            (paragraph, index) => (
                                <p key={index}>
                                    {paragraph}
                                </p>
                            )
                        )}
                    </div>

                    {/* SIGNATURE */}
                    <div className="leadership__signoff">
                        <span className="leadership__signoff-name">
                            {active.name}
                        </span>

                        <span className="leadership__signoff-role">
                            {active.position}, Paramount Academy Jaora
                        </span>
                    </div>

                </div>
            </div>

            {/* CTA */}
            <div className="leadership__cta">
                <Link href="/teachers" className="leadership__cta-link">
                    <span>View All Faculty & Teachers</span>
                    <ArrowRight size={16} />
                </Link>
            </div>

        </section>
    );
}