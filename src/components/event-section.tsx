import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import data from "@/app/data.json";

type Event = (typeof data.events)[number];

export default function EventSection() {
  const events: Event[] = data.events;

  return (
    <section>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Event Terbaru
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Informasi kegiatan dan acara terbaru. Temukan agenda menarik yang
              dapat menambah wawasan dan mempererat kebersamaan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
                duration={event.duration}
                link={`/event/${event.id}`}
              >
                <Image
                  src={event.thumbnail}
                  alt={`Event ${event.title}`}
                  width={600}
                  height={240}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </EventCard>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="gap-2 px-8">
              <Link href="/event">
                Lihat Semua Event
                <ChevronRight className="!size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const EventCard = ({
  title,
  description,
  date,
  location,
  duration,
  children,
  link,
}: {
  title: string;
  description: string;
  date: string;
  location: string;
  duration: string;
  children: ReactNode;
  link: string;
}) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      <div className="relative overflow-hidden">
        {children}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Date badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <div className="text-xs font-medium text-gray-600">
            {new Date(date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
            })}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-2 mt-4 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="size-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="mt-6">
          <Button asChild className="w-full gap-2 rounded-lg font-medium">
            <Link href={link}>
              Daftar Sekarang
              <ChevronRight className="!size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
