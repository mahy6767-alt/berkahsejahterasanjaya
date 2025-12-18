import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  Globe, 
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
  Building
} from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Dr. Budi Santoso",
      position: "CEO & Senior Consultant",
      expertise: "Strategic Tourism Development",
      experience: "15+ tahun",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMTAwIiBmaWxsPSIjZTVlN2ViIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI2Y0ZjRmNiIvPgo8cGF0aCBkPSJNNjAgMTYwIEwxMDAgMTIwIEwxNDAgMTYwIEwxMDAgMTQwIEw2MCAxNjAgWiIgZmlsbD0iI2Y0ZjRmNiIvPgo8L3N2Zz4=')"
    },
    {
      name: "Siti Nurhaliza",
      position: "Operations Director",
      expertise: "Tourism Management & Marketing",
      experience: "12+ tahun",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMTAwIiBmaWxsPSIjZmNkMTRkIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI2Y0ZjRmNiIvPgo8cGF0aCBkPSJNNjAgMTYwIEwxMDAgMTIwIEwxNDAgMTYwIEwxMDAgMTQwIEw2MCAxNjAgWiIgZmlsbD0iI2Y0ZjRmNiIvPgo8L3N2Zz4=')"
    },
    {
      name: "Ahmad Wijaya",
      position: "Senior Tourism Consultant",
      expertise: "Destination Development",
      experience: "10+ tahun",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMTAwIiBmaWxsPSIjZTVlN2ViIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI2Y0ZjRmNiIvPgo8cGF0aCBkPSJNNjAgMTYwIEwxMDAgMTIwIEwxNDAgMTYwIEwxMDAgMTQwIEw2MCAxNjAgWiIgZmlsbD0iI2Y0ZjRmNiIvPgo8L3N2Zz4=')"
    },
    {
      name: "Maya Putri",
      position: "Marketing & Communications Manager",
      expertise: "Digital Tourism Marketing",
      experience: "8+ tahun",
      image: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMTAwIiBmaWxsPSIjZmNkMTRkIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI2Y0ZjRmNiIvPgo8cGF0aCBkPSJNNjAgMTYwIEwxMDAgMTIwIEwxNDAgMTYwIEwxMDAgMTQwIEw2MCAxNjAgWiIgZmlsbD0iI2Y0ZjRmNiIvPgo8L3N2Zz4=')"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Profesionalisme",
      description: "Kami berkomitmen untuk memberikan layanan konsultansi pariwisata dengan standar profesional tertinggi."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovasi",
      description: "Terus berinovasi dalam pengembangan solusi pariwisata yang kreatif dan berkelanjutan."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kolaborasi",
      description: "Membangun kemitraan kuat dengan klien dan stakeholders untuk kesuksesan bersama."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Keberlanjutan",
      description: "Mengedepankan pembangunan pariwisata yang berkelanjutan dan ramah lingkungan."
    }
  ];

  const achievements = [
    { number: "50+", label: "Proyek Selesai" },
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "30+", label: "Klien Puas" },
    { number: "10+", label: "Penghargaan" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-yellow-500 text-yellow-900 hover:bg-yellow-400">
              <Building className="w-4 h-4 mr-2" />
              Tentang Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PT BERKAH SEJAHTERA SANJAYA
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mitra terpercaya dalam pengembangan industri pariwisata Indonesia yang berkelanjutan dan berdaya saing global
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Perjalanan Kami Membangun Pariwisata Indonesia
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  PT Berkah Sejahtera Sanjaya didirikan pada tahun 2009 dengan visi untuk menjadi 
                  konsultan pariwisata terkemuka di Indonesia. Berawal dari tim kecil yang berdedikasi, 
                  kami telah tumbuh menjadi perusahaan konsultansi pariwisata yang diakui secara nasional.
                </p>
                <p>
                  Selama lebih dari satu dekade, kami telah membantu berbagai pemerintah daerah, 
                  BUMN, swasta, dan komunitas dalam mengembangkan destinasi wisata yang berkelanjutan 
                  dan berdaya saing.
                </p>
                <p>
                  Kami percaya bahwa pariwisata adalah sektor yang dapat memberikan dampak positif 
                  bagi perekonomian, sosial, dan pelestarian budaya. Melalui pendekatan holistik dan 
                  berbasis data, kami berkomitmen untuk menciptakan nilai berkelanjutan bagi semua stakeholders.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-900 mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-blue-700">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Visi & Misi Kami
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-900">
                  <Target className="w-6 h-6" />
                  <span>Visi</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  Menjadi konsultan pariwisata terdepan di Indonesia yang mampu mengembangkan 
                  destinasi wisata berkelanjutan, meningkatkan kesejahteraan masyarakat lokal, 
                  dan memperkuat posisi Indonesia sebagai destinasi wisata global.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-900">
                  <Star className="w-6 h-6" />
                  <span>Misi</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Memberikan layanan konsultansi pariwisata berkualitas tinggi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mengembangkan destinasi wisata yang berdaya saing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Meningkatkan kapasitas SDM di sektor pariwisata</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mendorong pembangunan pariwisata berkelanjutan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Nilai-nilai yang memandu setiap keputusan dan tindakan kami dalam melayani klien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Didukung oleh tim ahli berpengalaman di berbagai bidang industri pariwisata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div 
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-cover bg-center"
                    style={{ backgroundImage: member.image }}
                  />
                  <h3 className="text-lg font-semibold text-slate-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-center text-sm font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-slate-600 text-center text-sm mb-2">
                    {member.expertise}
                  </p>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">
                      {member.experience}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Informasi Perusahaan
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Nama Perusahaan</h3>
                    <p className="text-slate-700">PT Berkah Sejahtera Sanjaya</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Alamat Kantor</h3>
                    <p className="text-slate-700">
                      Ruko Golden Madrid Blok D No. 26 Room 875<br />
                      Jl. Letnan Sutopo BSD City<br />
                      Rawa Mekarjaya, Serpong<br />
                      Tangerang Selatan, Banten
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Kontak</h3>
                    <p className="text-slate-700">Phone: 0852-8570-3515</p>
                    <p className="text-slate-700">Email: info@berkahsejahterasanjaya.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Jam Operasional</h3>
                    <p className="text-slate-700">Senin - Jumat: 09:00 - 18:00</p>
                    <p className="text-slate-700">Sabtu: 09:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Mengapa Memilih Kami
              </h2>
              <div className="space-y-4">
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-slate-900">Pengalaman Terbukti</h3>
                        <p className="text-slate-600 text-sm">Lebih dari 15 tahun pengalaman di industri pariwisata</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-slate-900">Tim Profesional</h3>
                        <p className="text-slate-600 text-sm">Tenaga ahli berpengalaman dan bersertifikasi</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-slate-900">Hasil Terukur</h3>
                        <p className="text-slate-600 text-sm">Pendekatan berbasis data untuk hasil optimal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-slate-900">Jangkauan Nasional</h3>
                        <p className="text-slate-600 text-sm">Proyek di berbagai provinsi di Indonesia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Berkolaborasi dengan Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Mari wujudkan pengembangan pariwisata yang berkelanjutan dan berdaya saing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Lihat Layanan
            </Link>
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