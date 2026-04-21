import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const HomeBlock03: Block = {
  slug: 'homeBlock03',
  interfaceName: 'HomeBlock03Block',
  fields: [backgroundField],
  labels: {
    plural: 'Home Block 03',
    singular: 'Home Block 03',
  },
}
