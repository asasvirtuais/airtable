# @asasvirtuais/airtable

TypeScript-first Airtable SDK with rate limiting. This package can be used as a standalone SDK or as a backend for the `@asasvirtuais/crud` architecture.

## Installation

```bash
npm install @asasvirtuais/airtable
```

## Features

-   🎯 **Type-safe**: Full TypeScript support with generics for records and fields.
-   ⚡ **Rate Limiting**: Built-in rate limiter (5 requests/second) to prevent API abuse.
-   📊 **Schema Support**: Fetch and manage table schemas programmatically.
-   🤝 **CRUD Interface**: Provides a `crud()` method that implements the `@asasvirtuais/crud` interface.

## Standalone SDK Usage

You can use this package as a standalone, type-safe Airtable client.

### Quick Start

```typescript
import airtable from '@asasvirtuais/airtable'

// Initialize the SDK with your token
const client = airtable(process.env.AIRTABLE_TOKEN!)

// Select your base
const base = client.base('appXXXXXXXXXXXXXX')

// Select your table and define its types
const users = base.table<User.Readable, User.Writable>('Users')

// List records
const userRecords = await users.records.list()

// Create a new record
const newUser = await users.records.create({
  name: 'Jane Doe',
  email: 'jane@example.com'
})
```

## Integration with `@asasvirtuais/crud`

This package is designed to be a backend for the `@asasvirtuais/crud` ecosystem. The `@asasvirtuais/crud/airtable` submodule uses this SDK.

### 1. Initialize the CRUD Adapter

Use the `airtableCRUD` factory from `@asasvirtuais/crud/airtable`.

```typescript
// lib/crud.ts
import { airtableCRUD } from '@asasvirtuais/crud/airtable'

export const crud = airtableCRUD({
  token: process.env.AIRTABLE_TOKEN!,
  baseId: process.env.AIRTABLE_BASE_ID!
})
```

### 2. Use with React

You can then pass this `crud` instance to the `database` factory from `@asasvirtuais/crud/react`.

```typescript
// app/data/react.tsx
import { database } from '@asasvirtuais/crud/react'
import { crud } from '@/lib/crud' // Your initialized adapter
import { schema } from './schema'

export const { useTable, CreateForm, ... } = database(schema, crud)
```

This setup allows you to switch your backend from YAML to Airtable with a one-line change in your data layer, without touching your UI components.

## Direct API Access

For more granular control, you can use the direct API methods.

```typescript
// List records with Airtable-specific options
const { records, offset } = await users.records.list({
  filterByFormula: "AND({active}, {age} > 18)",
  maxRecords: 100,
  sort: [{ field: 'createdAt', direction: 'desc' }],
})

// Get a single record
const record = await users.records.find('recXXXXXXXXXXXXXX')

// Update a record
const updated = await users.records.update('recXXXXXXXXXXXXXX', {
  name: 'Updated Name'
})
```

## Schema Management

```typescript
// Get table schema
const schema = await base.table('Users').schema()

console.log(schema.fields)
// [
//   { id: 'fldXXXX', name: 'Name', type: 'singleLineText' },
//   { id: 'fldYYYY', name: 'Email', type: 'email' },
// ]
```

## License

MIT