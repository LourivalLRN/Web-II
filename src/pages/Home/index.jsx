
import { LayoutComponents } from "../../components/LayoutComponents";
import frutahome from "../../assets/frutahome.jpg";
import './styles.css'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";


export const HomeInicial = () => {
 
  
  return (
      <div className="container-home">
          <LayoutComponents>
        <section className="home">
        <header className="header">
            <nav>
                <img className="logo" src={logo} alt="logo" />
                <ul>
                    <li>Home</li>
                    <li>Nossa Equipe</li>
                    <li>Produtos</li>
                    <li>Ofertas</li>
                    <li>Contatos</li>
                    <Link className="txt3" to="/cadastro">
                    <li>Cadastro</li>
                    </Link>
                    <Link className="txt4" to="/login">
                    <li>Login</li>
                    </Link>

                </ul>
            </nav>
        </header>
        <hr></hr>

        

        <div className="name-distri">
            <h1>Distribuidora de Frutas Pangaré</h1>
        </div>

        <section className="card-princ">

        <div className="card-cupom">
            <img src={frutahome} alt="fruta card" />
            <p>Cadastre sua empresa e tenha as melhores ofertas</p>
        </div>

        <div className="card-cupom-2">
            <p className="p1">As frutas mais saborosas de todo o país, onde sua empresa encontra qualidade, 
                melhores preços e prazos e, entraga em qualquer região da nação</p>

            <p>Somos especializados na comercialização e distribuição para Restaurantes, Hotéis,
                 Empresas fornecedoras de refeições coletivas, supermercados, merenda escolar, entre outros.</p>
        </div>
        

        </section>
        <footer className="footer-initial">
                <p> Distribuidora de Frutas Pangará - Frutas, Legumes e Verduras. Todos os direitos reservados</p>
        </footer>

        

        

        </section>
       
    </LayoutComponents>
      </div>
      
    
  );
};
