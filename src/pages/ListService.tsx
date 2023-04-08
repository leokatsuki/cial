import { Chip, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ListToolbar } from "../components/ListToolbar"
import { PagesLayout } from "../layout/PagesLayout"

function createData(
  color: 'success' | 'info' | 'error',
  status: string,
  serviceNumber: number,
  name: string,
  clientNumber: number,
) {
  return {color, status, serviceNumber, name, clientNumber}
}

const rows = [
  createData('success', 'finalizado', 16727 , 'Leonardo Katsuki', 15100),
  createData('error', 'Aguardando orçamento', 12838, 'Alice', 15101),
  createData('info', 'Manutenção', 12343, 'Caio', 15102),
  createData('error', 'Aguardando orçamento', 87322, 'Eduardo', 15103),
  createData('success', 'finalizado', 97322, 'Rafaella', 15104),
  createData('info', 'Manutenção', 38267, 'Beatriz', 15105),
]

export const ListService = () => {
  const navigate = useNavigate();

  return(
    <PagesLayout
      titulo="Ordens de serviço"
      toolbar={<ListToolbar 
        ShowSearch={true}
        searchName="Pesquisar O.S"
        buttonName="Cadastrar O.S"
        newButton= {() => navigate('/services/details')}
      />}
    >
      <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: '1440px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={200}>Status</TableCell>
              <TableCell width={200}>Nº O.S</TableCell>
              <TableCell width={200}>Parceiro</TableCell>
              <TableCell width={200}>Nº Parceiro</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell><Chip color={row.color} size="small" label={row.status} /></TableCell>
                <TableCell>{row.serviceNumber}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.clientNumber}</TableCell>
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