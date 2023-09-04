import Card from "../Card";
import "./Filme.css";

const Filme = (props) => {
  return props.catalogos.length > 0 ? (
    <section className="filme" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="catalogos">
        {props.catalogos.map((catalogo) => (
          <Card
            corFundo={props.corPrimaria}
            key={catalogo.nome}
            nome={catalogo.nome}
            ano={catalogo.ano}
            imagem={catalogo.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Filme;
