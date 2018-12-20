import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const theme = createMuiTheme({
  palette:{
    type: 'dark',
    primary: {
      light: grey[50],
      main: grey[500],
      dark: grey[900]
    }
  }
})


export default theme