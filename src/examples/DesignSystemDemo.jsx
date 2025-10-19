import React, { useState } from 'react';
import { Download, Plus, Trash2, Edit2, Heart, ExternalLink, Settings, DollarSign, Users, Activity, Star, TrendingUp } from 'lucide-react';

// Button Component
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white focus:ring-purple-400 disabled:bg-primary-disabled',
    secondary: 'bg-secondary hover:bg-secondary-hover text-black focus:ring-lime-400 disabled:bg-secondary-disabled',
    destructive: 'bg-destructive hover:bg-destructive-hover text-white focus:ring-red-400 disabled:bg-destructive-disabled',
    outline: 'bg-white border-2 border-gray-300 hover:bg-gray-50 text-black focus:ring-gray-300 disabled:bg-gray-100 disabled:text-gray-400',
    ghost: 'bg-transparent hover:bg-gray-100 text-black focus:ring-gray-300 disabled:text-gray-400',
    link: 'bg-transparent hover:underline text-primary focus:ring-purple-300 disabled:text-primary-disabled'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-5 py-2.5 text-base',
    large: 'px-6 py-3 text-lg',
    icon: 'p-2.5'
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const iconSize = size === 'small' ? 16 : size === 'large' ? 22 : 18;
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
    </button>
  );
};

// Card Component
const Card = ({ 
  title, 
  description, 
  children, 
  footer,
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      )}
      
      {description && (
        <p className="text-gray-500 text-base mb-4">{description}</p>
      )}
      
      {children && (
        <div className="text-gray-900">{children}</div>
      )}
      
      {footer && (
        <div className="mt-6">{footer}</div>
      )}
    </div>
  );
};

// StatCard Component
const StatCard = ({ 
  value, 
  label, 
  icon: Icon,
  trend,
  trendLabel,
  trendType = 'positive',
  className = '' 
}) => {
  const trendColors = {
    positive: 'text-secondary',
    neutral: 'text-gray-500',
    negative: 'text-destructive'
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl font-bold text-gray-900">{value}</div>
        {Icon && (
          <div className="text-gray-400">
            <Icon size={24} />
          </div>
        )}
      </div>
      
      <div className="text-gray-500 text-base mb-4">{label}</div>
      
      {(trend || trendLabel) && (
        <div className={`flex items-center gap-2 text-sm ${trendColors[trendType]}`}>
          {trend && <TrendingUp size={16} />}
          <span>{trend || trendLabel}</span>
        </div>
      )}
    </div>
  );
};

// Main Demo Component
export default function DesignSystemDemo() {
  const [likes, setLikes] = useState(0);
  const [activeSection, setActiveSection] = useState('stat-cards');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: 'stat-cards', label: 'Stat Cards' },
    { id: 'content-cards', label: 'Content Cards' },
    { id: 'button-variants', label: 'Button Variants' },
    { id: 'button-sizes', label: 'Button Sizes' },
    { id: 'button-icons', label: 'Buttons with Icons' },
    { id: 'disabled-states', label: 'Disabled States' },
    { id: 'integrated-example', label: 'Components Together' },
    { id: 'form-example', label: 'Form Actions' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Left Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Components</h1>
          <p className="text-sm text-gray-600">AI Design System</p>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">AI Design System</h1>
            <p className="text-gray-600 text-lg">
              A comprehensive component library with buttons, cards, and more
            </p>
          </div>

        {/* Stat Cards Section */}
        <section id="stat-cards" className="mb-16 scroll-mt-8">
          <h2 className="text-3xl font-bold mb-6">Stat Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="$12,234"
              label="Total Revenue"
              icon={DollarSign}
              trend="+20.1% from last month"
              trendType="positive"
            />
            
            <StatCard
              value="2,350"
              label="Active Users"
              icon={Users}
              trend="+180.1% from last month"
              trendType="positive"
            />
            
            <StatCard
              value="12,234"
              label="Sales"
              icon={Activity}
              trend="+19% from last month"
              trendType="positive"
            />
            
            <StatCard
              value="4.9"
              label="Average Rating"
              icon={Star}
              trendLabel="Based on 1,234 reviews"
              trendType="neutral"
            />
          </div>
        </section>

        {/* Content Cards Section */}
        <section id="content-cards" className="mb-16 scroll-mt-8">
          <h2 className="text-3xl font-bold mb-6">Content Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Simple Card"
              description="A basic card with title and description using your design system colors."
            />
            
            <Card
              title="Card with Content"
              description="This card demonstrates the content area."
            >
              <p className="text-base">
                This is the main content area of the card. It uses your design system typography and spacing variables.
              </p>
            </Card>

            <Card
              title="Complete Card"
              description="A card with all sections: header, content, and footer."
              footer={<Button variant="primary">Primary Button</Button>}
            >
              <p className="text-base">
                Content goes here with proper spacing and typography from your design system.
              </p>
            </Card>
          </div>
        </section>

        {/* Button Variants */}
        <section id="button-variants" className="mb-16 scroll-mt-8">
          <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-white">
            <h2 className="text-3xl font-bold mb-6">Button Variants</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>
        </section>
        
        {/* Button Sizes */}
        <section id="button-sizes" className="mb-16 scroll-mt-8">
          <h2 className="text-3xl font-bold mb-6">Button Sizes</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="small">Small Button</Button>
            <Button variant="primary" size="default">Default Button</Button>
            <Button variant="primary" size="large">Large Button</Button>
            <Button variant="primary" size="icon" icon={Settings} />
          </div>
        </section>
        
        {/* Buttons with Icons */}
        <section id="button-icons" className="mb-16 scroll-mt-8">
          <h2 className="text-3xl font-bold mb-6">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" icon={Download}>Download</Button>
            <Button variant="secondary" icon={Plus}>Add Item</Button>
            <Button variant="destructive" icon={Trash2}>Delete</Button>
            <Button variant="outline" icon={Edit2}>Edit</Button>
            <Button 
              variant="outline" 
              icon={Heart}
              onClick={() => setLikes(likes + 1)}
            >
              Like {likes > 0 && `(${likes})`}
            </Button>
            <Button variant="link" icon={ExternalLink} iconPosition="right">
              Learn More
            </Button>
          </div>
        </section>
        
        {/* Disabled States */}
        <section id="disabled-states" className="mb-16 scroll-mt-8">
          <h2 className="text-3xl font-bold mb-6">Disabled States</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
            <Button variant="destructive" disabled>Disabled Destructive</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
            <Button variant="ghost" disabled>Disabled Ghost</Button>
          </div>
        </section>

        {/* Integrated Example */}
        <section id="integrated-example" className="mb-16 scroll-mt-8">
          <h2 className="text-3xl font-bold mb-12">Components Working Together</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Card */}
            <div className="lg:col-span-2">
              <Card
                title="Project Dashboard"
                description="Manage your projects and track progress"
                footer={
                  <div className="flex gap-3">
                    <Button variant="primary" icon={Plus}>New Project</Button>
                    <Button variant="outline">View All</Button>
                  </div>
                }
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">24</div>
                      <div className="text-sm text-gray-500">Active Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">156</div>
                      <div className="text-sm text-gray-500">Total Tasks</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your team has completed 89% of tasks this month. Keep up the great work!
                  </p>
                </div>
              </Card>
            </div>
            
            {/* Sidebar Stats */}
            <div className="space-y-6">
              <StatCard
                value="98%"
                label="Completion Rate"
                icon={Activity}
                trend="+5% from last week"
                trendType="positive"
              />
              <Card
                title="Quick Actions"
                footer={
                  <div className="space-y-2">
                    <Button variant="outline" icon={Download} className="w-full">
                      Export Report
                    </Button>
                    <Button variant="ghost" icon={Settings} className="w-full">
                      Settings
                    </Button>
                  </div>
                }
              >
                <p className="text-sm text-gray-600">
                  Common actions and shortcuts
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Example */}
        <section id="form-example" className="scroll-mt-8">
          <h2 className="text-3xl font-bold mb-6">Form Actions Example</h2>
          <Card
            title="User Profile Settings"
            description="Update your account information and preferences"
            footer={
              <div className="flex gap-3">
                <Button 
                  variant="primary"
                  onClick={() => alert('Changes saved!')}
                >
                  Save Changes
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => alert('Cancelled')}
                >
                  Cancel
                </Button>
                <Button 
                  variant="destructive"
                  onClick={() => confirm('Are you sure you want to delete your account?')}
                >
                  Delete Account
                </Button>
              </div>
            }
          >
            <div className="space-y-3">
              <p className="text-base text-gray-700">
                Form fields would go here. This demonstrates how cards and buttons work together in a typical form layout.
              </p>
            </div>
          </Card>
        </section>
        </div>
      </div>
    </div>
  );
}