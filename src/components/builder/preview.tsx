'use client';

import { useResumeStore } from '@/store/resumeStore';
import { ModernTemplate } from './templates/ModernTemplate';
import { ProfessionalTemplate } from './templates/ProfessionalTemplate';
import { MinimalistTemplate } from './templates/MinimalistTemplate';

export function ResumePreview() {
  const { resume } = useResumeStore();

  if (!resume) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <div className="text-center">
          <p className="text-lg font-medium">No resume data yet</p>
          <p className="text-sm mt-2">Start filling in your information</p>
        </div>
      </div>
    );
  }

  // Select template based on templateId
  const renderTemplate = () => {
    switch (resume.templateId) {
      case 'modern':
        return <ModernTemplate data={resume} />;
      case 'professional':
        return <ProfessionalTemplate data={resume} />;
      case 'minimalist':
        return <MinimalistTemplate data={resume} />;
      default:
        return <ModernTemplate data={resume} />;
    }
  };

  return (
    <div className="bg-white shadow-lg" style={{ 
      width: '210mm',  // A4 width
      minHeight: '297mm',  // A4 height
      margin: '0 auto',
      padding: 0,
    }}>
      {renderTemplate()}
    </div>
  );
}
