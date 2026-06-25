export default function SchoolOutline({schoolOverview, mindmapItems}){
    return(
        <div
            className={`
                flex flex-col
                rounded-2xl
                border
                bg-gray-100
                border-neutral-200
                p-6
                shadow-sm
                w-full
                max-w-xl
            `}
        >
            {schoolOverview}

            {/* Mindmap */}
            <div className="space-y-6">
                {[0,1,2].map((category) => (
                    <div key={category}>
                        {mindmapItems[category]}
                    </div>
                ))}
            </div>
        </div>
    );
}
