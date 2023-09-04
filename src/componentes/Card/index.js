import './Card.css'

const Card = ({nome, imagem, ano, corFundo}) =>{
  return(

<div className='card'>
<div className='cabecalho' style={{backgroundColor: corFundo }}>
   <img src={imagem} alt={nome}/>
  
 </div>
 <div className='rodape'>
    <h4>{nome}</h4>
    <h5>{ano}</h5>
  
 </div>
</div>

  )
}

export default Card