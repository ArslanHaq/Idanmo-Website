import SectionTitle from "../Common/SectionTitle";

interface Section {
    title: string;
    paragraph1: string | JSX.Element;
    paragraph2: string | JSX.Element;
    useCase?: boolean;

}
export default function DisplayService({ title, paragraph1, paragraph2, useCase }: Section) {

    return (
        <section id="about" className="pt-16 md:pt-20 lg:pt-28">
            <div className="container">
                <div className=" pb-16  md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full">
                            <div
                                className={`w-full slide-in-left max-w-[45rem] mb-20`}
                            >
                                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black font-serif dark:text-white sm:text-4xl md:text-[35px] underline underline-offset-8">
                                    {title}
                                </h2>

                            </div>
                            <div className="flex gap-x-12 slide-in-right ">
                                <div className="w-1/2 ">
                                    <p className="text-center mb-4 text-xl font-bold !leading-tight text-black dark:text-white font-serif  sm:text-2xl md:text-3xl underline underline-offset-8">
                                        Key Characteristics
                                    </p>
                                    <p className="text-base font-medium leading-relaxed text-body-color mt-10">
                                        {paragraph1}
                                    </p>
                                </div>
                                <div className="w-1/2 ">
                                    <p className="text-center mb-4 text-xl font-bold !leading-tight text-black dark:text-white font-serif  sm:text-2xl md:text-3xl underline underline-offset-8">
                                        {useCase ? 'Use Cases' : ' Key Benefits'}
                                    </p>
                                    <p className="text-base font-medium leading-relaxed text-body-color mt-10">
                                        {paragraph2}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}