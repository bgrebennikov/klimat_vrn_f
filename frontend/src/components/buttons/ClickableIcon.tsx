'use client'

interface ClickableIconProps {
    icon: any,
    onClick?: (e: any) => void,
    href?: string,
    className?: string,
}

const ClickableIcon = (props: ClickableIconProps) => {

    function handleClick(e: any) {
        if (props.onClick) {
            props.onClick(e)
        } else {
            e.preventDefault();
        }
    }

    return (
        <a
            className={`block ${props.className}`}
            href={props.href ?? '#'}
            onClick={handleClick}
        >
            {props.icon}
        </a>
    )
};

export default ClickableIcon;