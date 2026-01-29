import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const BlogpostList = () => {
  return (
      <div className="min-h-[100vh] w-full flex flex-col gap-[80px] bg-gradient-to-b from-[#A8D3FF] to-[#FFF4DF]">
        <Header />
        <p className=" text-[22px] leading-[26px] text-center font-semibold">← Back to Careers</p>
        <div className="min-h-[100vh] shadow-lg flex flex-col mx-auto p-[40px] bg-white rounded-2xl w-[75%]">
          your blog posts data
        </div>
        <Footer />
      </div>
  );
};

export default BlogpostList;
