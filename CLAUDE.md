# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript portfolio website bootstrapped with Create React App. The project uses React 19 with TypeScript and includes standard CRA tooling for development, testing, and building.

## Essential Commands

### Development
- `npm start` - Runs development server on http://localhost:3000 with hot reload
- `npm test` - Launches Jest test runner in watch mode
- `npm run build` - Creates production build in `build/` folder
- `npm run eject` - Ejects from CRA (one-way operation, use with caution)

### Testing
- `npm test` - Run all tests in watch mode
- `npm test -- --coverage` - Run tests with coverage report
- `npm test -- --watchAll=false` - Run tests once without watch mode

## Architecture

### Project Structure
- `src/` - Main source code directory
  - `App.tsx` - Main application component
  - `index.tsx` - Application entry point
  - `*.test.tsx` - Test files (co-located with components)
  - `setupTests.ts` - Jest test configuration
  - `reportWebVitals.ts` - Web Vitals performance monitoring

### Technology Stack
- **React 19** with TypeScript
- **Create React App** for build tooling and configuration
- **ESLint** with react-app configuration
- **Jest** and **React Testing Library** for testing
- **TypeScript** with strict mode enabled

### Key Configuration
- TypeScript configured with strict mode and ES5 target
- ESLint extends `react-app` and `react-app/jest` configurations
- Jest setup includes `@testing-library/jest-dom` custom matchers

## Development Notes

### TypeScript Configuration
- Strict mode enabled with consistent file casing enforcement
- JSX transformation uses `react-jsx` (React 17+ style)
- Module resolution set to `node` with ESNext modules

### Testing Setup
- Tests use React Testing Library with Jest DOM matchers
- Test files should be co-located with components using `*.test.tsx` naming
- `setupTests.ts` configures Jest environment and custom matchers

### Build Process
- Production builds are optimized and minified
- Static assets are hashed for cache busting
- Build output goes to `build/` directory