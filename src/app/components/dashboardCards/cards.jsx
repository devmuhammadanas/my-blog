'use client'
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../useContext/AuthContext";
import { firestore } from "@/lib/fireBaseConfig";
import { LoaderCircle } from "lucide-react";

export const BlogpostsCard = ({ className = '' }) => {
  const { user } = useAuthContext()
  const [loading, setLoading] = useState(false)
  const [postsData, setPostsData] = useState([
    {
      title: "Your Rooftop Garden Could Be a Solar",
      createdAt: "16 Nov 2021",
      category: "Design",
      categoryColor: "bg-cyan-100 text-cyan-700",
      comments: "136 Comments",
    },
    {
      title: "Looking for Alien Life? Seek Out Alien Tech",
      createdAt: "27 Nov 2021",
      category: "Business",
      categoryColor: "bg-blue-100 text-blue-700",
      comments: "108 Comments",
    },
    {
      title: "Why I Love to Scrounge in Video Games",
      createdAt: "29 Nov 2021",
      category: "Tech",
      categoryColor: "bg-orange-100 text-orange-700",
      comments: "48 Comments",
    },
  ]);

  useEffect(() => {
    setLoading(true)
    if (!user?.uid) return;
    const getData = async () => {
      const q = query(collection(firestore, "blogPost"), where("uid", "==", user.uid));
      let array = []
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log("imp", doc.data());
        array.push(doc.data());
      });
      setLoading(false)

      setPostsData((s) => [...s, ...array]);
    }

    getData()

  }, [user])

  return (
    <div className={`${className} p-4.5 bg-white rounded-2xl shadow-xl`}>
      <div className="grid grid-cols-12 text-sm text-gray-500 font-medium pb-1">
        <div className="col-span-6">Article Title</div>
        <div className="col-span-2">Post Date</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-2">Comment</div>
      </div>

      <div className="divide-y">
        {postsData.map((e, i) => (
          <div key={i} className="grid grid-cols-12 items-center py-2 gap-2">
            <div className="col-span-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-md" />
              <p className="text-sm font-medium text-gray-500 leading-snug">
                {e.title}
              </p>
            </div>

            <div className="col-span-2 text-sm text-gray-400">{new Date(e.createdAt).toLocaleString()}</div>

            <div className="col-span-2">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full {} 
                  ${e.category == 'Design' && 'bg-blue-100 text-blue-700'
                  || e.category == 'Business' && 'bg-cyan-100 text-cyan-700'
                  || e.category == 'Tech' && 'bg-orange-100 text-orange-700'}`}
              >
                {e.category}
              </span>
            </div>

            <div className="col-span-2 text-sm text-gray-400">
              {e.comments}
            </div>
          </div>
        ))}

      </div>
      <div className="flex justify-center items-center">
        {
          loading && <LoaderCircle className="animate-spin " />
        }
      </div>
    </div>
  );
};

// export const UseDiviceCard = () => {
//   const mobile = 65; // %
//   const web = 35; // %

//   const radius = 52;
//   const circumference = 2 * Math.PI * radius;
//   const mobileOffset = circumference - (mobile / 100) * circumference;

//   return (
//     <div className="w-1/3 max-h-66 p-4.5 bg-white rounded-2xl shadow-xl">
//       <h3 className="text-center text-xs font-semibold text-gray-500 tracking-wider mb-4">
//         USED DEVICE
//       </h3>

//       <div className="flex justify-center">
//         <svg width="120" height="120" className="rotate-[-90deg]">
//           {/* Background */}
//           <circle
//             cx="60"
//             cy="60"
//             r={radius}
//             stroke="#FDE7EF"
//             strokeWidth="12"
//             fill="none"
//           />

//           {/* Mobile */}
//           <circle
//             cx="60"
//             cy="60"
//             r={radius}
//             stroke="#E11D48"
//             strokeWidth="12"
//             fill="none"
//             strokeDasharray={circumference}
//             strokeDashoffset={mobileOffset}
//             strokeLinecap="round"
//           />
//         </svg>
//       </div>

//       {/* Legend */}
//       <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-rose-600" />
//           Mobile
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-rose-100" />
//           Web
//         </div>
//       </div>
//     </div>
//   );
// };
