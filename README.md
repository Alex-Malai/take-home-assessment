# GitHub Homepage Cypress Tests

This repository contains automated tests for the GitHub homepage (https://github.com/) using Cypress with TypeScript. The project aims to verify key functionalities and ensure a consistent user experience.

## Table of Contents
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Test Scenarios](#test-scenarios)

## Installation

1. Clone the repository:
   git clone https://github.com/Alex-Malai/take-home-assignment.git
   cd take-home-assignment
2. Install dependencies:
   npm install

## Running Tests

To run it interactivly:
npx cypress open

To run it headless:
npx cypress run

## Project Structure
github-homepage-tests/
├── cypress/
│   ├── e2e/                # Contains test files (e.g., homepage tests)
│   ├── fixtures/           # Placeholder for test data (optional)
│   ├── support/            # Custom commands and setup files
│   │   ├── commands.ts
│   │   └── e2e.ts
├── .gitignore
├── cypress.config.ts       # Cypress configuration
├── package.json            # Project metadata and npm scripts
├── tsconfig.json           # TypeScript configuration for Cypress
├── README.md               # Project documentation
└── package-lock.json       # Lock file (generated after `npm install`)
