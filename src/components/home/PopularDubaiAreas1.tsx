// import skyline from "../../../public/primeareas/Popular dubai area.svg";
// import skylineTablet from "../../../public/primeareas/Tablet.svg";
// import skylineMobile from "../../../public/primeareas/Mobile 6.svg";

// export default function PopularDubaiAreas1() {
//   return (
//     <section className="pointer-events-none relative w-full min-h-100 md:min-h-screen overflow-hidden">
//       {/* Desktop */}
//       <img
//         src={skyline.src}
//         alt=""
//         className="hidden lg:block w-full h-full object-contain"
//       />

//       {/* Tablet */}
//       <img
//         src={skylineTablet.src}
//         alt=""
//         className="hidden sm:block lg:hidden w-full h-full object-contain"
//       />

//       {/* Mobile */}
//       <img
//         src={skylineMobile.src}
//         alt=""
//         className="block sm:hidden w-full h-auto object-contain"
//       />
//     </section>
//   );
// }

//===================================new code====================================
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
        src={skylineMobile}
        alt=""
        priority
        className="block sm:hidden object-contain w-full h-auto"
      />
    </section>
  );
}
//====================================================================================================
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
