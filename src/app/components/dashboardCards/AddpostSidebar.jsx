"use client";

import { firestore } from "@/lib/fireBaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { StickyNote } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../../useContext/AuthContext";

const initialBlogData = { title: '', slug: '', category: '', content: '' }

export default function AddpostSidbar() {
    const [open, setOpen] = useState(false);
    const {user} = useAuthContext()

    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {

        const file = e.target.files[0];
    
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            setImageFile(reader.result); // Full Base64 string with data prefix
          };
    
          reader.readAsDataURL(file); // Converts image to Base64
        } else {
          alert("Please upload an image file.");
        }
      };

    const [blogData, setBlogData] = useState(initialBlogData)
    // const [blogsPostsData, setBlogsPostData] = useState([])

    const handleChange = (e) => { 
        setBlogData((s) => ({ ...s, [e.target.name]: e.target.value }) )
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        // setBlogsPostData( (s) => [...s, blogData])

        const {title, slug, category, content,} = blogData


        if (!title) {return toast.error('Enter your Title')}
        if (!slug) {return toast.error('Enter your Sulg')}
        if (!category) {return toast.error('Enter your Category')}
        if (!content) {return toast.error('Enter your Content')}

        const id = Math.random().toString(36)

        const userBlogsData = {...blogData, time: new Date(), ImageUrl: imageFile, id, uid:user.uid }
        try {
            await setDoc(doc(firestore, "blogPost", id), userBlogsData);
            toast.success('Your content Has been SuccessFully Add')
            
        } catch (error) {
            console.log(error)
            console.log('Create Post Faild', error.message)
            toast.error('Create Post Faild')
            
        }

         
       setBlogData(initialBlogData)
    }


    


    return (
        <>
            {/* Button */}
            <button
                onClick={() => setOpen(true)}
                className="bg-green-500 flex justify-center items-center gap-2 hover:bg-green-600 text-white px-5 py-2.5 rounded-2xl font-semibold shadow-lg"
            >
                <StickyNote /> Add Post
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`
          fixed top-0 right-0 h-full w-[90vw] sm:w-[60%] bg-white z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
            >
                {/* Header */}
                <div className="flex bg-[#F04855] items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-semibold text-white">Add Blog Post</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl leading-none text-white"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <form className="p-6 space-y-5 overflow-y-auto h-[calc(100vh-80px)]">
                    <div>
                        <label className="block text-sm font-medium mb-1">Add Feature Image</label>
                        <input type="file"
                        onChange={handleImageChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            name="title"
                            value={blogData.title}
                            onChange={handleChange}
                            type="text"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Post title"
                            />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Slug</label>
                        <input
                            name="slug"
                            type="text"
                            onChange={handleChange}
                            value={blogData.slug}
                            className="w-full border rounded-lg px-3 py-2"
                            placeholder="post-slug"
                            />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <select
                        name="category"
                        value={blogData.category}
                        onChange={handleChange}
                         className="w-full border rounded-lg px-3 py-2">
                            <option>Tech</option>
                            <option>Design</option>
                            <option>Business</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Content</label>
                        <textarea
                            name="content"
                            value={blogData.content}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 min-h-[180px]"
                            placeholder="Write your post..."
                            />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-medium"
                            onClick={handleSubmit}
                        >
                            Publish
                        </button>

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="border px-5 py-2 rounded-xl"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
