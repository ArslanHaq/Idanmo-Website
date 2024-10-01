import AboutSectionOne from "@/components/Finance/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import FunctionalAreaData from "./featuresData";
import DisplayService from "@/components/Services/ServicesDisplay";
import featuresData from "@/components/Services/featuredata";

export const metadata: Metadata = {
  title: "Services Page | Idanimo Tech",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const Servicespage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Empowering your organization to thrive in its core areas while we fuel growth through Consultancy, System Integration, Capacity Building, and Enterprise Software Solutions"
      />
      {/* {FunctionalAreaData.map(({ id, icon, title, paragraph, left }) => (
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
      ))} */}
      {
        featuresData.map(({ id, title, paragraph1, paragraph2 }, index) => (
          <DisplayService
            key={id}
            title={title}
            paragraph1={paragraph1}
            paragraph2={paragraph2}
            useCase={id === 6 ? true : false}
          />
        ))
      }

    </>
  );
};

export default Servicespage;
