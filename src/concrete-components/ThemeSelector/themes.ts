import Theme from '../../template-components/theme'
import colors from './colors'

const { brand, brandVariant, black, white, gray, yellow, red } = colors

export const lightTheme: Theme = {
  primary: brand.primary,
  primaryVariant: brandVariant.primary,
  onPirmary: black,

  secondary: brandVariant.secondary,
  secondaryVariant: brandVariant.secondary,
  onSecondary: black,

  background: brandVariant.secondary,
  onBackground: black,

  surface: white,
  onSurface: gray._02,

  success: brandVariant.secondary,
  onSuccess: white,

  warning: yellow,
  onWarnig: black,

  error: red,
  onError: white,

  disabled: gray._03,
  onDisabled: gray._04
}
