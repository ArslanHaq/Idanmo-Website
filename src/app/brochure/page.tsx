
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import dynamic from "next/dynamic";
// import BrochureViewer from "@/components/Brochure/BrochureViwer";
const BrochureViewer = dynamic(() => import("@/components/Brochure/BrochureViwer"), { ssr: false, });



export const metadata: Metadata = {
  title: "Brochure Page | Idanimo Tech",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};
const pdfSrc = '/Idanimo-Brochure.pdf'

const BrochurePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="BrochurePage"
        description="Empowering your organization to excel in core competencies while we drive innovation through Identification, E-Governance, and Digital Transformation solutions"
      />
      <div className=" py-20">
        {pdfSrc &&
          <BrochureViewer pdfSrc={pdfSrc} />
        }
      </div>
    </>
  );
};

export default BrochurePage;
