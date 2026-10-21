import { TrendingUp, Repeat, Users, ArrowRight } from 'lucide-react';

export default function Empresas() {
  return (
    <section className="bg-[#FFFFFF] text-[#121212] py-16 md:py-24 px-6 md:px-20 flex-1">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="inline-block px-4 py-2 bg-[#FFD700] rounded-full text-[#121212] text-sm font-bold mb-6">
            Para Negócios
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight text-[#121212]">
            Aumente seu Faturamento e Fidelize Clientes com o Projeto Cashback VHF BANK!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-[#121212]">
            A forma mais inteligente de fazer o seu cliente escolher a sua empresa de novo, de novo e de novo.
          </p>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-[#121212]/80 max-w-3xl mx-auto">
            Sabemos que o seu maior desafio hoje é aumentar as vendas e se diferenciar da concorrência. O VHF Bank traz uma ideia simples e poderosa: oferecemos um percentual de cashback para seus clientes, que eles só podem usar para comprar dentro do nosso ecossistema de empresas parceiras.
          </p>
        </div>
        <div className="text-center mb-12">
          <h3 className="font-bold text-2xl md:text-3xl text-[#121212] inline-block pb-3 border-b-4 border-[#FFD700]">
            Por que ser um Parceiro VHF Bank?
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border-2 border-[#121212] hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp size={32} className="text-[#121212]" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#121212]">Vendas Escaláveis</h4>
            <p className="text-[#121212]/80 leading-relaxed">O cashback incentiva o cliente a comprar mais vezes, aumentando seu ticket médio e frequência.</p>
          </div>
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border-2 border-[#121212] hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-6">
              <Repeat size={32} className="text-[#121212]" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#121212]">Retenção Real</h4>
            <p className="text-[#121212]/80 leading-relaxed">Ele só pode gastar o saldo com você ou na rede, garantindo que o dinheiro volte para o ecossistema.</p>
          </div>
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border-2 border-[#121212] hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-6">
              <Users size={32} className="text-[#121212]" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#121212]">Boca a Boca Turbinado</h4>
            <p className="text-[#121212]/80 leading-relaxed">Seus clientes se tornam seus maiores promotores. Ao indicar novos compradores, eles também ganham.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a 
            href="https://wa.me/5561983306686" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#121212] text-[#FFFFFF] px-8 py-4 font-bold text-base md:text-lg rounded-full hover:opacity-90 transition duration-300 text-center shadow-lg"
          >
            Falar com um Especialista
          </a>
          <a 
            href="https://wa.me/5561983306686?text=Ol%C3%A1%2C%20quero%20cadastrar%20minha%20empresa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#FFD700] text-[#121212] px-8 py-4 font-bold text-base md:text-lg rounded-full hover:opacity-90 transition duration-300 text-center shadow-lg flex items-center justify-center gap-2"
          >
            Cadastrar Minha Empresa
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}