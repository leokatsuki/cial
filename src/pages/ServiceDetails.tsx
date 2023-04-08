import { useNavigate } from "react-router-dom"
import { DetailsToolbar } from "../components/DetailsToolbar"
import { ServiceForm } from "../forms/ServiceForm";
import { PagesLayout } from "../layout/PagesLayout"

export const ServiceDetails = () => {
  const navigate = useNavigate();

  return(
    <PagesLayout
      titulo="Cadastrar Ordem de Serviço"
      toolbar={<DetailsToolbar 
        goBack= {() => navigate('/services')}
      />}
    >
      <ServiceForm />
    </PagesLayout>
  )
}