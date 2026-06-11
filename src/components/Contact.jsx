import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Alert from "../UI/Alert";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const isContact = location.pathname === "/contact";

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  /* -------------------------------------------------------------------------- */
  /*                     to show alert message for 4 seconds                    */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({
          ...prev,
          show: false,
        }));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  /* -------------------------------------------------------------------------- */
  /*                               Submit function                              */
  /* -------------------------------------------------------------------------- */
  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setToast({
        show: true,
        message: "Enquiry sent successfully.",
        type: "success",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setToast({
        show: true,
        message: error?.text || "Something went wrong.",
        type: "error",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <section className={`${isContact ? "min-h-screen pt-16 md:pt-24 pb-8 md:pb-12" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 grid gap-5 md:gap-10">
          <div className="text-center grid gap-4 md:gap-6">
            <span className="text-lg md:text-[34px] text-primary font-bold uppercase tracking-wider border-b-2 border-primary mx-auto">
              Contact Us
            </span>

            <div className="flex flex-col gap-1 md:gap-3">
              <h2 className="text-xl md:text-[44px] font-bold text-primary">
                Let's Discuss Your Financial Goals
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                Fill out the form below and our team will contact you shortly.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
            {/* Left Side */}
            <div className="bg-primary rounded-2xl md:rounded-3xl p-4 md:p-8 text-white">
              <h3 className="text-lg md:text-2xl font-bold mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6 text-sm md:text-base">
                <div className="flex gap-4">
                  <Phone className="text-accent w-5 h-5 md:w-7 md:h-7 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+91 9151097514</p>
                    <p>+91 9540556006</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-accent w-5 h-5 md:w-7 md:h-7 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>omeswarifinancialservices@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-accent w-5 h-5 md:w-7 md:h-7 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Head Office</p>
                    <p>221, Badarka, Sadar</p>
                    <p>Azamgarh, Uttar Pradesh</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-accent w-5 h-5 md:w-7 md:h-7 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Branch Office</p>
                    <p>
                      Geeta Radio 2nd Floor, Near Hotel Surabhi International
                    </p>
                    <p>Pahadiya, Varanasi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-3 md:space-y-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full text-sm md:text-base border border-gray-400 rounded-xl px-4 py-3 outline-none focus:border-[#efae1e]"
                />

                <input
                  name="from_email"
                  type="email"
                  placeholder="Email Address"
                  required
                  maxLength={50}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  onInput={(e) => {
                    e.target.value = e.target.value.trim().toLowerCase();
                  }}
                  className="w-full text-sm md:text-base border border-gray-400 rounded-xl px-4 py-3 outline-none focus:border-[#efae1e]"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className="w-full text-sm md:text-base border border-gray-400 rounded-xl px-4 py-3 outline-none focus:border-[#efae1e]"
                />

                <select
                  name="service"
                  required
                  className="w-full text-sm md:text-base border border-gray-400 rounded-xl px-4 py-3 outline-none focus:border-[#efae1e]"
                >
                  <option>Select Service</option>
                  <option>Gold Loan</option>
                  <option>Home Loan</option>
                  <option>Personal Loan</option>
                  <option>Business Loan</option>
                  <option>Loan Against Property</option>
                  <option>Vehicle Loan</option>
                </select>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full text-sm md:text-base border border-gray-400 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#efae1e]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-sm md:text-base bg-[#efae1e] text-[#1c355c] font-semibold py-3 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#1c355c] hover:text-white cursor-pointer"
                >
                  <Send size={18} />{" "}
                  <span>{loading ? "Sending..." : "Send Enquiry"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Alert show={toast.show} message={toast.message} type={toast.type} />
    </>
  );
}
