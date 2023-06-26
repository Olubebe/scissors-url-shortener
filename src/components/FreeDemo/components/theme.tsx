import { createTheme } from "@mui/material";


 export default createTheme({
    palette: {
        primary: {
            main:"#0d47a1" ,
            contrastText: "#fff",
        },
        secondary:{
            main: "#1e88e5",
        } 
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        button:{
            textTransform: "capitalize",
            fontWeight: 600,
        },
        h4: {
            fontWeight: 500,
        }
    },
})
