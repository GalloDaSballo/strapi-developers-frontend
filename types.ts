export interface Skill {
  label: string;
}

export type Tag = Skill

export interface Profile {

  hasPaid: boolean; // TODO Figure out how to use

  name: string;
  location: string;
  image: {
    url: string;
  }
  slug: string;
  bio: string;
  languages: string;
  preferred_salary: string;
  time_zone: string;
  title: string;
  linkedin: string;
  github: string;
  skills: Skill[]
}