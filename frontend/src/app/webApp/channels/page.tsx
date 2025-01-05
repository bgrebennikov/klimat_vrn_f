import {TitleLarge} from "@/components/elements/TitleLarge";


const ChannelsPage = () => {


    return (
        <>
            <div className={"p-4"}>
                <TitleLarge>Каналы</TitleLarge>

                <ul className={"mt-4"}>
                    {/*{channels?.map((ch, index) => (*/}
                    {/*    <div*/}
                    {/*        className={"p-4 bg-gray-200 rounded-2xl"}*/}
                    {/*        key={index}>*/}
                    {/*        <h1>ChannelID: {ch.channel_id}</h1>*/}
                    {/*        <h1>Channel Type: {ch.type}</h1>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </ul>
            </div>
        </>
    )
}

export default ChannelsPage