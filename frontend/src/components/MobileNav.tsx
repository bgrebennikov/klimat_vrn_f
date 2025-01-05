import {useEffect, useRef, useState} from "react";

interface MobileNavProps {
    isOpen?: boolean;
    onNavItemClick?: (e:any) => void
}

const MobileNav = ({isOpen, onNavItemClick}: MobileNavProps) => {

    const [anim, setAnim] = useState(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(isOpen){
            menuRef?.current?.style.setProperty("display", "block")
            menuRef?.current?.style.setProperty("animation", "fade-anim .5s alternate")

            document.body.style.overflow = 'hidden';
        } else {
            menuRef?.current?.style.setProperty("animation", "fadeOut-anim .5s alternate")
            document.body.style.overflow = 'unset';
        }


    }, [isOpen])


    function endAnim(e: any) {
        if (e.nativeEvent.animationName === 'fadeOut-anim'){
            menuRef?.current?.style.setProperty("display", "none")
        }
    }

    return (
        <div
            ref={menuRef}
            className={`h-full hidden fixed bg-gray-150 z-50 w-full overflow-hidden overscroll-none`}
            onAnimationEnd={endAnim}
        >
            <h1 className={"text-2xl font-medium my-2 m-4 "}>Меню сайта</h1>
            <ul className={
                "flex flex-col flex-wrap mobile_nav m-4"
            }>
                <li><a href={"#main"} className={"block py-4"} onClick={onNavItemClick}>Главная</a></li>
                <li><a href={"#service"} className={"block py-4"} onClick={onNavItemClick}>Услуги</a></li>
                <li><a href={"#price"} className={"block py-4"} onClick={onNavItemClick}>Цены</a></li>
                <li><a href={"#portfolio"} className={"block py-4"} onClick={onNavItemClick}>Наши работы</a></li>
                <li><a href={"#reviews"} className={"block py-4"} onClick={onNavItemClick}>Отзывы</a></li>
                <li><a href={"#contacts"} className={"block py-4"} onClick={onNavItemClick}>Контакты</a></li>
            </ul>
        </div>
    )
};


export default MobileNav;