'use client';

import { useResumeStore } from '@/store/resumeStore';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

export function PersonalInfoSection() {
  const { resume, updatePersonalInfo } = useResumeStore();
  const personalInfo = resume?.personalInfo || {};

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <User className="w-5 h-5" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-sm font-medium block mb-2">
              Full Name *
            </label>
            <Input
              placeholder="John Doe"
              value={personalInfo.fullName || ''}
              onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              Email *
            </label>
            <Input
              type="email"
              placeholder="john@example.com"
              value={personalInfo.email || ''}
              onChange={(e) => updatePersonalInfo({ email: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              Phone *
            </label>
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={personalInfo.phone || ''}
              onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium block mb-2">
              Location *
            </label>
            <Input
              placeholder="San Francisco, CA"
              value={personalInfo.location || ''}
              onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              Website
            </label>
            <Input
              type="url"
              placeholder="https://yourwebsite.com"
              value={personalInfo.website || ''}
              onChange={(e) => updatePersonalInfo({ website: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              LinkedIn
            </label>
            <Input
              placeholder="linkedin.com/in/johndoe"
              value={personalInfo.linkedin || ''}
              onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              GitHub
            </label>
            <Input
              placeholder="github.com/johndoe"
              value={personalInfo.github || ''}
              onChange={(e) => updatePersonalInfo({ github: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              Portfolio
            </label>
            <Input
              type="url"
              placeholder="https://portfolio.com"
              value={personalInfo.portfolio || ''}
              onChange={(e) => updatePersonalInfo({ portfolio: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
