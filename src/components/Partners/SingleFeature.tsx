import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full  flex justify-center items-center slide-in-right">
      <div className=" w-full flex justify-center flex-col items-center" data-wow-delay=".15s">
        <div className=" rounded-md   text-primary py-10">
          {icon}
        </div>
        {/* <h3 className="mb-5 text-lg   w-full font-bold text-black dark:text-white sm:text-lg lg:text-xl xl:text-3lg text-center ">
          {title}
        </h3> */}
        <p className=" text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
