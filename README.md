# MsaadaDesk 💬
### Every conversation deserves a solution.

**MsaadaDesk** is a modern, bilingual customer-support helpdesk designed to make customer service simpler, smarter, and more accessible.

Built with **Laravel, React, TypeScript, and Inertia.js**, MsaadaDesk brings customer conversations, support tickets, and team workflows into one intuitive workspace — with English and Kiswahili at the heart of the experience.

> Great customer support isn't just about answering questions. It's about building relationships, earning trust, and turning problems into solutions.

---

## ✨ About the Project

Customer support can become difficult to manage when conversations, customer information, and support requests are scattered across different platforms.

MsaadaDesk aims to solve this by providing a centralized workspace where support teams can organize requests, track progress, manage customer interactions, and work together more effectively.

Designed with a clean interface and a bilingual-first approach, the platform aims to make professional customer-support tools more accessible to businesses and teams in Kenya and beyond.

## 🚀 Key Features

### 🎫 Ticket Management
- Centralized customer-support ticket workspace.
- Track ticket statuses and priorities.
- Organize and manage customer requests.
- Monitor ticket progress from creation to resolution.

### 👥 Customer Management
- Centralized customer profiles.
- Organize customer information.
- Build a clearer picture of customer support history.

### 💬 Conversation Management
- Keep customer-support conversations organized.
- Support structured communication histories.
- Create a foundation for future multi-channel support.

### 🌍 Bilingual Experience
- English and Kiswahili-focused interface.
- Designed with multilingual customer interactions in mind.
- A more accessible support experience for diverse users.

### 📊 Dashboard & Analytics
- Overview of support activity.
- Ticket status summaries.
- Customer and support-performance insights.
- A centralized workspace for support operations.

### 🛡️ Authentication & Access
- User registration and login.
- Authentication powered by Laravel's authentication ecosystem.
- Foundation for role-based access and team management.

> **Development note:** MsaadaDesk is actively being developed. Some features are currently represented by illustrative dashboard data or are part of the planned development roadmap. Demo data should not be interpreted as live customer activity or real third-party integrations.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Laravel 13 | Backend application framework |
| PHP | Server-side development |
| React | Interactive user interface |
| TypeScript | Type-safe frontend development |
| Inertia.js | Backend and frontend integration |
| Tailwind CSS | Styling and responsive design |
| SQLite | Development database |
| Laravel Fortify | Authentication functionality |
| Vite | Frontend tooling and asset bundling |

---

## 🎨 Design Philosophy

MsaadaDesk is built around four principles:

- **Simplicity:** A clean interface that makes everyday support tasks easier.
- **Accessibility:** A bilingual approach that embraces both English and Kiswahili.
- **Organization:** A centralized workspace for customer requests and support operations.
- **Scalability:** An architecture that can evolve as support teams and business needs grow.

---

## 📸 Screenshots

Screenshots of the application will be added as development progresses.

Suggested screenshots:
- Public landing page
- Login and registration
- Support dashboard
- Ticket management workspace
- Customer profiles
- Ticket conversation interface

---

## ⚙️ Getting Started

Follow these instructions to run MsaadaDesk locally.

### Prerequisites

Make sure you have installed:

- PHP 8.3 or later
- Composer
- Node.js and npm
- SQLite
- Git

### 1. Clone the repository

```bash
git clone https://github.com/TheDonDev/msaadadesk.git
```

```bash
cd msaadadesk
```

### 2. Install dependencies

```bash
composer install
```

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

### 4. Configure the database

Ensure SQLite is available and create the database file:

```bash
touch database/database.sqlite
```

Update your `.env` file:

```env
DB_CONNECTION=sqlite
```

### 5. Run database migrations

```bash
php artisan migrate
```

### 6. Start the development environment

```bash
composer run dev
```

Open the application in your browser:

```text
http://localhost:8000
```

---

## 🗺️ Development Roadmap

MsaadaDesk is evolving towards a complete customer-support management platform.

- [x] Initial Laravel and React application setup
- [x] Authentication scaffolding
- [x] Public landing page design
- [x] Initial dashboard interface
- [x] Responsive application layout
- [ ] Complete ticket creation and management
- [ ] Ticket assignment and priority management
- [ ] Customer profile management
- [ ] Ticket conversation history
- [ ] English and Kiswahili language switching
- [ ] Team member and role management
- [ ] Notifications and email workflows
- [ ] Support analytics and reporting
- [ ] Knowledge base
- [ ] Integration-ready architecture for external support channels

---

## 🔮 The Vision

The long-term vision for MsaadaDesk is to grow beyond a basic ticketing application into a unified customer-support workspace.

Future development will explore:

- Intelligent ticket categorization.
- AI-assisted response suggestions.
- Customer sentiment analysis.
- Automated support workflows.
- Integration with external communication channels.
- Advanced reporting and service-performance analytics.

The goal is simple: help businesses spend less time managing support requests and more time creating meaningful customer experiences.

---

## 👨‍💻 Author

**Donald Mwanga Makori**

Software Engineer | Full-Stack Developer | AI & Technology Enthusiast

- **GitHub:** [@TheDonDev](https://github.com/TheDonDev)
- **Portfolio:** [TheDonDev](https://thedondev.github.io./)
- **Email:** donaldmwanga33@gmail.com
- **Location:** Nairobi, Kenya

---

## 🤝 Contributing

Contributions, suggestions, bug reports, and feature ideas are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request describing your contribution.

---

## 📄 License

The licensing terms for this project have not yet been established.

---

<p align="center">
  <strong>MsaadaDesk 💬</strong><br>
  Every conversation deserves a solution.
  <br><br>
  Built with ❤️ in Kenya 🇰🇪
</p>