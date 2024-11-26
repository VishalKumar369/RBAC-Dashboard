# Role-Based Access Control (RBAC) Dashboard

## Project Overview
A modern, responsive React-based RBAC dashboard that allows comprehensive user and role management with dynamic permission handling.

## Features
- User Management
  - Add, edit, and delete users
  - Assign roles to users
  - Toggle user status (Active/Inactive)

- Role Management
  - Create and modify roles
  - Granular permission assignment
  - Dynamic permission selection

- Add search and filter capabilities

## Tech Stack
- React
- Tailwind CSS
- Lucide React Icons
- State Management: React Hooks (useState)

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## Security Considerations
- Input validation on forms
- State-based access control
- Modular component design
- No direct mutations of state

## Future Improvements
- Implement actual authentication
- Add more complex permission models
- Create backend API integration
