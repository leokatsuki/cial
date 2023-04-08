import { Paper, Box, Button, Grid, Typography } from '@mui/material';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm} from 'react-hook-form';
import { ErrorMessage, Input } from './FormStyles';
import { useState } from 'react';

interface CreateUserData {
  name: string;
  cpf: number;
  cep: number;
  address: string;
  email: string;
}

interface ClientFormProps {
  onSubmit: (inputValue: string) => void;
}

const createUserFormSchema = yup
  .object({
    name: yup.string().required('Nome é obrigatório'),
    cpf: yup.string().required('CPF é obrigatório').length(10, 'CPF deve ter 11 numeros'),
    cep: yup.string().required('CEP é obrigatório').length(8, 'CEP deve conter 8 numeros'),
    address: yup.string().required('Endereço é obrigatório'),
    email: yup.string().required('Email é obrigatório').email()
  })
  .required();

export const ClientForm = (props: ClientFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const {register, handleSubmit, formState: {errors} } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const onSubmit = (data: CreateUserData) => {
    alert("Cliente cadastrado com sucesso!");
    props.onSubmit(inputValue)
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return(
    <Box width={1440} margin={1} display="flex" flexDirection="row" component={Paper} variant="outlined"> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="row" padding={2} spacing={20} columns={16}>
          <Grid item>
            <Grid item mb={2}>
              <Typography variant="h6">Pessoal</Typography>
            </Grid>

            <Grid item mb={3}>
              <div>
                <Input placeholder="Nome" {...register("name")} value={inputValue} onChange={handleInputChange} />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </div>
            </Grid>

            <Grid item mb={3}>
              <div>
                <Input placeholder="CPF" type="number" {...register("cpf", { valueAsNumber: true })} />
                {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
              </div>
            </Grid>

            <Grid item mb={3}>
              <div>
                <Input placeholder="N. do cliente" type="number" />
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
            <Grid item mb={2}>
              <Typography variant="h6">Endereço</Typography>
            </Grid>

            <Grid item mb={3}>
              <div>
                <Input placeholder="CEP" type="number" {...register("cep", { valueAsNumber: true })} />
                {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
              </div>
            </Grid>

            <Grid item mb={3}>
              <div>
                <Input placeholder="Endereço" {...register("address")} />
                {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
              </div>
            </Grid>

            <Grid item mb={3}>
              <div>
                <Input placeholder="N. / Complemento" type="number" />
              </div>
            </Grid>

            <Grid item>
              <div>
                <Input placeholder="Email" {...register("email")} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              </div>
            </Grid>
          </Grid>
        </Grid>        
      </form>
    </Box>
  )
}