/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react'
import type { HomeBlock03Block as HomeBlock03BlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'
import { Star, ShieldCheck, BookOpen, CalendarCheck, ArrowRight } from 'lucide-react'

export const HomeBlock03Block: React.FC<HomeBlock03BlockProps> = ({ id, background }) => {
  const isImage = background?.type === 'image' && background.image
  const presetClass = getBackgroundClass(background)
  const customCSS = getCustomBackgroundCSS(background, id)
  const sectionId = background?.type === 'custom' && id ? `block-bg-${id}` : undefined

  return (
    <section id={sectionId} className={cn('relative w-full', presetClass || 'bg-white')}>
      {isImage && typeof background?.image === 'object' && background.image && (
        <div className="absolute inset-0">
          <Media resource={background.image} fill imgClassName="object-cover w-full h-full" />
        </div>
      )}

      <div className="container relative z-10 py-32 px-6 overflow-hidden min-h-screen flex items-center text-[#1e3a8a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left Column: Comparison Cards */}
          <div className="relative h-[480px] md:h-[520px] flex items-center justify-center order-2 lg:order-1">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10" />

            {/* Before Card */}
            <div className="absolute top-0 left-0 w-full max-w-[400px] bg-slate-50 rounded-3xl p-10 border border-slate-200 shadow-sm">
              <div className="inline-block bg-[#333] text-white text-[10px] font-bold px-2.5 py-1 rounded mb-8 uppercase tracking-widest">
                BEFORE
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-slate-400 italic">
                "Parle-moi de tes projets pour l'avenir."
              </p>
              <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Examiner</span>
                <span className="opacity-30">•</span>
                <span>Oral Exam Mock</span>
              </div>
            </div>

            {/* After Card */}
            <div className="absolute bottom-0 right-0 w-full max-w-[400px] bg-white rounded-3xl p-10 shadow-[0_40px_80px_-20px_rgba(30,58,138,0.2)] border border-blue-100 z-10">
              <div className="inline-block bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded mb-8 uppercase tracking-widest">
                AFTER
              </div>
              <p className="text-xl md:text-2xl font-bold leading-relaxed mb-10 text-[#1e3a8a]">
                "À l'avenir, j'aimerais étudier le droit à l'université car..."
              </p>
              <div className="flex items-center gap-3 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                <span>Student</span>
                <span className="opacity-30">•</span>
                <span>Confident Response</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-16 order-1 lg:order-2">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold text-[#1e3a8a] leading-[1.05] tracking-tighter">
                Where Practice <br />
                Becomes <span className="text-blue-600">Exam Performance.</span>
              </h2>
              <div className="space-y-6 text-slate-500 text-xl leading-relaxed max-w-xl font-medium">
                <p>Most students understand the theory.</p>
                <p>They struggle to perform under exam pressure.</p>
                <p>We focus on turning knowledge into confident, exam-ready performance.</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="flex gap-5 group">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl text-[#1e3a8a]">Improve grades</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Targeted support for higher marks in every paper.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl text-[#1e3a8a]">Build confidence</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Remove hesitation with structured speaking practice.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl text-[#1e3a8a]">Understand grammar</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Stop guessing. Understand how French works.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <CalendarCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl text-[#1e3a8a]">Prepared for exams</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Walk into exams knowing exactly what to do.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 space-y-6">
              <button className="bg-blue-600 shadow-lg shadow-blue-200 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95 group">
                Book Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-slate-400 text-sm italic font-medium">
                We'll show you exactly how your child can improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
