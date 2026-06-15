"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/motion";
import { instagramPosts } from "@/lib/mock-data";

export function InstagramSection() {
  return (
    <section id="instagram" className="py-20 sm:py-24">
      <div className="container-page space-y-10">
        <SectionHeading
          eyebrow="Instagram gallery"
          title="A tactile social feed that mirrors the brand's soft, editorial identity."
          description="Use lifestyle and product moments to extend the mood beyond the page and build recognizable visual language."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {instagramPosts.map((image, index) => (
            <motion.div key={image} variants={fadeUp}>
              <Card className="overflow-hidden p-0">
                <div className="relative aspect-square bg-beige-50">
                  <Image
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/35 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <Instagram className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">@drmbeauty</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
