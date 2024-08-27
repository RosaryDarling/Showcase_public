
// jest.setup.js
import '@testing-library/jest-dom'


// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
  }),
}));

// Suppress specific console warnings
const originalError = console.error;
console.error = (...args) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
};

// Ensure mocks are reset after each test
afterEach(() => {
  jest.clearAllMocks();
});

