'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { ReactNode } from 'react'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      {/* Casting to any bypasses the nested React 18 vs 19 type library conflict */}
      {children as any}
    </ReactLenis>
  )
}