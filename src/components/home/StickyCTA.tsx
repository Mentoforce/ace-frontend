import Image from "next/image";
export default function StickyCTA() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 md:gap-3 md:flex md:flex-col hidden">
      <a href="#">
        <Image
          src="/CTA/whatsapp1.svg"
          alt="WhatsApp"
          width={48}
          height={48}
          className="hover:scale-110 transition"
        />
      </a>

      <a href="#">
        <Image
          src="/CTA/call1.svg"
          alt="Call"
          width={48}
          height={48}
          className="hover:scale-110 transition"
        />
      </a>

      <a href="#">
        <Image
          src="/CTA/Frame355.svg"
          alt="Email"
          width={48}
          height={48}
          className="hover:scale-110 transition"
        />
      </a>
    </div>
  );
}
