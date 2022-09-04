import React from "react";
import SliderItem from "./SliderItem";
type Props = {
  title: string;
};

const Slider = ({ title }: Props) => {
  return (
    <div className="w-full px-4 flex flex-col gap-3 min-h-[260px]">
      <h3 className="font-bold text-xl capitalize">{title}</h3>
      <div className="grid grid-cols-5 gap-4 items-start">
        <SliderItem
          img={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.netflix-nederland.nl%2Fwp-content%2Fuploads%2F2018%2F05%2Fs2-13rw-810x456.jpg&f=1&nofb=1"
          }
        />
        <SliderItem
          img={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdHWWPwXddyQ%2Fmaxresdefault.jpg&f=1&nofb=1"
          }
        />
        <SliderItem
          img={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.netflix-nederland.nl%2Fwp-content%2Fuploads%2F2020%2F08%2FRust-Valley-Restorers-Netflix-serie.jpg&f=1&nofb=1"
          }
        />
        <SliderItem
          img={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdonung4k.com%2Fwp-content%2Fuploads%2F2021%2F08%2F%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B8%25A7%25E0%25B8%25B4%25E0%25B8%25A7%25E0%25B8%258B%25E0%25B8%25B5%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B9%258C-Squid-Game-2021-%25E0%25B8%25AA%25E0%25B8%2584%25E0%25B8%25A7%25E0%25B8%25B4%25E0%25B8%2594%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25A1-%25E0%25B9%2580%25E0%25B8%25A5%25E0%25B9%2588%25E0%25B8%2599%25E0%25B8%25A5%25E0%25B8%25B8%25E0%25B9%2589%25E0%25B8%2599%25E0%25B8%2595%25E0%25B8%25B2%25E0%25B8%25A2.jpg&f=1&nofb=1"
          }
        />
        <SliderItem
          img={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmr.comingsoon.it%2Fimgdb%2Flocandine%2Fposter%2F46617_hd.jpg&f=1&nofb=1"
          }
        />
      </div>
    </div>
  );
};

export default Slider;
