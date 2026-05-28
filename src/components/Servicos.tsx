"use client";

import { Bus, ArrowRight, MapPin, Star, Users, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Fretamento Corporativo",
    description: "Transporte de funcionários com rotas personalizadas, garantindo conforto e pontualidade no deslocamento diário.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "Transporte Executivo",
    description: "Veículos premium para executivos e viagens comerciais, com motoristas profissionais e atendimento VIP.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Star,
    title: "Turismo e Passeios",
    description: "Excursões e passeios turísticos com roteiros exclusivos para grupos, escolas e agências de viagem.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Translados e Eventos",
    description: "Serviço completo para eventos, congressos, feiras e translados aeroportuários com planejamento dedicado.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas em transporte para todas as suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
