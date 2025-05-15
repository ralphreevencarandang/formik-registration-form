import * as yup from "yup"

const passwordRull = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
export const RegistrationSchema = yup.object().shape({
    username: yup.string().min(3,"username should be at least 3 characters long").required('Required'),
    email: yup.string().email('Please input a valid email').required('Required'),
    password: yup.string().matches(passwordRull, {message: 'Please create a stronger password'}).required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Required"),
    acceptedTos: yup.boolean().oneOf([true], 'Please accept the terms of service')
});
