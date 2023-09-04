import { useState } from 'react';
import Banner from './componentes/Banner';
import './App.css';
import Formulario from './componentes/Formulario';
import Filme from './componentes/Filme';

function App() {

  const filmes=[
   {
    nome: 'Ação',
    corPrimaria: '#cc0066',
    corSecundaria: '#800040'
  },
   {
    nome: 'Suspense',
    corPrimaria: '#06b213',
    corSecundaria: '#06bc80'
  },
   {
    nome: 'Drama',
    corPrimaria: '#664400',
    corSecundaria: '#b37700'
  },
   {
    nome: 'Terror',
    corPrimaria: '#4d0019',
    corSecundaria: '#990033'
  },
   {
    nome: 'Romance',
    corPrimaria: '#ff0055',
    corSecundaria: '#ff6699'
  }
 ]

  const [catalogos, setCatalogos] = useState([])

  const aoNovoCatalogoAdicionado =(catalogo)=>{
    setCatalogos([...catalogos, catalogo])
  }
  return (
    <div className="App">
     <Banner/>
    <Formulario
     filmes={filmes.map(filme => filme.nome)}
     aoCatalogoCadastrado={catalogo => aoNovoCatalogoAdicionado(catalogo)}
    />

   {filmes.map(filme => <Filme key={filme.nome}
   nome={filme.nome}
   corPrimaria={filme.corPrimaria}
   corSecundaria={filme.corSecundaria}
   catalogos={catalogos.filter(catalogo => catalogo.filme === filme.nome)}
   

   />)}
    </div>
  );
}

export default App;
