import '@testing-library/jest-dom';
import React from 'react';

// Mock lottie-react to avoid canvas errors
jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => React.createElement('div', { 'data-testid': 'lottie-mock' }),
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => React.createElement('img', props),
}));

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...rest }: any) => React.createElement('a', { href, ...rest }, children),
}));

// Mock PageLayout to render children without layout wrapper
jest.mock('@/components/PageLayout', () => ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children));


// Mock usePathname for Navigation tests
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));