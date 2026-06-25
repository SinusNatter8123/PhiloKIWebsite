import BadSchool from "./badSchool";
import GoodSchool from "./goodSchool";
import { ArrowDown } from "lucide-react";

export default function SchoolSection() {
    return (
        <section className="min-h-screen flex items-center flex-col justify-center w-full bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.2),transparent_30%),linear-gradient(180deg,#0f172a_0%,#020617_100%)]">
            
            <div className="w-full max-w-4xl text-center px-6 py-20 sm:px-10">
                <div className="rounded-[2rem] ">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Fallbeispiel: KI in der Schule
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Führt KI dazu, dass sich der Prozess der Aufklärung umdreht?
                    </p>
                    <p className="mt-4 text-lg leading-8 text-slate-300">
                        Werden unsere Kinder in Zukunft immer unmündiger?
                    </p>
                </div>
            </div>
            <div className="flex flex-row gap-20 justify-around ">
                <GoodSchool />
                <BadSchool />
            </div>
            <div className="text-white animate-bounce mt-20"><ArrowDown/></div>
        </section>
    )
}