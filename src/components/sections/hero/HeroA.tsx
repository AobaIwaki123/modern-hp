'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { VariantConfig } from '@/lib/variants/config'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const ParticleNetwork = dynamic(
  () => import('@/components/canvas/ParticleNetwork'),
  { ssr: false }
)

type Props = { config: VariantConfig }

export function HeroA({ config }: Props) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: isDesktop ? '#0f172a' : config.mobileGradient }}
    >
      {isDesktop && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-500 animate-pulse" />}>
            <ParticleNetwork />
          </Suspense>
        </div>
      )}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p
          className="text-sm tracking-widest uppercase mb-6"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          AI × 人材マッチング
        </p>
        <h1
          className="heading-ja font-extrabold mb-6 mx-auto"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#ffffff',
            lineHeight: 'var(--leading-hero)',
            letterSpacing: 'var(--tracking-hero)',
            maxWidth: 'var(--measure-hero)',
          }}
        >
          {config.heroHeadline}
        </h1>
        <p
          className="body-ja text-lg mb-10 mx-auto"
          style={{
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 'var(--leading-body)',
            letterSpacing: 'var(--tracking-body)',
            maxWidth: 'var(--measure-prose)',
          }}
        >
          {config.heroSubcopy}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg font-semibold text-base transition-opacity hover:opacity-90 shadow-lg"
            style={{ background: 'var(--color-brand)', color: '#ffffff' }}
          >
            {config.primaryCta}
          </Link>
        </div>
      </div>
    </section>
  )
}
