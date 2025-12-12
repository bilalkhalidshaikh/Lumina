import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface MetricProps {
  value: string;
  label: string;
  description?: string;
}

export enum PageRoute {
  HOME = '/',
  PRODUCT = '/product',
  IMPACT = '/impact',
  ABOUT = '/about',
  CONTACT = '/contact',
}