export interface Contact {
  id: number;
  Phone: string;
  Mobile: string;
  Address: string;
  Email: string;
  created_by: number;
  updated_by: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface CreatedBy {
  id: number;
  firstname: string;
  lastname: string;
  username?: any;
}

export interface UpdatedBy {
  id: number;
  firstname: string;
  lastname: string;
  username?: any;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Formats {
  thumbnail: Thumbnail;
  small: Small;
}

export interface ProfilePicture {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  created_by: number;
  updated_by: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface Skill {
  id: number;
  percent: number;
  title: string;
  created_by: number;
  updated_by: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface Social {
  id: number;
  link: string;
  Name: string;
  Icon: string;
  created_by: number;
  updated_by: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface Language {
  id: number;
  languageName: string;
  percent: number;
  created_by: number;
  updated_by: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface WorkHistory {
  id: number;
  presentProfession: string;
  enterprise: string;
  startDate: string | null;
  endDate: string | null;
  location: string;
  description: string;
  created_by: number;
  updated_by: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface Education {
  id: number;
  educationLevel: string;
  collegeCourse: string | null;
  location: string;
  startDate: string | null;
  endDate: string | null;
  schoolName: string;
  created_by: number;
  updated_by: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface Profile {
  id: number;
  name: string;
  birthday: string;
  nationality: string;
  relationship: string;
  role: string;
  contact: Contact;
  Biography: string;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  created_at: string | null;
  updated_at: string | null;
  profilePicture: ProfilePicture;
  skills: Skill[];
  socials: Social[];
  languages: Language[];
  work_histories: WorkHistory[];
  educations: Education[];
}
