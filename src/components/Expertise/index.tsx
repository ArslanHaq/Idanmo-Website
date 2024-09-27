"use client"
import { useInView } from "react-intersection-observer";
import SectionTitle from "../Common/SectionTitle";
import FunctionalAreaData from "./featuresData";
import SingleFeature from "./SingleFeature";
import { useEffect } from "react";

const Expertise = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Percentage of the div visible before triggering the animation
  });

  useEffect(() => { console.log(inView) }, [inView])
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container ">
          <div ref={ref} className={`${inView ? "slide-in-left" : ""}`}
          >
            <div>

            </div>
            <SectionTitle
              title="What We Do"
              paragraph=""
              center
            />
          </div>

          <div className={` ${inView ? "slide-in-right" : ""} grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 `}>
            {FunctionalAreaData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
