"use client";

import Image from "next/image";
import styles from "./facilities.module.scss";

const CONTENT = {
  library: {
    subtitle: "Knowledge Hub",
    title: (<>Our <span>Library</span></>),
    desc: "A well-stocked library nurturing a lifelong love for reading and independent learning across all grades.",
    // images: [
    //   "/facilities/Library01.jpeg",
    // ],
    body: "Our library holds thousands of books spanning academics, literature, science, and general knowledge. Students use their free periods to read and explore new subjects. A qualified librarian oversees the space, which is stocked with reference material, magazines, and digital resources.",
  },

  "montessori-lab": {
    subtitle: "Early Learning",
    title: (<>Montessori <span>Lab</span></>),
    desc: "A thoughtfully designed Montessori environment that nurtures hands-on learning and natural curiosity in young children.",
    // images: [
    //   "/facilities/montessori-1.webp",
    // ],
    body: "Our Montessori Lab features age-appropriate materials that build sensory awareness, fine motor skills, and early cognitive growth. Trained Montessori educators guide children through self-paced, activity-based learning that sets a strong foundation for the years ahead.",
  },

  "computer-lab": {
    subtitle: "Digital Learning",
    title: (<>Computer <span>Lab</span></>),
    desc: "A fully equipped computer lab giving students hands-on exposure to technology and digital literacy.",
    // images: [
    //   "/facilities/Computer Lab 01.jpg",
    // ],
    body: "Our computer lab runs on modern systems with high-speed internet and licensed educational software. Students pick up programming basics, MS Office, internet skills, and subject-specific applications, with regular lab sessions built into the timetable from the primary level onward.",
  },

  "biology-lab": {
    subtitle: "Life Sciences",
    title: (<>Biology <span>Lab</span></>),
    desc: "A well-equipped biology laboratory bringing science to life through experiments and practical learning.",
    // images: [
    //   "/facilities/Biology Lab01.jpg",
    // ],
    body: "The Biology Lab is stocked with microscopes, specimen slides, anatomy models, and everything needed for MPBSE practical exams. Students carry out experiments in botany, zoology, and environmental science under expert supervision, sharpening their scientific temperament and analytical skills.",
  },

  "physics-lab": {
    subtitle: "Forces & Motion",
    title: (<>Physics <span>Lab</span></>),
    desc: "An advanced physics laboratory set up for experiments in mechanics, optics, electricity, and modern physics.",
    // images: [
    //   "/facilities/Physics Lab 01.jpeg",
    // ],
    body: "Our Physics Lab is equipped with every instrument students need for board-prescribed experiments. From simple pendulum trials to optical bench practicals, students build a solid grasp of physical concepts through direct experimentation.",
  },

  "chemistry-lab": {
    subtitle: "Reactions & Discovery",
    title: (<>Chemistry <span>Lab</span></>),
    desc: "A safe, fully equipped chemistry laboratory where students explore chemical reactions and build practical skills.",
    // images: [
    //   "/facilities/Chemistry Lab 01.jpeg",
    //   "/facilities/Chemistry Lab 02.jpg",
    // ],
    body: "Safety comes first in the Chemistry Lab — proper ventilation, fire safety equipment, and organised chemical storage. Students perform titrations, salt analysis, and organic chemistry experiments, building a strong conceptual base and thorough board-exam preparation.",
  },

  "mathematics-lab": {
    subtitle: "Numbers & Logic",
    title: (<>Mathematics <span>Lab</span></>),
    desc: "An interactive mathematics lab that turns abstract concepts into something tangible through models, games, and activities.",
    // images: [
    //   "/facilities/Maths Lab 01.jpg",
    // ],
    body: "The Mathematics Lab is stocked with geometric models, measurement tools, puzzles, and activity kits that help students visualise mathematical ideas. Learning through exploration eases math anxiety and builds confidence, covering everything from basic operations to higher-level geometry and statistics.",
  },

  "art-craft": {
    subtitle: "Creativity & Expression",
    title: (<>Art & <span>Craft Class</span></>),
    desc: "A vibrant space dedicated to creativity, artistic expression, and fine motor development.",
    // images: [
    //   "/facilities/Art and Craft01.jpg",
    //   "/facilities/Art and Craft02.jpg",
    // ],
    body: "Our Art & Craft class is a colourful, inspiring space where students explore drawing, painting, clay modelling, and paper crafts. Trained art teachers encourage free self-expression while building patience, attention to detail, and aesthetic sense. Student artwork is regularly showcased at school exhibitions.",
  },

  "dance-class": {
    subtitle: "Rhythm & Grace",
    title: (<>Dance <span>Class</span></>),
    desc: "A dedicated dance studio where students learn classical, folk, and contemporary forms under expert guidance.",
    // images: [
    //   "/facilities/Dance01.jpg",
    //   "/facilities/Dance02.jpg",
    // ],
    body: "Dance at Paramount Academy goes beyond performance — it builds discipline, coordination, confidence, and cultural appreciation. Students train in classical Indian dance, folk forms, and choreography, regularly representing the school at inter-school competitions and annual cultural events.",
  },

  "music-class": {
    subtitle: "Melody & Harmony",
    title: (<>Music <span>Class</span></>),
    desc: "A well-equipped music room where students discover their musical talent through vocal and instrumental training.",
    // images: [
    //   "/facilities/Music01.jpg",
    //   "/facilities/Music02.jpg",
    // ],
    body: "The Music Class comes equipped with keyboards, harmoniums, tabla, guitars, and more. Students train in Indian classical music, light music, and group singing — an experience that sharpens memory, concentration, and emotional intelligence, and regularly features at school events.",
  },

  "sports-ground": {
    subtitle: "Fitness & Sportsmanship",
    title: (<>Sports <span>Ground</span></>),
    desc: "A spacious sports ground supporting a range of outdoor sports while building fitness and team spirit.",
    // images: [
    //   "/facilities/Sports01.jpg",
    //   "/facilities/Sports02.jpg",
    //   "/facilities/Sports03.jpg",
    //   "/facilities/Sports04.jpg",
    //   "/facilities/Sports05.jpg",
    //   "/facilities/Sports06.jpg",
    //   "/facilities/Sports07.jpg",
    // ],
    body: "Our sports ground has ample space for cricket, football, athletics, kho-kho, kabaddi, and more. PE teachers run regular sports periods and coach students for inter-school and district-level events — sports here are treated as a core part of holistic education, teaching teamwork, resilience, and leadership.",
  },

  assembly: {
    subtitle: "Unity & Discipline",
    title: (<>School <span>Assembly</span></>),
    desc: "Our morning assembly ground — a daily ritual building discipline, unity, and a shared sense of purpose.",
    // images: [
    //   "/facilities/Assembly01.jpg",
    //   "/facilities/Assembly02.jpg",
    // ],
    body: "The morning assembly is the heartbeat of Paramount Academy. Students gather daily for prayers, the national anthem, thought of the day, and announcements. It also features student presentations, news reading, and recognition of achievements — building confidence and community.",
  },

  "smart-class": {
    subtitle: "Modern Learning",
    title: (<>Smart <span>Class</span></>),
    desc: "Technology-enabled smart classrooms that make learning interactive and effective for every student.",
    // images: [
    //   "/facilities/Smart Class 01.jpeg",
    //   "/facilities/Smart Class 02.jpeg",
    // ],
    body: "Our smart classrooms use interactive whiteboards, projectors, and digital content mapped to the MPBSE curriculum. Complex ideas in science, mathematics, and social studies come alive through animations and videos, bridging theory with real-world understanding.",
  },

  "water-pool": {
    subtitle: "Aquatic Activity",
    title: (<>Water <span>Pool</span></>),
    desc: "A clean, supervised swimming pool offering students aquatic recreation and swimming training.",
    // images: [
    //   "/facilities/Water Pool01.jpeg",
    //   "/facilities/Water Pool02.jpeg",
    // ],
    body: "The school pool gives students a chance to learn swimming — an essential life skill. Trained instructors supervise every session under strict safety protocols, and the pool is regularly cleaned and maintained for a hygienic experience.",
  },

  "vehicle-facility": {
    subtitle: "Safe Commute",
    title: (<>Vehicle <span>Facility</span></>),
    desc: "A reliable school transport service ensuring safe, timely commutes for students across the region.",
    // images: [
    //   "/facilities/Vehicle Facility01.jpg",
    //   "/facilities/Vehicle Facility02.jpg",
    // ],
    body: "Paramount Academy runs a fleet of well-maintained buses and vans covering routes across Sitamau and nearby areas. Every vehicle carries GPS tracking, and experienced drivers with attendants ensure safe pick-up and drop-off. Parents can check routes and timings through the school administration.",
  },

  "rifle-shooting": {
    subtitle: "Precision & Discipline",
    title: (
      <>
        Rifle <span>Shooting</span>
      </>
    ),
    desc: "A dedicated rifle shooting facility helping students build focus, discipline, and precision under expert guidance.",
    // images: [
    //   "/facilities/Rifle shooting.jpg",
    // ],
    body: "Paramount Academy offers a well-equipped rifle shooting facility for students to learn and practice in a safe, controlled setting. Trained instructors guide students on technique, safety protocols, and sportsmanship — building concentration, patience, and self-discipline while opening doors to district, state, and national-level competition.",
  },
};

// ─── Dynamic Gallery Component ────────────────────────────────────────────────
function Gallery({ images, type }) {
  // Images not ready yet — render nothing instead of crashing.
  if (!images || images.length === 0) return null;

  const count = images.length;

  // 1 image — full width centered
  if (count === 1) {
    return (
      <div className={`${styles.gallery} ${styles.gallerySingle}`}>
        <div className={styles.galleryHeroFull}>
          <Image
            src={images[0]}
            alt={`${type} main`}
            fill
            className={styles.galleryImg}
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </div>
      </div>
    );
  }

  // 2 images — side by side
  if (count === 2) {
    return (
      <div className={`${styles.gallery} ${styles.galleryTwo}`}>
        {images.map((src, i) => (
          <div key={i} className={styles.galleryHalf}>
            <Image
              src={src}
              alt={`${type} ${i + 1}`}
              fill
              className={styles.galleryImg}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    );
  }

  // 3 images — 2 on top row, 1 centered bottom
  if (count === 3) {
    return (
      <div className={`${styles.gallery} ${styles.galleryThree}`}>
        <div className={styles.galleryThreeTop}>
          {images.slice(0, 2).map((src, i) => (
            <div key={i} className={styles.galleryHalf}>
              <Image
                src={src}
                alt={`${type} ${i + 1}`}
                fill
                className={styles.galleryImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
        <div className={styles.galleryThreeBottom}>
          <div className={styles.galleryHeroFull}>
            <Image
              src={images[2]}
              alt={`${type} 3`}
              fill
              className={styles.galleryImg}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    );
  }

  // 4+ images — hero left + side grid right
  const [hero, ...rest] = images;
  return (
    <div className={`${styles.gallery} ${styles.galleryMany}`}>
      <div className={styles.galleryHero}>
        <Image
          src={hero}
          alt={`${type} main`}
          fill
          className={styles.galleryImg}
          sizes="(max-width: 768px) 100vw, 65vw"
        />
      </div>
      <div className={styles.gallerySide}>
        {rest.slice(0, 3).map((src, i) => (
          <div key={i} className={styles.galleryThumb}>
            <Image
              src={src}
              alt={`${type} ${i + 2}`}
              fill
              className={styles.galleryImg}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FacilitiesSection({ type }) {
  const section = CONTENT[type] || CONTENT["library"];

  return (
    <section className={styles.facilitiesSection}>
      {/* Header */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionSubtitle}>{section.subtitle}</span>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
        <p className={styles.sectionDesc}>{section.desc}</p>
      </div>

      {/* Dynamic Gallery — renders nothing until images[] is uncommented */}
      <Gallery images={section.images} type={type} />

      {/* Description */}
      {section.body && (
        <div className={styles.sectionBody}>
          <p>{section.body}</p>
        </div>
      )}
    </section>
  );
}