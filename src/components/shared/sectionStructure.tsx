
export default function SectionStructure({ title, children, isCentered = false, id = "" }: { title: string, children: React.ReactNode, isCentered?: boolean, id?: string }) {
    return (
        <div className="my-24">
            <h2 id={id} className="text-left text-5xl font-semibold text-gray-700">{title}</h2>
            <section className={`flex ${isCentered && "justify-center items-center"} flex-col gap-6`}>
                {children}
            </section >
        </div>
    );
}