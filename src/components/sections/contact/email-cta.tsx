import { Mail } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site.config";

export function EmailCTA() {
  return (
    <Section className="bg-muted/30">
      <Card className="mx-auto max-w-2xl">
        <CardContent className="p-8 text-center md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold md:text-3xl">
            Let's Work Together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind? I'd love to hear about it. Send me an email
            and let's discuss how I can help bring your ideas to life.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href={`mailto:${siteConfig.author.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Send an Email
              </a>
            </Button>
          </div>
          <p className="mt-6 font-mono text-sm text-muted-foreground">
            {siteConfig.author.email}
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
