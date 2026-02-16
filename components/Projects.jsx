const featuredProjects = [
    {
        title: 'AI Job Portal',
        description: 'Job portal with AI-based CV analysis and job recommendations. Features intelligent matching between candidates and job postings using machine learning algorithms.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'ML'],
        github: 'https://github.com/kamranabbasi3404/job-portal-system',
        demo: 'https://demo.example.com/ai-job-portal',
        image: '/hireflow.jpg',
    },
    {
        title: 'Live Face Detection',
        description: 'Real-time face detection system using Python and computer vision. Integrated AI model with frontend interface for live camera processing and recognition.',
        tech: ['Python', 'OpenCV', 'React.js', 'TensorFlow'],
        github: 'https://github.com/kamranabbasi3404/Live-Face-Recognition',
        demo: 'https://live-face-detection.netlify.app/',
        image: '/facedetection.jpg',
    },
    {
        title: 'Buyonix',
        description: 'A smart e-commerce platform featuring AI-based recommendations, visual product search, and an intelligent shopping assistant. Helps users quickly find relevant products using behavior analysis and image similarity matching.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Python', 'ML', 'Docker'],
        github: 'https://github.com/kamranabbasi3404/Buyonix-FYP',
        demo: 'https://demo.example.com/buyonix',
        image: '/buyonix.jpg?v=2',
    },
    {
        title: 'RAG-Based Chatbot',
        description: 'Intelligent chatbot using Retrieval-Augmented Generation. Provides context-aware and document-based responses for better accuracy and relevance.',
        tech: ['Python', 'LangChain', 'RAG', 'React.js'],
        github: 'https://github.com/kamranabbasi3404',
        demo: null,
        image: null, // Add: /projects/rag-chatbot.png
    },
];

const otherProjects = [
    {
        title: 'Restaurant Website',
        description: 'Responsive restaurant website with modern design and interactive menu display.',
        tech: ['JavaScript', 'HTML', 'CSS'],

    },
    {
        title: 'Agriculture UI/UX',
        description: 'User interface and experience design for an agriculture platform.',
        tech: ['Figma', 'UI/UX'],

    },
    {
        title: 'Quiz App',
        description: 'Interactive quiz application with multiple categories and scoring system.',
        tech: ['Java', 'MySQL'],

    },
];

function FeaturedProjectCard({ project, index }) {
    const isReversed = index % 2 === 1;

    return (
        <div className={`featured-project ${isReversed ? 'reversed' : ''}`}>
            <div className="featured-project-content">
                <h3 className="featured-project-title">{project.title}</h3>
                <p className="featured-project-description">{project.description}</p>

                <div className="featured-project-tech">
                    {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="featured-project-links">
                    {project.demo && (
                        <a
                            href={project.demo}
                            className="btn btn-primary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            View Website
                        </a>
                    )}
                    <a
                        href={project.github}
                        className="btn btn-secondary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>

            <div className="featured-project-preview">
                <div className="browser-mockup">
                    <div className="browser-header">
                        <div className="browser-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="browser-url">
                            <span>{project.title.toLowerCase().replace(/\s+/g, '')}.com</span>
                        </div>
                    </div>
                    <div className="browser-content">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="browser-image"
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        ) : (
                            <div className="browser-placeholder">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                                <span>{project.title}</span>
                                <span className="placeholder-hint">Screenshot Coming Soon</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SmallProjectCard({ project }) {
    return (
        <div className="small-project-card">
            <div className="small-project-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
            </div>
            <div className="small-project-content">
                <h4 className="small-project-title">{project.title}</h4>
                <p className="small-project-description">{project.description}</p>
                <div className="small-project-tech">
                    {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Some of my recent work that I&apos;m proud of</p>

                <div className="featured-projects">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                <div className="other-projects-section">
                    <h3 className="other-projects-title">Other Projects</h3>
                    <div className="other-projects-grid">
                        {otherProjects.map((project) => (
                            <SmallProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
