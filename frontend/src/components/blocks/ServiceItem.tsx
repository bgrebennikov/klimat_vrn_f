import TitleSmall from "@/components/elements/TitleSmall";
import SubtitleSmall from "@/components/elements/SubtitleSmall";
import ServiceItemModel from "@/components/blocks/ServiceItemModel";
import Text from "@/components/elements/Text";
import Subtitle from "@/components/elements/Subtitle";
import SimpleButton from "@/components/buttons/SimpleButton";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "@/libs/store/hooks";
import {showModal} from "@/libs/store/features/modalWindowSlice";

interface ServiceItemProps {
    item: ServiceItemModel
}

const ServiceItem = (props: ServiceItemProps) => {

    const dispatch = useAppDispatch();

    return (
        <div className={`flex flex-col sm:flex-row items-center sm:items-start bg-white p-6 rounded-2xl
                        w-full lg:w-1/3 grow
        `}>
            <div className={
                ""
            }>

                <img
                    className={"aspect-square"}
                    src={props.item.imageUrl} alt=""/>
            </div>
            <div
                className={"flex flex-col w-full sm:ms-4"}>
                <TitleSmall>
                    {props.item.title}
                </TitleSmall>
                <SubtitleSmall>
                    {props.item.subtitle}
                </SubtitleSmall>
                <Text className={"whitespace-pre-line mt-2"}>
                    {props.item.body}
                </Text>
                <Subtitle
                    className={"text-green-600 my-2"}
                >
                    {props.item.price}
                </Subtitle>
                <SimpleButton text={"Вызвать мастера"} onClick={() => {
                    dispatch(showModal({modal_key: 'callMasterMw'}))
                }}/>
            </div>
        </div>
    )
};


export default ServiceItem;