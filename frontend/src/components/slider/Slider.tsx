'use client'

import Image from "next/image";
import {useRef, useState} from "react";
import RightIcon from "@/components/icons/RightIcon";

interface SliderProps {
    items: SliderItem[];
    button: any
}


export default function Slider(props: SliderProps) {

    const sliderRef = useRef<HTMLDivElement>(null);
    let [currentSlide, setCurrentSlide] = useState<number>(0);


    function tr(e: any, index: number) {
        e.preventDefault();

        const width = sliderRef.current?.clientWidth!! * index
        sliderRef.current?.style.setProperty("transition", `1s ease`);
        sliderRef.current?.style.setProperty("transform", `translateX(-${width}px)`);


        setCurrentSlide(index);
    }

    function nextSlide(e: any) {
        if (currentSlide === props.items.length - 1) {
            tr(e, 0);
        } else {
            tr(e, currentSlide + 1);
        }

        e.preventDefault();
    }

    return (
        <div className={"relative h-vh-80 sm:h-full sm:aspect-square lg:aspect-auto"}>
            <div
                style={
                    {
                        // height: '77vh',
                    }
                }
                className={`p-6 bg-blue-800 w-full rounded-2xl absolute top-0 left-0 overflow-hidden
                           h-full
                `}>

                <div className={
                    "absolute top-0 left-0 z-20 h-full text-2xl text-white bg-gradient-to-b from-neutral-800 to-90% w-full max-h-32"
                }>
                    <h1
                        className={"font-gilroy-bold m-4"}
                    >Наши работы</h1>
                </div>

                <div className={"absolute top-0 left-0 z-10 w-full h-full flex"} ref={sliderRef}>

                    {/* Slider images and text content */}

                    {props.items.map((item, i) => (
                        <div className={"w-full h-full relative min-w-full"} key={i}>

                            <div className={
                                "absolute left-0 bottom-0 text-white m-4 mb-20 z-10"
                            }>
                                <h1 className={"font-gilroy-bold text-sm sm:text-xl"}>{item.top_text}</h1>
                                <h2 className={"text-lg sm:text-2xl font-gilroy-bold"}>{item.title}</h2>
                                <h3 className={"text-sm font-manrope pt-1 whitespace-pre-line"}>{item.subtitle}</h3>
                            </div>

                            <Image src={item.image} alt={""} width={0} height={0}
                                   sizes={"100vw"}
                                   style={{width: '100%', height: '100%'}}
                                   className={"object-cover"}
                            />

                            <div
                                className={"absolute bottom-0 left-0 bg-gradient-to-t from-black to-100% sm:to-90% w-full h-52"}
                            >
                            </div>
                        </div>
                    ))}

                </div>

                <div className="absolute bottom-0 left-0 z-20 p-4 flex items-center justify-between w-full">

                    <div className={""}>
                        {props.button}
                    </div>

                    <div
                        className={"sm:hidden w-8"}
                        onClick={nextSlide}
                    >
                        <RightIcon/>
                    </div>

                    {/* Slider Dots */}
                    <div className={"gap-2 hidden sm:flex"}>
                        {props.items.map((item, i) => (
                            <a href={"#"}
                               className={`w-4 h-4 rounded-2xl ${i === currentSlide ? 'bg-white' : 'bg-green-500'}`}
                               key={i}
                               onClick={(e) => tr(e, i)
                               }
                            ></a>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )

}