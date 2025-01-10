# Alif Finish

This project is a fully-featured web application built with [Next.js](https://nextjs.org), leveraging [Tailwind CSS](https://tailwindcss.com) and [Shadcn UI](https://shadcn.dev) for styling. It supports multiple languages (Russian, Tajik, and English), has a dark/light theme switcher, and is fully responsive for various screen sizes.

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Development](#development)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- **Responsive Design**: Fully adapted for all screen sizes using Tailwind CSS.
- **Dark/Light Theme**: Built-in support for theme toggling.
- **Multilingual Support**: Includes translations for Russian, Tajik, and English.
- **Reusable UI Components**: Modular and reusable components for consistent design.
- **Progress Bar**: Integrated loading progress indicator.
- **Shadcn UI Library**: For enhanced user interface components.

---

## Project Structure

The project follows a modular structure for scalability and maintainability:

```
public/
├── images/              # Project images
src/
├── app/
│   ├── (auth)/        # Authentication-related logic
│   ├── (web)/         # General website pages
│   ├── globals.css   # Global CSS styles
│   ├── layout.tsx    # Layout for the application
│   ├── metadata.ts   # Metadata for the app
│   └── page.tsx      # Home page logic
├── components/
│   ├── ui/          # Reusable UI components
├── lib/
│   ├── i18n.ts      # Globalization logic
├── providers/
│   ├── theme.tsx    # Theme provider logic
│   └── progress.tsx # Progress bar provider
├── translations/
│   ├── en.js        # English translations
│   ├── ru.js        # Russian translations
│   └── tj.js        # Tajik translations
```

---

## Technologies Used

### Frontend:

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: Component-based library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework.
- **Shadcn UI**: Modern UI components.

### State Management:

- **Zustand**: Lightweight state management library.

### i18n:

- **i18next**: Internationalization framework.
- **react-i18next**: React bindings for i18next.

### Additional Libraries:

- **Axios**: HTTP client for API requests.
- **Radix UI**: Accessible UI primitives.
- **Lodash**: Utility functions for JavaScript.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-url/alif-finish.git
   cd alif-finish
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file and configure the required variables:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   NEXTAUTH_SECRET=your_secret
   ```

---

## Usage

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm run start
# or
yarn start
```

---

## Development

### Adding New Languages

1. Create a new translation file in `src/translations/` (e.g., `fr.js` for French).
2. Add the language to the `i18n.ts` configuration.
3. Update the UI components to support the new language.

### Extending Themes

To customize themes, edit `theme.tsx` in the `providers` folder. Use Tailwind's theme extension capabilities for seamless updates.

---

## Contributing

Contributions are welcome! Please follow the steps below:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
