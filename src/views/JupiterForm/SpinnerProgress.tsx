import React from 'react';

const SpinnerProgress = ({
  percentage,
  strokeWidth = 2,
  sqSize = 14,
}: {
  percentage: number;
  strokeWidth?: number;
  sqSize?: number;
}) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        // className="fill-transparent stroke-black-10 dark:stroke-white-75"
        fill='transparent'
        stroke='rgba(255,255,255,0.5)'
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill='transparent'
        stroke='rgba(0,0,0,1)'
        // className="fill-transparent stroke-black"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth + 0.4}px`} // + 0.4 lower bleeding
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
  );
};

export default SpinnerProgress;
