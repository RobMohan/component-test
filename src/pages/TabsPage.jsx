import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import Card from '../components/Card';

const CodeBlock = ({ code }) => (
  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
    <code>{code}</code>
  </pre>
);

const PropsTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="py-3 px-4 font-semibold">Prop</th>
          <th className="py-3 px-4 font-semibold">Type</th>
          <th className="py-3 px-4 font-semibold">Default</th>
          <th className="py-3 px-4 font-semibold">Description</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b border-gray-100">
          <td className="py-3 px-4 font-mono text-sm">tabs</td>
          <td className="py-3 px-4 font-mono text-xs text-gray-600">
            Array&lt;&#123;label: string, content?: ReactNode&#125;&gt;
          </td>
          <td className="py-3 px-4 font-mono text-xs">[]</td>
          <td className="py-3 px-4">Array of tab objects with label and optional content</td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="py-3 px-4 font-mono text-sm">defaultTab</td>
          <td className="py-3 px-4 font-mono text-xs text-gray-600">number</td>
          <td className="py-3 px-4 font-mono text-xs">0</td>
          <td className="py-3 px-4">Index of the initially active tab</td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="py-3 px-4 font-mono text-sm">onChange</td>
          <td className="py-3 px-4 font-mono text-xs text-gray-600">function</td>
          <td className="py-3 px-4 font-mono text-xs">undefined</td>
          <td className="py-3 px-4">Callback when active tab changes, receives tab index</td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="py-3 px-4 font-mono text-sm">className</td>
          <td className="py-3 px-4 font-mono text-xs text-gray-600">string</td>
          <td className="py-3 px-4 font-mono text-xs">''</td>
          <td className="py-3 px-4">Additional CSS classes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function TabsPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const basicTabs = [
    { label: 'Overview' },
    { label: 'Details' },
    { label: 'Settings' },
  ];

  const tabsWithContent = [
    {
      label: 'Profile',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Profile Information</h3>
          <p className="text-gray-600">
            View and edit your profile details, including your name, email, and profile picture.
          </p>
        </div>
      ),
    },
    {
      label: 'Account',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-gray-600">
            Manage your account settings, including password, security, and privacy preferences.
          </p>
        </div>
      ),
    },
    {
      label: 'Notifications',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
          <p className="text-gray-600">
            Configure how you receive notifications via email, SMS, and push notifications.
          </p>
        </div>
      ),
    },
  ];

  const productTabs = [
    {
      label: 'Description',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            This premium product is crafted with the highest quality materials and attention to detail.
            Perfect for everyday use and built to last.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Premium quality construction</li>
            <li>Durable and long-lasting</li>
            <li>Eco-friendly materials</li>
            <li>30-day money-back guarantee</li>
          </ul>
        </div>
      ),
    },
    {
      label: 'Specifications',
      content: (
        <div className="space-y-2">
          <div className="flex justify-between py-2 border-b">
            <span className="font-semibold text-gray-700">Dimensions</span>
            <span className="text-gray-600">10" x 8" x 2"</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-semibold text-gray-700">Weight</span>
            <span className="text-gray-600">1.2 lbs</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-semibold text-gray-700">Material</span>
            <span className="text-gray-600">Premium Polymer</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-semibold text-gray-700">Color</span>
            <span className="text-gray-600">Midnight Black</span>
          </div>
        </div>
      ),
    },
    {
      label: 'Reviews',
      content: (
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-900">John D.</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600">
              Excellent product! Exceeded my expectations in every way.
            </p>
          </div>
          <div className="border-b pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-900">Sarah M.</span>
              <span className="text-yellow-500">★★★★☆</span>
            </div>
            <p className="text-gray-600">
              Great quality, but wish it came in more color options.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: 'Shipping',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Delivery Options</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Standard Shipping: 5-7 business days</li>
              <li>Express Shipping: 2-3 business days</li>
              <li>Overnight Shipping: Next business day</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Returns</h4>
            <p className="text-gray-700">
              Free returns within 30 days of purchase. Items must be in original condition.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Tabs</h1>
          <p className="text-xl text-gray-600">
            A navigation component that allows users to switch between different views or sections of content.
          </p>
        </div>

        {/* Import */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock code={`import Tabs from './components/Tabs';`} />
        </section>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <p className="text-gray-600 mb-6">
            Create tabs by passing an array of tab objects with labels.
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-4">
            <Tabs tabs={basicTabs} />
          </div>
          <CodeBlock code={`const tabs = [
  { label: 'Overview' },
  { label: 'Details' },
  { label: 'Settings' },
];

<Tabs tabs={tabs} />`} />
        </section>

        {/* With Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tabs with Content</h2>
          <p className="text-gray-600 mb-6">
            Each tab can have associated content that displays when the tab is active.
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-4">
            <Tabs tabs={tabsWithContent} />
          </div>
          <CodeBlock code={`const tabs = [
  {
    label: 'Profile',
    content: (
      <div>
        <h3>Profile Information</h3>
        <p>View and edit your profile details...</p>
      </div>
    ),
  },
  {
    label: 'Account',
    content: (
      <div>
        <h3>Account Settings</h3>
        <p>Manage your account settings...</p>
      </div>
    ),
  },
  {
    label: 'Notifications',
    content: (
      <div>
        <h3>Notification Preferences</h3>
        <p>Configure how you receive notifications...</p>
      </div>
    ),
  },
];

<Tabs tabs={tabs} />`} />
        </section>

        {/* Controlled Tabs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Controlled Tabs</h2>
          <p className="text-gray-600 mb-6">
            Use the onChange callback to track which tab is selected or control tab behavior.
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-4">
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Current tab index: <span className="font-mono font-semibold">{selectedTab}</span>
              </p>
            </div>
            <Tabs
              tabs={basicTabs}
              onChange={(index) => setSelectedTab(index)}
            />
          </div>
          <CodeBlock code={`const [selectedTab, setSelectedTab] = useState(0);

<Tabs
  tabs={tabs}
  onChange={(index) => setSelectedTab(index)}
/>

// Current tab: {selectedTab}`} />
        </section>

        {/* Default Tab */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Default Active Tab</h2>
          <p className="text-gray-600 mb-6">
            Set which tab should be active by default using the defaultTab prop.
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-4">
            <Tabs tabs={basicTabs} defaultTab={1} />
          </div>
          <CodeBlock code={`<Tabs tabs={tabs} defaultTab={1} /> {/* Second tab active by default */}`} />
        </section>

        {/* Real-world Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Real-world Example</h2>
          <p className="text-gray-600 mb-6">
            Here's a complete example of tabs used in a product page.
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-4">
            <Card title="Premium Product" description="$99.99">
              <Tabs tabs={productTabs} />
            </Card>
          </div>
          <CodeBlock code={`const productTabs = [
  {
    label: 'Description',
    content: (
      <div>
        <p>This premium product is crafted with the highest quality...</p>
        <ul>
          <li>Premium quality construction</li>
          <li>Durable and long-lasting</li>
          <li>Eco-friendly materials</li>
        </ul>
      </div>
    ),
  },
  {
    label: 'Specifications',
    content: (
      <div>
        <div>Dimensions: 10" x 8" x 2"</div>
        <div>Weight: 1.2 lbs</div>
        <div>Material: Premium Polymer</div>
      </div>
    ),
  },
  {
    label: 'Reviews',
    content: (
      <div>
        <div>John D. ★★★★★</div>
        <p>Excellent product! Exceeded my expectations...</p>
      </div>
    ),
  },
  {
    label: 'Shipping',
    content: (
      <div>
        <h4>Delivery Options</h4>
        <ul>
          <li>Standard: 5-7 business days</li>
          <li>Express: 2-3 business days</li>
        </ul>
      </div>
    ),
  },
];

<Card title="Premium Product" description="$99.99">
  <Tabs tabs={productTabs} />
</Card>`} />
        </section>

        {/* Props Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <PropsTable />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Keep labels concise:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Use short, descriptive labels (1-2 words when possible)</li>
                  <li>Avoid using full sentences in tab labels</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Logical grouping:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Group related content together</li>
                  <li>Order tabs by importance or logical flow</li>
                  <li>Limit the number of tabs to 4-6 for optimal usability</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Accessibility:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Ensure tabs are keyboard navigable</li>
                  <li>Provide clear visual feedback for active and hover states</li>
                  <li>Consider adding ARIA labels for screen readers</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Performance:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Lazy load tab content when dealing with heavy components</li>
                  <li>Consider using controlled tabs for complex state management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Complete Example</h2>
          <p className="text-gray-600 mb-6">
            Here's a complete example showing how to integrate tabs in a settings panel.
          </p>
          <CodeBlock code={`import { useState } from 'react';
import Tabs from './components/Tabs';

function SettingsPanel() {
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'en',
    notifications: true,
  });

  const settingsTabs = [
    {
      label: 'General',
      content: (
        <div className="space-y-4">
          <div>
            <label>Theme</label>
            <select
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <label>Language</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
      ),
    },
    {
      label: 'Notifications',
      content: (
        <div>
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) =>
                setSettings({ ...settings, notifications: e.target.checked })
              }
            />
            Enable notifications
          </label>
        </div>
      ),
    },
    {
      label: 'Privacy',
      content: <div>Privacy settings content...</div>,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <Tabs tabs={settingsTabs} />
    </div>
  );
}`} />
        </section>
      </div>
    </div>
  );
}
