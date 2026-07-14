'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function Statement() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!textRef.current) return
    const text = new SplitType(textRef.current, { types: 'words' })

    gsap.from(text.words, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'center center',
        scrub: true,
      },
      opacity: 0.1,
      y: 20,
      stagger: 0.1,
      ease: 'none'
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-40 px-6 md:px-20 min-h-screen flex items-center bg-background">
      <h2 ref={textRef} className="font-heading text-5xl md:text-8xl font-bold leading-tight max-w-5xl">
        I build websites people remember.
      </h2>
    </section>
  )
}