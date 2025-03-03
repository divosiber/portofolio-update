"use client";
import Image from "next/image";
import FotoDivo from "../public/FotoDivo.jpeg";
import ThemeToggle from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import webcorona from "../public/webcorona.jpeg";
import crowddetec from "../public/crowddetec.jpeg";
import cardetect from "../public/cardetec.jpeg";
import galura from "../public/galura.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className=" mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="overflow-hidden w-20 h-20 rounded-full">
            <Image
              src={FotoDivo}
              alt="Profil"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            ></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-2">
          <section>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Divo Kalama
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manado, Sulawesi Utara, Indonesia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className=" mt-9 space-y-2"
            >
              <h2 className="text-gray-600 dark:text-gray-400 font-semibold">Hallo,</h2>
              <h2 className="text-gray-600 dark:text-gray-400 font-semibold">Saya DIvo Kalama,</h2>
              <h2 className="text-gray-600 dark:text-gray-400 mb-6 font-semibold">
                Full Stack Developer & AI Engineer Student
              </h2>
              <p></p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <Link href="https://drive.google.com/file/d/1CBSAXB3Uu6nUzP3auyv5eCDyNI_pn4Li/view?usp=drivesdk">
              <Button className="rounded-full bg-gradient-to-r from-indigo-900 to-rose-600 text-white transition-transform hover:scale-105 cursor-pointer">
                Resume
              </Button>
              </Link>

              <Link
                href="https://github.com/divosiber"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/divokalama/"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.instagram.com/diifcordobagoma?igsh=MWZ5bHp5aDZ4cTA2YQ=="
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <h2 className="mt-10 mb-11 font-semibold text-3xl bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Magang & Studi Independen
            </h2>

            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-blue-600 dark:text-blue-400">
                      PT.Winnicode Garuda Indonesia
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Januari, 2025 - Sekarang
                    </p>
                    <p className="font-medium">Full Stack Developer</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Membuat Portal Berita Dari awal dengan menggunakan Next.js ,
                  Tailwindcss.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Menghubungkan API berita external yang terpercaya untuk
                  menampilkan berita.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-blue-600 dark:text-blue-400">
                      Startup Campus
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Februari, 2024 - Juni 2024
                    </p>
                    <p className="font-medium">
                      MSIB Studi Independen Batch 7{" "}
                    </p>
                    <p className="font-medium">Artificial Intelligence </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Membantu tim dalam menyelesaikan berbagai tugas.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Mengembangkan Model Sekuensial untuk Klasifikasi Glaukoma.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Top 6 Bidang Kecerdasan Buatan dengan Kinerja Terbaik MSIB
                  di Startup Campus Angkatan 7.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Top 30 dengan Kinerja Terbaik di Startup Campus Angkatan 7.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-blue-600 dark:text-blue-400">
                      Startup Campus
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      September, 2024 - Desember 2024
                    </p>
                    <p className="font-medium">
                      MSIB Studi Independen Batch 6{" "}
                    </p>
                    <p className="font-medium">Data Science</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Memimpin Team dalam membuat proyek akhir.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Sebagai pemimpin tim, saya bertanggung jawab untuk membantu
                  tim dalam koordinasi dan pemecahan masalah.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Membantu tim dalam menyelesaikan berbagai tugas.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  - Mendukung tim dalam mengembangkan model pembelajaran mesin.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <h2 className="mt-10 font-semibold text-3xl bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Personal Project
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              <Card className="w-64 mx-auto h-80 bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-900 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-3">
                  <Image
                    src={webcorona}
                    alt="webcorona"
                    className="rounded-lg mb-3 h-32 w-full object-cover"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">
                        Web Edukasi Corona
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        HTML, CSS, Javascript
                      </p>
                      <Link href="https://website-edukasi-corona.vercel.app/">
                        <Button variant="ghost" size="icon" className="mt-9 bg-gray-500 w-14">
                          Demo
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-64 mx-auto h-80 bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-900 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-3">
                  <Image
                    src={crowddetec}
                    alt="webcorona"
                    className="rounded-lg mb-3 h-32 w-full object-cover"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">Crowd Detection</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Python, YOLOv5, Computer Vision
                      </p>
                      <Link href="https://github.com/divosiber/SCAI7-Project-3-Computer-Vision-dan-Natural-Language-Processing/blob/master/Real_time_Object_Detection_using_CNN_based_Pre_trained_Models.ipynb">
                        <Button variant="ghost" size="icon" className="mt-9 bg-gray-500 w-25">
                          Source Code
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-64 mx-auto h-80 bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-900 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-3">
                  <Image
                    src={cardetect}
                    alt="webcorona"
                    className="rounded-lg mb-3 h-32 w-full object-cover"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">Car Detection</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Computer Vision, YOLOv5, Python
                      </p>
                      <Link href="https://github.com/divosiber/SCAI7-Project-3-Computer-Vision-dan-Natural-Language-Processing/blob/master/Real_time_Object_Detection_using_CNN_based_Pre_trained_Models.ipynb">
                        <Button variant="ghost" size="icon" className="mt-9 bg-gray-500 w-25">
                          Source Code
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-64 mx-auto h-80 bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-900 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-3">
                  <Image
                    src={galura}
                    alt="webcorona"
                    className="rounded-lg mb-3 h-32 w-full object-cover"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">
                        Gloucoma Detection & Prediction
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Model Sequential, Python, Computer Vision, Deep Learning
                      </p>
                      <Link href="https://github.com/ZakiyQirosM/GLAURA-model">
                        <Button variant="ghost" size="icon" className="mt-9 bg-gray-500 w-27">
                          Selengkapnya
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-300 text-center mt-20">
              @CopyRight 2024 Divo Kalama
            </p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
