"use client";

import { firestore } from "@/lib/fireBaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { StickyNote } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../../useContext/AuthContext";
import { supabase } from "@/lib/supabaseClient";
import { LoaderCircle } from "lucide-react";

const initialBlogData = { title: '', slug: '', category: '', content: '' }

export default function AddpostSidbar() {
    const [open, setOpen] = useState(false);
    const { user } = useAuthContext()
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

     const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Only image files are allowed");
      return;
    }

    setImageFile(file);
  };

  async function uploadImage(file, userId) {
    const ext = file.name.split(".").pop();
    const fileName = `${userId}/${Date.now()}.${ext}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

    const [blogData, setBlogData] = useState(initialBlogData)
    

     const handleChange = (e) => {
    setBlogData((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in");
      return;
    }

    const { title, slug, category, content } = blogData;

    if (!title || !slug || !category || !content) {
      toast.error("All fields are required");
      return;
    }

    if (!imageFile) {
      toast.error("Feature image is required");
      return;
    }

    try {
      // Upload image to Supabase
      const imageUrl = await uploadImage(imageFile, user.uid);

      // Save blog to Firestore
      const id = crypto.randomUUID();
      setLoading(true)

      await setDoc(doc(firestore, "blogPost", id), {
        ...blogData,
        id,
        uid: user.uid,
        imageUrl,
        createdAt: new Date().getTime(),
      });

      toast.success("Post published successfully");
      setBlogData(initialBlogData);
      setImageFile(null);
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to publish post");
    } finally {
      setLoading(false);
    }
  };





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
                        <input 
                            type="file"
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
                            <option>Design</option>
                            <option>Tech</option>
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
                            className="flex justify-center items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-medium"
                            onClick={handleSubmit}
                        >
                            {
                              loading && <LoaderCircle className="animate-spin" />
                            }
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
