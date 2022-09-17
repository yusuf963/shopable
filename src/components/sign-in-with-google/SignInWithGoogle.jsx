import {useState} from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

import { Button } from '../button/Button'
import './SignInWithGoogle.scss'

export const SignInWithGoogleBtn = () => {
    const [userImage, setUserImage] = useState('')
    const [userName, setUserName] = useState('')
    const handleGoogleAuth = async () => {
    const { user } = await signInWithGooglePopup();
    setUserName(user?.displayName)
    setUserImage(user?.photoURL)
    const userDocRef = await createUserDocumentFromAuth(user);
    }
  return (
    <div>
      {/* <img src={userImage} alt='user personal img'/>
      {userName && <p>Welcome back {userName}</p>} */}
      <Button onClick={handleGoogleAuth} label="Google SignIn"  buttonType="google"/>
    </div>
  )

}