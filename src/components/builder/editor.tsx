'use client';

import { useState, useEffect } from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { PersonalInfoSection } from './sections/PersonalInfoSection';
import { SummarySection } from './sections/SummarySection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ResumePreview } from './Preview';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Eye, 
  EyeOff, 
  Save, 
  Download, 
  Palette,
  Settings 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function ResumeEditor() {
  const { 
    resume, 
    sections,
    isPreviewMode,
    isSaving,
    lastSaved,
    setPreviewMode,
    activeSection,
    setActiveSection
  } = useResumeStore();

  const [showStylePanel, setShowStylePanel] = useState(false);

  // Auto-save functionality
  useEffect(() => {
    if (resume) {
      const timer = setTimeout(() => {
        // Save to database/localStorage
        console.log('Auto-saving resume...');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [resume]);

  const handleExport = () => {
    console.log('Exporting resume as PDF...');
    // PDF export logic will go here
  };

  const enabledSections = sections.filter(s => s.enabled).sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {resume?.title || 'Untitled Resume'}
              </h1>
              {isSaving && (
                <span className="text-sm text-gray-500">Saving...</span>
              )}
              {lastSaved && !isSaving && (
                <span className="text-sm text-gray-500">
                  Saved {new Date(lastSaved).toLocaleTimeString()}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowStylePanel(!showStylePanel)}
              >
                <Palette className="w-4 h-4 mr-2" />
                Customize
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPreviewMode(!isPreviewMode)}
              >
                {isPreviewMode ? (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Edit
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </>
                )}
              </Button>

              <Button
                size="sm"
                onClick={handleExport}
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className={cn(
            "space-y-6",
            isPreviewMode && "hidden lg:block"
          )}>
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Build Your Resume</h2>
              <p className="text-sm text-gray-600 mb-6">
                Fill in your information below. Your resume will update in real-time.
              </p>

              <div className="space-y-6">
                {enabledSections.map((section) => {
                  switch (section.type) {
                    case 'personalInfo':
                      return <PersonalInfoSection key={section.id} />;
                    case 'summary':
                      return <SummarySection key={section.id} />;
                    case 'experience':
                      return <ExperienceSection key={section.id} />;
                    case 'education':
                      return <EducationSection key={section.id} />;
                    case 'skills':
                      return <SkillsSection key={section.id} />;
                    case 'projects':
                      return <ProjectsSection key={section.id} />;
                    default:
                      return null;
                  }
                })}
              </div>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className={cn(
            "lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]",
            !isPreviewMode && "hidden lg:block"
          )}>
            <Card className="p-6 h-full overflow-auto">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Preview</h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Zoom:</span>
                  <Button variant="ghost" size="sm">100%</Button>
                </div>
              </div>
              <ResumePreview />
            </Card>
          </div>
        </div>
      </div>

      {/* Style Panel (Sidebar) */}
      {showStylePanel && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl border-l z-40 overflow-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Customize Style</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowStylePanel(false)}
              >
                ✕
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Color customization */}
              <div>
                <h3 className="text-sm font-medium mb-3">Colors</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Primary</span>
                    <input
                      type="color"
                      defaultValue="#2563eb"
                      className="w-10 h-10 rounded cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Secondary</span>
                    <input
                      type="color"
                      defaultValue="#64748b"
                      className="w-10 h-10 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Font customization */}
              <div>
                <h3 className="text-sm font-medium mb-3">Typography</h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm">Heading Font</label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md">
                      <option>Inter</option>
                      <option>Roboto</option>
                      <option>Open Sans</option>
                      <option>Lato</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm">Body Font</label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md">
                      <option>Inter</option>
                      <option>Roboto</option>
                      <option>Open Sans</option>
                      <option>Lato</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Spacing customization */}
              <div>
                <h3 className="text-sm font-medium mb-3">Spacing</h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm">Margin</label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md">
                      <option>Compact</option>
                      <option>Normal</option>
                      <option>Relaxed</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm">Line Height</label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md">
                      <option>Tight</option>
                      <option>Normal</option>
                      <option>Relaxed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
