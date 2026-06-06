import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const desktopSlides = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

const mobileSlides = [
  "/images/mobilehero1.jpg",
  "/images/mobilehero2.jpg",
  "/images/mobilehero3.jpg",
];

const totalSlides = Math.min(desktopSlides.length, mobileSlides.length);

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <>
      <section className="relative md:h-screen overflow-hidden">
        {/* Desktop Background Slider */}
        {desktopSlides.map((image, index) => (
          <div
            key={`desktop-${index}`}
            className={`hidden md:block absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* Mobile Background Slider */}
        {mobileSlides.map((image, index) => (
          <div
            key={`mobile-${index}`}
            className={`md:hidden absolute top-0 left-0 w-full h-[85%] bg-cover bg-top transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* Desktop Overlay */}
        <div className="hidden md:block absolute inset-0 bg-blue-950/70" />

        {/* Mobile Overlay */}
        <div className="md:hidden absolute top-0 left-0 w-full h-[85%] bg-blue-950/70" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl pt-32 md:pt-0">
              <span className="inline-block text-white text-base md:text-xl mb-3 md:mb-4 font-light">
                We help,
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-tight md:leading-none">
                <span className="text-accent">Growing</span>
                <br />
                <span className="text-white">Business</span>
              </h1>

              <p className="mt-5 md:mt-8 text-gray-200 text-base md:text-xl max-w-2xl leading-relaxed">
                We provide expert financial solutions, investment guidance, loan
                consulting, and strategic planning to help businesses achieve
                sustainable growth.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary border border-white px-6 md:px-8 py-2 md:py-4 rounded-full font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#efae1e] hover:border-[#efae1e] hover:text-white hover:-translate-y-1 hover:shadow-xl"
                >
                  Contact Us
                </Link>

                <Link
                  to="/services"
                  className="border border-white text-white px-6 md:px-8 py-2 md:py-4 rounded-full font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#1c355c] hover:-translate-y-1 hover:shadow-xl"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="relative md:absolute md:bottom-0 left-0 right-0 z-20 mt-10 md:mt-0">
          <div className="max-w-7xl mx-auto px-6 pb-1.5">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl border md:border-0 border-gray-200 shadow-md md:shadow-2xl overflow-hidden">
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">15+</h3>
                <p className="text-gray-500 text-sm md:text-base">Years Experience</p>
              </div>

              <div className="p-4 md:p-6 text-center border-l border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">300+</h3>
                <p className="text-gray-500 text-sm md:text-base">Happy Clients</p>
              </div>

              <div className="p-4 md:p-6 text-center border-l border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">₹10Cr+</h3>
                <p className="text-gray-500 text-sm md:text-base">Assets Managed</p>
              </div>

              <div className="p-4 md:p-6 text-center border-l border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">24/7</h3>
                <p className="text-gray-500 text-sm md:text-base">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
