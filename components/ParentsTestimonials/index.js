"use client";
import React, { useState, useEffect } from "react";
import "../../styles/parentstestimonials.scss";
import { Star, MessageSquareQuote, CheckCircle, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Priyanka Malhotra",
    role: "Parent of Grade 5",
    rating: 5,
    image: "/parents/pfemale.png",
    message: "Paramount Academy ne mere bachhe ki learning journey ko bilkul badal diya. Teachers ka approach caring hai aur har child ki progress track ki jaati hai. Highly recommended!"
  },
  {
    name: "Mr. Arvind Kulkarni",
    role: "Parent of Grade 8",
    rating: 5,
    image: "/parents/pman.png",
    message: "School ka discipline aur academic structure dono hi top-notch hain. Mere bete ka confidence pichle saal mein kaafi badha hai. Faculty bahut supportive hai."
  },
  {
    name: "Mrs. Simran Kaur",
    role: "Parent of Grade 3",
    rating: 5,
    image: "/parents/pfemale.png",
    message: "Sports, art aur academics ka perfect balance yahan milta hai. Meri beti ab sabhi activities mein enthusiastically participate karti hai."
  },
  {
    name: "Mr. Rohit Bansal",
    role: "Parent of Grade 10",
    rating: 5,
    image: "/parents/pman.png",
    message: "Teachers padhane mein bahut passionate hain aur concepts ko interactive tareeke se samjhate hain. Board exam prep bhi kaafi thorough tha."
  },
  {
    name: "Mrs. Falguni Shah",
    role: "Parent of Grade 6",
    rating: 5,
    image: "/parents/pfemale.png",
    message: "Overall development par focus hota hai — sirf marks par nahi. Leadership aur teamwork skills mein clear improvement dikha hai."
  },
  {
    name: "Mr. Harpreet Bhatia",
    role: "Parent of Grade 4",
    rating: 5,
    image: "/parents/pman.png",
    message: "Staff bahut guiding hai aur regularly parent-teacher communication hoti hai. Bachha school jaane ke liye excited rehta hai."
  },
  {
    name: "Mrs. Deepika Nair",
    role: "Parent of Grade 7",
    rating: 5,
    image: "/parents/pfemale.png",
    message: "Expectations se badhkar experience raha. Teachers patient hain aur bachhon ko questions poochne mein comfortable mehsoos hota hai."
  },
  {
    name: "Mr. Suresh Reddy",
    role: "Parent of Grade 9",
    rating: 5,
    image: "/parents/pman.png",
    message: "Facilities excellent hain aur safety ko top priority diya jaata hai. Activities se bachhon ka overall growth hota hai."
  },
  {
    name: "Mrs. Anushka Rao",
    role: "Parent of Grade 2",
    rating: 5,
    image: "/parents/pfemale.png",
    message: "Meri beti responsible aur confident ban gayi hai. Teachers har step par motivate karte hain."
  },
  {
    name: "Mr. Nikhil Chawla",
    role: "Parent of Grade 11",
    rating: 5,
    image: "/parents/pman.png",
    message: "Teachers ki dedication kaabil-e-taarif hai. Har child ko individual attention milta hai — proud feel karta hoon."
  },
  {
    name: "Mrs. Radhika Iyer",
    role: "Parent of Grade 1",
    rating: 5,
    image: "/parents/pfemale.png",
    message: "Bahut hi wonderful school hai. Meri beti learning aur activities dono enjoy karti hai."
  },
  {
    name: "Mr. Tarun Mehta",
    role: "Parent of Grade 12",
    rating: 5,
    image: "/parents/pman.png",
    message: "Students ko grow karne ka excellent platform milta hai. Supportive teachers ki wajah se stress-free environment hai."
  }
];

const ParentsTestimonials = () => {
  const [displayTestimonials, setDisplayTestimonials] = useState(
    testimonials.slice(0, 4)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
      setDisplayTestimonials(shuffled.slice(0, 4));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonial-header">
        <div className="sub-title">
          <Sparkles size={13} />
          <span>PARENT REVIEWS & TRUST</span>
        </div>
        <h2>What Our Parents Say About Us</h2>
        <p>
          Parents are our trusted partners. Their genuine feedback reflects the
          nurturing environment and standard of excellence we uphold.
        </p>
      </div>

      <div className="testimonial-grid">
        {displayTestimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-card-top">
              <div className="rating-pill">
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="rating-num">5.0</span>
              </div>
              <MessageSquareQuote size={24} className="quote-icon" />
            </div>

            <p className="testimonial-message">"{item.message}"</p>

            <div className="testimonial-author">
              <img src={item.image} alt={item.name} />
              <div className="testimonial-info">
                <h4>{item.name}</h4>
                <div className="role-verified">
                  <CheckCircle size={12} className="check-icon" />
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParentsTestimonials;