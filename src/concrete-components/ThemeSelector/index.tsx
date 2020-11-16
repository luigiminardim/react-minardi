import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from '../../template-components/theme'
import { lightTheme } from './themes'

export interface ThemeSelectorContextValue {
  setTheme: (theme: Theme) => void
}

export const ThemeSelectorContext = React.createContext<
  ThemeSelectorContextValue
>({
  setTheme: null
})

export interface ThemeSelectorProps {
  defaultTheme?: Theme
  children: React.ReactNode
}

export default function ThemeSelector({
  defaultTheme = lightTheme,
  children
}: ThemeSelectorProps): JSX.Element {
  const [theme, setTheme] = React.useState(defaultTheme)

  return (
    <ThemeSelectorContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSelectorContext.Provider>
  )
}
