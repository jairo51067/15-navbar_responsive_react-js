
import "./App.css"; 
let vacio = "";

function App() {
  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById("menu");
    let boton_cerrar = document.getElementById("x");
    menu_desplegable.classList.toggle("abrir_menu");
    boton_cerrar.classList.toggle("colocar_x");
  };

  return (
    <>
      <header className="contenedor-header">
        <div className="presentacion">
          <div className="imagen">
            <img src="logobn.png" alt="Logo-personal" className="logo" />
          </div>
          <div className="titulos">
            <h2>Titulo Principal</h2>
            <p>Titulo Secundario</p>
          </div>
        </div>

        <div className="barras">
          <button
            onClick={abrir_cerrar_menu}
            className="boton_menu"
            id="x"
          ></button>
        </div>

        <nav id="menu" className="desplegable">
          <ul className="desplegable-pc">
            <li>
              <a href={vacio}>
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a href={vacio}>
                <i className="fas fa-info-circle"></i>
              </a>
            </li>
            <li>
              <a href={vacio}>
                <i className="fas fa-cogs"></i>
              </a>
            </li>
            <li>
              <a href={vacio}>
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>

          <ul className="desplegable-table-movil">
            <li>
              <a href={vacio}>
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href={vacio}>
                <i className="fas fa-info-circle"></i> About
              </a>
            </li>
            <li>
              <a href={vacio}>
                <i className="fas fa-cogs"></i> Services
              </a>
            </li>
            <li>
              <a href={vacio}>
                <i className="fas fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
