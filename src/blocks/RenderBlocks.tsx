import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { AccordionBlock } from '@/blocks/Accordion/Component'
import { GalleryBlock } from '@/blocks/Gallery/Component'
import { StepperBlock } from '@/blocks/Stepper/Component'
import { GridLayoutBlock } from '@/blocks/GridLayout/Component'
import { HomeBlock01Block } from '@/blocks/HomeBlock01/Component'
import { HomeBlock02Block } from '@/blocks/HomeBlock02/Component'
import { HomeBlock03Block } from '@/blocks/HomeBlock03/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  accordion: AccordionBlock,
  gallery: GalleryBlock,
  stepper: StepperBlock,
  gridLayout: GridLayoutBlock,
  homeBlock01: HomeBlock01Block,
  homeBlock02: HomeBlock02Block,
  homeBlock03: HomeBlock03Block,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
