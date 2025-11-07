import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Resume Builder Pro',
  description: 'Professional resume builder',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
