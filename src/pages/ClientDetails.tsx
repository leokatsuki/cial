import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { DetailsToolbar } from "../components/DetailsToolbar"
import { PagesLayout } from "../layout/PagesLayout"
import { ClientForm } from "../forms/ClientForm";


export const ClientDetails = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Cliente");

  function updateTitle(inputValue: string) {
    setTitle(`Cliente: ${inputValue}`)
  }

  return(
    <PagesLayout
      titulo={title}
      toolbar={<DetailsToolbar 
        goBack= {() => navigate('/clients')}
      />}
    >
      <ClientForm onSubmit={updateTitle} />
    </PagesLayout>
  )
}