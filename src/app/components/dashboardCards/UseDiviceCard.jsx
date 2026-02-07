 export const UseDiviceCard = () => {
  const mobile = 65; // %
  const web = 35; // %

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const mobileOffset = circumference - (mobile / 100) * circumference;

  return (
    <div className="w-1/3 max-h-66 p-4.5 bg-white rounded-2xl shadow-xl">
      <h3 className="text-center text-xs font-semibold text-gray-500 tracking-wider mb-4">
        USED DEVICE
      </h3>

      <div className="flex justify-center">
        <svg width="120" height="120" className="rotate-[-90deg]">
          {/* Background */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#FDE7EF"
            strokeWidth="12"
            fill="none"
          />

          {/* Mobile */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#E11D48"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={mobileOffset}
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-600" />
          Mobile
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-100" />
          Web
        </div>
      </div>
    </div>
  );
};