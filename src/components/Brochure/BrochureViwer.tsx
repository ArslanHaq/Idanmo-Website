'use client'
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set the worker for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Define dimensions for the PDF pages
const width = 500;
const height = 724;

// Define a type for the Page component props
interface PageProps {
    pageNumber: number;
    dimensions: any
}

// Page component to render each page of the PDF
const Page = React.forwardRef<HTMLDivElement, PageProps>(({ pageNumber, dimensions }, ref) => {
    return (
        <div ref={ref}>
            <ReactPdfPage pageNumber={pageNumber} height={dimensions.height} width={dimensions.width} />
        </div>
    );
});

// Set the display name for the Page component
Page.displayName = "PDFPage";

// Dynamically import HTMLFlipBook to prevent server-side rendering
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

// BrochureViewer component to display the PDF

interface BrochureViewerProps {
    pdfSrc: string;
}
export default function BrochureViewer({ pdfSrc }: BrochureViewerProps) {
    const [numPages, setNumPages] = useState<number | null>(null);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const onDocumentLoadError = (error: any) => {
        console.error("Error loading PDF:", error);
    };

    const [dimensions, setDimensions] = useState({ height: 724, width: 500 });

    // Adjust height and width based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                // Set larger size for md screens and up
                setDimensions({ height: 724, width: 500 });
            } else {
                // Default size for small screens
                setDimensions({ height: 550, width: 350 });
            }
        };

        // Initial check
        handleResize();

        // Add event listener to handle window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div>
            <Document
                file={pdfSrc} // Path to PDF in public folder
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
            >
                {numPages && (
                    <HTMLFlipBook
                        width={dimensions.width}
                        height={dimensions.height}
                        style={{ margin: "0 auto" }}
                        flippingTime={1000}
                        mobileScrollSupport
                        showPageCorners
                        className={""}
                        startPage={0}
                        size={"fixed"}
                        minWidth={0}
                        maxWidth={0}
                        minHeight={0}
                        maxHeight={0}
                        drawShadow={false}
                        usePortrait={true}
                        startZIndex={0}
                        autoSize={true}
                        maxShadowOpacity={0}
                        showCover={false}
                        clickEventForward={false}
                        useMouseEvents={true}
                        swipeDistance={0}
                        disableFlipByClick={false}                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={index} pageNumber={index + 1} dimensions={dimensions} />
                        ))}
                    </HTMLFlipBook>
                )}
            </Document>
        </div>
    );
}
