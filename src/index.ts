import sdk from './sdk'

const apiKey = process.env.AIRTABLE_TOKEN as string

const airtable = sdk(apiKey)

export default airtable
export type * from './sdk'
export type { 
  Query, 
  FindProps, 
  CreateProps, 
  UpdateProps, 
  RemoveProps, 
  ListProps,
  CRUD,
  Filters,
  Operators
} from '@asasvirtuais/crud'