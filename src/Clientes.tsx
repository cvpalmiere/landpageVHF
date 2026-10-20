import { CheckCircle2 } from 'lucide-react';

export default function Clientes() {
  return (
    <section className="bg-[#FFFFFF] text-[#121212] py-16 md:py-24 px-6 md:px-20 flex-1 flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-[#FFD700] rounded-full text-[#121212] text-sm font-bold mb-6">
            Para Consumidores
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight text-[#121212]">
            Liberdade Financeira e Cashback em TUDO!
          </h2>
          <p className="text-lg sm:text-xl text-[#121212] font-semibold mb-6 leading-relaxed">
            Garanta bonificações únicas para adquirir os produtos dos seus sonhos nas melhores lojas do país. Tudo isso sem precisar tirar um real do bolso!
          </p>
          <p className="text-base sm:text-lg text-[#121212]/80 mb-10 leading-relaxed">
            Você não precisa mais se preocupar com a falta de dinheiro. Com o VHF Bank, cada compra se transforma em saldo para você usar na nossa rede de parceiros.
          </p>
          <div className="space-y-8 mb-12 bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border-2 border-[#121212]">
            <h3 className="font-bold text-2xl text-[#121212] border-b-2 border-[#FFD700] pb-4">
              Vantagens de ser VHFCLUB
            </h3>
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-[#FFD700] bg-[#121212] p-2 rounded-full shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-[#121212]">Cashback Real</h4>
                <p className="text-[#121212]/80">Receba de volta uma parte do que gastou e use nas suas próximas compras.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-[#FFD700] bg-[#121212] p-2 rounded-full shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-[#121212]">Indique e Ganhe</h4>
                <p className="text-[#121212]/80">Ao indicar amigos, você espalha valor e facilita a economia para eles. Quando seus amigos geram cashback, você também recebe um pedacinho!</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-[#FFD700] bg-[#121212] p-2 rounded-full shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-[#121212]">Aprovação Rápida</h4>
                <p className="text-[#121212]/80">Envie sua nota fiscal com CPF pelo nosso atendimento e seu cashback estará disponível em até 72 horas.</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#121212]">Baixe o App Agora e Aproveite</h4>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=vfbank.portador" target="_blank" rel="noopener noreferrer" className="bg-[#121212] hover:opacity-90 text-[#FFFFFF] px-6 py-3.5 rounded-xl flex items-center justify-center sm:justify-start gap-4 transition duration-300 shadow-lg w-full sm:w-56">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#FFD700] shrink-0">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left flex flex-col">
                  <span className="text-[10px] text-[#FFFFFF]/80 font-medium leading-tight mb-0.5">Disponível no</span>
                  <span className="font-bold text-base leading-tight text-[#FFFFFF]">Google Play</span>
                </div>
              </a>
              <a href="https://apps.apple.com/br/app/vf-bank/id6578454221" target="_blank" rel="noopener noreferrer" className="bg-[#121212] hover:opacity-90 text-[#FFFFFF] px-6 py-3.5 rounded-xl flex items-center justify-center sm:justify-start gap-4 transition duration-300 shadow-lg w-full sm:w-56">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8 text-[#FFD700] pb-1 shrink-0">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left flex flex-col">
                  <span className="text-[10px] text-[#FFFFFF]/80 font-medium leading-tight mb-0.5">Baixe na</span>
                  <span className="font-bold text-base leading-tight text-[#FFFFFF]">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          <div className="aspect-[4/5] bg-[#121212] overflow-hidden rounded-3xl shadow-xl border-2 border-[#121212]">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=1000" alt="Cliente usando celular para pagar" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
          </div>
          <div className="aspect-[4/5] bg-[#121212] sm:mt-12 overflow-hidden rounded-3xl shadow-xl border-2 border-[#121212]">
            <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800&h=1000" alt="Aplicativo de cashback no celular" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
