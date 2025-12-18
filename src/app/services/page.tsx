import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Target, 
  Building, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Award,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  ArrowRight,
  Star,
  Globe,
  BarChart,
  Brain,
  Shield,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "destination-development",
      icon: <Target className="w-8 h-8" />,
      title: "Pengembangan Destinasi Wisata",
      description: "Layanan komprehensif untuk mengembangkan destinasi wisata yang berdaya saing dan berkelanjutan.",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI2dyYWQwKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjUwIj4KPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWU0MGFmIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA5MjBhNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjxtb250YWluIGN4PSIyMDAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiNmZmZmZmYyMCIvPgo8cGF0aCBkPSJNMTAwIDE1MCBMMTYwIDEwMCBMMjIwIDE1MCBMMTYwIDIwMCBMMTAwIDE1MCBaIiBmaWxsPSIjZmZmZmZmMTUiLz4KPHBhdGggZD0iTTI4MCAxNTAgTDM0MCAxMDAgTDQwMCAxNTAgTDM0MCAyMDAgTDI4MCAxNTAgWiIgZmlsbD0iI2ZmZmZmZjE1Ii8+CjxwYXRoIGQ9Ik0xMjAgMjIwIEwyMDAgMTYwIEwyODAgMjIwIEwyMDAgMjgwIEwxMjAgMjIwIFoiIGZpbGw9IiNmZmZmZmYxMCIvPgo8L3N2Zz4=')",
      features: [
        "Analisis potensi destinasi",
        "Master plan pengembangan",
        "Branding dan positioning",
        "Fasilitas dan infrastruktur",
        "Aksesibilitas dan konektivitas"
      ],
      process: [
        "Survey dan analisis awal",
        "Perencanaan strategis",
        "Desain dan konsep",
        "Implementasi dan monitoring",
        "Evaluasi dan pengembangan"
      ],
      duration: "6-12 bulan",
      price: "Mulai dari Rp 500 Juta"
    },
    {
      id: "tourism-management",
      icon: <Building className="w-8 h-8" />,
      title: "Manajemen Industri Pariwisata",
      description: "Konsultansi manajemen untuk meningkatkan efisiensi dan efektivitas industri pariwisata.",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI2dyYWQxKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjUwIj4KPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMGM0YWE4Ii8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA1OTY2OSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHg9IjUwIiB5PSI4MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNmZmZmZmYxNSIvPgo8cmVjdCB4PSIxNTAiIHk9IjYwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjE3MCIgZmlsbD0iI2ZmZmZmZjEwIi8+CjxyZWN0IHg9IjI1MCIgeT0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEzMCIgZmlsbD0iI2ZmZmZmZjE1Ii8+Cjwvc3ZnPg==')",
      features: [
        "Strategi bisnis pariwisata",
        "Operasional management",
        "Quality assurance",
        "Risk management",
        "Performance monitoring"
      ],
      process: [
        "Assessment organisasi",
        "Perancangan sistem",
        "Implementasi proses",
        "Training dan development",
        "Continuous improvement"
      ],
      duration: "3-6 bulan",
      price: "Mulai dari Rp 300 Juta"
    },
    {
      id: "human-capital",
      icon: <Users className="w-8 h-8" />,
      title: "Pengembangan SDM Pariwisata",
      description: "Pelatihan dan pengembangan sumber daya manusia untuk mendukung industri pariwisata.",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI2dyYWQyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMiIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjUwIj4KPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWU0MGFmIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA5MjBhNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiNmZmZmZmYyMCIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSI4MCIgcj0iMzUiIGZpbGw9IiNmZmZmZmYyMCIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIxMjAiIHI9IjI4IiBmaWxsPSIjZmZmZmZmMjAiLz4KPHJlY3QgeD0iNzAiIHk9IjE0MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZmZmZmZmMTUiLz4KPHJlY3QgeD0iMTcwIiB5PSIxMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmZmZmYxNSIvPgo8cmVjdCB4PSIyNzAiIHk9IjE1MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjZmZmZmZmMTUiLz4KPC9zdmc+')",
      features: [
        "Training & workshop",
        "Sertifikasi profesi",
        "Leadership development",
        "Competency assessment",
        "Career path planning"
      ],
      process: [
        "Training needs analysis",
        "Curriculum development",
        "Program implementation",
        "Evaluation & assessment",
        "Certification & follow-up"
      ],
      duration: "1-3 bulan per program",
      price: "Mulai dari Rp 100 Juta"
    },
    {
      id: "marketing-strategy",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategi Pemasaran Pariwisata",
      description: "Pengembangan strategi pemasaran digital dan tradisional untuk meningkatkan kunjungan wisatawan.",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI2dyYWQzKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMyIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjUwIj4KPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMGM0YWE4Ii8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA1OTY2OSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0xMDAgMjAwIEwxNTAgMTAwIEwyMDAgMjAwIEwxNTAgMTUwIEwxMDAgMjAwIFoiIGZpbGw9IiNmZmZmZmYyMCIvPgo8cGF0aCBkPSJNMjUwIDE1MCBMMzAwIDUwIEwzNTAgMTUwIEwzMDAgMjAwIEwyNTAgMTUwIFoiIGZpbGw9IiNmZmZmZmYyMCIvPgo8cmVjdCB4PSI4MCIgeT0iMjIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYxNSIvPgo8cmVjdCB4PSIyMzAiIHk9IjIyMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmZmZmMTUiLz4KPC9zdmc+')",
      features: [
        "Market research & analysis",
        "Digital marketing strategy",
        "Brand positioning",
        "Campaign planning",
        "Performance measurement"
      ],
      process: [
        "Market analysis",
        "Strategy development",
        "Campaign creation",
        "Implementation",
        "Monitoring & optimization"
      ],
      duration: "3-6 bulan",
      price: "Mulai dari Rp 250 Juta"
    },
    {
      id: "product-innovation",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovasi Produk Pariwisata",
      description: "Pengembangan produk dan pengalaman pariwisata yang kreatif dan inovatif.",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI2dyYWQ0KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkNCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjUwIj4KPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWU0MGFmIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA5MjBhNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjgwIiByPSI0MCIgZmlsbD0iI2ZmZmZmZjIwIi8+CjxwYXRoIGQ9Ik0xMDAgMTUwIEwxODAgMTAwIEwyNjAgMTUwIEwxODAgMjAwIEwxMDAgMTUwIFoiIGZpbGw9IiNmZmZmZmYxNSIvPgo8Y2lyY2xlIGN4PSIxODAiIGN5PSIxNTAiIHI9IjIwIiBmaWxsPSIjZmZmZmZmMjAiLz4KPC9zdmc+')",
      features: [
        "Product development",
        "Experience design",
        "Packaging strategy",
        "Prototype testing",
        "Market validation"
      ],
      process: [
        "Ideation & concept",
        "Feasibility study",
        "Prototype development",
        "Market testing",
        "Commercialization"
      ],
      duration: "4-8 bulan",
      price: "Mulai dari Rp 200 Juta"
    },
    {
      id: "certification",
      icon: <Award className="w-8 h-8" />,
      title: "Sertifikasi & Standarisasi",
      description: "Pengurusan sertifikasi dan standarisasi industri pariwisata nasional dan internasional.",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI2dyYWQ1KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkNSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iMjUwIj4KPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMGM0YWE4Ii8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA1OTY2OSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyNSIgcj0iNTAiIGZpbGw9IiNmZmZmZmYyMCIvPgo8c3RhciBjeD0iMjAwIiBjeT0iMTI1IiByPSIzMCIgZmlsbD0iI2ZmZmZmZjEwIi8+Cjxwb2x5Z29uIHBvaW50cz0iMjAwLDgwIDIxNSwxMTAgMjAwLDkwIDE4NSwxMTAiIGZpbGw9IiNmZmZmZmYxNSIvPgo8L3N2Zz4=')",
      features: [
        "CHSE certification",
        "Quality standards",
        "Safety protocols",
        "Environmental certification",
        "Audit & assessment"
      ],
      process: [
        "Gap analysis",
        "Documentation preparation",
        "Implementation support",
        "Audit coordination",
        "Certification management"
      ],
      duration: "2-4 bulan",
      price: "Mulai dari Rp 150 Juta"
    }
  ];

  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Expert Team",
      description: "Tim konsultan berpengalaman lebih dari 10 tahun di industri pariwisata"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Data-Driven Approach",
      description: "Keputusan berbasis data dan analisis mendalam untuk hasil optimal"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards",
      description: "Menerapkan standar internasional dengan adaptasi lokal"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Jaminan kualitas layanan dengan monitoring berkelanjutan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-yellow-500 text-yellow-900 hover:bg-yellow-400">
              <Lightbulb className="w-4 h-4 mr-2" />
              Layanan Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solusi Konsultansi Pariwisata Terpadu
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Layanan komprehensif untuk mendukung pengembangan industri pariwisata yang berkelanjutan dan berdaya saing global
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: service.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-blue-600 mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Fitur Utama:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-slate-600">Durasi</p>
                        <p className="font-semibold text-slate-900">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Investasi</p>
                        <p className="font-semibold text-blue-600">{service.price}</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Mengapa Memilih Layanan Kami?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk kebutuhan konsultansi pariwisata Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Metodologi sistematis untuk memastikan keberhasilan setiap proyek
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Discovery", desc: "Analisis kebutuhan dan tujuan" },
              { step: 2, title: "Planning", desc: "Perencanaan strategis" },
              { step: 3, title: "Design", desc: "Desain solusi" },
              { step: 4, title: "Implementation", desc: "Implementasi program" },
              { step: 5, title: "Evaluation", desc: "Evaluasi dan monitoring" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-slate-600 text-sm">{phase.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-blue-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Studi Kasus Keberhasilan
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Hasil nyata dari proyek-proyek yang telah kami kerjakan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Pengembangan Destinasi Wisata Bahari
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  "Meningkatkan kunjungan wisatawan sebanyak 300% dalam 2 tahun"
                </p>
                <p className="text-xs text-slate-500">
                  - Pemerintah Daerah X
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Sertifikasi CHSE untuk Hotel Berbintang
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  "Berhasil mendapatkan sertifikasi CHSE untuk 20 hotel"
                </p>
                <p className="text-xs text-slate-500">
                  - Asosiasi Hotel Y
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Digital Marketing Campaign
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  "Meningkatkan brand awareness sebesar 250% secara nasional"
                </p>
                <p className="text-xs text-slate-500">
                  - DMO Z
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Memulai Proyek Pariwisata Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Konsultasikan kebutuhan Anda dengan tim profesional kami secara gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Konsultasi Gratis
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              <FileText className="w-5 h-5 mr-2" />
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center py-8">
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}