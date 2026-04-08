import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Moon, Sun, UserCircle } from "@phosphor-icons/react";

function Navbar() {

    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const { darkMode, toggleDarkMode } = useDarkMode();

    function logout(){
        handleLogout();
        alert('O Usuário foi desconectado com sucesso!');
        navigate("/")
    }

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg mx-8">
                    
                    <Link to="/home" className="text-2xl font-bold">
                        Blog Pessoal
                    </Link>

                    <div className='flex gap-4 items-center'>
                        Postagens
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        Perfil
                        <Link to='' onClick={logout} className="hover:underline">
                            Sair
                        </Link>
                        {usuario.token !== '' && (
                            <Link to='/perfil'>
                                {usuario.foto ? (
                                    <img
                                        src={usuario.foto}
                                        alt={usuario.nome}
                                        className='w-9 h-9 rounded-full object-cover border-2 border-white hover:opacity-80'
                                    />
                                ) : (
                                    <UserCircle size={36} weight="fill" className="hover:opacity-80" />
                                )}
                            </Link>
                        )}
                        <button onClick={toggleDarkMode}>
                            {darkMode ? <Sun size={22} weight="bold" /> : <Moon size={22} weight="bold" />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
