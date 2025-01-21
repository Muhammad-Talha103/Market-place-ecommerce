import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import signup from './signup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,signup],
}
