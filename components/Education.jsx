const educationData = [
    {
        degree: 'BS Software Engineering (BSSE)',
        school: 'Air University, Islamabad',
        year: '2022 – 2026',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
    },
    {
        degree: 'Intermediate (Pre-Engineering)',
        school: 'F.G Degree College, Wah Cantt',
        year: '2020 – 2022',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        ),
    },
    {
        degree: 'Matriculation (Science Group)',
        school: 'Sir Syed College C2, Wah Cantt',
        year: '2018 – 2020',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
    },
];

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">My academic background</p>

                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="education-icon">
                                {edu.icon}
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
