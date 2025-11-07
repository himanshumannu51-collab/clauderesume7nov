import { ReactNode } from 'react';

export default function TemplatesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {children}
    </div>
  );
}
