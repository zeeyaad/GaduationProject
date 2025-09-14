# GProject - React + Tailwind CSS + Vite

A modern React application built with Vite and styled with Tailwind CSS.

## Features

- ⚡ **Fast Development** - Built with Vite for lightning-fast hot module replacement
- 🎨 **Beautiful UI** - Styled with Tailwind CSS for modern, responsive design
- ⚛️ **React 18** - Latest React features with hooks and modern patterns
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🔧 **Developer Friendly** - ESLint configuration and modern tooling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local URL (usually `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
GProject/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind imports
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Customization

### Tailwind CSS

The project is configured with Tailwind CSS. You can customize the design system by editing `tailwind.config.js`.

### Adding New Components

Create new components in the `src/` directory and import them in `App.jsx` or other components.

## License

This project is open source and available under the [MIT License](LICENSE). 