import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'

export function wairtable(token: string) {
  const api = wretch('https://api.airtable.com/v0')
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

          const record = (recordId: string) => {
            const record = table.url(`/${recordId}`)

            return Object.assign(record, {

              comments() {
                const comments = record.url(`/comments`)
                return Object.assign(comments, {
                  comment(commentId: string) {
                    return comments.url(`/${commentId}`)
                  }
                })
              }
            })
          }

          return Object.assign(table, {
            // List records: GET /records
            records() {
              return table.url(`/records`)
            },
            // Retrieve, update, delete a single record: /records/{id}
            record,
            fields: () => table.url(`/fields`),
          })
        },
      })
    },
  })
}
