import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="bg-[#121212] text-[#FFFFFF] flex-1 flex items-center px-6 md:px-20 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl relative z-10 mx-auto w-full text-center">
        <div className="inline-block px-5 py-2 bg-[#121212] rounded-full text-[#FFD700] text-sm font-bold mb-8 border border-[#FFD700]">
          A Fintech que conecta você
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight mx-auto max-w-4xl text-[#FFFFFF]">
          O Modelo Inovador de <span className="text-[#FFD700]">Cashback</span> que Transforma Suas Compras e Vendas!
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/90 mb-12 max-w-3xl leading-relaxed font-normal mx-auto">
          Somos uma fintech que conecta clientes com liberdade financeira a empresas que buscam vendas escaláveis e repetíveis. O cliente ganha, você ganha, todo mundo ganha.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link to="/clientes" className="bg-[#FFD700] text-[#121212] px-8 py-4 font-bold text-base md:text-lg rounded-full hover:opacity-90 transition duration-300 text-center flex items-center justify-center gap-3 group shadow-lg w-full sm:w-auto">
            Sou Cliente e Quero Vantagens
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/empresas" className="bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] px-8 py-4 font-bold text-base md:text-lg rounded-full hover:bg-[#FFFFFF] hover:text-[#121212] transition duration-300 text-center flex items-center justify-center w-full sm:w-auto">
            Sou Empresa e Quero Vender Mais
          </Link>
        </div>
      </div>
    </section>
  );
}
