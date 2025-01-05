import {PlayIcon} from "@/components/icons/PlayIcon";

interface VideoPlayerProps {
    src: string;
    className?: string;
}


export const VideoPlayer = (props: VideoPlayerProps) => {

    function handlePlayBtn(e: any) {
        e.preventDefault();
    }

    return (
        <>
            <div className={`${props.className} relative`}>
                <video className={`
            w-full aspect-video rounded-2xl
            `}
                controls={true}
                >
                    <source src={props.src} type="video/mp4"/>
                </video>

            </div>
        </>
    )
}