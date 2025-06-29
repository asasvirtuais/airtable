# @asasvirtuais/airtable

TypeScript SDK for Airtable Web API with full type safety and rate limiting.

## Features

- 🔒 **Full Type Safety** - Complete TypeScript definitions for all Airtable field types
- ⚡ **Rate Limiting** - Built-in rate limiting (5 requests/second) to respect Airtable's limits
- 🏗️ **Clean API** - Intuitive method chaining for easy use
- 📦 **Lightweight** - Only depends on `wretch` for HTTP requests

## Installation

```bash
npm install @asasvirtuais/airtable
```

## Usage

```typescript
import airtable from '@asasvirtuais/airtable'

// Initialize with your API token
const client = airtable(process.env.AIRTABLE_TOKEN)

// Get base schema
const schema = await client.base('appXXXXXXXXXXXXXX').schema()

// Work with typed records
interface UserRecord {
  id: string
  name: string
  email: string
  active: boolean
}

const users = client.base('appXXXXXXXXXXXXXX').table<UserRecord, Omit<UserRecord, 'id'>>('Users')

// List all records
const allUsers = await users.records.list()

// Find a specific record
const user = await users.records.find('recXXXXXXXXXXXXXX')

// Create a new record
const newUser = await users.records.create({
  name: 'John Doe',
  email: 'john@example.com',
  active: true
})

// Update a record
const updatedUser = await users.records.update('recXXXXXXXXXXXXXX', {
  active: false
})

// Delete a record
await users.records.remove('recXXXXXXXXXXXXXX')
```

## API Reference

### Client

#### `airtable(token: string)`

Creates a new Airtable client instance.

### Base Methods

#### `client.base(baseId: string)`

Returns a base instance for the given base ID.

#### `base.schema()`

Returns the complete schema for the base including all tables and fields.

### Table Methods

#### `base.table<Readable, Writeable>(nameOrId: string)`

Returns a table instance with typed methods. The generic types define:
- `Readable`: The shape of records when reading (includes `id` field)
- `Writeable`: The shape of data when writing (excludes read-only fields)

### Record Operations

#### `table.records.list(query?: Record<string, any>)`

List records with optional query parameters (filtering, sorting, etc.).

#### `table.records.find(recordId: string)`

Retrieve a single record by ID.

#### `table.records.create(fields: Writeable)`

Create a new record.

#### `table.records.update(recordId: string, fields: Partial<Writeable>)`

Update an existing record.

#### `table.records.remove(recordId: string)`

Delete a record.

### Field Operations

#### `table.fields.create(field: Omit<FieldDefinition, 'id'>)`

Create a new field in the table.

#### `table.fields.update(fieldId: string, patch: Partial<FieldDefinition>)`

Update an existing field.

## Rate Limiting

The SDK automatically handles Airtable's rate limits by limiting requests to 5 per second. If you exceed this limit, requests will be queued and sent when possible.

## Error Handling

```typescript
try {
  const record = await users.records.find('invalidId')
} catch (error) {
  console.error('Failed to fetch record:', error)
}
```

## Type Safety

The SDK includes comprehensive TypeScript definitions for all Airtable field types:

- Single line text
- Long text
- Attachments
- Checkboxes
- Multiple select
- Single select
- Date
- Phone number
- Email
- URL
- Number
- Currency
- Percent
- Duration
- Rating
- Formula
- Rollup
- Count
- Lookup
- Created time
- Last modified time
- Created by
- Last modified by
- Auto number
- Barcode
- Button

## License

MIT

## Repository

https://github.com/asasvirtuais/airtable