import { BaseButton, GoogleButton, InvertedButton } from './button.styles.jsx'

export const BUTTON_TYPES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  base: 'base'
}

const GetRequiredButton = (buttonType = BUTTON_TYPES.base) => {
  return ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleButton,
    [BUTTON_TYPES.inverted]: InvertedButton
  }[buttonType])
}

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = GetRequiredButton(buttonType)

  return (
        <CustomButton {...otherProps}>{children}</CustomButton>
  )
}

export default Button
