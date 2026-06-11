import { Link, useLocation } from "react-router-dom";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Handshake,
  BadgeCheck,
} from "lucide-react";

export default function AboutUs() {
  const location = useLocation();
  const isAboutUs = location.pathname === "/about";

  const missionVision = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become one of India's most trusted financial consulting firms, known for integrity, customer satisfaction and financial excellence.",

      cardClass: "bg-primary",
      titleClass: "text-white",
      textClass: "text-gray-200",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower individuals and businesses by providing accessible, transparent and innovative financial solutions that contribute to long-term financial growth and stability.",
      cardClass: "bg-white border border-gray-200 shadow-md",
      titleClass: "text-primary",
      textClass: "text-gray-600",
    },
  ];

  const companyStats = [
    {
      value: "500+",
      label: "Happy Clients",
    },
    {
      value: "10+",
      label: "Loan Solutions",
    },
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "24/7",
      label: "Customer Support",
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Trusted Advice",
      text: "Professional financial guidance tailored to your needs.",
    },
    {
      icon: BadgeCheck,
      title: "Quick Approval",
      text: "Fast and simplified loan processing support.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      text: "Dedicated support throughout your financial journey.",
    },
    {
      icon: Handshake,
      title: "Transparent Process",
      text: "No hidden surprises. Clear communication always.",
    },
  ];

  return (
    <section className={`${isAboutUs ? "min-h-screen pt-16 md:pt-24 pb-8 md:pb-12" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 md:gap-12">
        {/* Hero */}
        <div className="text-center grid gap-4 md:gap-6">
          <span className="text-lg md:text-[34px] text-primary font-bold uppercase tracking-wider border-b-2 border-primary mx-auto">
            About Us
          </span>
          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-xl md:text-[44px] font-bold text-primary">
              Building Trust Through Financial Excellence
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Omeswari Financial Services is committed to providing transparent,
              reliable and customer-focused financial solutions that help
              individuals, families and businesses achieve their financial
              goals.
            </p>
          </div>
        </div>

        {/* Company Intro */}
        <div className="grid lg:grid-cols-2 gap-10 items-center ">
          <div>
            <img
              src="/images/about.png"
              alt="Omeswari Financial"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div className="space-y-5">
            <span className="uppercase text-sm md:text-base tracking-widest text-gray-500 font-semibold">
              Who We Are
            </span>

            <h2 className="text-xl md:text-4xl font-bold text-primary">
              Your Financial Partner For Life
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              At Omeswari Financial Services, we understand that every financial
              journey is unique. Whether you are purchasing your dream home,
              expanding your business, funding personal goals, or seeking
              working capital, our experienced team helps you choose the right
              financial solution.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We work with leading financial institutions and lenders to provide
              competitive loan options with a smooth and hassle-free process.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          {missionVision.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`${item.cardClass} py-4 px-6 md:py-6 rounded-3xl flex flex-col gap-2 md:gap-3`}
              >
                <div className="flex items-center gap-3 md:block">
                  <Icon className="text-accent w-7 h-7 md:w-10 md:h-10 " />

                  <h3 className={`text-xl md:text-2xl font-bold ${item.titleClass}`}>
                    {item.title}
                  </h3>
                </div>

                <p className={`text-sm md:text-base leading-relaxed ${item.textClass}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className=" flex flex-col gap-4 md:gap-8">
          <div className="text-center grid gap-2 md:gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              Why Choose Us
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              We focus on customer satisfaction, transparency and fast service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 "
                >
                  <div className="flex items-center gap-3 md:block">
                    <Icon
                      size={36}
                      className="text-accent flex-shrink-0 md:mb-4"
                    />

                    <h3 className="text-lg md:text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm md:text-base mt-2">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#1c355c]/90 rounded-2xl md:rounded-3xl p-6 md:p-10 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center">
            {companyStats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl md:text-5xl font-bold text-accent">{stat.value}</h3>

                <p className="text-white text-sm md:text-base md:mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-3xl flex flex-col items-center gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-6 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-4xl font-bold text-primary">
              Ready To Achieve Your Financial Goals?
            </h2>

            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Our experts are ready to guide you toward the best financial
              solutions for your needs.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-block w-fit text-sm md:text-base bg-[#efae1e] text-[#1c355c] font-semibold px-8 py-4 rounded-full justify-center items-center gap-2 transition-all duration-300 hover:bg-[#1c355c] hover:text-white cursor-pointer"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
