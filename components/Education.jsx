const EDUCATION_DATA = [
  {
    degree: 'BS Software Engineering (BSSE)',
    school: 'Air University, Islamabad',
    year: '2022 – 2026',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>

        <div className="education-timeline">
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-year">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
