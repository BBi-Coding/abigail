'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  
  const firstName = "Abigail"
  const lastName = "Biegalska"

  useGSAP(() => {
    const chars = Array.from(
      container.current?.querySelectorAll('.char-animate') ?? []
    )
    if (chars.length === 0) return

    gsap.set(chars, { display: 'inline-block', transformOrigin: '50% 50%' })

    // Entrance animation
    gsap.fromTo(chars,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.04, ease: 'power4.out', delay: 0.2 }
    )

    let mm = gsap.matchMedia()

    // Desktop/Tablet Animation Configuration (768px and up)
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: '+=80%', // Sweet spot: unpins quickly but allows an elegant animation sequence
        pin: true,
        pinSpacing: true, 
        invalidateOnRefresh: true,
      })

      const totalChars = chars.length
      // Controlled pace: letters use 75% of the viewport height to complete their scatter
      const getUsableRange = () => window.innerHeight * 0.75 

      chars.forEach((char, i) => {
        gsap.to(char, {
          immediateRender: false,
          scrollTrigger: {
            trigger: container.current,
            start: () => `top+=${(i * (getUsableRange() / totalChars))} top`,
            end: () => `top+=${((i + 1) * (getUsableRange() / totalChars))} top`,
            scrub: 0.4, // Increased scrub: adds a silky, dampened lag to soften mouse scrolling
            invalidateOnRefresh: true,
          },
          y: -80 - ((i * 23) % 120),
          x: (i % 2 === 0 ? 1 : -1) * (30 + (i * 17) % 80),
          opacity: 0,
          rotationZ: (i % 2 === 0 ? 1 : -1) * (10 + (i * 9) % 30),
          ease: 'power1.out', // Smoother deceleration curve
        })
      })
    })

    // Mobile Animation Configuration (Under 768px)
    mm.add("(max-width: 767px)", () => {
      gsap.to(chars, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        },
        y: -40,
        opacity: 0,
        stagger: 0.02,
        ease: 'power1.inOut'
      })
    })

    // Scroll arrow bounce
    gsap.fromTo('.scroll-arrow',
      { y: 0, opacity: 0.3 },
      { y: 10, opacity: 1, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut' }
    )

    return () => mm.revert()
  }, { scope: container })

  return (
    <div style={{ overflowX: 'clip' }}>
      <section
        ref={container}
        className="relative h-screen flex flex-col items-center justify-center bg-background px-4 md:px-8"
      >
        <div className="text-center z-10 w-full max-w-7xl mx-auto select-none">
          <h1 className="font-script text-[14vw] sm:text-[10vw] md:text-[7vw] font-normal tracking-normal mb-4 leading-[0.85] md:leading-none flex flex-col md:flex-row items-center justify-center md:gap-[0.3em] overflow-visible py-12">
            <span className="inline-block whitespace-nowrap">
              {firstName.split("").map((char, index) => (
                <span key={`first-${index}`} className="char-animate inline-block opacity-0 px-[0.01em]">
                  {char}
                </span>
              ))}
            </span>
            <span className="inline-block whitespace-nowrap">
              {lastName.split("").map((char, index) => (
                <span key={`last-${index}`} className="char-animate inline-block opacity-0 px-[0.01em]">
                  {char}
                </span>
              ))}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-foreground/80 mb-4 font-light tracking-wide px-4">
            Web Designer & Developer
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm text-foreground/50 tracking-widest uppercase font-medium px-4">
            I create websites that help businesses grow.
          </p>
        </div>

        <div className="absolute bottom-8 sm:bottom-12 scroll-arrow pointer-events-none">
          <ArrowDown size={20} className="text-foreground/40" />
        </div>
      </section>
    </div>
  )
}