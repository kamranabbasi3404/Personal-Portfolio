export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">
              Hi, I&apos;m <span className="hero-name-gradient">Kamran Ali Abbasi</span>
            </h1>
            <p className="hero-title">
              AI/ML Engineer | LLMs, RAG &amp; Generative AI | Python | Model Deployment
            </p>
            <p className="hero-description">
              Software Engineering graduate specializing in AI/ML Engineering, with hands-on experience building LLM-powered systems including agentic RAG pipelines, fine-tuned sentiment models, and AI-driven recommendation engines. Proficient in Python, LLM APIs (Groq, Gemini), vector search, and cloud deployment.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                View Projects
              </a>
              <a href="/Kamran Ali Abbasi.pdf" download="Kamran_Ali_Abbasi_Resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero-profile">
            <div className="hero-profile-placeholder">
              <img src="/mine.jpeg" alt="Kamran Ali Abbasi" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
