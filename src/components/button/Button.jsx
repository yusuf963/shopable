import './Button.scss'

const BUTTON_TYPE = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

export const Button = ({buttonType, label, ...otherProps}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`} {...otherProps}>
      {label}
    </button>
  )
}