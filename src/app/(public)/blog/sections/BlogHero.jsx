import Header from "@/app/components/Header";
import Image from "next/image";
import React from "react";
import blogHero from "@/../public/Blag Page/blog Hero/blogHero.svg";
import blogPostImage from "@/../public/Blag Page/blog post/postImage.svg";
import blogPostImage1 from "@/../public/Blag Page/blog post/1postImage.svg";
import blogPostImage2 from "@/../public/Blag Page/blog post/2postImage.svg";
import Footer from "@/app/components/Footer";

const BlogHero = () => {
  const blogData = [
    {
      title: "How to Build a Climate-Ready Data Stack",
      description:
        "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
      info: "Insights 4 min",
      image: blogPostImage,
    },
    {
      title: "How to Build a Climate-Ready Data Stack",
      description:
        "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
      info: "Insights 4 min",
      image: blogPostImage1,
    },
    {
      title: "How to Build a Climate-Ready Data Stack",
      description:
        "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
      info: "Insights 4 min",
      image: blogPostImage2,
    },
    {
      title: "How to Build a Climate-Ready Data Stack",
      description:
        "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
      info: "Insights 4 min",
      image: blogPostImage,
    },
    {
      title: "How to Build a Climate-Ready Data Stack",
      description:
        "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
      info: "Insights 4 min",
      image: blogPostImage1,
    },
    {
      title: "How to Build a Climate-Ready Data Stack",
      description:
        "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
      info: "Insights 4 min",
      image: blogPostImage2,
    },
  ];

  return (
    <div className="flex flex-col">
      <Header />
      <Image src={blogHero} alt="blogHero image" className="h-auto w-auto" />
      <div className="py-[100px] px-[20px] flex flex-col gap-[80px] items-center">
        <h2 className="text-[clamp(1.5rem,4vw,3.5rem)] leading-[clamp(1.75rem,5vw,4.375rem)] font-bold">
          Latest articles
        </h2>
        <div className="flex flex-wrap gap-[16px] p-[8px]">
          {blogData.map((e, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-[20px] mb-[20px] w-full lg:w-[calc(50%-8px)]"
              >
                <Image
                  height={0}
                  width={0}
                  src={e.image}
                  alt="blogHero image"
                  className="h-auto w-auto rounded-2xl"
                />

                <div className="flex flex-col gap-[4px]">
                  <p className="text-[22px] leading-[28px] font-semibold ">
                    {e.title}
                  </p>
                  <p className="text-[12px] text-gray-500 leading-[16px] font-normal ">
                    {e.info}
                  </p>
                </div>

                <div>
                  <p className="text-[16px] leading-[20px] text-gray-700 font-normal">
                    {e.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col bg-gray-200 w-full items-center justify-center py-[100px] px-[20px] gap-[40px]">
        <h2 className="font-semibold text-[clamp(1rem,3vw,2.5rem)] leading-[clamp(1rem,3vw,2.375rem)] text-center">
          Subscribe to Aetherfield Journal
        </h2>
        <div className="flex bg-[#000000] py-[12px] px-[20px] cursor-pointer">
          <p className="text-white text-[14px] leading-[18px] font-medium tracking-wide text-center">
            Explore the platform
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogHero;
