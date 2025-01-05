import Text from "@/components/elements/Text";
import SubtitleSmall from "@/components/elements/SubtitleSmall";

export const Footer = () => {
    return (
        <>
            <footer
                className={"bg-white p-6 md:px-16"}
            >
                <div>
                    <SubtitleSmall>© remont-split-vrn.ru</SubtitleSmall>
                    <Text>ИНН: 468646462165</Text>
                </div>
            </footer>
        </>
    )
}