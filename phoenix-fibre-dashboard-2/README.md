# Phoenix Fibre Dashboard

Welcome to the Phoenix Fibre Dashboard! This project serves as a customer portal for managing various aspects of your Phoenix Fibre account. Below is an overview of the project's structure and functionality.

## Project Structure

```
phoenix-fibre-dashboard
├── app
│   ├── layout.tsx          # Main layout for the application
│   ├── head.tsx            # Head section with metadata and styles
│   ├── page.tsx            # Entry point for the application
│   ├── dashboard            # Dashboard section
│   │   ├── layout.tsx      # Layout for dashboard pages
│   │   ├── page.tsx        # Main dashboard view
│   │   ├── analytics        # Analytics page
│   │   │   └── page.tsx
│   │   ├── devices          # Devices management page
│   │   │   └── page.tsx
│   │   ├── billing          # Billing information page
│   │   │   └── page.tsx
│   │   └── settings         # Settings configuration page
│   │       └── page.tsx
│   ├── api                  # API routes
│   │   ├── auth             # Authentication routes
│   │   │   └── route.ts
│   │   ├── invoices         # Invoices management routes
│   │   │   └── route.ts
│   │   └── usage            # Usage data routes
│   │       └── route.ts
│   └── components           # Reusable components
│       ├── Navbar.tsx
│       ├── Sidebar.tsx
│       ├── Topbar.tsx
│       ├── Card.tsx
│       └── charts           # Chart components
│           ├── LineChart.tsx
│           └── BarChart.tsx
├── src
│   ├── lib                  # Library functions
│   │   ├── api.ts
│   │   └── prisma.ts
│   ├── hooks                # Custom hooks
│   │   └── useAuth.ts
│   ├── context              # Context providers
│   │   └── AuthProvider.tsx
│   ├── utils                # Utility functions
│   │   └── format.ts
│   ├── styles               # Global styles
│   │   └── globals.css
│   └── types                # TypeScript types
│       └── index.ts
├── prisma                   # Prisma schema
│   └── schema.prisma
├── .env.example             # Example environment configuration
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # npm configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Project documentation
```

## Features

- **Dashboard Overview**: A comprehensive view of your account, including analytics, devices, billing, and settings.
- **User Authentication**: Secure login and session management.
- **Data Visualization**: Interactive charts for analytics and usage data.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/phoenix-fibre-dashboard.git
   ```

2. Navigate to the project directory:
   ```
   cd phoenix-fibre-dashboard
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up your environment variables by copying `.env.example` to `.env` and updating the values as needed.

5. Run the development server:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.