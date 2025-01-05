import DoneIcon from "@/components/icons/DoneIcon";

interface FeaturesProps {
    titles: string[],
    className?: string
}

const Features = ({titles, className}: FeaturesProps) => {
    return (
        <div className={`flex items-start gap-4 flex-col sm:flex-row ${className}`}>
            {titles?.map((title, index) => (
                <div className={"flex items-start gap-4"} key={index}>
                    <div className="rounded-full bg-white p-2" key={index}>
                        <DoneIcon/>
                    </div>
                    <div className="items-center font-medium text-sm whitespace-pre-line">
                        <p>{title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Features;