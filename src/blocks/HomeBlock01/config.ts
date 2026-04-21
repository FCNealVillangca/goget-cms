import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const HomeBlock01: Block = {
  slug: 'homeBlock01',
  interfaceName: 'HomeBlock01Block',
  fields: [backgroundField],
  labels: {
    plural: 'Home Block 01',
    singular: 'Home Block 01',
  },
}
