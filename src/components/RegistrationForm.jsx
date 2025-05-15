import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import Button from "./Button";
import { RegistrationSchema } from "../schema";
import { Formik, Form } from "formik";

const RegistrationForm = ()=>{
    return(
        <div className="flex flex-col justify-center items-center ">
            
            <h1 className="text-5xl pt-5 text-violet-600">Registration Form</h1>
            <div className="min-w-1/2  p-5">
                <Formik 
                initialValues={{username: '', email:'', password:'', confirmPassword:'', acceptedTos: false}}
                validationSchema={RegistrationSchema}
                onSubmit={async(value, action)=>{
                    await new Promise((resolve)=> setTimeout(resolve, 1000))
                    console.log(value);
                    console.log(action);
                    action.resetForm();


                }}
                >
                    {({isSubmitting})=>(
                         <Form>
                            <CustomInput label='Username' type='text' placeholder='Enter your username' name='username'/>
                            <CustomInput label='Email' type='email' placeholder='Enter your email' name='email'/>
                            <CustomInput label='Password' type='password' placeholder='Enter your password' name='password' autoComplete='off'/>
                            <CustomInput label='Confirm Password' type='password' placeholder='Confirm your password' name='confirmPassword'  autoComplete='off'/>
                            <CustomCheckbox type='checkbox' name='acceptedTos'/>
                            <Button label='Submit' type='submit' disabled={isSubmitting} opacity={isSubmitting ? 'opacity-35' : ''} />
                            </Form>
                    )}
                   
                 

                </Formik>
              
            </div>
        </div>
    );

}

export default RegistrationForm