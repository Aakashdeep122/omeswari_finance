import { useLocation } from "react-router-dom";
import {
  Home,
  Building2,
  Briefcase,
  User,
  Bike,
  Car,
  Landmark,
  Coins,
  Warehouse,
} from "lucide-react";

export default function Services() {
  const location = useLocation();

  const isServices = location.pathname === "/services";

  const services = [
    {
      title: "Gold Loan",
      icon: Coins,
      description:
        "Quick loans against your gold assets with competitive interest rates.",
    },
    {
      title: "Home Loan",
      icon: Home,
      description:
        "Affordable home financing solutions for your dream property.",
    },
    {
      title: "Loan Against Property",
      icon: Landmark,
      description: "Unlock the value of your property with flexible financing.",
    },
    {
      title: "Business Loan",
      icon: Briefcase,
      description: "Fuel business growth with tailored loan solutions.",
    },
    {
      title: "Personal Loan",
      icon: User,
      description: "Meet personal financial needs with hassle-free approvals.",
    },
    {
      title: "Two Wheeler Loan",
      icon: Bike,
      description: "Easy financing options for your preferred two-wheeler.",
    },
    {
      title: "Used Vehicle Loan",
      icon: Car,
      description: "Finance pre-owned vehicles with attractive terms.",
    },
    {
      title: "Commercial Loan",
      icon: Building2,
      description: "Funding support for commercial projects and expansion.",
    },
    {
      title: "Four Wheeler Loan",
      icon: Warehouse,
      description: "Drive your dream car home with flexible repayment plans.",
    },
  ];

  return (
    <>
      <section className={`${isServices ? "min-h-screen pt-16 md:pt-24 pb-8 md:pb-12" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 md:gap-12">
          <div className="text-center grid gap-4 md:gap-6">
            <span className="text-lg md:text-[34px] text-primary font-bold uppercase tracking-wider border-b-2 border-primary mx-auto">
              Our Services
            </span>

            <div className="flex flex-col gap-1 md:gap-3">
              <h2 className="text-xl md:text-[44px] font-bold text-primary">
                Financial Solutions For Every Need
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                Omeswari Financial Services provides trusted financing solutions
                designed to support individuals, families, and businesses in
                achieving their financial goals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white p-4 md:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 md:block">
                    <div className="w-12 h-12 md:w-15 md:h-15 rounded-xl bg-[#1c355c] flex items-center justify-center md:mb-3 group-hover:bg-[#efae1e] transition-all duration-300 flex-shrink-0">
                      <Icon className="text-white w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    <h3 className="text-lg md:text-2xl font-semibold text-[#1c355c]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2 md:mt-0">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
