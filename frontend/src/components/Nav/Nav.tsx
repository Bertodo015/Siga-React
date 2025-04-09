import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav(props: { logado: boolean }) {
    if (props.logado == false) {
        return (
            <nav>
                <ul>
                    <li><a href="http://www.ifms.edu.br/">Site do IFMS</a></li>
                </ul>
            </nav>
        )
    }
    return (
        <nav>
            <div className="perfil">
                <img src="fotos/b93dcc21a7dbdb53853273dc5d39ee99.jpg" alt="foto Perfil" /><br />
                    <a href="conta.php">conta</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="deslogar.php">sair</a>
                </div>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/biblioteca">Biblioteca</Link></li>
                        <li><Link to="/disciplinas">Disciplinas</Link></li>
                        <li><Link to="/boletim">Boletim</Link></li>
                        <li><Link to="/jogo">Jogar</Link></li>
                    </ul>
                </nav>
                )
}