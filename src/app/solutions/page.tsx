import AboutSectionOne from "@/components/Finance/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import FunctionalAreaData from "./featuresData";

export const metadata: Metadata = {
  title: "Solutions Page | Idanimo Tech",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const SolutionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Solutions"
        description="Empowering your organization to excel in core competencies while we drive innovation through Identification, E-Governance, and Digital Transformation solutions"
      />
      {FunctionalAreaData.map(({ id, icon, title, paragraph, left }) => (
        <AboutSectionOne
          key={id}
          title={title}
          para={
            <>
              <ul>
                <li>{paragraph}</li>
              </ul>
            </>
          }
          icon={icon}
          rotate={false}
          left={left}
        />
      ))}

    </>
  );
};

export default SolutionsPage;
