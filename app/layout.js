import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://kamranali-portfolio.netlify.app'),
  title: 'Kamran Ali Abbasi | AI/ML Engineer | Full Stack Developer',
  description: 'Software Engineering graduate specializing in AI/ML Engineering and Full Stack Development, with hands-on experience building LLM-powered systems including agentic RAG pipelines, fine-tuned sentiment models, and AI-driven recommendation engines.',
  keywords: ['AI/ML Engineer', 'Full Stack Developer', 'LLMs', 'RAG', 'Generative AI', 'Python', 'Model Deployment', 'Software Engineer', 'Vector Search', 'Machine Learning', 'Agentic AI'],
  authors: [{ name: 'Kamran Ali Abbasi' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Kamran Ali Abbasi | AI/ML Engineer | Full Stack Developer',
    description: 'Software Engineering graduate specializing in AI/ML Engineering and Full Stack Development, building LLM-powered systems and agentic RAG pipelines.',
    type: 'website',
  },
  verification: {
    google: 'google5bd7377c5e350e49',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
