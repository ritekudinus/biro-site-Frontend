import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, Target } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="relative py-20 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            {/* Badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Award className="size-4" />
                Terakreditasi Baik Sekali BAN-PT
              </div>
            </div>

            {/* Main content */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-balance text-4xl font-bold font-heading md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                Biro Teknik Informatika
              </h1>

              <h2 className="mt-4 text-balance text-xl font-medium font-heading md:text-3xl lg:text-4xl text-muted-foreground">
                Universitas Dian Nuswantoro Kota Kediri
              </h2>

              <p className="mt-8 max-w-3xl text-pretty text-lg md:text-xl leading-relaxed mx-auto text-muted-foreground">
                Menjembatani manusia dan teknologi dengan solusi TI inovatif,
                memberikan layanan efisien yang berkembang sesuai kebutuhan masa
                depan.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 px-8 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/tentang-kami">
                    Telusuri Lebih Lanjut
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 px-8 py-4 text-base rounded-xl border-2 hover:bg-primary/5"
                >
                  <Link href="/program-studi">
                    <Play className="size-5" />
                    Lihat Program Studi
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Mahasiswa Aktif
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Dosen Berpengalaman
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Tingkat Kelulusan
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-16 lg:mt-24 overflow-hidden px-4">
            <div className="relative mx-auto max-w-6xl">
              {/* Decorative elements */}
              <div className="relative p-1 rounded-2xl">
                <Image
                  src="/hero-image.webp"
                  alt="Biro Teknik Informatika - Fasilitas Modern"
                  width={1920}
                  height={1080}
                  priority
                  className="aspect-video relative rounded-xl w-full shadow-2xl ring-1 ring-border/10"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 85%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 85%, transparent 100%)",
                  }}
                />
              </div>

              {/* Floating cards */}
              <div className="absolute top-8 -left-2 sm:left-4 bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border max-w-48 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Komunitas Aktif</div>
                    <div className="text-xs text-muted-foreground">
                      Student Community
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-2 sm:right-4 bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border max-w-48 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Target className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      Kurikulum Terkini
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Industry Standard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
