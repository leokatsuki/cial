import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, Pagination, TableRow } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ListToolbar } from "../components/ListToolbar"
import { PagesLayout } from "../layout/PagesLayout"

function createData(
  action: string,
  name: string,
  number: number,
) {
  return {action, name, number}
}

const rows = [
  createData('Editar', 'Leonardo Katsuki', 15100),
  createData('Editar', 'Alice', 15101),
  createData('Editar', 'Caio', 15102),
  createData('Editar', 'Eduardo', 15103),
  createData('Editar', 'Rafaella', 15104),
  createData('Editar', 'Beatriz', 15105),
]

export const ListClient = () => {
  const navigate = useNavigate();

  return(
    <PagesLayout
      titulo="Clientes"
      toolbar={<ListToolbar 
        ShowSearch={true}
        searchName="Pesquisar cliente"
        buttonName="Cadastrar cliente"
        newButton= {() => navigate('/clients/details')}
      />}
    >
      <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: '1440px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Açoes</TableCell>
              <TableCell>Parceiro</TableCell>
              <TableCell>Nº Parceiro</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell><Button onClick={() => navigate('/clients/details')}>Editar</Button></TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.number}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                <Pagination 
                  page={3}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </PagesLayout>
  )
}