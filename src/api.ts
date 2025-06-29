import wretch from "wretch"
import QueryStringAddon from "wretch/addons/queryString"
import { FetchLike } from "wretch"

export function ratePerSec(max: number, delay: number = 1000) {
  let count: number = 0

  return (next: FetchLike) => {
    const check: FetchLike = async (url, opts) => {
      if (count < max) {
        count++
        try {
          return await next(url, opts)
        } finally {
          setTimeout(() => count--, delay)
        }
      } else {
        return new Promise((resolve) =>
          setTimeout(() => resolve(check(url, opts)), delay)
        )
      }
    }
    return check
  }
}

export type API = ReturnType<typeof api>

export default function api(token: string) {
  const api = wretch("https://api.airtable.com/v0")
    .middlewares([ratePerSec(5)])
    .addon(QueryStringAddon)
    .auth(`Bearer ${token}`)

  return Object.assign(api, {
    meta: () => {
      const meta = api.url(`/meta`)

      return Object.assign(meta, {
        bases: () => {
          const bases = api.url(`/meta/bases`)

          return Object.assign(bases, {
            base: (baseId: string) => {
              const base = bases.url(`/${baseId}`)

              return Object.assign(base, {
                tables: () => {
                  const tables = base.url(`/tables`)

                  return Object.assign(tables, {
                    table: (tableId: string) => {
                      const table = tables.url(`/${tableId}`)

                      return Object.assign(table, {
                        fields: () => table.url(`/fields`),
                        field: (fieldId: string) => table.url(`/${fieldId}`),
                      })
                    },
                  })
                },
              })
            },
          })
        },
      })
    },
    base: (baseId: string) => {
      const base = api.url(`/${baseId}`)

      return Object.assign(base, {
        table: (tableId: string) => {
          const table = base.url(`/${encodeURIComponent(tableId)}`)

          const record = (id: string) => table.url(`/${id}`)

          // Add endpoints for records collection and single record
          const records = () => table.url(`/records`)

          return Object.assign(table, {
            // List records: GET /records
            records,
            // Retrieve, update, delete a single record: /records/{id}
            record,
            fields: () => table.url(`/fields`),
          })
        },
      })
    },
  })
}

// Usage and explanation: this file maps urls to wretch endpoints

// https://api.airtable.com/v0/meta/bases/{baseId}/tables
// wairtable(token).base(baseId).table(tableId).record(recordId).get().json()

// https://api.airtable.com/v0/meta/bases/{baseId}/tables
// wairtable(token).meta().bases().base(baseId).tables().get().json()
// wairtable(token).meta().bases().base(baseId).tables().table(tableId).fields().json(newField).post().json() // Object.assign allows accessing further endpoints with ease.
