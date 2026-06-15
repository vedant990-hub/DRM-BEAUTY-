"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div variants={fadeUp} className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-charcoal-700/60">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl leading-none text-charcoal-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-charcoal-800/75 sm:text-base">{description}</p>
    </motion.div>
  );
}
