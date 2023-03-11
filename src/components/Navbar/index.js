import img from '../../imagens/logo150.png'
import img2 from '../../imagens/wpp.png'

import '../../style/Navbar.css'


const Navbar = () =>{

    return(
        <div className="navbar">
            <nav>
                <img alt="logo" src={img}/>
                <section>
                    <p>gclean Limpeza de Estofados</p>
                </section>
                <ul>
                    <li>Serviços</li>
                    <li>Galeria</li>
                    <li>Sobre nós</li>
                    <li className='wpp'><img alt='tel' src={img2}/>(11) 98908-2806</li>
                </ul>
                <input 
                    className="checkbox" 
                    type="checkbox" 
                    id="checkbox"
                />
                <label 
                    className="label-menu" 
                    htmlFor="checkbox"
                >
                    <span className="hamburger"></span>
                </label>
            </nav>
        </div>
    )
    

}

export default Navbar;