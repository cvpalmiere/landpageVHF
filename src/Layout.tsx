import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [menuAberto, setMenuAberto] = useState(false);
  const alternarMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <div className="font-sans antialiased text-[#121212] bg-[#FFFFFF] selection:bg-[#FFD700] selection:text-[#121212] flex flex-col min-h-screen">
      <nav className="bg-[#121212] border-b border-[#FFD700]/20 text-[#FFFFFF] px-6 py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" onClick={fecharMenu} className="text-[#FFD700] font-bold text-2xl tracking-tight flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 bg-[#FFD700] rounded-xl flex items-center justify-center text-[#121212] text-sm font-bold shadow-sm">
              VB
            </div>
            VHF BANK
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-[#FFD700] transition duration-300">Sobre</Link>
            <Link to="/clientes" className="hover:text-[#FFD700] transition duration-300">Para Clientes</Link>
            <Link to="/empresas" className="hover:text-[#FFD700] transition duration-300">Para Empresas</Link>
            <a href="https://vfbank.conectar.site/lojista/site/gerenciar" target="_blank" rel="noopener noreferrer" className="bg-[#FFD700] text-[#121212] px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition duration-300">
              Escritório Virtual
            </a>
          </div>
          <button onClick={alternarMenu} aria-label="Alternar menu de navegacao" className="md:hidden text-[#FFD700] p-2 focus:outline-none">
            {menuAberto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuAberto && (
          <div className="md:hidden bg-[#121212] border-t border-[#FFD700]/20 mt-4 pt-4 pb-6 px-4 flex flex-col gap-4 text-base font-medium">
            <Link to="/" onClick={fecharMenu} className="hover:text-[#FFD700] py-2 transition duration-300">Sobre</Link>
            <Link to="/clientes" onClick={fecharMenu} className="hover:text-[#FFD700] py-2 transition duration-300">Para Clientes</Link>
            <Link to="/empresas" onClick={fecharMenu} className="hover:text-[#FFD700] py-2 transition duration-300">Para Empresas</Link>
            <a href="https://vfbank.conectar.site/lojista/site/gerenciar" target="_blank" rel="noopener noreferrer" onClick={fecharMenu} className="bg-[#FFD700] text-[#121212] px-5 py-3 rounded-full font-bold text-center mt-2 hover:opacity-90 transition duration-300">
              Escritório Virtual
            </a>
          </div>
        )}
      </nav>
      <main className="flex-1 flex flex-col bg-[#FFFFFF]">
        <Outlet />
      </main>
      <footer className="bg-[#121212] text-[#FFFFFF] py-12 px-6 text-center border-t border-[#FFD700]/20 mt-auto">
        <div className="text-[#FFD700] font-bold text-2xl tracking-tight mb-4">VHF BANK</div>
        <p className="text-sm text-[#FFFFFF]/70 font-medium tracking-wide">Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
