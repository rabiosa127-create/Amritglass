export type Language = 'en' | 'as';

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  altText: string;
}

export interface WhyChoosePoint {
  title: string;
  description: string;
  iconName: string;
}

export interface TargetAudience {
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  altText: string;
}
