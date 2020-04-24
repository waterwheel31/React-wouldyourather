
import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const Theme = createMuiTheme({
    palette: {
      //type: 'dark', // 
      //primary: green,
      primary: red,
    },
    typography: {
      fontFamily: [
        'Noto Sans',
        'sans-serif',
      ].join(','),
      fontSize: 12,
      h1: {
        fontSize: "1.75rem"
      },
      h2: {
        fontSize: "1.5rem"
      },
      h3: {
        fontSize: "1.25rem"
      },
      h4: {
        fontSize: "1.125rem"
      },
      h5: {
        fontSize: "1rem"
      },
      h6: {
        fontSize: "1rem"
      },
    }
  });


export default Theme