import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { SyncLoader } from "react-spinners";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Cadastro = lazy(() => import("./pages/cadastro/Cadastro"));
const ListaTemas = lazy(() => import("./components/tema/listatemas/ListaTemas"));
const FormTema = lazy(() => import("./components/tema/formtema/FormTema"));
const DeletarTema = lazy(() => import("./components/tema/deletartema/DeletarTema"));
const NotFound = lazy(() => import("./pages/notfound/NotFound"));

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <SyncLoader color="#312e81" size={32} />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
        <Suspense fallback={<Loading />}>
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<Home />} />
              <Route path="/perfil" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
        <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
