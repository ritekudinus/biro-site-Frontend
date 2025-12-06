"use client";
import { LoginForm } from "@/components/pages/login";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedGridPattern } from "@/components/animated-grid-pattern";
export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.25}
        duration={2.5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150svh] skew-y-12",

          "md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "md:h-[200svh]",

          "fixed pointer-events-none -z-10"
        )}
      />
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className=" text-primary-foreground flex  items-center justify-center rounded-md">
              <Image
                src="/logo/logo-f11.png"
                width={50}
                height={50}
                alt="logo"
              />
            </div>
            Biro Teknik Informatika
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">

      </div>
    </div>
  );
}
