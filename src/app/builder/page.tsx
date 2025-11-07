'use client';

import { useEffect } from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { ResumeEditor } from '@/components/builder/Editor';
import type { ResumeData } from '@/types/resume';

export default function BuilderPage() {
  const { setResume } = useResumeStore();

  // Initialize with sample data for demo
  useEffect(() => {
    const sampleResume: ResumeData = {
      title: 'My Professional Resume',
      templateId: 'modern',
      personalInfo: {
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        website: 'https://johndoe.com',
        linkedin: 'linkedin.com/in/johndoe',
        github: 'github.com/johndoe',
        portfolio: 'https://portfolio.johndoe.com',
      },
      summary: 'Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about building scalable applications and leading high-performing teams.',
      experience: [
        {
          id: '1',
          company: 'Tech Corp',
          position: 'Senior Software Engineer',
          startDate: '2021-01',
          endDate: '',
          current: true,
          location: 'San Francisco, CA',
          description: '',
          highlights: [
            'Led development of microservices architecture serving 1M+ users',
            'Improved application performance by 40% through optimization',
            'Mentored team of 5 junior developers',
          ],
        },
        {
          id: '2',
          company: 'Startup Inc',
          position: 'Software Engineer',
          startDate: '2019-06',
          endDate: '2020-12',
          current: false,
          location: 'Remote',
          description: '',
          highlights: [
            'Built and deployed RESTful APIs using Node.js and Express',
            'Implemented CI/CD pipelines reducing deployment time by 60%',
            'Collaborated with design team to create responsive web applications',
          ],
        },
      ],
      education: [
        {
          id: '1',
          institution: 'University of California',
          degree: "Bachelor's Degree",
          field: 'Computer Science',
          startDate: '2015-09',
          endDate: '2019-05',
          gpa: '3.8',
        },
      ],
      skills: [
        { id: '1', name: 'JavaScript', level: 'expert' },
        { id: '2', name: 'React', level: 'expert' },
        { id: '3', name: 'Node.js', level: 'advanced' },
        { id: '4', name: 'TypeScript', level: 'advanced' },
        { id: '5', name: 'Python', level: 'intermediate' },
        { id: '6', name: 'AWS', level: 'intermediate' },
        { id: '7', name: 'Docker', level: 'intermediate' },
        { id: '8', name: 'PostgreSQL', level: 'advanced' },
      ],
      projects: [
        {
          id: '1',
          name: 'E-Commerce Platform',
          description: 'Built a full-stack e-commerce platform with React, Node.js, and Stripe integration',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
          highlights: [],
        },
        {
          id: '2',
          name: 'Task Management App',
          description: 'Developed a real-time task management application with team collaboration features',
          technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
          highlights: [],
        },
      ],
      certifications: [],
      customSections: [],
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        text: '#1e293b',
      },
      fonts: {
        heading: 'Inter',
        body: 'Inter',
      },
      spacing: {
        margin: 'normal',
        lineHeight: 'normal',
      },
    };

    setResume(sampleResume);
  }, [setResume]);

  return <ResumeEditor />;
}
