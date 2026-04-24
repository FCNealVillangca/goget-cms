import React from 'react'
import type { ResultsBlock as ResultsBlockProps, Testimonial } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { TestimonialList } from './TestimonialList'

const defaultTestimonials = [
  {
    quote:
      'The structured approach transformed my confidence in speaking exams. I went from freezing up to delivering clear, confident answers.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    name: 'Sarah Chen',
    role: 'A-Level Student',
  },
  {
    quote:
      'French used to be my weakest subject, but with this method, I achieved a Grade 8. The techniques work for real exam conditions.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    name: 'Marcus Thompson',
    role: 'GCSE Student',
  },
  {
    quote:
      'The speaking practice sessions were game-changing. I finally understood how to structure my answers for maximum marks.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    name: 'Emma Rodriguez',
    role: 'AQA Student',
  },
]

export const ResultsBlock: React.FC<
  ResultsBlockProps & {
    id?: string
  }
> = async ({ id, background, limit = 6 }) => {
  const payload = await getPayload({ config: configPromise })

  const fetchedTestimonials = await payload.find({
    collection: 'testimonials',
    depth: 1,
    limit: limit || 6,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const testimonials =
    fetchedTestimonials.docs.length > 0 ? fetchedTestimonials.docs : defaultTestimonials

  const isImage = background?.type === 'image' && background.image
  const presetClass = getBackgroundClass(background)
  const customCSS = getCustomBackgroundCSS(background, id)
  const sectionId = background?.type === 'custom' && id ? `block-bg-${id}` : undefined

  return (
    <section
      id={sectionId}
      className={cn('relative w-full', presetClass || 'bg-white text-slate-900')}
    >
      {isImage && typeof background?.image === 'object' && background.image && (
        <div className="absolute inset-0">
          <Media resource={background.image} fill imgClassName="object-cover w-full h-full" />
        </div>
      )}

      <div className="container relative z-10 py-20 px-6">
        <TestimonialList testimonials={testimonials} />
      </div>
    </section>
  )
}
