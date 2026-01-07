import Link from "next/link";
import { Home } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/not-found/back-button";
import { TryAgainButton } from "@/components/not-found/try-again-button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="text-9xl font-bold text-primary/20">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">🚀</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-xl text-muted-foreground">
            Oops! The page you're looking for seems to have vanished into the
            digital void.
          </p>
          <p className="text-muted-foreground">
            Don't worry though, even the best developers encounter 404 errors.
            Let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <BackButton />

          <TryAgainButton />
        </div>

        {/* Helpful Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Maybe you were looking for:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/resume">Resume</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href={siteConfig.social.github || "#"}>GitHub</Link>
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-muted-foreground">
          <p>
            Still can't find what you're looking for?
            <Button variant="link" asChild className="p-0 h-auto ml-1">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
