import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ListToolbar } from "../components/ListToolbar"
import { PagesLayout } from "../layout/PagesLayout"

export const Dashboard = () => {
  return(
    <PagesLayout
      titulo="Página Inicial"
      toolbar={<ListToolbar 
        ShowButton={false}
      />}
    >
      <Box width="100%" display="flex">
        <Grid container margin={2}>
          <Grid item container spacing={2}>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography variant='h5' align="center">
                    Total de clientes
                  </Typography>

                  <Box padding={6} display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant="h1">
                      23
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography variant='h5' align="center">
                    Total de O.S
                  </Typography>

                  <Box padding={6} display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant="h1">
                      10
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography variant='h5' align="center">
                    Total de O.S finalizadas
                  </Typography>

                  <Box padding={6} display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant="h1">
                      5
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PagesLayout>
  )
}