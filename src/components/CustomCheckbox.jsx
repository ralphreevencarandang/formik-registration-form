import { useField } from "formik";

const CustomCheckbox = ({...props})=>{

    const [field, meta] =useField(props);
    // console.log('Field', field);
    // console.log('Meta', meta);

    return(
        <div className="mb-2">
            <input {...props} {...field} />
            <span> I accept the terms of service</span>
            {meta.error && meta.touched ? <p className="text-xs text-red-500">{meta.error}</p> : ''}
            
        </div>
    );
}

export default CustomCheckbox