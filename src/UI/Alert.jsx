import { useEffect, useState } from "react";

export default function Alert({ show, message, type = "success" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500); // exit animation duration

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed
        top-20
        right-6
        z-[9999]
        min-w-[320px]
        max-w-md
        px-6
        py-4
        rounded-xl
        shadow-2xl
        text-white
        font-medium
        ${show ? "animate-toast-in" : "animate-toast-out"}
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      {message}
    </div>
  );
}
