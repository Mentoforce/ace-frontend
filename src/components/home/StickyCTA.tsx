import Image from "next/image";
export default function StickyCTA() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 md:gap-3 md:flex md:flex-col hidden">
      <a href="https://wa.me/971500001889">
        <Image
          src="/CTA/whatsapp1.svg"
          alt="WhatsApp"
          width={42}
          height={42}
          className="hover:scale-110 transition rounded-full shadow-[0_6px_12px_rgba(117,117,117,0.35)]"
        />
      </a>

      <a href="tel:+971500001889">
        <Image
          src="/CTA/call1.svg"
          alt="Call"
          width={42}
          height={42}
          className="hover:scale-110 transition rounded-full shadow-[0_6px_12px_rgba(117,117,117,0.35)]"
        />
      </a>

      <a href="#">
        <Image
          src="/CTA/Frame355.svg"
          alt="Email"
          width={42}
          height={42}
          className="hover:scale-110 transition rounded-full shadow-[0_6px_12px_rgba(117,117,117,0.35)]"
        />
      </a>
    </div>
  );
}
