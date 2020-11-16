/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

export default Theme
export type Theme = {
  primary: string
  primaryVariant: string
  onPirmary: string

  secondary: string
  secondaryVariant: string
  onSecondary: string

  background: string
  onBackground: string

  surface: string
  onSurface: string

  success: string
  onSuccess: string

  warning: string
  onWarnig: string

  error: string
  onError: string

  disabled: string
  onDisabled: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
