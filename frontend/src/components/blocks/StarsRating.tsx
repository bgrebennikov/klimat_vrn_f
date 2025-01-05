import {StarIcon} from "@/components/icons/StarIcon";
import {useState} from "react";

interface StarsRatingProps {
    interactive?: boolean;
    onSelect?: (value: number) => void;
    rating: number;
    className?: string
}


export const StarsRating = (props: StarsRatingProps) => {

    const [currentRating, setCurrentRating] = useState(props.rating);

    function handleOnMouseEnter(e: any, rating: number) {
        if (!props.interactive) return;
        setCurrentRating(rating + 1)
    }

    function handleMouseLeave(e: any) {
        setCurrentRating(props.rating)
    }

    return (
        <div className={`${props.className} flex flex-row gap-2`} onMouseLeave={handleMouseLeave}>
            {[...Array(5)].map((star, index) => {
                return (
                    <div key={index} className={props.interactive ? "cursor-pointer" : "cursor-auto"}
                         onMouseEnter={(e) => handleOnMouseEnter(e, index)}
                         onClick={() => props.onSelect ? props.onSelect(index+1) : {}}
                    >
                        <StarIcon selected={currentRating > index}/>
                    </div>
                );
            })}
        </div>
    )
}