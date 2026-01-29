import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import React from "react";

const ContactHero = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className=" w-full pb-[100px] flex flex-col gap-[80px] bg-gradient-to-r from-[#A8D3FF] to-[#FFF4DF]">
        <Header />
        <h2 className="font-bold text-center text-[clamp(1.75rem,5.5vw,5.5rem)] leading-[clamp(2rem,6vw,6.25rem)]">
          Contact Us
        </h2>

        <div className="flex flex-col w-full md:w-[70%] mx-auto md:p-[40px] rounded-2xl bg-white">
          <section className="w-full py-[40px] flex items-center justify-center px-4">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
              {/* FORM */}
              <form className="w-full lg:w-2/3 bg-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Contact Form</h1>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
                />

                <button
                  type="submit"
                  className="mt-2 bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>

              {/* CONTACT DETAILS */}
              <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <h1 className="text-2xl mb-4 font-semibold">Contact Details</h1>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-700" />
                    <a
                      href="mailto:admin@gmail.com"
                      className="text-[16px] text-gray-700 hover:underline"
                    >
                      admin@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-700" />
                    <a
                      href="tel:03186189428"
                      className="text-[16px] text-gray-700 hover:underline"
                    >
                      0318 6189428
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactHero;
