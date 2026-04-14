import React, { useState, useEffect } from 'react';
import logoImg from './assets/logo.png';
import camileLogoImg from './assets/camile-logo.png';
import camileImg from './assets/camile.png';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  BookOpen,
  CheckCircle, 
  Instagram, 
  ArrowRight, 
  ChevronRight,  
  MessageCircle 
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const googleFormsUrl = "https://forms.gle/yfqPBLbQ8DuikYCk9";

  const infoItems = [
    { icon: <Calendar className="w-6 h-6" />, title: "Dia dos encontros", detail: "Aos domingos" },
    { icon: <Clock className="w-6 h-6" />, title: "Horário", detail: "Das 16h30 às 18h00" },
    { icon: <ArrowRight className="w-6 h-6" />, title: "Previsão", detail: "03 de Maio de 2026" },
    { icon: <MapPin className="w-6 h-6" />, title: "Local", detail: "Rua IV Centenário, 400" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Duração", detail: "6 meses" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navegação */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-blue-100/20">
              <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              IASD Rafard <span className="text-blue-600">Ensina</span>
            </span>
          </div>
          <a 
            href={googleFormsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Quero participar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 -z-10 rounded-l-[100px] hidden lg:block"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              <span>Apoio aos estudantes de Rafard</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              O apoio que você <br />
              <span className="text-blue-600 italic">precisa para encarar</span> <br />
              o vestibular e o ENEM.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Sabemos que as matérias de <span className="font-semibold text-slate-900">Exatas</span> podem ser difíceis. Nosso objetivo é estudar junto com você para tirar as dúvidas e reforçar o que é pedido nas provas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={googleFormsUrl}
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white text-center px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Gostaria de me inscrever <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-[40px] rotate-3 -z-10"></div>
            <div className="aspect-[4/5] bg-slate-200 rounded-[32px] overflow-hidden shadow-2xl relative">
              <div className="w-full h-full flex items-center justify-center bg-slate-300">
                  <img src={camileImg} alt="Professora" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            {/* Vagas Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
              <p className="text-blue-600 font-black text-4xl leading-none">05</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Vagas no grupo</p>
              <p className="text-[10px] text-slate-400 mt-1">(Para conseguirmos conversar com todos)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Uma iniciativa voluntária</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O <span className="text-blue-600 font-semibold">IASD Rafard Ensina</span> é uma ajuda prática que a Igreja Adventista de Rafard oferece para quem mora aqui. Não cobramos nada; queremos apenas que os jovens da cidade tenham mais apoio para buscar seus objetivos na universidade.
            </p>
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm text-left border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tire suas dúvidas</h3>
                <p className="text-slate-600">Com um grupo pequeno, conseguimos parar e explicar cada detalhe até você se sentir seguro com a matéria.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm text-left border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Estudo prático</h3>
                <p className="text-slate-600">Resolvemos exercícios das provas passadas e focamos no que você tem mais dificuldade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Professora */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[60px] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 text-white">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-slate-800 overflow-hidden flex-shrink-0 border-8 border-slate-700 shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-slate-700">
                <img src={camileLogoImg} alt="Professora" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium uppercase tracking-wider">Quem vai te acompanhar</div>
              <h2 className="text-4xl lg:text-5xl font-bold">Profª Camile Pastrello</h2>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                "Meu objetivo é ser sua parceira de estudos para que você não apenas tire boas notas, mas realmente entenda a matéria e ganhe mais confiança. Vamos juntos transformar o desafio em conquista!"
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="bg-white/5 px-4 py-2 rounded-lg text-sm border border-white/10 font-medium">Licenciada em Química na UNESP</span>
                <span className="bg-white/5 px-4 py-2 rounded-lg text-sm border border-white/10 font-medium">Técnica em Química pelo IF</span>
                <span className="bg-white/5 px-4 py-2 rounded-lg text-sm border border-white/10 font-medium italic">Parceira de estudos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Informações importantes</h2>
            <p className="text-slate-500">Para você se organizar e saber como participar.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {infoItems.map((item, index) => (
              <div key={index} className="group p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-blue-600 mb-6">{item.icon}</div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                <p className="text-lg font-bold text-slate-800">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-blue-600 text-white rounded-[60px] mx-4 md:mx-10 mb-16 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">O que oferecemos neste apoio?</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { t: "Foco no básico", d: "Não vamos complicar. Vamos focar na base de Matemática, Química e Física para você entender o resto." },
                  { t: "Apostilas", d: "As listas de exercícios e o material de apoio são entregues para estudo em casa." },
                  { t: "Conversa aberta", d: "Como o grupo é pequeno, você pode perguntar o quanto precisar até entender." },
                  { t: "Lugar para estudar", d: "Um ambiente tranquilo para se concentrar aos domingos à tarde em Rafard." }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white/50" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.t}</h4>
                      <p className="text-blue-100 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mt-16 text-center">
              <a 
                href={googleFormsUrl}
                target="_blank"
                className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Preencher formulário de interesse
              </a>
              <p className="mt-4 text-blue-100 text-sm">Entraremos em contato para confirmar sua participação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-white pt-12 pb-8 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-lg italic">Rafard Ensina</span>
              </div>
              <p className="text-slate-500 mb-6">
                Rua IV Centenário, 400 <br />
                Centro - Rafard/SP
              </p>
              <a 
                href="https://instagram.com/iasdrafard" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@iasdrafard</span>
              </a>
              <br/>
              <a 
                href="https://instagram.com/profcamilepastrello" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@profcamilepastrello</span>
              </a>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-slate-100 w-full h-48 rounded-[32px] overflow-hidden relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2504480085304!2d-47.529787423990015!3d-23.014574779179338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c61d006fd5f625%3A0x9576b3e7eee232e2!2sIgreja%20Adventista%20do%207%C2%BA%20Dia%20-%20Rafard!5e0!3m2!1spt-BR!2sbr!4v1776200258632!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
                  NOSSO ENDEREÇO EM RAFARD
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <p className="text-slate-400 text-sm italic">
                Projeto comunitário voluntário da Igreja Adventista.
              </p>
              <div className="max-w-md">
                <p className="text-[10px] text-slate-300 uppercase tracking-widest font-bold text-center md:text-right">
                  Informação LGPD: Os dados do formulário servem apenas para organizar as vagas. 
                  Respeitamos sua privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
