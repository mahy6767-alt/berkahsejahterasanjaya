import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Cookie, Lock, UserCheck, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Kebijakan Privasi PT Berkah Sejahtera Sanjaya
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
              PT Berkah Sejahtera Sanjaya ("kami", "perusahaan") sangat memegang teguh privasi dan keamanan data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
              pribadi Anda ketika Anda menggunakan layanan konsultansi pariwisata kami, mengunjungi website kami, atau berinteraksi dengan kami.
            </p>
            <p>
              Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini. 
              Jika Anda tidak setuju dengan praktik-praktik ini, jangan gunakan layanan kami.
            </p>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-6 h-6 text-blue-600" />
              <span>Informasi yang Kami Kumpulkan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">1. Informasi Identitas Pribadi</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Nama lengkap</li>
                <li>Alamat email</li>
                <li>Nomor telepon</li>
                <li>Alamat perusahaan atau tempat tinggal</li>
                <li>Jabatan dan perusahaan</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">2. Informasi Profesional</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Informasi perusahaan atau organisasi</li>
                <li>Riwayat kerja terkait pariwisata</li>
                <li>Proyek-proyek yang pernah dikerjakan</li>
                <li>Kebutuhan konsultansi spesifik</li>
                <li>Dokumen terkait proyek pariwisata</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">3. Informasi Teknis</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Alamat IP</li>
                <li>Jenis browser dan perangkat</li>
                <li>Informasi sistem operasi</li>
                <li>Data penggunaan website</li>
                <li>Cookies dan data pelacakan</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Usage */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <span>Penggunaan Informasi</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Kami menggunakan informasi yang kami kumpulkan untuk tujuan-tujuan berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Penyediaan Layanan:</strong> Untuk memberikan layanan konsultansi pariwisata yang Anda minta</li>
              <li><strong>Komunikasi:</strong> Untuk berkomunikasi dengan Anda mengenai layanan, proyek, dan informasi terkait</li>
              <li><strong>Penyempurnaan Layanan:</strong> Untuk menganalisis dan meningkatkan kualitas layanan kami</li>
              <li><strong>Penelitian dan Pengembangan:</strong> Untuk mengembangkan produk dan layanan baru</li>
              <li><strong>Kepatuhan Hukum:</strong> Untuk mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              <li><strong>Keamanan:</strong> Untuk melindungi keamanan sistem dan pengguna</li>
            </ul>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cookie className="w-6 h-6 text-blue-600" />
              <span>Kebijakan Cookie</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file teks kecil 
              yang disimpan di browser Anda. Kami menggunakan:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
              <li><strong>Cookie Performa:</strong> Membantu kami memahami bagaimana pengguna berinteraksi dengan website</li>
              <li><strong>Cookie Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
              <li><strong>Cookie Pemasaran:</strong> Digunakan untuk menampilkan iklan yang relevan</li>
            </ul>
            <p>
              Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
            </p>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="w-6 h-6 text-blue-600" />
              <span>Pembagian Informasi</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
              Kami hanya membagikan informasi Anda dalam kondisi berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dengan Persetujuan Anda:</strong> Ketika Anda memberikan persetujuan eksplisit</li>
              <li><strong>Penyedia Layanan:</strong> Dengan penyedia layanan pihak ketiga yang membantu operasi kami</li>
              <li><strong>Kewajiban Hukum:</strong> Ketika diwajibkan oleh hukum atau perintah pengadilan</li>
              <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, privasi, properti, atau keselamatan kami atau orang lain</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span>Keamanan Data</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Kami menerapkan langkah-langkah keamanan yang wajar dan sesuai untuk melindungi informasi pribadi Anda 
              dari akses, penggunaan, perubahan, atau penghancuran yang tidak sah. Langkah-langkah ini meliputi:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Enkripsi data saat transmisi dan penyimpanan</li>
              <li>Akses terbatas ke informasi pribadi</li>
              <li>Protokol keamanan untuk karyawan dan kontraktor</li>
              <li>Regular security audits dan updates</li>
              <li>Backup data yang aman</li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <span>Hak Anda</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Sesuai dengan peraturan perlindungan data yang berlaku, Anda memiliki hak-hak berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Hak Akses:</strong> Hak untuk mengakses informasi pribadi yang kami simpan tentang Anda</li>
              <li><strong>Hak Koreksi:</strong> Hak untuk memperbaiki informasi pribadi yang tidak akurat</li>
              <li><strong>Hak Penghapusan:</strong> Hak untuk meminta penghapusan informasi pribadi Anda</li>
              <li><strong>Hak Pembatasan:</strong> Hak untuk membatasi pemrosesan informasi pribadi Anda</li>
              <li><strong>Hak Portabilitas:</strong> Hak untuk mentransfer informasi pribadi Anda</li>
              <li><strong>Hak Penolakan:</strong> Hak untuk menolak pemrosesan informasi pribadi Anda</li>
            </ul>
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
              Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait kebijakan privasi ini atau 
              praktik privasi kami, silakan hubungi kami:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold">PT Berkah Sejahtera Sanjaya</p>
              <p>Email: privacy@berkahsejahterasanjaya.com</p>
              <p>Phone: 0852-8570-3515</p>
              <p>Alamat: Ruko Golden Madrid Blok D No. 26 Room 875, Jl. Letnan Sutopo BSD City, 
              Rawa Mekarjaya, Serpong, Tangerang Selatan, Banten</p>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <span>Perubahan Kebijakan</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
              dalam praktik kami atau perubahan peraturan yang berlaku. Perubahan akan diposting di halaman ini 
              dengan tanggal "Terakhir diperbarui" yang baru.
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