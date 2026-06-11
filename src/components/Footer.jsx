import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className=" text-primary py-4 bottom-0 w-full border-t border-gray-300 ">
        <div className="hidden md:block">
          <div className="flex gap-6 itmes-center justify-center mb-3 ">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c355c] hover:text-[#cf235c] transition-all duration-300 hover:scale-110"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c355c] hover:text-[#1468d6] transition-all duration-300 hover:scale-110"
          >
            <FaFacebookF size={22} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c355c] hover:text-[#229eeb] transition-all duration-300 hover:scale-110"
          >
            <FaTwitter size={22} />
          </a>

          <a
            href="https://wa.me/919151097514"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c355c] hover:text-[#25D366] transition-all duration-300 hover:scale-110"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
        </div>

        <div className="container mx-auto text-center text-sm md:text-base">
          <p>&copy; Omeswari Financial Services. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
