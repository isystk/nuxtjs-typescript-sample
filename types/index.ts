export * from './state';

export interface SkillItem {
  name: string;
  rating: number;
  noDivider: boolean;
  text: string;
}

export interface Skill {
  title: string;
  color: string;
  rating: number;
  text: string;
  items: SkillItem[];
}
