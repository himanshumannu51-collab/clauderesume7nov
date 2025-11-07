import { ResumeData } from '@/types/resume';
import { formatDateRange } from '@/lib/utils';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface Props {
  data: ResumeData;
}

export function ModernTemplate({ data }: Props) {
  const { personalInfo, summary, experience, education, skills, projects } = data;
  const colors = data.colors;

  return (
    <div className="w-full h-full p-12 font-sans" style={{ fontFamily: data.fonts.body }}>
      {/* Header */}
      <header className="mb-8">
        <h1 
          className="text-4xl font-bold mb-2" 
          style={{ color: colors.primary, fontFamily: data.fonts.heading }}
        >
          {personalInfo.fullName}
        </h1>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mt-2">
          {personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {personalInfo.website.replace('https://', '')}
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              {personalInfo.linkedin.replace('linkedin.com/in/', '')}
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              {personalInfo.github.replace('github.com/', '')}
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {summary && (
        <section className="mb-6">
          <h2 
            className="text-xl font-bold mb-3 pb-2 border-b-2" 
            style={{ 
              color: colors.primary,
              borderColor: colors.primary,
              fontFamily: data.fonts.heading 
            }}
          >
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Work Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-xl font-bold mb-3 pb-2 border-b-2" 
            style={{ 
              color: colors.primary,
              borderColor: colors.primary,
              fontFamily: data.fonts.heading 
            }}
          >
            Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>{formatDateRange(exp.startDate, exp.endDate, exp.current)}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                    {exp.highlights.filter(h => h.trim()).map((highlight, idx) => (
                      <li key={idx} className="leading-relaxed">{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-xl font-bold mb-3 pb-2 border-b-2" 
            style={{ 
              color: colors.primary,
              borderColor: colors.primary,
              fontFamily: data.fonts.heading 
            }}
          >
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{formatDateRange(edu.startDate, edu.endDate, false)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-xl font-bold mb-3 pb-2 border-b-2" 
            style={{ 
              color: colors.primary,
              borderColor: colors.primary,
              fontFamily: data.fonts.heading 
            }}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${colors.primary}20`,
                  color: colors.primary,
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-xl font-bold mb-3 pb-2 border-b-2" 
            style={{ 
              color: colors.primary,
              borderColor: colors.primary,
              fontFamily: data.fonts.heading 
            }}
          >
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-gray-700 text-sm mb-1">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.filter(t => t.trim()).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${colors.secondary}20`,
                          color: colors.secondary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
