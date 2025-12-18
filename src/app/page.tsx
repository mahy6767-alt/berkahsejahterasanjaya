'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  Users, 
  TrendingUp, 
  Award,
  Navigation,
  Building,
  Target,
  Lightbulb,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Konsultansi Pariwisata Profesional",
      subtitle: "Solusi terdepan untuk pengembangan destinasi wisata Indonesia",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI2dyYWQwKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMCIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyMCIgeTI9IjEwODAiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxZTQwYWYiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDkyMGE0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPGNpcmNsZSBjeD0iMTYwMCIgY3k9IjgwIiByPSI0MCIgZmlsbD0iI2ZmZmZmZjIwIi8+CjxjaXJjbGUgY3g9IjMyMCIgY3k9IjIwMCIgcj0iMjAiIGZpbGw9IiNmZmZmZmYxNSIvPgo8Y2lyY2xlIGN4PSI4MDAiIGN5PSI0MDAiIHI9IjMwIiBmaWxsPSIjZmZmZmZmMTAiLz4KPHBhdGggZD0iTTEyMDAgNDAwIEwxNDAwIDMwMCBMMTYwMCA0MDAgTDE0MDAgNTAwIEwxMjAwIDQwMCBaIiBmaWxsPSIjZmZmZmZmMDgiLz4KPHBhdGggZD0iTTQwMCA2MDAgTDYwMCA1MDAgTDgwMCA2MDAgTDYwMCA3MDAgTDQwMCA2MDAgWiIgZmlsbD0iI2ZmZmZmZjA4Ii8+Cjwvc3ZnPg==')"
    },
    {
      title: "Pengembangan Destinasi Wisata",
      subtitle: "Maksimalkan potensi pariwisata daerah Anda dengan strategi terukur",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI2dyYWQxKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyMCIgeTI9IjEwODAiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwYzRhYTgiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDU5NjY5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHBhdGggZD0iTTE2MCA4MDAgTDMyMCA2MDAgTDQ4MCA4MDAgTDMyMCAxMDAwIEwxNjAgODAwIFoiIGZpbGw9IiNmZmZmZmYxNSIvPgo8cGF0aCBkPSJNMTIwMCA2MDAgTDEzNjAgNDAwIEwxNTIwIDYwMCBMMTM2MCA4MDAgTDEyMDAgNjAwIFoiIGZpbGw9IiNmZmZmZmYxNSIvPgo8Y2lyY2xlIGN4PSI4MDAiIGN5PSIyMDAiIHI9IjQwIiBmaWxsPSIjZmZmZmZmMjAiLz4KPHJlY3QgeD0iNjAwIiB5PSI0MDAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmZmZmZmMTAiLz4KPC9zdmc+')"
    },
    {
      title: "Manajemen Industri Pariwisata",
      subtitle: "Strategi komprehensif untuk pertumbuhan berkelanjutan industri pariwisata",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI2dyYWQyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMiIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyMCIgeTI9IjEwODAiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxZTQwYWYiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDkyMGE0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3QgeD0iNDAwIiB5PSI2MDAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmZmZmZmMTUiLz4KPHJlY3QgeD0iMTIwMCIgeT0iNDAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2ZmZmZmZjEwIi8+CjxjaXJjbGUgY3g9IjgwMCIgY3k9IjMwMCIgcj0iNTAiIGZpbGw9IiNmZmZmZmYyMCIvPgo8cGF0aCBkPSJNMTYwMCA4MDAgTDE4MDAgNjAwIEwxOTIwIDgwMCBMMTgwMCA5NDAgTDE2MDAgODAwIFoiIGZpbGw9IiNmZmZmZmYwOCIvPgo8L3N2Zz4=')"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Pengembangan Destinasi",
      description: "Perencanaan dan pengembangan destinasi wisata yang berkelanjutan dan berdaya saing tinggi.",
      features: ["Analisis Potensi Destinasi", "Master Plan Pariwisata", "Branding Destinasi"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Manajemen Industri",
      description: "Konsultansi manajemen untuk industri pariwisata yang efisien dan profesional.",
      features: ["Strategi Bisnis", "Operasional Management", "Quality Assurance"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pengembangan SDM",
      description: "Pelatihan dan pengembangan sumber daya manusia di sektor pariwisata.",
      features: ["Training & Workshop", "Sertifikasi Profesi", "Leadership Development"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategi Pemasaran",
      description: "Pemasaran digital dan promosi pariwisata yang efektif dan terukur.",
      features: ["Digital Marketing", "Market Research", "Campaign Strategy"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovasi Produk",
      description: "Pengembangan produk pariwisata kreatif dan inovatif.",
      features: ["Product Development", "Experience Design", "Packaging Strategy"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Sertifikasi & Standar",
      description: "Pengurusan sertifikasi dan standarisasi industri pariwisata.",
      features: ["CHSE Certification", "Quality Standards", "Audit & Assessment"]
    }
  ];

  const advantages = [
    {
      title: "Tim Profesional",
      description: "Didukung oleh tenaga ahli berpengalaman lebih dari 10 tahun di industri pariwisata.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Approach Terintegrasi",
      description: "Pendekatan holistik dan terintegrasi untuk solusi pariwisata yang komprehensif.",
      icon: <Navigation className="w-6 h-6" />
    },
    {
      title: "Data-Driven",
      description: "Keputusan berbasis data dan analisis mendalam untuk hasil yang optimal.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Komitmen Tinggi",
      description: "Dedikasi penuh untuk kesuksesan dan kepuasan klien.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">PT BERKAH SEJAHTERA SANJAYA</h1>
                <p className="text-xs text-slate-600">Konsultansi Pariwisata Profesional</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors">Layanan</Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  Konsultasi Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: heroSlides[currentSlide].image }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-yellow-500 text-yellow-900 hover:bg-yellow-400">
            <Award className="w-4 h-4 mr-2" />
            Konsultan Pariwisata Terpercaya
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                <ChevronRight className="w-5 h-5 mr-2" />
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-yellow-400 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">PT BERKAH SEJAHTERA SANJAYA</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mitra terpercaya untuk pengembangan industri pariwisata Indonesia yang berkelanjutan dan berdaya saing global
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Alamat Kantor</h3>
                <p className="text-blue-100">
                  Ruko Golden Madrid Blok D No. 26 Room 875<br />
                  Jl. Letnan Sutopo BSD City<br />
                  Rawa Mekarjaya, Serpong<br />
                  Tangerang Selatan, Banten
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Kontak</h3>
                <p className="text-blue-100">
                  Phone: 0852-8570-3515<br />
                  Email: info@berkahsejahterasanjaya.com<br />
                  Jam Operasional: Senin - Jumat, 09:00 - 18:00
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Layanan Kami</h3>
                <p className="text-blue-100">
                  Konsultansi pariwisata profesional<br />
                  Pengembangan destinasi wisata<br />
                  Manajemen industri pariwisata
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Lightbulb className="w-4 h-4 mr-2" />
              Layanan Kami
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Solusi Konsultansi Pariwisata Terpadu
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Layanan komprehensif untuk mendukung pengembangan industri pariwisata yang berkelanjutan dan berdaya saing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                <Award className="w-4 h-4 mr-2" />
                Mengapa Memilih Kami
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Partner Terpercaya untuk Kesuksesan Pariwisata Anda
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                PT Berkah Sejahtera Sanjaya telah berpengalaman lebih dari 10 tahun membantu berbagai destinasi wisata dan industri pariwisata untuk berkembang secara berkelanjutan.
              </p>
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {advantage.title}
                      </h3>
                      <p className="text-slate-600">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                      <p className="text-sm text-blue-700">Proyek Selesai</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-yellow-900 mb-2">10+</div>
                      <p className="text-sm text-yellow-700">Tahun Pengalaman</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-900 mb-2">30+</div>
                      <p className="text-sm text-green-700">Klien Puas</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-purple-900 mb-2">15+</div>
                      <p className="text-sm text-purple-700">Tim Ahli</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Mengembangkan Destinasi Wisata Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Konsultasikan kebutuhan pariwisata Anda dengan tim profesional kami secara gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Sekarang
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Email Konsultasi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">PT BERKAH SEJAHTERA SANJAYA</h3>
                  <p className="text-sm text-slate-400">Konsultansi Pariwisata Profesional</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Mitra terpercaya untuk pengembangan industri pariwisata Indonesia yang berkelanjutan dan berdaya saing global.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Pengembangan Destinasi</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Manajemen Industri</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Pengembangan SDM</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Strategi Pemasaran</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Tangerang Selatan, Banten
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  0852-8570-3515
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@berkahsejahterasanjaya.com
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 PT Berkah Sejahtera Sanjaya. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}