const Button = ({label, opacity ,...props})=>{

    return (
        <>
            <button {...props} className={`px-2 py-1 w-full rounded-lg bg-violet-400 text-white cursor-pointer ${opacity}`}>{label}</button>
        </>
    );

}

export default Button