'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const firstName = "ABIGAIL"
  const lastName = "GAD"

  useGSAP(() => {
    const chars = container.current?.querySelectorAll('.char-animate')
    if (!chars || chars.length === 0) return

    gsap.set(chars, { display: 'inline-block', transformOrigin: '50% 50%' })

    // Entrance
    gsap.fromTo(chars,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.04, ease: 'power4.out', delay: 0.2 }
    )

    // Pin only for a short scroll burst — 40% of viewport height
    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: '+=40%',
      pin: true,
      pinSpacing: true,
    })

    // Dispersal over same short distance — chars explode away fast
    gsap.to(chars, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=40%',
        scrub: 0.4,   // snappy, not laggy
      },
      y: (i) => -80 - ((i * 23) % 160),
      x: (i) => (i % 2 === 0 ? 1 : -1) * (40 + (i * 19) % 100),
      opacity: 0,
      rotationZ: (i) => (i % 2 === 0 ? 1 : -1) * (10 + (i * 11) % 35),
      ease: 'power2.in',  // accelerates into dispersal, feels dynamic
    })

    gsap.fromTo('.scroll-arrow',
      { y: 0, opacity: 0.3 },
      { y: 10, opacity: 1, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut' }
    )
  }, { scope: container })

  return (
    <div style={{ overflowX: 'clip' }}>
      <section
        ref={container}
        className="relative h-screen flex flex-col items-center justify-center bg-background px-4"
      >
        <div className="text-center z-10 w-full max-w-7xl mx-auto select-none">
          <h1
            ref={titleRef}
            className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter uppercase mb-6 leading-none flex justify-center gap-[0.3em] overflow-visible py-4"
          >
            <span className="inline-block whitespace-nowrap">
              {firstName.split("").map((char, index) => (
                <span key={`first-${index}`} className="char-animate inline-block opacity-0 px-[0.02em]">
                  {char}
                </span>
              ))}
            </span>
            <span className="inline-block whitespace-nowrap">
              {lastName.split("").map((char, index) => (
                <span key={`last-${index}`} className="char-animate inline-block opacity-0 px-[0.02em]">
                  {char}
                </span>
              ))}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-foreground/80 mb-4 font-light tracking-wide">
            Web Designer & Developer
          </p>
          <p className="text-xs md:text-sm text-foreground/50 tracking-widest uppercase font-medium">
            I create websites that help businesses grow.
          </p>
        </div>

        <div className="absolute bottom-12 scroll-arrow pointer-events-none">
          <ArrowDown size={20} className="text-foreground/40" />
        </div>
      </section>
    </div>
  )
}