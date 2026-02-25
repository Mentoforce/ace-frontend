import Image from "next/image";
import skyline from "../../../public/primeareas/Popular dubai area.svg";
import skylineTablet from "../../../public/primeareas/Tablet.svg";
import skylineMobile from "../../../public/primeareas/Mobile iphone.svg";
import skylineMobile1 from "../../../public/primeareas/Frame 361.svg";

export default function PopularDubaiAreas1() {
  return (
    <section className="pointer-events-none relative h-screen xl:h-[110vh] overflow-hidden">
      {/* Desktop */}
      <Image
        src={skyline}
        alt=""
        fill
        priority
        className="hidden lg:block xl:object-cover object-contain"
      />

      {/* Tablet */}
      <Image
        src={skylineTablet}
        alt=""
        fill
        priority
        className="hidden sm:block lg:hidden object-contain"
      />

      {/* Mobile */}
      <Image
        src={skylineMobile1}
        alt=""
        priority
        className="block sm:hidden object-contain w-full h-auto"
      />
    </section>
  );
}

// import Image from "next/image";
// import skyline from "../../../public/primeareas/Popular dubai area.svg";
// import skylineTablet from "../../../public/primeareas/Tablet.svg";
// // import skyline1 from "../../../public/skyline4.svg";

// export default function PopularDubaiAreas1() {
//   //px-6 py-12
//   return (
//     <section
//       className="pointer-events-none
//         relative md:min-h-screen w-full overflow-hidden
//       "
//     >
//       <picture>
//         {/* Desktop */}
//         <source media="(min-width: 1024px)" srcSet={skyline.src} />

//         {/* Tablet */}
//         <source media="(min-width: 640px)" srcSet={skylineTablet.src} />

//         {/* Mobile fallback */}
//         {/* <Image
//           src={skylineMobile}
//           alt=""
//           fill
//           priority
//           className="object-contain"
//         /> */}
//       </picture>
//       {/* <Image src={skyline} alt="" fill className=" object-contain" /> */}
//     </section>
//   );
// }
