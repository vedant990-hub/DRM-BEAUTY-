"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-20 sm:py-24">
      <div className="container-page">
        <Card className="overflow-hidden border-rosegold-200/60 bg-gradient-to-br from-white via-white to-rosegold-100/45 p-6 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <SectionHeading
              eyebrow="Newsletter"
              title="Stay close to launches, offers, and curated beauty drops."
              description="A simple newsletter block gives the page a final conversion touchpoint without feeling pushy or overdesigned."
            />

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              className="space-y-4"
            >
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <Input type="email" placeholder="Enter your email address" aria-label="Email address" />
                <Button size="lg" className="min-w-40">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs leading-6 text-charcoal-700/60">
                By subscribing you agree to receive product updates and editorial emails from DRM Beauty.
              </p>
            </motion.form>
          </div>
        </Card>
      </div>
    </section>
  );
}
