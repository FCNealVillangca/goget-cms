import React from 'react'
import type { StepperBlock as StepperBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'

/** Ring + inner dot, like the reference (connector line is laid out beside this). */
function StepDot() {
  return (
    <div
      className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-foreground/80 bg-background shadow-sm"
      aria-hidden
    >
      <span className="size-4 rounded-full bg-foreground" />
    </div>
  )
}

/** Single track: vertical bar below `md`, horizontal segment from `md` up (parent is `flex-col` / `md:flex-row`). */
function StepConnector() {
  return (
    <div
      className={cn(
        'min-w-0 flex-1 shrink-0 bg-border md:shrink md:bg-transparent md:border-b md:border-border',
        'w-px min-h-10 md:h-0 md:min-h-0 md:w-auto',
      )}
      aria-hidden
    />
  )
}

export const StepperBlock: React.FC<StepperBlockProps> = ({ id, steps, background }) => {
  const list = steps ?? []
  const isImage = background?.type === 'image' && background.image
  const presetClass = getBackgroundClass(background)
  const customCSS = getCustomBackgroundCSS(background, id)
  const sectionId = background?.type === 'custom' && id ? `block-bg-${id}` : undefined

  if (list.length === 0) {
    return null
  }

  return (
    <>
      {customCSS && <style dangerouslySetInnerHTML={{ __html: customCSS }} />}
      <section id={sectionId} className={`relative w-full ${presetClass || 'bg-transparent'}`}>
        {isImage && typeof background?.image === 'object' && background.image && (
          <Media
            resource={background.image}
            fill
            imgClassName="absolute inset-0 object-cover w-full h-full -z-10"
          />
        )}
        <div className="container relative z-10 py-16">
          {/* One row of steps on md+: each column stacks (dot + connector) above step content */}
          <div className="md:flex md:flex-row md:items-stretch">
            {list.map((step, index) => (
              <div
                key={step.id ?? index}
                className="flex flex-1 flex-row items-stretch md:flex-col gap-4"
              >
                <div className="flex min-h-0 flex-1 flex-col items-center md:flex-row md:items-center ">
                  <StepDot />
                  {index < list.length - 1 ? <StepConnector /> : null}
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  {step.description ? (
                    <p className="text-muted-foreground">{step.description}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
