
export interface Character {
  id: string;
  name: string;
  variant: 'Main' | 'Left' | 'Right';
  rarity: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
