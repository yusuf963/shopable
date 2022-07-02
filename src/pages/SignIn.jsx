import { useState } from 'react';
import { signInWithGooglePopup } from '../utils/firebase/firebase';

const SignIn = () => {
  const [userImage, setUserImage] = useState('')
  const [userName, setUserName] = useState('')
  const handleGoogleAuth = async () => {
    const requestGooglePopupModel = await signInWithGooglePopup()
    setUserImage(requestGooglePopupModel.user?.photoURL)
    setUserName(requestGooglePopupModel.user?.displayName)
    return requestGooglePopupModel
  }


  return (
    <div>
      <p>Sign in page</p>
      <img src={userImage} />
      {userName && <p>Welcome back {userName}</p>}
      <button onClick={handleGoogleAuth}>Sign in With Google</button>
    </div>
  )
}

export { SignIn }