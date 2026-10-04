"use client";
import { useEffect, useState } from "react";
import "./mandatorypublicdisclosure.scss";

// ---- Reusable row for label/value tables ----
function InfoTable({ rows }) {
  return (
    <table className="mpd-table">
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td className="mpd-table__sno">{i + 1}</td>
            <td className="mpd-table__label">{row.label}</td>
            <td className="mpd-table__value">
              {row.href ? (
                <a href={row.href} target="_blank" rel="noopener noreferrer">
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function MandatoryPublicDisclosure() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/mandatory-public-disclosure.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) return <div className="mpd">Data load nahi ho paya. Please try again.</div>;
  if (!data) return <div className="mpd">Loading...</div>;

  const {
    generalInfo,
    documentsSectionOne,
    documentsSectionTwo,
    staffInfo,
    infrastructureInfo,
  } = data;

  return (
    <div className="mpd">
      <h1 className="mpd__title">Public Mandatory Disclosure</h1>

      {/* Section A */}
      <section className="mpd__section">
        <h2 className="mpd__heading">A. General Information</h2>
        <InfoTable rows={generalInfo} />
      </section>

      {/* Section B */}
      <section className="mpd__section">
        <h2 className="mpd__heading">B. Documents And Information</h2>

        <table className="mpd-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Documents/Information</th>
              <th>Link Of Uploaded Documents On Your School's Website</th>
            </tr>
          </thead>
          <tbody>
            {documentsSectionOne.map((doc, i) => (
              <tr key={i}>
                <td className="mpd-table__sno">{i + 1}</td>
                <td className="mpd-table__label">{doc.label}</td>
                <td className="mpd-table__value">
                  {doc.href ? (
                    <a href={doc.href} target="_blank" rel="noopener noreferrer">
                      {doc.linkText}
                    </a>
                  ) : (
                    <span className="mpd-table__pending">{doc.linkText}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="mpd-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Documents/Information</th>
              <th>Link Of Uploaded Documents On Your School's Website</th>
            </tr>
          </thead>
          <tbody>
            {documentsSectionTwo.map((doc, i) => (
              <tr key={i}>
                <td className="mpd-table__sno">{i + 1}</td>
                <td className="mpd-table__label">{doc.label}</td>
                <td className="mpd-table__value">
                  {doc.links.map((l, j) =>
                    l.href ? (
                      <a
                        key={j}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mpd-table__link-item"
                      >
                        {l.linkText}
                      </a>
                    ) : (
                      <span key={j} className="mpd-table__pending">
                        {l.linkText}
                      </span>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section D */}
      <section className="mpd__section">
        <h2 className="mpd__heading">D. Staff (Teaching)</h2>
        <InfoTable rows={staffInfo} />
      </section>

      {/* Section E */}
      <section className="mpd__section">
        <h2 className="mpd__heading">E. School Infrastructure</h2>
        <InfoTable rows={infrastructureInfo} />
      </section>
    </div>
  );
}