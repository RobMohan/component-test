# AI Design System

A comprehensive, customizable component library built with React and Tailwind CSS, featuring buttons, cards, and stat cards with a custom color palette. This project explores how AI can accelerate design system workflows and improve design-to-development collaboration.

![Design System Preview](https://via.placeholder.com/1200x600?text=Add+Screenshot+Here)

## 🚀 Live Demo

**[View Live Demo](https://component-test-ashy.vercel.app)** | **[GitHub Repository](https://github.com/RobMohan/component-test)**

## ✨ Features

- 🎨 **Custom Design System** - Unique color palette with purple, lime-green, and red variants
- 🔘 **Button Component** - 6 variants, 4 sizes, icon support, and all interactive states
- 📇 **Card Component** - Flexible content cards with optional headers and footers
- 📊 **Stat Card Component** - Dashboard-style metric cards with trend indicators
- 📚 **Interactive Documentation** - Separate pages for each component with live examples
- 🧭 **React Router Navigation** - Easy navigation between component pages
- 📋 **Props Tables** - Complete documentation for every prop
- 💻 **Code Examples** - Copy-paste ready code snippets for each component
- ♿ **Accessible** - Proper focus states, keyboard navigation, and semantic HTML
- 🧪 **Tested** - Comprehensive unit tests with Vitest
- 📱 **Responsive** - Works beautifully on all screen sizes

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/RobMohan/component-test.git
cd component-test

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 🎨 Components

### Button

A versatile button component with multiple variants, sizes, and states.

**Features:**
- 6 variants: primary, secondary, destructive, outline, ghost, link
- 4 sizes: small, default, large, icon-only
- Icon support (left or right positioning)
- Disabled states
- Full keyboard accessibility

[View Button Documentation →](https://component-test-ashy.vercel.app/button)

### Card

A flexible content card component for displaying information with optional headers, content, and footers.

**Features:**
- Optional title and description
- Custom content area
- Optional footer (perfect for action buttons)
- Clean, minimal design

[View Card Documentation →](https://component-test-ashy.vercel.app/card)

### StatCard

Dashboard-style metric cards for displaying statistics with trend indicators.

**Features:**
- Large value display
- Icon support
- Trend indicators with color coding (positive/neutral/negative)
- Perfect for dashboards and analytics

[View StatCard Documentation →](https://component-test-ashy.vercel.app/stat-card)

## 🎨 Color Palette
```javascript
colors: {
  primary: {
    DEFAULT: '#8B7BA8',  // Purple
    hover: '#7A6A97',
    disabled: '#B5AAC8',
  },
  secondary: {
    DEFAULT: '#C8D494',  // Lime Green
    hover: '#B7C383',
    disabled: '#DDE4BA',
  },
  destructive: {
    DEFAULT: '#D84444',  // Red
    hover: '#C33333',
    disabled: '#E89999',
  },
}
```

## 📁 Project Structure
```
component-test/
├── src/
│   ├── components/           # Reusable components
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   ├── Card.jsx
│   │   └── StatCard.jsx
│   ├── pages/               # Documentation pages
│   │   ├── HomePage.jsx
│   │   ├── ButtonPage.jsx
│   │   ├── CardPage.jsx
│   │   └── StatCardPage.jsx
│   ├── layout/              # Shared layout
│   │   └── DocsLayout.jsx
│   ├── styles/
│   │   └── global.css
│   ├── test/
│   │   └── setup.js
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vitest.config.js
└── README.md
```

## 🧪 Testing

Run the test suite:
```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test:coverage
```

Current test coverage:
- ✅ Button component: 45+ test cases
- 🔄 Card component: Coming soon
- 🔄 StatCard component: Coming soon

## 🛠️ Built With

- **Framework:** React 18 + Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

## 🚀 Deployment

The project is configured for automatic deployment on Vercel. Any push to the `main` branch will trigger a new deployment.

### Manual Deployment
```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## 💡 About This Project

This is a test project created to explore how AI can be leveraged to speed up design system workflows and improve collaboration between designers and developers. Through this experiment, I'm learning how AI tools can help:

- Translate design concepts into production-ready components
- Generate comprehensive documentation
- Maintain consistency across a component library
- Create unit tests for reliability
- Build interactive documentation sites

The goal is to understand the practical applications of AI in design systems work—from initial component creation to testing and documentation—and to identify where AI assistance adds the most value in the design-to-development pipeline.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📝 License

MIT License - feel free to use this in your own projects!

## 👤 Author

**Rob Mohan**
- Email: [rob@robertmohandesign.com](mailto:rob@robertmohandesign.com)
- LinkedIn: [linkedin.com/in/robertmohan](https://www.linkedin.com/in/robertmohan)
- GitHub: [@RobMohan](https://github.com/RobMohan)
- Portfolio: [robertmohandesign.com](https://robertmohandesign.com)

## 🎯 Roadmap

Future components planned:
- [ ] Input/TextField components
- [ ] Modal/Dialog components
- [ ] Dropdown/Select components
- [ ] Table component
- [ ] Navigation components
- [ ] Form components
- [ ] Toast/Notification system
- [ ] Badge component
- [ ] Tooltip component

---

**Built with AI assistance** as an exploration of design-to-development collaboration.