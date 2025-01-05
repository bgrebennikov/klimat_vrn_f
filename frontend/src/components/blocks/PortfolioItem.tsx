import TitleSmall from "@/components/elements/TitleSmall";
import Text from "@/components/elements/Text";
import {PortfolioItemModel} from "@/components/blocks/PortfolioItemModel";

interface PortfolioItemProps {
    className?: string;
    item: PortfolioItemModel;
}


export const PortfolioItem = (props: PortfolioItemProps) => {
    return (
        <>
            <div className={`${props.className} flex items-start
                bg-white p-4 rounded-2xl flex-col sm:flex-row
            `}>
                <div className={""}>
                    <img src={props.item.imageUrl} alt={props.item.title}
                         className={"aspect-square rounded-2xl sm:max-w-48 object-cover"}
                    />
                </div>
                <div className={"flex h-full flex-col justify-between  mt-4 sm:mt-0 sm:px-4"}>

                    <div>
                        <TitleSmall>{props.item.title}</TitleSmall>
                        <Text className={"mt-2"}>
                            {props.item.body}
                        </Text>
                    </div>

                    <div className={"pt-4"}>
                        <Text className={"text-gray-400"}>06.07.2024</Text>
                    </div>

                </div>
            </div>
        </>
    )
}