import './App.css';

export const NavbarApp = () => {
  return (    
  <>
        
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container ">
        <a className="navbar-brand text-white" href="/">
          <img src="../img/muni2.jpeg" alt="" className="logo-nav" />
          Municipalidad Formosa
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/"
                >Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" href="/consultas">Consulta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" href="/pagos">Pagar</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ingresar
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/login">Iniciar Sesión</a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="/registro">Registro</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
    )
}

