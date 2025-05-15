import { useField } from "formik";

const CustomInput = ({label, ...props})=>{

    const [field, meta] = useField(props)

    // console.log('Field',field)
    // console.log('Meta',meta)
    return(
        <div className="mb-2">
            <label>{label}</label> <br />
            <input {...props} {...field}  className={`border-1 px-2 py-1 rounded-lg w-full ${meta.error && meta.touched ? 'border-red-400' : 'border-slate-400'}`}/>
            {meta.error && meta.touched ? <span className="text-xs text-red-500">{meta.error}</span> : ''}
            
        </div>
    );
}

export default CustomInput