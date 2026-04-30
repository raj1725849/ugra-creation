"use client"

import * as React from "react"
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/blocks/animated-cards-stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, useInView } from "framer-motion"
import { fadeUp } from "@/lib/animations"

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Sarah L.",
    profession: "Homeowner, The Arora Penthouse",
    rating: 5,
    description:
      "The attention to detail and material curation was exceptional. Ugra Creation didn't just design a house; they crafted our home.",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    id: "testimonial-2",
    name: "David K.",
    profession: "Founder, Studio Grey",
    rating: 5,
    description:
      "Their innovative solutions for our commercial space were brilliant. The environment perfectly reflects our brand identity.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: "testimonial-3",
    name: "Priya M.",
    profession: "Homeowner, Heritage Villa",
    rating: 4.5,
    description:
      "From the initial space planning to the final turnkey handover, the entire process was seamless and deeply collaborative.",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    id: "testimonial-4",
    name: "Arjun S.",
    profession: "Restaurateur, Indigo Bistro",
    rating: 5,
    description:
      "The custom furniture and lighting design transformed our restaurant's ambiance. An incredibly talented and professional team.",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
]

export default function Testimonials() {
  const containerRef = React.useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section ref={containerRef} className="bg-charcoal px-8 md:px-[80px] py-[120px] relative">
      <div className="max-w-[1240px] mx-auto relative z-10">
        <header className="mb-[60px] text-center">
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-sans text-[11px] tracking-[4px] text-gold uppercase"
          >
            CLIENT STORIES
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="font-display text-[48px] md:text-[64px] font-light text-warm-white mt-6"
          >
            Words of Appreciation
          </motion.h2>
        </header>
      </div>

      <ContainerScroll className="container h-[300vh] relative z-20">
        <div className="sticky left-0 top-0 h-svh w-full py-12 flex items-center justify-center">
          <CardsContainer className="size-full max-w-[400px] h-[450px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                variant="light"
                index={index + 2}
                role="article"
                aria-labelledby={`card-${testimonial.id}-title`}
                aria-describedby={`card-${testimonial.id}-content`}
              >
                <div className="flex flex-col items-center space-y-6 text-center h-full justify-between">
                  <div>
                    <ReviewStars
                      className="text-gold mb-6 justify-center"
                      rating={testimonial.rating}
                    />
                    <div className="mx-auto w-[90%] text-[16px] md:text-[18px] font-sans font-light text-charcoal leading-relaxed italic">
                      <blockquote cite="#">"{testimonial.description}"</blockquote>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gold-light/20 w-full justify-center">
                    <Avatar className="!size-12 border border-gold/30">
                      <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={`Portrait of ${testimonial.name}`}
                      />
                      <AvatarFallback className="font-display text-gold bg-dark/5">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <span className="block font-display text-[18px] text-charcoal">
                        {testimonial.name}
                      </span>
                      <span className="block font-sans text-[11px] tracking-[1px] text-mid uppercase mt-1">
                        {testimonial.profession}
                      </span>
                    </div>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}
