"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type CategoryCardProps = {
  name: string;
  accent: string;
  image: string;
};

export function CategoryCard({ name, accent, image }: CategoryCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Card className="overflow-hidden p-0">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-beige-50 via-white to-rosegold-100/40">
          <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 20vw" />
        </div>
        <div className="space-y-3 p-5 sm:p-6">
          <div>
            <h3 className="font-serif text-2xl text-charcoal-900">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-charcoal-800/70">{accent}</p>
          </div>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-900">
            Explore category
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
