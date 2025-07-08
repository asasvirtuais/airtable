# @asasvirtuais/airtable

TypeScript-first Airtable SDK with rate limiting and CRUD interface implementation.

## Installation

```bash
npm install @asasvirtuais/airtable
```

## Features

- 🎯 **Type-safe**: Full TypeScript support with generics
- ⚡ **Rate Limiting**: Built-in rate limiter (5 requests/second)
- 🔍 **Advanced Queries**: MongoDB-style query syntax
- 🏗️ **CRUD Interface**: Implements `@asasvirtuais/crud` interface
- 📊 **Schema Support**: Fetch and manage table schemas
- 🔄 **Batch Operations**: Efficient bulk operations

## Quick Start

```typescript
import airtable from '@asasvirtuais/airtable'

// Initialize client
const client = airtable({
  token: process.env.AIRTABLE_TOKEN!
})

// Work with a specific base
const base = client.base('appXXXXXXXXXXXXXX')

// Get CRUD interface
const crud = base.crud()

// Use CRUD operations
const user = await crud.create({
  table: 'Users',
  data: { name: 'John Doe', email: 'john@example.com' }
})
```

## CRUD Operations

### Create

```typescript
const newRecord = await crud.create({
  table: 'Users',
  data: {
    name: 'Jane Smith',
    email: 'jane@example.com',
    active: true
  }
})
```

### Find

```typescript
const record = await crud.find({
  table: 'Users',
  id: 'recXXXXXXXXXXXXXX'
})
```

### Update

```typescript
const updated = await crud.update({
  table: 'Users',
  id: 'recXXXXXXXXXXXXXX',
  data: { active: false }
})
```

### Remove

```typescript
const deleted = await crud.remove({
  table: 'Users',
  id: 'recXXXXXXXXXXXXXX'
})
```

### List with Queries

```typescript
// Basic filtering
const activeUsers = await crud.list({
  table: 'Users',
  query: { active: true }
})

// Advanced queries
const results = await crud.list({
  table: 'Users',
  query: {
    age: { $gte: 18, $lt: 65 },
    status: { $in: ['active', 'pending'] },
    $or: [
      { role: 'admin' },
      { permissions: { $in: ['write'] } }
    ],
    $sort: { createdAt: -1 },
    $limit: 50,
    $skip: 100
  }
})
```

## Query Operators

### Comparison Operators

- `$eq` - Equal (default when using direct value)
- `$ne` - Not equal
- `$gt` - Greater than
- `$gte` - Greater than or equal
- `$lt` - Less than
- `$lte` - Less than or equal

### Array Operators

- `$in` - Value is in array
- `$nin` - Value is not in array

### Logical Operators

- `$or` - Match any condition
- `$and` - Match all conditions

### Query Modifiers

- `$limit` - Limit number of results
- `$skip` - Skip records (pagination)
- `$sort` - Sort results
- `$select` - Select specific fields

## Direct API Access

For more control, use the direct API methods:

```typescript
const base = client.base('appXXXXXXXXXXXXXX')

// Get all tables
const tables = await base.tables()

// Work with a specific table
const table = base.table('Users')

// List records with Airtable-specific options
const { records, offset } = await table.list({
  filterByFormula: "AND({active}, {age} > 18)",
  maxRecords: 100,
  pageSize: 50,
  sort: [{ field: 'createdAt', direction: 'desc' }],
  view: 'Grid view'
})

// Get a single record
const record = await table.get('recXXXXXXXXXXXXXX')

// Create record
const created = await table.create({
  fields: { name: 'New User', email: 'new@example.com' }
})

// Update record
const updated = await table.update('recXXXXXXXXXXXXXX', {
  fields: { name: 'Updated Name' }
})

// Delete record
await table.delete('recXXXXXXXXXXXXXX')
```

## Schema Management

```typescript
// Get table schema
const schema = await base.table('Users').schema()

console.log(schema.fields)
// [
//   { id: 'fldXXXX', name: 'Name', type: 'singleLineText' },
//   { id: 'fldYYYY', name: 'Email', type: 'email' },
//   { id: 'fldZZZZ', name: 'Active', type: 'checkbox' }
// ]
```

## Rate Limiting

The SDK includes automatic rate limiting (5 requests per second):

```typescript
// These requests will be automatically throttled
await Promise.all([
  crud.list({ table: 'Users' }),
  crud.list({ table: 'Orders' }),
  crud.list({ table: 'Products' }),
  // ... more requests
])
```

## Type Safety

Define your types for full type safety:

```typescript
interface User {
  id: string
  name: string
  email: string
  active: boolean
  createdAt: string
}

// Type-safe CRUD operations
const crud = base.crud<User, Omit<User, 'id' | 'createdAt'>>()

// TypeScript knows the shape of data
const users = await crud.list({
  table: 'Users',
  query: { active: true } // TypeScript validates this
})
```

## Integration with React

Works seamlessly with `@asasvirtuais/react`:

```typescript
import { database } from '@asasvirtuais/crud/react'
import airtable from '@asasvirtuais/airtable'

const crud = airtable({ token }).base(baseId).crud()
const db = database(schema, crud)

function UserList() {
  const { array: users } = db.useTable('users')
  // ... render users
}
```

## Error Handling

```typescript
try {
  const record = await crud.find({
    table: 'Users',
    id: 'invalid-id'
  })
} catch (error) {
  if (error.message.includes('NOT_FOUND')) {
    console.log('Record not found')
  }
}
```

## Environment Setup

```bash
# .env
AIRTABLE_TOKEN=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

## License

MIT