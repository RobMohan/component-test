# Button Component

A comprehensive, customizable button component built with React and Tailwind CSS.

## Features

- 🎨 **6 Variants**: Primary, Secondary, Destructive, Outline, Ghost, Link
- 📏 **4 Sizes**: Small, Default, Large, Icon-only
- 🎯 **Icon Support**: Left or right positioned icons using lucide-react
- ♿ **Accessible**: Proper focus states and keyboard navigation
- 🎭 **States**: Hover, focus, disabled states for all variants
- 🔧 **Flexible**: Accepts all standard button props

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/component-test.git
cd component-test
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Usage

### Basic Button
```jsx
import Button from './components/Button';

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

### Button with Icon
```jsx
import Button from './components/Button';
import { Download } from 'lucide-react';

function App() {
  return (
    <Button variant="primary" icon={Download}>
      Download
    </Button>
  );
}
```

### Different Sizes
```jsx
<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>
<Button size="icon" icon={Settings} />
```

### Disabled State
```jsx
<Button disabled>Disabled Button</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'default' \| 'large' \| 'icon'` | `'default'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `icon` | `LucideIcon` | `undefined` | Icon component from lucide-react |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon |
| `onClick` | `function` | `undefined` | Click handler |
| `className` | `string` | `''` | Additional CSS classes |

## Color Palette

- **Primary**: `#8B7BA8` (Purple)
- **Secondary**: `#C8D494` (Lime Green)
- **Destructive**: `#D84444` (Red)

## License

MIT