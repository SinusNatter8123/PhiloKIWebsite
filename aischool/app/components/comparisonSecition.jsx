export default function ComparisonSection() {
    const comparisons = [
        {
            good: "KI unterstützt Denken",
            bad: "KI ersetzt Denken"
        },
        {
            good: "Antworten werden geprüft",
            bad: "Antworten werden übernommen"
        },
        {
            good: "Eigene Argumente entwickeln",
            bad: "Fertige Argumente kopieren"
        },
        {
            good: "Kritisches Hinterfragen",
            bad: "Blindes Vertrauen"
        },
        {
            good: "Mündigkeit wächst",
            bad: "Unmündigkeit wächst"
        }
    ];

    return (
        <section
            className="
                min-h-screen
                flex
                flex-col
                items-center
                justify-center
                px-8
                py-20
                bg-gradient-to-b
                from-blue-950
                
                to-slate-900
            "
        >
            <h2 className="text-white text-4xl font-extrabold mb-4">
                Philosophischer Vergleich
            </h2>

            <p
                className="
                    text-blue-100
                    max-w-3xl
                    text-center
                    mb-12
                "
            >
                Nicht die KI selbst entscheidet über Mündigkeit oder
                Unmündigkeit. Entscheidend ist, wie Menschen mit ihr
                umgehen.
            </p>

            <div
                className="
                    w-full
                    max-w-5xl
                    rounded-3xl
                    overflow-hidden
                    border
                    border-white/10
                    backdrop-blur-sm
                "
            >
                {/* Header */}
                <div
                    className="
                        grid
                        grid-cols-2
                        text-center
                    "
                >
                    <div className="bg-green-500/20 p-6">
                        <h3 className="text-2xl font-bold text-green-300">
                            Gute Schule
                        </h3>
                    </div>

                    <div className="bg-red-500/20 p-6">
                        <h3 className="text-2xl font-bold text-red-300">
                            Schlechte Schule
                        </h3>
                    </div>
                </div>

                {/* Vergleich */}
                {comparisons.map((row, index) => (
                    <div
                        key={index}
                        className="
                            grid
                            grid-cols-2
                            border-t
                            border-white/10
                        "
                    >
                        <div
                            className="
                                p-5
                                text-green-100
                                border-r
                                border-white/10
                            "
                        >
                            ✓ {row.good}
                        </div>

                        <div
                            className="
                                p-5
                                text-red-100
                            "
                        >
                            ✗ {row.bad}
                        </div>
                    </div>
                ))}
            </div>

            
        </section>
    );
}