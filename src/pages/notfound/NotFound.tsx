import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-indigo-900 text-white gap-6">
            <h1 className="text-9xl font-bold">404</h1>
            <h2 className="text-3xl font-semibold">Página não encontrada!</h2>
            <p className="text-lg text-indigo-300">
                A página que você está procurando não existe ou foi removida.
            </p>
            <Link
                to="/home"
                className="rounded border-white border-solid border-2 py-2 px-6 hover:bg-white hover:text-indigo-900 transition-colors"
            >
                Voltar para o início
            </Link>
        </div>
    )
}

export default NotFound;
