import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "/mtech_logo.svg",
    "/mac_logo.svg",
    "/glycon_logo.svg",
    "/spacebar_logo.svg",
    "/mtech_logo.svg",
    "/mac_logo.svg",
    "/glycon_logo.svg",
    "/spacebar_logo.svg",
    "/mtech_logo.svg",
    "/mac_logo.svg",
    "/glycon_logo.svg",
    "/spacebar_logo.svg",
  ];

  const lowerMarquee = [
    "/mtech_logo.svg",
    "/mac_logo.svg",
    "/glycon_logo.svg",
    "/spacebar_logo.svg",
    "/mtech_logo.svg",
    "/mac_logo.svg",
    "/glycon_logo.svg",
    "/spacebar_logo.svg",
    "/mtech_logo.svg",
    "/mac_logo.svg",
    "/glycon_logo.svg",
    "/spacebar_logo.svg",
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;