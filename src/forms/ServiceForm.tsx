import { Paper, Box, Button, Grid, Typography } from '@mui/material';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm} from 'react-hook-form';
import { ErrorMessage, Input, Select, Textarea } from './FormStyles';


interface CreateUserData {
  client: string;
  maquina: string;
  observacao: string;
  status: string;
}

const createUserFormSchema = yup
  .object({
    client: yup.string().required('Numero do cliente é obrigatório'),
    maquina: yup.string().required('Nome é obrigatório'),
    observacao: yup.string().required('Observação é obrigatório'),
    status: yup.string().oneOf(["Finalizado", "Aguardando Orcamento", "Manutencao"]),  })
  .required();

export const ServiceForm = () => {
  const {register, handleSubmit, formState: {errors} } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const onSubmit = (data: CreateUserData) => {
    alert("Ordem de servico cadastrado com sucesso!");
  };

  return (    
    <Box width={1440} margin={1} display="flex" flexDirection="row" component={Paper} variant="outlined">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="row" padding={2} spacing={20} columns={16}>
          <Grid item>
            <Grid item>
              <Typography variant="h6" marginBottom={2}>Cliente</Typography>
            </Grid>

            <Grid item>
              <div>
                <Input placeholder="N. do cliente" type="number" {...register("client")} />
                {errors.client && <ErrorMessage>{errors.client.message}</ErrorMessage>}
              </div>
            </Grid>

            <Grid item mt={2}>
              <Typography variant="h6" marginBottom={2}>Maquina</Typography>
            </Grid>

            <Grid item>
              <div>
                <Input placeholder="Modelo da máquina" {...register("maquina")} />
                {errors.maquina && <ErrorMessage>{errors.maquina.message}</ErrorMessage>}
              </div>
            </Grid>

            <Grid item mt={2}>
              <Typography variant="h6" marginBottom={2}>Observações</Typography>
            </Grid>

            <Grid item mb={2}>
              <div>
                <Textarea placeholder='Defeitos da maquina' {...register("observacao")} />
                {errors.observacao && <ErrorMessage>{errors.observacao.message}</ErrorMessage>}
              </div>
            </Grid>

            <Button
              type="submit"
              color="primary"
              variant="contained"
            >
              <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden" >
                Salvar
              </Typography>
            </Button>
          </Grid>

          <Grid item>
            <Grid item marginBottom={2}>
              <Typography variant="h6">Status</Typography>
            </Grid>

            <Grid item>
              <Select placeholder='Escolha uma opção' {...register("status")}>
                <option value=""></option>
                <option value="Finalizado">Finalizado</option>
                <option value="Aguardando Orcamento">Aguardando Orcamento</option>
                <option value="Manutencao">Manutencao</option>
              </Select>
              {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};