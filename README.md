# JoinUp - CPAN144 Group Project (Phase 2)

## Project Overview
**Local Loop (JoinUp)** is a community web platform that helps users discover and share neighborhood events like garage sales, workshops, art fairs, and pop-up markets. Our mission is to solve the visibility problem for small-scale local events by providing a centralized platform for event discovery and participation.

## Implemented Features

| Feature | Description |
|---------|-------------|
| **Dynamic Event Pages** | Next.js dynamic routes (`/events/[id]`) for detailed event views |
| **Responsive Layout** | Mobile-first design with Tailwind CSS |
| **Global State** | Context API for shared event/filter state |
| **Component Library** | Reusable UI components (EventCard, FilterBar) |
| **Intuitive Navigation** | Persistent navbar with Next.js routing |

## 🚀 Getting Started

### Prerequisites
- Node.js ≥18.x
- npm ≥9.x

### Installation
```bash
# Clone repository
git clone https://github.com/Hanpin-com/JoinUp.git

# Navigate to project
cd JoinUp

# Install dependencies
npm install

# Start development server
npm run dev

## Project Structure
```bash
joinup/
├── src/
│   ├── pages/                   # Next.js route handlers
│   │   ├── index.js             # Home page (/) 
│   │   ├── events.js            # Events listing (/events)
│   │   ├── events/[id].js       # Dynamic event details
│   │   └── profile.js           # User profile (/profile)
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Layout.js            # Page layout wrapper
│   │   ├── Navbar.js            # Navigation header
│   │   ├── Footer.js            # Page footer
│   │   ├── EventCard.js         # Event preview card
│   │   └── FilterBar.js         # Event filtering
│   │
│   ├── context/                 # State management
│   │   └── GlobalState.js       # App-wide context
│   │
│   └── styles/                  # Global styles
│       └── globals.css          # Tailwind imports
│
├── public/                      # Static assets
│   ├── screenshots/             # App previews
│   │   ├── home.png
│   │   ├── events.png
│   │   └── profile.png
├── tailwind.config.js           # Tailwind configuration
└── package.json