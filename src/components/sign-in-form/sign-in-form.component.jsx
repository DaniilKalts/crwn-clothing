import { useState } from "react";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'

const defaultFormFiels = {
    email:'',
    password:''
}

const SignInForm = () => {
    const [formFiels, setFormFiels] = useState(defaultFormFiels);
    const { email,password } = formFiels;

    // console.log(formFiels)

    const resetFormFields = () => {
        setFormFiels(defaultFormFiels)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
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
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={'google'} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;