const DoneIcon = (props: {color?: string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke={`${props.color ?? '#2AC700'}`} strokeLinecap="round" strokeWidth="2.667"
                  d="m5.425 13.879 3.037 2.277A.94.94 0 0 0 9.752 16l7.884-9.636"/>
        </svg>

    )
}


export default DoneIcon;