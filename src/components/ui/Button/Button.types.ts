export type ButtonVariant =
  | 'back'
  | 'cancel'
  | 'continue'
  | 'repeat'

export type ButtonIcon =
  | 'arrow-back'
  | 'arrow-next'

export type ButtonProps = {
  label: string
  variant: ButtonVariant
  icon?: ButtonIcon
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}