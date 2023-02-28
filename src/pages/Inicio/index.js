import Banner from "components/Banner";
import Section from "components/Section";
import Titulo from "components/Titulo";
// import styles from './Inicio.module.css'


 const Inicio = () => {
  return (
    <>
    <Banner imagem="home" />
    <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
    </Titulo>
    <Section />
    </>
    
  )
}

export default Inicio;