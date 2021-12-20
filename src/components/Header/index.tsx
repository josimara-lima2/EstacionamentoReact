import { AppBar, Typography} from "@mui/material"



const Header =() =>{
    return(
       
            <AppBar color="primary" sx={{height:"50px", marginBottom:"30px", display:"flex", alignItems:"center",justifyContent:"center"}} position="sticky">
                <Typography variant="h6" component="div">Estacionamento</Typography>
            </AppBar>
        
    )
}

export default Header