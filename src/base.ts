import api from './api'

const apiKey = process.env.AIRTABLE_TOKEN as string

const airtable = api(apiKey)

export const base = airtable.base('app6ubrlP9ZC2JqEq')

export default airtable
