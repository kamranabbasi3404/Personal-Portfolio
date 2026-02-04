export default function Hero() {
    // Change to true when you add your photo at public/profile.jpg
    const hasProfileImage = false;

    return (
        <section id="about" className="hero">
            {/* Animated Background Blobs */}
            <div className="bg-gradient-blur">
                <div className="bg-blob bg-blob-1"></div>
                <div className="bg-blob bg-blob-2"></div>
                <div className="bg-blob bg-blob-3"></div>
            </div>

            {/* Grid Pattern */}
            <div className="bg-grid"></div>

            {/* Floating Shapes */}
            <div className="hero-shapes">
                <div className="hero-shape hero-shape-1"></div>
                <div className="hero-shape hero-shape-2"></div>
                <div className="hero-shape hero-shape-3"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    {/* Profile Picture */}
                    <div className="hero-profile">
                        {hasProfileImage ? (
                            <img
                                src="/profile.jpg"
                                alt="Kamran Ali Abbasi"
                                className="hero-profile-img"
                            />
                        ) : (
                            <div className="hero-profile-placeholder">
                                <img
                                    src="/mine.jpeg"
                                    alt="Kamran Ali Abbasi"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                                />
                            </div>
                        )}
                        <div className="hero-profile-status">
                            <span className="status-dot"></span>
                            Available
                        </div>
                    </div>

                    <h1 className="hero-name">
                        Hi, I&apos;m <span className="hero-name-gradient">Kamran Ali Abbasi</span>
                    </h1>

                    <p className="hero-title">
                        Software Engineering Student | MERN Stack Developer | AI/ML Project Experience
                    </p>

                    <p className="hero-description">
                        I am a Software Engineering student with hands-on experience in full-stack
                        web development and AI-based systems. I build scalable MERN applications
                        and integrate machine learning models into real products. My focus is on
                        practical problem-solving, clean code, and performance.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            View Projects
                        </a>
                        <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
