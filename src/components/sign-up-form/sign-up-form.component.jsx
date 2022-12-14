import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.jsx'
import { SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFiels = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFiels, setFormFiels] = useState(defaultFormFiels);
    const { displayName,email,password,confirmPassword } = formFiels;

    const resetFormFields = () => {
        setFormFiels(defaultFormFiels)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('password do not match')
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }catch (err) {
            if(err.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use!');
            }else{
                console.log('user creation faced with error:', err)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFiels({...formFiels, [name]:value})
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;