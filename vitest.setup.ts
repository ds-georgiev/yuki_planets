import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Debugging step
console.log('Matchers:', matchers);

// Add custom matchers from Testing Library
expect.extend(matchers);
