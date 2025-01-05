const TelegramIcon = (props: {id?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 35 35">
        <path fill={`url(#${props.id ?? 'tgFill'})`}
              d="M17.5 32.813c8.457 0 15.313-6.856 15.313-15.313S25.956 2.187 17.5 2.187 2.187 9.043 2.187 17.5 9.043 32.813 17.5 32.813Z"/>
        <path fill="#fff"
              d="M25.142 11.166c.136-.881-.702-1.576-1.485-1.233l-15.602 6.85c-.561.247-.52 1.098.062 1.284l3.218 1.024a2.07 2.07 0 0 0 1.815-.276l7.254-5.012c.219-.15.457.16.27.353l-5.221 5.383c-.507.523-.406 1.408.203 1.79l5.846 3.666c.656.41 1.5-.002 1.622-.795l2.018-13.034Z"/>
        <defs>
            <linearGradient id={`${props.id ?? 'tgFill'}`} x1="17.5" x2="17.5" y1="2.188" y2="32.813" gradientUnits="userSpaceOnUse">
                <stop stopColor="#37BBFE"/>
                <stop offset="1" stopColor="#007DBB"/>
            </linearGradient>
        </defs>
    </svg>
);

export default TelegramIcon;