export const BlogpostsCard = () => {
  const postsData = [
    {
      title: "Your Rooftop Garden Could Be a Solar",
      date: "16 Nov 2021",
      category: "Science",
      categoryColor: "bg-cyan-100 text-cyan-700",
      comments: "136 Comments",
    },
    {
      title: "Looking for Alien Life? Seek Out Alien Tech",
      date: "27 Nov 2021",
      category: "Ideas",
      categoryColor: "bg-blue-100 text-blue-700",
      comments: "108 Comments",
    },
    {
      title: "Why I Love to Scrounge in Video Games",
      date: "29 Nov 2021",
      category: "Games",
      categoryColor: "bg-orange-100 text-orange-700",
      comments: "48 Comments",
    },
  ];
  return (
    <div className="w-2/3 p-4.5 bg-white rounded-2xl shadow-xl">
      <div className="grid grid-cols-12 text-sm text-gray-500 font-medium pb-1">
        <div className="col-span-6">Article Title</div>
        <div className="col-span-2">Post Date</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-2">Comment</div>
      </div>

      <div className="divide-y">
        {postsData.map((post, i) => (
          <div key={i} className="grid grid-cols-12 items-center py-2 gap-2">
            <div className="col-span-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-md" />
              <p className="text-sm font-medium text-gray-500 leading-snug">
                {post.title}
              </p>
            </div>

            <div className="col-span-2 text-sm text-gray-400">{post.date}</div>

            <div className="col-span-2">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}
              >
                {post.category}
              </span>
            </div>

            <div className="col-span-2 text-sm text-gray-400">
              {post.comments}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const UseDiviceCard = () => {
  const mobile = 65; // %
  const web = 35; // %

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const mobileOffset = circumference - (mobile / 100) * circumference;

  return (
    <div className="w-1/3 p-4.5 bg-white rounded-2xl shadow-xl">
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
