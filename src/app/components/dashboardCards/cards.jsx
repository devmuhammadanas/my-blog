'use client'
import { deleteDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../../../useContext/AuthContext";
import { firestore } from "@/lib/fireBaseConfig";
import { LoaderCircle } from "lucide-react";
import { toast } from "react-toastify";

export const BlogpostsCard = ({ className = '' }) => {
  const { postsData, loading, getData } = useAuthContext()
 
  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(firestore, "blogPost", id));
      toast.success('Post SuccessFully Deleted')
      getData()
      
    } catch (error) {
      console.log(error)
      toast.error('try Again')
    }
  }

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
              <div className="w-12 h-12 bg-gray-200 rounded-md" />
              <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-500 leading-snug">
                {e.title}
              </p>
              <div className="flex gap-2.5">
              <button className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-500">Edit</button>
              <button 
              onClick={() => deletePost(e.id)}
              className="cursor-pointer text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-500">Delete</button>
              </div>
              </div>
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