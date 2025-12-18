'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  Users,
  MessageSquare,
  Calendar,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Kantor",
      content: "Ruko Golden Madrid Blok D No. 26 Room 875<br />Jl. Letnan Sutopo BSD City<br />Rawa Mekarjaya, Serpong<br />Tangerang Selatan, Banten 15310"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      content: "+62 852-8570-3515<br />+62 21-1234-5678"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@berkahsejahterasanjaya.com<br />consulting@berkahsejahterasanjaya.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 18:00<br />Sabtu: 09:00 - 15:00<br />Minggu & Hari Libur: Tutup"
    }
  ];

  const services = [
    "Pengembangan Destinasi Wisata",
    "Manajemen Industri Pariwisata",
    "Pengembangan SDM Pariwisata",
    "Strategi Pemasaran Pariwisata",
    "Inovasi Produk Pariwisata",
    "Sertifikasi & Standarisasi"
  ];

  const faqs = [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk konsultasi awal?",
      answer: "Konsultasi awal biasanya memakan waktu 1-2 jam untuk diskusi mendalam tentang kebutuhan dan tujuan Anda."
    },
    {
      question: "Apakah ada biaya untuk konsultasi awal?",
      answer: "Konsultasi awal kami berikan secara gratis. Ini adalah kesempatan untuk saling mengenal dan mengevaluasi kebutuhan Anda."
    },
    {
      question: "Bagaimana cara memulai proyek dengan PT Berkah Sejahtera Sanjaya?",
      answer: "Anda dapat menghubungi kami melalui form kontak atau telepon. Kami akan menjadwalkan konsultasi awal untuk mendiskusikan kebutuhan Anda."
    },
    {
      question: "Apakah Anda melayani proyek di luar Jakarta?",
      answer: "Ya, kami melayani proyek di seluruh Indonesia. Tim kami siap untuk melakukan perjalanan ke lokasi proyek."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-yellow-500 text-yellow-900 hover:bg-yellow-400">
              <MessageSquare className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mari Berkolaborasi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Kami siap membantu mengembangkan industri pariwisata Anda dengan solusi yang tepat dan berkelanjutan
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                  <div 
                    className="text-slate-600 text-sm"
                    dangerouslySetInnerHTML={{ __html: info.content }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Kirim Pesan kepada Kami
              </h2>
              <p className="text-slate-600 mb-8">
                Silakan isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam kerja.
              </p>

              {isSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-900 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-green-700">
                      Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+62 812-3456-7890"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Perusahaan
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="PT Example"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Layanan yang Dibutuhkan *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Pilih Layanan</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Jelaskan kebutuhan dan tujuan Anda..."
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Lokasi Kantor Kami
                      </h3>
                      <p className="text-slate-600">
                        Ruko Golden Madrid Blok D No. 26<br />
                        BSD City, Tangerang Selatan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>Hubungi Langsung</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Hotline</p>
                      <p className="text-slate-600">0852-8570-3515</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <p className="text-slate-600">info@berkahsejahterasanjaya.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Consultation */}
              <Card className="shadow-sm bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-semibold text-slate-900">Jadwalkan Konsultasi</h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Konsultasi awal gratis untuk mendiskusikan kebutuhan pariwisata Anda.
                  </p>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-yellow-900">
                    <Calendar className="w-4 h-4 mr-2" />
                    Jadwalkan Sekarang
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-slate-600">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ikuti Kami
            </h2>
            <p className="text-lg text-slate-600">
              Dapatkan informasi terbaru tentang industri pariwisata dan tips dari kami
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
              <Building className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
              <Users className="w-5 h-5 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
              <MessageSquare className="w-5 h-5 mr-2" />
              Instagram
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