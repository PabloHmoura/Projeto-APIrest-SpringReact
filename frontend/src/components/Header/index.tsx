import Logo from '../../assets/img/Logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={Logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/PabloHmoura">@PabloHmoura</a>
                </p>
            </div>
        </header>

    )
}

export default Header