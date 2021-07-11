import { createTheme } from "@material-ui/core"

const theme = createTheme({
  typography: {
    h4: {
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      }
    }
  },
  palette: {
    primary: {
      main: "#004545"
    },
    secondary: {
      main: "#CBDB3F"
    }
  }
})

export default theme;