import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.jsx'
import { ButtonsContainer, SignUpContainer } from "./sign-in-form.styles.jsx";

const defaultFormFiels = {
    email:'',
    password:''
}

const SignInForm = () => {
    const [formFiels, setFormFiels] = useState(defaultFormFiels);
    const { email,password } = formFiels;  

    const resetFormFields = () => {
        setFormFiels(defaultFormFiels)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for emal');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                default: 
                    console.log(err)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFiels({...formFiels, [name]:value});
    }

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    );
}

export default SignInForm;