# JoinUp - CPAN144 Group Project (Phase 2)

## Project Overview
**Local Loop (JoinUp)** is a community web platform that helps users discover and share neighborhood events like garage sales, workshops, art fairs, and pop-up markets. Our mission is to solve the visibility problem for small-scale local events by providing a centralized platform for event discovery and participation.

## Implemented Features

| Feature | Description |
|---------|-------------|
| **Dynamic Event Pages** | Next.js dynamic routes (`/events/[id]`) for detailed event views |
| **Responsive Layout** | Mobile-first design with Tailwind CSS |
| **Global State Management** | Context API for shared event/filter state |
| **Component Library** | Reusable UI components (EventCard, FilterBar, Layout, Navbar) |
| **Authentication System** | Customer login & logout using a custom `AuthContext` |
| **Sign-Up Feature** | Users can create their own accounts directly from the home page |
| **Event Management** | Logged-in users can add and delete event cards; logged-out users can still view events |
| **Test Account Access** | Pre-set credentials for quick exploration without sign-up |
| **User-Friendly Navigation** | Persistent navbar, home-page CTAs, and "Back to Home" button on login page |
| **Hero & Feature Sections** | Engaging home page with clear descriptions of platform benefits |

---

## 🧪 Test Account
Log in instantly with the following credentials:
Email: customer@example.com
Password: joinup123

---


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
│   ├── pages/                   
│   │   ├── index.js             # Home page with hero, features, and test account info
│   │   ├── events.js            # Events listing (filters + event cards)
│   │   ├── events/[id].js       # Dynamic event detail page
│   │   ├── login.js             # Customer login page (with back-to-home button)
│   │   ├── signup.js            # Sign-up page for creating new accounts
│   │   └── profile.js           # User profile page
│   │
│   ├── components/              
│   │   ├── Layout.js            # Page layout wrapper
│   │   ├── Navbar.js            # Navigation header
│   │   ├── Footer.js            # Page footer
│   │   ├── EventCard.js         # Event preview card with RSVP & delete option
│   │   └── FilterBar.js         # Event filtering UI
│   │
│   ├── context/                 
│   │   ├── AuthContext.js       # Authentication context
│   │   └── GlobalState.js       # App-wide state management
│   │
│   └── styles/                  
│       └── globals.css          # Tailwind global styles
│
├── public/                      
│   ├── screenshots/             # App previews
│   │   ├── home.png
│   │   ├── events.png
│   │   └── profile.png
├── tailwind.config.js           
└── package.json              