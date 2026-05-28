"use client";

import Hero from "@/components/Hero";
import { Phone, Mail, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <Hero />
      
      {/* About section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sobre a BoraBus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Há mais de 10 anos conectando pessoas a destinos incríveis com
              segurança, conforto e pontualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experiência",
                desc: "Mais de 10 anos de atuação no mercado de transporte executivo e turismo.",
              },
              {
                title: "Qualidade",
                desc: "Frota moderna e motoristas altamente capacitados para sua segurança.",
              },
              {
                title: "Compromisso",
                desc: "Pontualidade e atendimento personalizado para cada cliente.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas de transporte para cada necessidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fretamento Corporativo",
                desc: "Transporte de funcionários com rotas personalizadas e monitoramento em tempo real.",
              },
              {
                title: "Turismo e Passeios",
                desc: "Excursões e passeios turísticos com roteiros exclusivos para grupos.",
              },
              {
                title: "Transporte Executivo",
                desc: "Veículos premium para executivos com motoristas dedicados.",
              },
              {
                title: "Translados",
                desc: "Serviço completo para eventos, congressos e translados aeroportuários.",
              },
              {
                title: "Fretamento Escolar",
                desc: "Transporte escolar seguro com monitoramento e autorização parental.",
              },
              {
                title: "Eventos Especiais",
                desc: "Transporte personalizado para casamentos, formaturas e eventos corporativos.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-gray-200 hover:border-brand/50 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages section */}
      <section id="vantagens" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a BoraBus?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Frota moderna e climatizada",
              "Motoristas certificados e experientes",
              "Seguro completo para passageiros",
              "Rastreamento GPS em tempo real",
              "Atendimento 24 horas",
              "Orçamento sem compromisso",
            ].map((item) => (
              <div key={item} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que dizem nossos clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Gerente de RH",
                text: "Serviço impecável! Nossos colaboradores adoram o transporte diário. Pontualidade e conforto garantidos.",
              },
              {
                name: "João Santos",
                role: "Diretor Comercial",
                text: "Fizemos um tour empresarial e a experiência foi incrível. Profissionais extremamente competentes.",
              },
              {
                name: "Ana Oliveira",
                role: "Organizadora de Eventos",
                text: "Sempre indicamos a BoraBus para nossos clientes. Atendimento de primeira qualidade.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contato" className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Solicite um Orçamento
              </h2>
              <p className="text-gray-300 mb-8">
                Preencha o formulário e nossa equipe entrará em contato em até 2
                horas úteis.
              </p>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>contato@borabus.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Serviço desejado
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="" className="bg-brand-dark">
                    Selecione um serviço
                  </option>
                  <option value="corporate" className="bg-brand-dark">
                    Fretamento Corporativo
                  </option>
                  <option value="tourism" className="bg-brand-dark">
                    Turismo e Passeios
                  </option>
                  <option value="executive" className="bg-brand-dark">
                    Transporte Executivo
                  </option>
                  <option value="transfers" className="bg-brand-dark">
                    Translados
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Descreva sua necessidade..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent hover:bg-accent-light text-brand-dark font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
