interface PhoneInputProps {
    onInputChange: (value: any) => void;
    placeholder?: string;
    className?: string;
}

const PhoneInput = (props: PhoneInputProps) => {
    return (
        <input
            className={
                `${props.className} px-4 sm:py-2 py-4 bg-gray-300 rounded-full block sm:w-80`
            }
            type="number"
            name="phone_number"
            id="phone_number"
            onChange={props.onInputChange}
            placeholder={
                props.placeholder ?? '+7 999 999 99 99'
            }
        />
    )
}


export default PhoneInput;