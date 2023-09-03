import CampoTexto from '../CampoTexto'
import './Formulario.css'
const Formulario = () => {
   
  return(
   <section className='formulario'>
    <form>
      <h2>Preencha os Campos para adicionar um Filme</h2>
      <CampoTexto label="nome"
      placeholder='Digite o nome do filme'
      />
      <CampoTexto label="imagem"
      placeholder='Digite o endereço da imagem'/>
      <CampoTexto label="ano"
      placeholder='Digite o ano do filme'/>

    </form>
   </section>
  )
}

export default Formulario

