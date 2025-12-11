// src/types/firebase.ts
export interface UserData {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "candidate" | "employer";
  createdAt: string;
  updatedAt: string;
  profileComplete: boolean;
  onboardingCompleted: boolean;
}

export interface CandidateData {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  currentJobTitle: string;
  experienceYears: number;
  skills: string[];
  createdAt: string;
  updatedAt: string;
  applications: string[];
  savedJobs: string[];
  profileImage: string;
  resumeUrl: string;
  location: string;
  phoneNumber: string;
  onboardingCompleted: boolean;
}

export interface EmployerData {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companySize: string;
  industry: string;
  createdAt: string;
  updatedAt: string;
  jobsPosted: string[];
  companyLogo: string;
  website: string;
  description: string;
  phoneNumber: string;
  onboardingCompleted: boolean;
}
