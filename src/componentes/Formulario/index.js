import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
const Formulario = (props) => {

   const [nome, setNome] = useState('')
   const [imagem, setImagem] = useState('')
   const [ano, setAno] = useState('')
   const [filme, setFilme] = useState('')
   
   const aoSalvar = (e) =>{
      e.preventDefault()
      props.aoCatalogoCadastrado({nome, imagem, ano, filme
      })
      setNome('')
      setImagem('')
      setAno('')
      setFilme('')
   }
   return(
   <section className='formulario'>
    <form onSubmit={aoSalvar}>
      <h2>Preencha os Campos para adicionar um Filme</h2>
      <CampoTexto 
      obrigatorio={true}
      label="nome"
      placeholder='Digite o nome do filme'
      valor={nome}
      aoAlterado={valor => setNome(valor)}
      />
      <CampoTexto 
      
      label="imagem"
      placeholder='Digite o endereço da imagem'
      valor={imagem}
      aoAlterado={valor => setImagem(valor)}
      />
      <CampoTexto 
      obrigatorio={true}
      label="ano"
      placeholder='Digite o ano do filme'
      valor={ano}
      aoAlterado={valor => setAno(valor)}/>
      <ListaSuspensa 
      valor={filme}
      aoAlterado={valor => setFilme(valor)}
      label='Categoria'
      itens={props.filmes}/>
      <Botao>
         Adicionar
      </Botao>
     
    </form>
   </section>
  )
}

export default Formulario

