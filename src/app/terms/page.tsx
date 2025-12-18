import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Users, AlertTriangle, Shield, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Syarat dan Ketentuan Layanan PT Berkah Sejahtera Sanjaya
          </p>
          <p className="text-blue-200 mt-2">
            Terakhir diperbarui: 1 Januari 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <span>Pendahuluan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Selamat datang di PT Berkah Sejahtera Sanjaya. Syarat dan Ketentuan ini ("Syarat") mengatur 
              penggunaan layanan konsultansi pariwisata yang kami sediakan oleh PT Berkah Sejahtera Sanjaya 
              ("Kami", "Perusahaan") kepada Anda ("Klien", "Anda").
            </p>
            <p>
              Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh Syarat ini. 
              Jika Anda tidak setuju dengan Syarat ini, jangan gunakan layanan kami.
            </p>
          </CardContent>
        </Card>

        {/* Services */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span>Layanan Kami</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              PT Berkah Sejahtera Sanjaya menyediakan layanan konsultansi pariwisata yang meliputi:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Konsultansi pengembangan destinasi wisata</li>
              <li>Manajemen industri pariwisata</li>
              <li>Pengembangan sumber daya manusia pariwisata</li>
              <li>Strategi pemasaran pariwisata</li>
              <li>Inovasi produk pariwisata</li>
              <li>Sertifikasi dan standarisasi industri pariwisata</li>
              <li>Penelitian dan pengembangan pariwisata</li>
            </ul>
            <p>
              Kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan standar profesional 
              yang sesuai dengan industri pariwisata.
            </p>
          </CardContent>
        </Card>

        {/* Client Responsibilities */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <span>Kewajiban Klien</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Sebagai klien, Anda setuju untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Informasi Akurat:</strong> Memberikan informasi yang akurat, lengkap, dan terkini</li>
              <li><strong>Kerjasama:</strong> Bekerjasama secara aktif dalam proses konsultansi</li>
              <li><strong>Pembayaran Tepat Waktu:</strong> Melakukan pembayaran sesuai dengan kesepakatan</li>
              <li><strong>Konfidensialitas:</strong> Menjaga kerahasiaan informasi dan strategi yang dibagikan</li>
              <li><strong>Kepatuhan:</strong> Mematuhi hukum dan peraturan yang berlaku</li>
              <li><strong>Komunikasi:</strong> Memberikan feedback dan komunikasi yang jelas</li>
            </ul>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-blue-600" />
              <span>Syarat Pembayaran</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg mb-3">Struktur Pembayaran</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Uang Muka:</strong> 30% dari total nilai kontrak</li>
                <li><strong>Pembayaran Tahap 2:</strong> 40% setelah pencapaian milestone pertama</li>
                <li><strong>Pelunasan:</strong> 30% setelah penyelesaian proyek</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">Metode Pembayaran</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Transfer Bank ke rekening perusahaan</li>
                <li>Virtual Account</li>
                <li>E-wallet (jika tersedia)</li>
                <li>Cek atau Giro (untuk perusahaan)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">Keterlambatan Pembayaran</h3>
              <p>
                Keterlambatan pembayaran akan dikenakan bunga sebesar 2% per bulan dari jumlah yang terhutang. 
                Jika keterlambatan melebihi 30 hari, kami berhak menghentikan sementara layanan.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span>Hak Kekayaan Intelektual</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Hak kekayaan intelektual dari materi yang kami hasilkan dalam rangka layanan konsultansi 
              akan diatur sebagai berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Metodologi dan Framework:</strong> Tetap menjadi milik PT Berkah Sejahtera Sanjaya</li>
              <li><strong>Laporan Kustom:</strong> Menjadi milik klien setelah pelunasan pembayaran</li>
              <li><strong>Template dan Tools:</strong> Lisensi penggunaan non-eksklusif diberikan kepada klien</li>
              <li><strong>Branding dan Materials:</strong> Hak penggunaan terbatas sesuai kesepakatan</li>
            </ul>
          </CardContent>
        </Card>

        {/* Confidentiality */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span>Kerahasiaan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Kedua belah pihak setuju untuk menjaga kerahasiaan informasi yang dibagikan selama 
              kerjasama ini. Informasi rahasia meliputi:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Informasi bisnis dan strategi perusahaan</li>
              <li>Data keuangan dan operasional</li>
              <li>Rencana pengembangan dan proyek</li>
              <li>Informasi klien dan mitra bisnis</li>
              <li>Metodologi dan proses kerja</li>
            </ul>
            <p>
              Kewajiban kerahasiaan tetap berlaku selama 5 tahun setelah berakhirnya kerjasama.
            </p>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
              <span>Pembatasan Tanggung Jawab</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Tanggung jawab kami terbatas sebagai berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maksimal tanggung jawab kami sebesar nilai kontrak</li>
              <li>Kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial</li>
              <li>Kami tidak bertanggung jawab atas keputusan bisnis yang diambil klien</li>
              <li>Hasil konsultansi tergantung pada implementasi oleh klien</li>
            </ul>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
              <span>Terminasi Kerjasama</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg mb-3">Pengakhiran oleh Klien</h3>
              <p>
                Klien dapat mengakhiri kerjasama dengan pemberitahuan tertulis 30 hari sebelumnya. 
                Pembayaran untuk layanan yang telah diberikan tetap harus dilunasi.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">Pengakhiran oleh Perusahaan</h3>
              <p>
                Kami dapat mengakhiri kerjasama jika:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Klien melanggar Syarat dan Ketentuan</li>
                <li>Klien tidak melakukan pembayaran tepat waktu</li>
                <li>Terjadi force majeure yang menghambat pelaksanaan kerjasama</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Dispute Resolution */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span>Penyelesaian Sengketa</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Sengketa yang timbul dari Syarat dan Ketentuan ini akan diselesaikan melalui:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Negosiasi:</strong> Upaya penyelesaian secara damih</li>
              <li><strong>Mediasi:</strong> Melalui mediator independen</li>
              <li><strong>Arbitrase:</strong> Melalui Badan Arbitrase Nasional Indonesia (BANI)</li>
              <li><strong>Pengadilan:</strong> Pengadilan Negeri Tangerang Selatan</li>
            </ol>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <span>Hukum yang Berlaku</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
              Segala sengketa akan diselesaikan di wilayah hukum Indonesia.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <span>Hubungi Kami</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold">PT Berkah Sejahtera Sanjaya</p>
              <p>Email: legal@berkahsejahterasanjaya.com</p>
              <p>Phone: 0852-8570-3515</p>
              <p>Alamat: Ruko Golden Madrid Blok D No. 26 Room 875, Jl. Letnan Sutopo BSD City, 
              Rawa Mekarjaya, Serpong, Tangerang Selatan, Banten</p>
            </div>
          </CardContent>
        </Card>

        {/* Agreement */}
        <Card className="mb-8 shadow-sm border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-900">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <span>Persetujuan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-blue-800">
            <p>
              Dengan menggunakan layanan kami, Anda menyatakan bahwa Anda telah membaca, memahami, 
              dan setuju untuk terikat oleh Syarat dan Ketentuan ini.
            </p>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}