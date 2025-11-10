import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import { DollarSign, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-bold mb-6">AI Design System</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A comprehensive, customizable component library built with React and Tailwind CSS, 
            featuring buttons, cards, and stat cards with a custom color palette.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="large">
              Get Started
            </Button>
            <Button variant="outline" size="large">
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card
            title="Custom Colors"
            description="Unique purple, lime-green, and red color palette that stands out."
          />
          <Card
            title="Fully Tested"
            description="Comprehensive unit tests ensure reliability and quality."
          />
          <Card
            title="Accessible"
            description="Built with accessibility in mind, including keyboard navigation."
          />
        </div>

        {/* Components Overview */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Components</h2>
          <div className="space-y-6">
            <Link to="/button">
              <Card
                title="Button"
                description="6 variants, 4 sizes, icon support, and comprehensive states"
                footer={
                  <div className="flex items-center gap-2 text-primary font-medium">
                    View Documentation <ArrowRight size={18} />
                  </div>
                }
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex gap-3 flex-wrap">
                  <Button variant="primary" size="small">Primary</Button>
                  <Button variant="secondary" size="small">Secondary</Button>
                  <Button variant="destructive" size="small">Destructive</Button>
                  <Button variant="outline" size="small">Outline</Button>
                </div>
              </Card>
            </Link>

            <Link to="/card">
              <Card
                title="Card"
                description="Flexible content cards with optional headers, content, and footers"
                footer={
                  <div className="flex items-center gap-2 text-primary font-medium">
                    View Documentation <ArrowRight size={18} />
                  </div>
                }
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <p className="text-sm text-gray-600">
                  Perfect for displaying content with consistent spacing and styling
                </p>
              </Card>
            </Link>

            <Link to="/stat-card">
              <Card
                title="Stat Card"
                description="Dashboard-style metric cards with trend indicators"
                footer={
                  <div className="flex items-center gap-2 text-primary font-medium">
                    View Documentation <ArrowRight size={18} />
                  </div>
                }
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="grid grid-cols-2 gap-4">
                  <StatCard
                    value="$12K"
                    label="Revenue"
                    icon={DollarSign}
                    trend="+20%"
                    trendType="positive"
                  />
                  <StatCard
                    value="2.3K"
                    label="Users"
                    icon={DollarSign}
                    trend="+180%"
                    trendType="positive"
                  />
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="bg-primary h-24 rounded-lg mb-3"></div>
              <div className="font-semibold">Primary</div>
              <div className="text-sm text-gray-600">#8B7BA8</div>
            </div>
            <div>
              <div className="bg-secondary h-24 rounded-lg mb-3"></div>
              <div className="font-semibold">Secondary</div>
              <div className="text-sm text-gray-600">#C8D494</div>
            </div>
            <div>
              <div className="bg-destructive h-24 rounded-lg mb-3"></div>
              <div className="font-semibold">Destructive</div>
              <div className="text-sm text-gray-600">#D84444</div>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <Card
          title="Quick Start"
          description="Get started with the AI Design System in minutes"
        >
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`# Clone the repository
git clone https://github.com/RobMohan/component-test.git

# Install dependencies
npm install

# Run development server
npm run dev`}
          </pre>
        </Card>
      </div>
    </div>
  );
}