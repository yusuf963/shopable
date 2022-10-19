import { useState, useContext } from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase'
 
import FormInput from "../form-input/FormInput";
import {SignInWithGoogleBtn} from '../sign-in-with-google/SignInWithGoogle'
import {Button} from '../button/Button'
import './SignIn.scss'

import {UserContext, CartContext} from '../../context/user.context'

const defaultFormFields = {
  email: '',
  password: '',
}
export const SignIn = () => {
  const [signInForm, setSignInForm] = useState(defaultFormFields)
  const { email, password } = signInForm
  const { setCurrentUser } = useContext(UserContext)
  const {setCurrentCart} = useContext(CartContext)
  
  const resetFormFields = () => {
    setSignInForm(defaultFormFields);
  };
  const handelFormFieldChange = (event) => {
    const {name, value} = event.target
    setSignInForm({...signInForm, [name]: value})
  }
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

    const submitSignInForm = async (event) => {
    event.preventDefault()
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
      setCurrentCart(1)
      console.log('setCurrentUser(user)',setCurrentUser(user))
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert(error.message)
          break
        case 'auth/user-not-found':
          alert(error.message)
          break
        default:
          alert(error.message)
      }
    }
  }
  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitSignInForm}>
        <FormInput
          label='Email'
          type='text'
          value={email}
          name='email'
          required
          onChange={handelFormFieldChange} 
        />
        <FormInput
          label='Password'
          type='password'
          value={password}
          name='password'
          required
          onChange={handelFormFieldChange} 
        />
        <div className='buttons-container'>
          <Button type='submit' label='SIGN IN' buttonType='inverted' />
          <SignInWithGoogleBtn />
        </div>
      </form>
    </div>
  )
}
