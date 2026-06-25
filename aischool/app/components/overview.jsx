import { ArrowDown } from "lucide-react";
export default function Overview() {
    const concepts = [
        {
            title: "Mündigkeit",
            description: "Der Zustand der Selbstbestimmung und Eigenverantwortung. Die Fähigkeit, eigene Urteile zu fällen und selbstständig Entscheidungen zu treffen, ohne fremde Bevormundung."
        },
        {
            title: "Selbstverschuldung",
            description: "Das Unvermögen, sich des eigenen Verstandes ohne Leitung eines anderen zu bedienen. Die Unfähigkeit oder Unwilligkeit, eigenständig zu denken und Verantwortung zu übernehmen."
        },
        {
            title: "Vernunft",
            description: "Die Fähigkeit zum logischen Denken und kritischen Hinterfragen. Das zentrale Werkzeug der Aufklärung zur Überwindung von Aberglauben und Vorurteilen."
        },
        {
            title: "Autonomie",
            description: "Selbstgesetzgebung und Unabhängigkeit. Das Recht und die Fähigkeit, nach eigenen Prinzipien und Werten zu handeln, basierend auf eigenem Urteil."
        },
        {
            title: "Emanzipation",
            description: "Die Befreiung von Unterdrückung und Bevormundung. Der Prozess der Selbstbefreiung durch Bildung und kritisches Denken."
        },
        {
            title: "Aufklärung",
            description: "Der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit. Ein Prozess der Bildung, Kritik und rationalen Reflexion zur Erlangung von Freiheit und Selbstbestimmung."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex justify-between align-center flex-col">
            

            <div className="py-16 px-4 md:px-8 lg:px-16">
                <h2 className="text-4xl font-bold text-white text-center mb-4">Wichtige Konzepte</h2>
                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">Zentrale Fachbegriffe und Ideen der Aufklärung</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {concepts.map((concept, index) => (
                        <div key={index} className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-400 transition-colors shadow-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-3">{concept.title}</h3>
                            <p className="text-gray-200 text-sm leading-relaxed">{concept.description}</p>
                        </div>
                    ))}
                </div>
                <h2 className="text-4xl font-bold text-white text-center mt-16 mb-4">Sind wir heute immer noch in einer Zeit der Aufklärung?</h2>
                
            </div>
            <div className="text-white flex justify-center align-center animate-bounce mb-20"><ArrowDown  /></div>
        </div>
    )
}