// src/components/builder/sections/EducationSection.tsx
'use client';

import { useState } from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';
import { generateId } from '@/lib/utils';
import type { Education } from '@/types/resume';

export function EducationSection() {
  const { resume, addEducation, updateEducation, deleteEducation } = useResumeStore();
  const education = resume?.education || [];

  const handleAdd = () => {
    const newEducation: Education = {
      id: generateId(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
    };
    addEducation(newEducation);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <GraduationCap className="w-5 h-5" />
            Education
          </CardTitle>
          <Button variant="outline" size="sm" onClick={handleAdd}>
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {education.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <GraduationCap className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No education added yet</p>
          </div>
        ) : (
          education.map((edu) => (
            <div key={edu.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <Input
                    placeholder="Institution Name"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      placeholder="Degree (e.g., Bachelor's)"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                    />
                    <Input
                      placeholder="Field of Study"
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      type="month"
                      placeholder="Start Date"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                    />
                    <Input
                      type="month"
                      placeholder="End Date"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                    />
                  </div>
                  <Input
                    placeholder="GPA (Optional)"
                    value={edu.gpa || ''}
                    onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteEducation(edu.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

// src/components/builder/sections/SkillsSection.tsx
'use client';

import { useResumeStore } from '@/store/resumeStore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Code, Plus, X } from 'lucide-react';
import { generateId } from '@/lib/utils';
import type { Skill } from '@/types/resume';

export function SkillsSection() {
  const { resume, addSkill, updateSkill, deleteSkill } = useResumeStore();
  const skills = resume?.skills || [];

  const handleAdd = () => {
    const newSkill: Skill = {
      id: generateId(),
      name: '',
      level: 'intermediate',
    };
    addSkill(newSkill);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <Code className="w-5 h-5" />
            Skills
          </CardTitle>
          <Button variant="outline" size="sm" onClick={handleAdd}>
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {skills.map((skill) => (
            <div key={skill.id} className="flex gap-2">
              <Input
                placeholder="Skill name (e.g., JavaScript, Python)"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                className="flex-1"
              />
              <select
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, { level: e.target.value as any })}
                className="px-3 py-2 border rounded-md"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteSkill(skill.id)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
          {skills.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              <Code className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No skills added yet</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// src/components/builder/sections/ProjectsSection.tsx
'use client';

import { useResumeStore } from '@/store/resumeStore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FolderGit2, Plus, Trash2 } from 'lucide-react';
import { generateId } from '@/lib/utils';
import type { Project } from '@/types/resume';

export function ProjectsSection() {
  const { resume, addProject, updateProject, deleteProject } = useResumeStore();
  const projects = resume?.projects || [];

  const handleAdd = () => {
    const newProject: Project = {
      id: generateId(),
      name: '',
      description: '',
      technologies: [],
      highlights: [''],
    };
    addProject(newProject);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <FolderGit2 className="w-5 h-5" />
            Projects
          </CardTitle>
          <Button variant="outline" size="sm" onClick={handleAdd}>
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FolderGit2 className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No projects added yet</p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <Input
                  placeholder="Project Name"
                  value={project.name}
                  onChange={(e) => updateProject(project.id, { name: e.target.value })}
                  className="font-semibold flex-1 mr-2"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteProject(project.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
              <textarea
                placeholder="Project description..."
                value={project.description}
                onChange={(e) => updateProject(project.id, { description: e.target.value })}
                className="w-full min-h-[80px] px-3 py-2 border rounded-md"
              />
              <Input
                placeholder="Technologies (comma-separated)"
                value={project.technologies.join(', ')}
                onChange={(e) => updateProject(project.id, { 
                  technologies: e.target.value.split(',').map(t => t.trim()) 
                })}
              />
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
