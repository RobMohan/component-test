import React, { useState } from 'react';
import Button from '../components/Button';
import { Download, Plus, Trash2, Edit2, Heart, ExternalLink, Settings } from 'lucide-react';

export default function ButtonDemo() {
  const [likes, setLikes] = useState(0);
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">AI Design System Buttons</h1>
          <p className="text-gray-600 text-lg">
            A comprehensive showcase of button variants using your custom design system
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Button Variants */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Button Variants</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </section>
          
          {/* Button Sizes */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Button Sizes</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="small">Small Button</Button>
              <Button variant="primary" size="default">Default Button</Button>
              <Button variant="primary" size="large">Large Button</Button>
              <Button variant="primary" size="icon" icon={Settings} />
            </div>
          </section>
          
          {/* Buttons with Icons */}
          <section>
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
          <section>
            <h2 className="text-3xl font-bold mb-6">Disabled States</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" disabled>Disabled Primary</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
              <Button variant="destructive" disabled>Disabled Destructive</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
              <Button variant="ghost" disabled>Disabled Ghost</Button>
            </div>
          </section>
          
          {/* Interactive Example */}
          <section>
            <h2 className="text-3xl font-bold mb-12">Interactive Example</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Form Actions</h3>
              <p className="text-gray-600 mb-6">
                Example of buttons in a typical form context:
              </p>
              <div className="flex flex-wrap gap-4">
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
                  onClick={() => confirm('Are you sure you want to delete this item?')}
                >
                  Delete Item
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}