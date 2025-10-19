import React from 'react';
import { TrendingUp } from 'lucide-react';

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
    positive: 'text-green-600',
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

export default StatCard;