import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Kamran Ali Abbasi | Software Engineer',
  description: 'Software Engineering student with hands-on experience in full-stack web development and AI-based systems. Specializing in MERN stack and machine learning integration.',
  keywords: ['Software Engineer', 'MERN Stack', 'AI/ML', 'Full Stack Developer', 'React', 'Node.js', 'Machine Learning'],
  authors: [{ name: 'Kamran Ali Abbasi' }],
  openGraph: {
    title: 'Kamran Ali Abbasi | Software Engineer',
    description: 'Software Engineering student specializing in MERN stack and AI/ML integration.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
