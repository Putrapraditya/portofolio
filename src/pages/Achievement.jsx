import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Achievement = () => {
  const achievements = [
    {
      title: "Pembuatan web peminjaman ruangan",
      description: "Sertifikat untuk pembuatan sistem peminjaman ruangan di SMKN 1 Jakarta.",
      org: "smkn 1 jakarta Certificate",
      image: "/img/achievement/sertifikat20231006_13571867_page-0001.jpg"
    },
    {
      title: "Pembuatan web peminjaman barang",
      description: "Sertifikat untuk pembuatan sistem peminjaman barang.",
      org: "smkn 1 jakarta Certificate",
      image: "/img/achievement/WhatsApp Image 2024-03-04 at 15.07.12.jpeg"
    },
    {
      title: "Peserta Liga Digital Nasional",
      description: "Sertifikat keikutsertaan dalam Liga Digital Nasional tahap Basic Course Web Development.",
      org: "Skilvul Certificate",
      image: "/img/achievement/Putra Praditya Hariyantoro - Sertifikat Tahap Basic Course Web Development - Liga Digital Nasional_page-0001.jpg"
    },
    {
      title: "Menerapkan Normalisasi Database di REST API",
      description: "Sertifikat pelatihan penerapan normalisasi database pada REST API.",
      org: "Dicoding Certificate",
      image: "/img/achievement/devcoach-127-back-end-menerapkan-normalisasi-database-di-rest-api-dengan-mudah-certificate_page-0001(1).jpg"
    },
    {
      title: "Course Front-End Web",
      description: "Sertifikat penyelesaian pelatihan pengembangan web sisi klien.",
      org: "Dicoding Certificate",
      image: "/img/achievement/sertifikat_course_315_2929695_080324151804_page-0001.jpg"
    },
    {
      title: "Course Dasar Pemrograman Web",
      description: "Sertifikat dasar-dasar pemrograman web menggunakan HTML, CSS, dan JS.",
      org: "Dicoding Certificate",
      image: "/img/achievement/sertifikat_course_123_2929695_080324095347_page-0001.jpg"
    },
    {
      title: "HTML Course",
      description: "Sertifikat penyelesaian kursus HTML Dasar.",
      org: "SoloLearn Certificate",
      image: "/img/achievement/2bd3f6ee-ac45-4260-a545-d7cc21eaa8f1.png"
    },
    {
      title: "CSS Course",
      description: "Sertifikat penyelesaian kursus CSS Dasar.",
      org: "SoloLearn Certificate",
      image: "/img/achievement/138e5d6c-7942-49f6-b893-83f62ebbaed2.png"
    },
    {
      title: "PHP Course",
      description: "Sertifikat penyelesaian kursus PHP Dasar.",
      org: "SoloLearn Certificate",
      image: "/img/achievement/2248adbb-2d02-4d3f-9de3-ae385fbb6208.png"
    },
    {
      title: "Jaringan Dasar Course",
      description: "Sertifikat dasar-dasar jaringan komputer.",
      org: "ID-Networkers Certificate",
      image: "/img/achievement/Putra-Praditya-Hariyantoro-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers_page-0001.jpg"
    },
    {
      title: "Linux Dasar Course",
      description: "Sertifikat dasar-dasar administrasi Linux.",
      org: "ID-Networkers Certificate",
      image: "/img/achievement/Putra-Praditya-Hariyantoro-Linux-Dasar-Sertifikat-Linux-Dasar-LMS-ID-Networkers_page-0001.jpg"
    },
    {
      title: "Pemrograman Dart Dasar Course",
      description: "Sertifikat dasar-dasar bahasa pemrograman Dart.",
      org: "ID-Networkers Certificate",
      image: "/img/achievement/Putra-Praditya-Hariyantoro-Pemrograman-Dart-Dasar-Sertifikat-Pemrograman-Dart-Dasar-LMS-ID-Networkers_page-0001.jpg"
    }
  ];

  return (
    <main className="py-32 bg-bgLight min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/" className="p-2 hover:bg-black/5 rounded-full transition duration-300">
            <ArrowLeft size={32} className="text-textLight" />
          </Link>
          <h1 className="font-bold lg:font-black font-tungsten text-textLight text-4xl lg:text-6xl uppercase">
            Noteworthy Achievements
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, i) => (
            <div key={i} className="w-full bg-white p-5 group hover:scale-[0.98] transition duration-500 rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-110" />
              </div>
              <h4 className="font-bold text-textLight text-xl lg:text-2xl mb-4 group-hover:text-redval transition duration-300 uppercase leading-tight">
                {item.title}
              </h4>
              <p className="text-base font-extralight text-paraVal mb-4">
                {item.description}
              </p>
              <p className="text-sm font-bold text-redval mt-auto font-mono uppercase tracking-widest">
                {item.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Achievement;
