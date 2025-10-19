# AI Design System

A comprehensive, customizable component library built with React and Tailwind CSS, featuring buttons, cards, and stat cards with a custom color palette.

## 🚀 Live Demo

**[View Live Demo](https://component-test-ashy.vercel.app/)** | **[GitHub Repository](https://github.com/RobMohan/component-test)**

## ✨ Features

- 🎨 **Custom Design System** - Unique color palette with purple, lime-green, and red variants
- 🔘 **Button Component** - 6 variants, 4 sizes, icon support, and all interactive states
- 📇 **Card Component** - Flexible content cards with optional headers and footers
- 📊 **Stat Card Component** - Dashboard-style metric cards with trend indicators
- 🧭 **Interactive Navigation** - Sidebar navigation for easy component browsing
- ♿ **Accessible** - Proper focus states, keyboard navigation, and semantic HTML
- 🧪 **Tested** - Comprehensive unit tests with Vitest
- 📱 **Responsive** - Works beautifully on all screen sizes

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/component-test.git
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

#### Usage
```jsx
import Button from './components/Button';
import { Download } from 'lucide-react';

// Basic button
<Button variant="primary">Click me</Button>

// Button with icon
<Button variant="secondary" icon={Download}>
  Download
</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>
<Button size="icon" icon={Settings} />

// Disabled state
<Button disabled>Disabled</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'default' \| 'large' \| 'icon'` | `'default'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `icon` | `LucideIcon` | `undefined` | Icon from lucide-react |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `onClick` | `function` | `undefined` | Click handler |
| `className` | `string` | `''` | Additional CSS classes |

---

### Card

A flexible content card component for displaying information with optional headers and footers.

#### Usage
```jsx
import Card from './components/Card';
import Button from './components/Button';

// Simple card
<Card
  title="Card Title"
  description="Card description goes here"
/>

// Card with content
<Card
  title="Card with Content"
  description="This card has additional content"
>
  <p>Your custom content here</p>
</Card>

// Card with footer actions
<Card
  title="Complete Card"
  description="Card with all sections"
  footer={
    <div className="flex gap-3">
      <Button variant="primary">Save</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  }
>
  <p>Card content here</p>
</Card>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Card title |
| `description` | `string` | `undefined` | Card description |
| `children` | `ReactNode` | `undefined` | Card content |
| `footer` | `ReactNode` | `undefined` | Footer content (typically buttons) |
| `className` | `string` | `''` | Additional CSS classes |

---

### StatCard

Dashboard-style metric cards for displaying statistics and trends.

#### Usage
```jsx
import StatCard from './components/StatCard';
import { DollarSign } from 'lucide-react';

// Stat card with positive trend
<StatCard
  value="$12,234"
  label="Total Revenue"
  icon={DollarSign}
  trend="+20.1% from last month"
  trendType="positive"
/>

// Stat card with label only
<StatCard
  value="4.9"
  label="Average Rating"
  icon={Star}
  trendLabel="Based on 1,234 reviews"
  trendType="neutral"
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | required | Main metric value |
| `label` | `string` | required | Metric label |
| `icon` | `LucideIcon` | `undefined` | Icon from lucide-react |
| `trend` | `string` | `undefined` | Trend indicator (with percentage) |
| `trendLabel` | `string` | `undefined` | Alternative to trend (no icon) |
| `trendType` | `'positive' \| 'neutral' \| 'negative'` | `'positive'` | Trend color styling |
| `className` | `string` | `''` | Additional CSS classes |

---

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
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   ├── Card.jsx
│   │   └── StatCard.jsx
│   ├── examples/
│   │   └── DesignSystemDemo.jsx
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

## 💡 Usage in Your Projects

### Install as a Package
```bash
npm install your-design-system
```

### Import Components
```jsx
import { Button, Card, StatCard } from 'your-design-system';
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📝 License

MIT License - feel free to use this in your own projects!

## 👤 Author

**Your Name**
- Portfolio: [robertmohandesign.com](https://robertmohandesign.com/)
- LinkedIn: [linkedin.com/in/robmohan](https://www.linkedin.com/in/robmohan/)
- GitHub: [@RobMohan](https://github.com/RobMohan)

---

## 🎯 Roadmap

Future components planned:
- [ ] Input/TextField components
- [ ] Modal/Dialog components
- [ ] Dropdown/Select components
- [ ] Table component
- [ ] Navigation components
- [ ] Form components
- [ ] Toast/Notification system

---

Built with AI assistance as an exploration of design-to-development collaboration. [Read the full story](#) on my blog.