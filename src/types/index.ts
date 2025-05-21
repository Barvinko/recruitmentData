export interface RecruitmentExampleText {
  row: string;
  copy?: boolean;
}
export interface RecruitmentExample {
  id: number;
  title: string;
  text: RecruitmentExampleText[];
  image?: string;
}

// Image gallery item type
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description?: string;
}

// Recruitment place type
export interface RecruitmentPlace {
  id: number;
  title: string;
  description: string;
  images: GalleryImage[];
  tips: string[];
}
