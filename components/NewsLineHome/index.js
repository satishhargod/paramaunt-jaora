"use client";

import { useEffect, useState } from "react";
import styles from "./newslinehome.module.scss";
import { Bell, ChevronRight, Megaphone } from "lucide-react";

export default function NewsLineHome() {
  const [news, setNews] = useState("");
  const [react, setRedirect] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/admin/news-line");
      const data = await res.json();

      if (res.ok && data.data) {
        setNews(data.data.description || "");
        setRedirect(data.data.redirect);
      }
    } catch (error) {
      console.error("Failed to load newsline:", error);
    }
  };

  if (!news) return null;

  return (
    <div className={styles.newslineContainer}>
      <div className={styles.newsBadge}>
        <span className={styles.pulseDot}></span>
        <Megaphone size={14} className={styles.newsIcon} />
        <span>LATEST NOTICE</span>
      </div>

      <div className={styles.marqueeWrapper}>
        <marquee behavior="scroll" direction="left" scrollamount="6" onMouseOver={(e) => e.target.stop()} onMouseOut={(e) => e.target.start()}>
          <a
            href={react || "/about"}
            target={react ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={styles.newsLink}
          >
            {news}
            <span className={styles.clickHint}>Click to view details <ChevronRight size={13} /></span>
          </a>
        </marquee>
      </div>
    </div>
  );
}