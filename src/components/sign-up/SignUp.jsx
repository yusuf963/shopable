import { useState, useContext } from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
 
import FormInput from '../form-input/FormInput'
import { Button } from '../button/Button'

import {UserContext} from '../../context/user.context'

import './SignUp.scss' 
    
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
const SignUp = () => {

  const [formFields, setFormFields] = useState(defaultFormField)
  const {setCurrentUser} = useContext(UserContext)

  const clearSubmitForm = () => {
    setFormFields(defaultFormField)
  }
  const submitSignUpForm = async (event) => {
    event.preventDefault()
    if (confirmPassword !== password) {
      alert('Password isn\'t matching')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      createUserDocumentFromAuth(user, { displayName })
      setCurrentUser(user)
      clearSubmitForm()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('email already in use')
        console.log(error)
    }
  }

 
  const {displayName, email, password, confirmPassword} = formFields

  const handelFormSubmit = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value})
  }

  // eslint-disable-next-line no-restricted-globals

  return (
    <div className="sign-up-container">
       <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitSignUpForm}>

      <FormInput label="Name" required type="text" value={displayName} name="displayName" onChange={handelFormSubmit} />

      
      <FormInput label="Email" required type="email"  value={email} name="email" onChange={handelFormSubmit} />

      
      <FormInput label="Password" required type="password"  value={password} name="password" onChange={handelFormSubmit} />
      
      
      <FormInput label="Confirm Password" required type="password"  value={confirmPassword} name="confirmPassword" onChange={handelFormSubmit} /> 
        <Button type="submit" label="Sign Up" buttonType="inverted"/>
      </form>
    </div>
  )
}

export default SignUp