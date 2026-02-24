import Image from "next/image";
import skyline from "../../../public/Popular dubai area.svg";
import skyline1 from "../../../public/skyline4.svg";

export default function PopularDubaiAreas1() {
  //px-6 py-12
  return (
    <section
      className="pointer-events-none
        relative md:min-h-screen w-full overflow-hidden
      "
    >
      <Image src={skyline} alt="" fill className=" object-contain" />
    </section>
  );
}
