import React from 'react';

const ResponsiveProgressSvg: React.FC<{ percentage: number }> = ({ percentage }) => {
  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <svg width="100%" height="100%" viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#E8ECEB"
          strokeWidth="12"
        />
        <circle
          className="percent"
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#E09E50"
          strokeWidth="12"
          strokeDasharray="101"
          stroke-linecap="round"
          strokeDashoffset={100 - percentage}
          pathLength="100"
        />
        <text x="60" y="60" textAnchor="middle" fill="#597C9B" fontSize="32">
          <tspan dy=".3em">{percentage}%</tspan>
        </text>
      </svg>
    </div>
  );
};

export default ResponsiveProgressSvg;
