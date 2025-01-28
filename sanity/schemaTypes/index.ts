import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import signup from './signup'
import order from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,signup,order],
}
