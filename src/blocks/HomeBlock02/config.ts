import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const HomeBlock02: Block = {
  slug: 'homeBlock02',
  interfaceName: 'HomeBlock02Block',
  fields: [backgroundField],
  labels: {
    plural: 'Home Block 02',
    singular: 'Home Block 02',
  },
}
