import { DeleteOutline } from "@mui/icons-material"
import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"
import { useState } from "react"
import { UseAppDispatch, UseAppSelector } from "../../store"
import { VeiculoSelector, adicionarVeiculo, lerVeiculo, removerVeiculo} from "../../store/reducers/veiculos"
import EditIcon from '@mui/icons-material/Edit';
import './style.css'
const Form = () => {
    const dispatch = UseAppDispatch()
    const veiculos = UseAppSelector(VeiculoSelector)
    const [nome,setNome] = useState("")
    const [placa,setPlaca] = useState("")
    const [renderizar,setRenderizar] = useState(false)
    const list = veiculos
    
useEffect(() =>{
    dispatch(lerVeiculo(list))
},[renderizar])

    

    const render = () => {
     
      return (veiculos.length && veiculos.map((item,index)=>(
        <TableRow key={index}>
            <TableCell>{item.nome}</TableCell>
            <TableCell>{item.placa}</TableCell>
            <TableCell>{item.entrada}</TableCell>
            <TableCell>
              <button onClick={() => handleRemove(item.placa)} className="delete" ><IconButton sx={{color:"#fafafa"}}><DeleteOutline/></IconButton></button>
              <button className="edit" ><IconButton  sx={{color:"#fafafa"}}><EditIcon/></IconButton></button>
            
            </TableCell>
        </TableRow>
    )))
    
    }
    const handleRemove = (placa:string) => {
      dispatch(removerVeiculo({placa}))
    }
   
   
   

    const handleCadastrar = () =>{
      if(!nome || !placa){
        alert("Os dados devem ser preenchidos")
       
        return
      }else{
        setRenderizar(!renderizar)
      }
     
        dispatch(adicionarVeiculo({nome:nome,placa:placa,entrada:new Date().toISOString()}))
     
     
    }
    

    return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display:"flex",
        flexDirection:"column",
        alignItems:"center"

      }}
      noValidate
      autoComplete="off"
    >
        <Typography variant="h5" component="div">Cadastre seu veículo</Typography>
     
        <TextField
          required
          id="outlined-required"
          label="Nome"
          defaultValue={nome}
          placeholder="Informe o nome do veiculo"
          onChange={e => setNome(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Placa"
          defaultValue={placa}
          placeholder="Informe a placa do veiculo"
          onChange={e => setPlaca(e.target.value)}
        />
        <Button variant="contained" onClick={handleCadastrar} >Cadastrar</Button>
        
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Placa</TableCell>
                    <TableCell>Entrada</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {render()}
            </TableBody>
            
        </Table>
        </Box>
       
    )
}

export default Form