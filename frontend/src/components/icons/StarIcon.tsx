export const StarIcon = (props: {selected?: boolean}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
            <g clipPath="url(#starFill)">
                <path fill={props.selected ? '#ED8A19' : '#B1B1B1'}
                      d="m13.707 1.296 2.82 5.714c.196.397.575.673 1.014.736l6.305.916c1.104.161 1.545 1.518.746 2.296l-4.562 4.448a1.346 1.346 0 0 0-.387 1.191l1.077 6.28c.188 1.1-.966 1.938-1.954 1.42l-5.64-2.965a1.348 1.348 0 0 0-1.252 0l-5.64 2.965c-.987.519-2.142-.32-1.953-1.42l1.077-6.28a1.346 1.346 0 0 0-.387-1.191L.408 10.959c-.799-.78-.358-2.136.747-2.297l6.305-.916a1.346 1.346 0 0 0 1.014-.736l2.82-5.714c.493-1 1.92-1 2.413 0Z"/>
            </g>
            <defs>
                <clipPath id="starFill">
                    <path fill="#fff" d="M0 0h25v25H0z"/>
                </clipPath>
            </defs>
        </svg>

    )
}