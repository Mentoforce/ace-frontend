import Image from "next/image";
export default function StickyCTA() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col">
      <a href="#">
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={98}
          height={98}
          className="hover:scale-110 transition"
        />
      </a>

      <a href="#">
        <Image
          src="/call.svg"
          alt="Call"
          width={98}
          height={98}
          className="hover:scale-110 transition"
        />
      </a>

      <a href="#">
        <Image
          src="/chat-bubble.svg"
          alt="Email"
          width={98}
          height={98}
          className="hover:scale-110 transition"
        />
      </a>
    </div>
  );
}
