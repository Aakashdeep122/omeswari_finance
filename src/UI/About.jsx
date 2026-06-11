import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  const isAbout = location.pathname === "/about";

  return (
    <section className={`${isAbout ? "min-h-screen pt-24 pb-12" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 grid gap-5 md:gap-10">
        {/* Header */}
        <div className="text-center grid gap-4 md:gap-6">
          <span className="text-lg md:text-[34px] text-primary font-bold uppercase tracking-wider border-b-2 border-primary mx-auto">
            About Us
          </span>

          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Your trusted financial partner helping individuals, families, and
            businesses achieve their financial goals.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col gap-5">
            <div className="flex gap-4 items-center">
              <div className="w-50 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/about.png"
                  alt="About Omeswari Financial"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-xl font-bold text-primary leading-tight">
                Your Financial Partner For Life
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-700 text-sm font-semibold uppercase tracking-widest text-center">
                About Omeswari Financial
              </span>

              <p className="text-gray-600 leading-relaxed text-sm">
                Omeswari Financial Services provides reliable and transparent
                financial solutions designed to support individuals, families,
                and businesses in achieving their financial goals.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm">
                We specialize in Gold Loans, Home Loans, Personal Loans,
                Business Loans, Loan Against Property, Vehicle Loans, and
                Commercial Financing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-2">
              <div>
                <h3 className="text-3xl font-bold text-accent">500+</h3>
                <p className="text-gray-500 font-medium text-sm">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-accent">10+</h3>
                <p className="text-gray-500 font-medium text-sm">Loan Solutions</p>
              </div>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block relative overflow-hidden rounded-[18px] shadow-xl">
            <img
              src="/images/about.png"
              alt="About Omeswari Financial"
              className="w-full"
            />

            <div className="absolute inset-0 bg-[#1c355c]/15" />
          </div>

          {/* Desktop Content */}
          <div className="hidden lg:flex flex-col gap-4">
            <span className="text-gray-500 text-lg font-semibold uppercase tracking-widest">
              About Omeswari Financial
            </span>

            <h2 className="text-4xl font-bold text-primary leading-tight">
              Your Financial Partner For Life
            </h2>

            <p className="text-gray-600 leading-8">
              Omeswari Financial Services provides reliable and transparent
              financial solutions designed to support individuals, families, and
              businesses in achieving their financial goals.
            </p>

            <p className="text-gray-600 leading-8">
              We specialize in Gold Loans, Home Loans, Personal Loans, Business
              Loans, Loan Against Property, Vehicle Loans, and Commercial
              Financing.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="text-4xl font-bold text-accent">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-accent">10+</h3>
                <p className="text-gray-600">Loan Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
