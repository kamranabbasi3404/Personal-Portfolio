const experiences = [
    {
        role: 'DevOps Automation Intern',
        company: 'NESCOM (CenTECH)',
        date: 'Aug 2025 – Oct 2025',
        responsibilities: [
            'Worked on automation scripts and DevOps workflows',
            'Exposure to CI/CD and system automation',
        ],
    },
    {
        role: 'Frontend Developer Intern',
        company: 'COFTTECH',
        date: 'Jul 2025 – Sep 2025',
        responsibilities: [
            'Developed responsive UI components using React',
            'Integrated frontend with backend APIs',
        ],
    },
    {
        role: 'UI/UX Design Intern',
        company: '128 Technologies',
        date: 'Jul 2023 – Aug 2023',
        responsibilities: [
            'Designed user interfaces and user flows',
            'Created wireframes and high-fidelity designs',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">My professional journey</p>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-header">
                                <div>
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <p className="experience-company">{exp.company}</p>
                                </div>
                                <span className="experience-date">{exp.date}</span>
                            </div>
                            <ul className="experience-description">
                                {exp.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
