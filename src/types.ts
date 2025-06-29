// Namespaced Airtable SDK Types

export namespace Airtable {
  // AI Text Field
  export namespace AiText {
    export type Cellreadable =
      | {
          state: "empty" | "loading" | "generated"
          isStale: boolean
          value: string | null
        }
      | {
          state: "error"
          errorType: string
          isStale: boolean
          value: string | null
        }
    export interface FieldOptionsreadable {
      prompt?: (string | { field: { fieldId: string } })[]
      referencedFieldIds?: string[]
    }
    export interface FieldOptionswriteable {
      prompt?: (string | { field: { fieldId: string } })[]
      referencedFieldIds?: string[]
    }
    export type FieldType = "aiText"
  }

  // Attachment Field
  export namespace Attachment {
    export interface Thumbnail {
      url: string
      height: number
      width: number
    }
    export interface Cellreadable {
      id: string
      type: string
      filename: string
      height?: number
      size: number
      url: string
      width?: number
      thumbnails?: {
        full?: Thumbnail
        large?: Thumbnail
        small?: Thumbnail
      }
    }
    export type Cellwriteable =
      | {
          url: string
          filename?: string
        }
      | {
          id: string
        }
    export interface FieldOptionsreadable {
      isReversed: boolean
    }
    export interface FieldOptionswriteable {}
    export type FieldType = "multipleAttachments"
  }

  // Auto number Field
  export namespace AutoNumber {
    export type Cellreadable = number
    export interface FieldOptionsreadable {}
    export type FieldType = "autoNumber"
  }

  // Barcode Field
  export namespace Barcode {
    export interface Cell {
      type?: string | null
      text: string
    }
    export interface FieldOptions {}
    export type FieldType = "barcode"
  }

  // Button Field
  export namespace Button {
    export interface Cellreadable {
      label: string
      url: string | null
    }
    export interface FieldOptionsreadable {}
    export type FieldType = "button"
  }

  // Checkbox Field
  export namespace Checkbox {
    export type Cell = boolean
    export type Color =
      | "greenBright"
      | "tealBright"
      | "cyanBright"
      | "blueBright"
      | "purpleBright"
      | "pinkBright"
      | "redBright"
      | "orangeBright"
      | "yellowBright"
      | "grayBright"
    export type Icon =
      | "check"
      | "xCheckbox"
      | "star"
      | "heart"
      | "thumbsUp"
      | "flag"
      | "dot"
    export interface FieldOptions {
      color: Color
      icon: Icon
    }
    export type FieldType = "checkbox"
  }

  // Collaborator Field
  export namespace Collaborator {
    export interface Cellreadable {
      id: string
      email?: string
      name?: string
      permissionLevel?: "none" | "readable" | "comment" | "edit" | "create"
      profilePicUrl?: string
    }
    export type Cellwriteable =
      | { id: string }
      | { email: string }
    export interface FieldOptions {}
    export type FieldType = "singleCollaborator"
  }

  // Count Field
  export namespace Count {
    export type Cellreadable = number
    export interface FieldOptionsreadable {
      isValid: boolean
      recordLinkFieldId?: string | null
    }
    export type FieldType = "count"
  }

  // Created by Field
  export namespace CreatedBy {
    export interface Cellreadable {
      id: string
      email?: string
      name?: string
      permissionLevel?: "none" | "readable" | "comment" | "edit" | "create"
      profilePicUrl?: string
    }
    export interface FieldOptionsreadable {}
    export type FieldType = "createdBy"
  }

  // Created time Field
  export namespace CreatedTime {
    export type Cellreadable = string
    export interface FieldOptionsreadable {
      result?: Date.FieldOptionsreadable | DateTime.FieldOptionsreadable
    }
    export type FieldType = "createdTime"
  }

  // Currency Field
  export namespace Currency {
    export type Cell = number
    export interface FieldOptions {
      precision: number
      symbol: string
    }
    export type FieldType = "currency"
  }

  // Date Field
  export namespace Date {
    export type Cell = string
    export type Format = "l" | "LL" | "M/D/YYYY" | "D/M/YYYY" | "YYYY-MM-DD"
    export type FormatName = "local" | "friendly" | "us" | "european" | "iso"
    export interface FieldOptionsreadable {
      dateFormat: {
        format: Format
        name: FormatName
      }
    }
    export interface FieldOptionswriteable {
      dateFormat: {
        format?: Format
        name: FormatName
      }
    }
    export type FieldType = "date"
  }

  // Date and time Field
  export namespace DateTime {
    export type Cell = string
    export type TimeFormat = "h:mma" | "HH:mm"
    export type TimeFormatName = "12hour" | "24hour"
    export interface FieldOptionsreadable {
      timeZone: string
      dateFormat: {
        format: Date.Format
        name: Date.FormatName
      }
      timeFormat: {
        format: TimeFormat
        name: TimeFormatName
      }
    }
    export interface FieldOptionswriteable {
      timeZone: string
      dateFormat: {
        format?: Date.Format
        name: Date.FormatName
      }
      timeFormat: {
        format?: TimeFormat
        name: TimeFormatName
      }
    }
    export type FieldType = "dateTime"
  }

  // Duration Field
  export namespace Duration {
    export type Cell = number
    export type Format = "h:mm" | "h:mm:ss" | "h:mm:ss.S" | "h:mm:ss.SS" | "h:mm:ss.SSS"
    export interface FieldOptions {
      durationFormat: Format
    }
    export type FieldType = "duration"
  }

  // Email Field
  export namespace Email {
    export type Cell = string
    export interface FieldOptions {}
    export type FieldType = "email"
  }

  // Formula Field
  export namespace Formula {
    export type Cellreadable = string | number | boolean | any[]
    export interface FieldOptionsreadable {
      formula: string
      isValid: boolean
      referencedFieldIds: string[] | null
      result: FieldOptionsreadable | null
    }
    export type FieldType = "formula"
  }

  // Last modified by Field
  export namespace LastModifiedBy {
    export interface Cellreadable {
      id: string
      email?: string
      name?: string
      permissionLevel?: "none" | "readable" | "comment" | "edit" | "create"
      profilePicUrl?: string
    }
    export interface FieldOptionsreadable {}
    export type FieldType = "lastModifiedBy"
  }

  // Last modified time Field
  export namespace LastModifiedTime {
    export type Cellreadable = string
    export interface FieldOptionsreadable {
      isValid?: boolean
      referencedFieldIds?: string[] | null
      result?: Date.FieldOptionsreadable | DateTime.FieldOptionsreadable | null
    }
    export type FieldType = "lastModifiedTime"
  }

  // Link to another record Field
  export namespace LinkToAnotherRecord {
    export type CellreadableV1 = string[]
    export interface CellreadableV2 {
      id: string
      name: string
    }
    export type Cellreadable = string[] | CellreadableV2[]
    export type Cellwriteable = string[]
    export interface FieldOptionsreadable {
      isReversed: boolean
      linkedTableId: string
      prefersSingleRecordLink: boolean
      inverseLinkFieldId?: string
      viewIdForRecordSelection?: string
    }
    export interface FieldOptionswriteable {
      linkedTableId: string
      viewIdForRecordSelection?: string
    }
    export type FieldType = "multipleRecordLinks"
  }

  // Long text Field
  export namespace LongText {
    export type Cell = string
    export interface FieldOptions {}
    export type FieldType = "multilineText"
  }

  // Lookup Field
  export namespace Lookup {
    export type CellreadableV1 = (number | string | boolean | any)[]
    export interface CellreadableV2 {
      valuesByLinkedRecordId: {
        [key: string]: any[]
      }
      linkedRecordIds: string[]
    }
    export type Cellreadable = CellreadableV1 | CellreadableV2
    export interface FieldOptionsreadable {
      fieldIdInLinkedTable: string | null
      isValid: boolean
      recordLinkFieldId: string | null
      result: FieldOptionsreadable | null
    }
    export type FieldType = "multipleLookupValues"
  }

  // Multiple collaborator Field
  export namespace MultipleCollaborator {
    export interface Cellreadable {
      id: string
      email?: string
      name?: string
      permissionLevel?: "none" | "readable" | "comment" | "edit" | "create"
      profilePicUrl?: string
    }
    export type Cellwriteable = string[]
    export interface FieldOptions {}
    export type FieldType = "multipleCollaborators"
  }

  // Multiple select Field
  export namespace MultipleSelect {
    export type CellreadableV1 = string[]
    export interface CellreadableV2 {
      id: string
      color?: string
      name: string
    }
    export type Cellreadable = string[] | CellreadableV2[]
    export type Cellwriteable = string[]
    export type OptionColor =
      | "blueLight2"
      | "cyanLight2"
      | "tealLight2"
      | "greenLight2"
      | "yellowLight2"
      | "orangeLight2"
      | "redLight2"
      | "pinkLight2"
      | "purpleLight2"
      | "grayLight2"
      | "blueLight1"
      | "cyanLight1"
      | "tealLight1"
      | "greenLight1"
      | "yellowLight1"
      | "orangeLight1"
      | "redLight1"
      | "pinkLight1"
      | "purpleLight1"
      | "grayLight1"
      | "blueBright"
      | "cyanBright"
      | "tealBright"
      | "greenBright"
      | "yellowBright"
      | "orangeBright"
      | "redBright"
      | "pinkBright"
      | "purpleBright"
      | "grayBright"
      | "blueDark1"
      | "cyanDark1"
      | "tealDark1"
      | "greenDark1"
      | "yellowDark1"
      | "orangeDark1"
      | "redDark1"
      | "pinkDark1"
      | "purpleDark1"
      | "grayDark1"
    export interface Optionreadable {
      id: string
      color?: OptionColor
      name: string
    }
    export interface Optionwriteable {
      id?: string
      color?: OptionColor
      name: string
    }
    export interface FieldOptionsreadable {
      choices: Optionreadable[]
    }
    export interface FieldOptionswriteable {
      choices: Optionwriteable[]
    }
    export type FieldType = "multipleSelects"
  }

  // Number Field
  export namespace Number {
    export type Cell = number
    export interface FieldOptions {
      precision: number
    }
    export type FieldType = "number"
  }

  // Percent Field
  export namespace Percent {
    export type Cell = number
    export interface FieldOptions {
      precision: number
    }
    export type FieldType = "percent"
  }

  // Phone Field
  export namespace Phone {
    export type Cell = string
    export interface FieldOptions {}
    export type FieldType = "phoneNumber"
  }

  // Rating Field
  export namespace Rating {
    export type Cell = number
    export type Color =
      | "yellowBright"
      | "orangeBright"
      | "redBright"
      | "pinkBright"
      | "purpleBright"
      | "blueBright"
      | "cyanBright"
      | "tealBright"
      | "greenBright"
      | "grayBright"
    export type Icon = "star" | "heart" | "thumbsUp" | "flag" | "dot"
    export interface FieldOptions {
      color: Color
      icon: Icon
      max: number
    }
    export type FieldType = "rating"
  }

  // Rich text Field
  export namespace RichText {
    export type Cell = string
    export interface FieldOptions {}
    export type FieldType = "richText"
  }

  // Rollup Field
  export namespace Rollup {
    export type CellreadableV1 = string | number | boolean
    export type CellreadableV2 = any
    export type Cellreadable = CellreadableV1 | CellreadableV2
    export interface FieldOptionsreadable {
      fieldIdInLinkedTable?: string
      recordLinkFieldId?: string
      result?: FieldOptionsreadable | null
      isValid?: boolean
      referencedFieldIds?: string[]
    }
    export type FieldType = "rollup"
  }

  // Single line text Field
  export namespace SingleLineText {
    export type Cell = string
    export interface FieldOptions {}
    export type FieldType = "singleLineText"
  }

  // Single select Field
  export namespace SingleSelect {
    export type CellreadableV1 = string
    export interface CellreadableV2 {
      id: string
      color?: string
      name: string
    }
    export type Cellreadable = string | CellreadableV2
    export type Cellwriteable = string
    export interface FieldOptionsreadable {
      choices: MultipleSelect.Optionreadable[]
    }
    export interface FieldOptionswriteable {
      choices: MultipleSelect.Optionwriteable[]
    }
    export type FieldType = "singleSelect"
  }

  // Sync source Field
  export namespace SyncSource {
    export type CellreadableV1 = string
    export interface CellreadableV2 {
      id: string
      name: string
      color?: string
    }
    export type Cellreadable = string | CellreadableV2
    export interface FieldOptions {
      choices: MultipleSelect.Optionreadable[]
    }
    export type FieldType = "externalSyncSource"
  }

  // Url Field
  export namespace Url {
    export type Cell = string
    export interface FieldOptions {}
    export type FieldType = "url"
  }

  // Union of all possible field types
  export type FieldType =
    | AiText.FieldType
    | Attachment.FieldType
    | AutoNumber.FieldType
    | Barcode.FieldType
    | Button.FieldType
    | Checkbox.FieldType
    | Collaborator.FieldType
    | Count.FieldType
    | CreatedBy.FieldType
    | CreatedTime.FieldType
    | Currency.FieldType
    | Date.FieldType
    | DateTime.FieldType
    | Duration.FieldType
    | Email.FieldType
    | Formula.FieldType
    | LastModifiedBy.FieldType
    | LastModifiedTime.FieldType
    | LinkToAnotherRecord.FieldType
    | LongText.FieldType
    | Lookup.FieldType
    | MultipleCollaborator.FieldType
    | MultipleSelect.FieldType
    | Number.FieldType
    | Percent.FieldType
    | Phone.FieldType
    | Rating.FieldType
    | RichText.FieldType
    | Rollup.FieldType
    | SingleLineText.FieldType
    | SingleSelect.FieldType
    | SyncSource.FieldType
    | Url.FieldType

  // Union of all possible field options (readable)
  export type FieldOptionsreadable =
    | { type: AiText.FieldType, options: AiText.FieldOptionsreadable }
    | { type: Attachment.FieldType, options: Attachment.FieldOptionsreadable }
    | { type: AutoNumber.FieldType, options: AutoNumber.FieldOptionsreadable }
    | { type: Barcode.FieldType, options: Barcode.FieldOptions }
    | { type: Button.FieldType, options: Button.FieldOptionsreadable }
    | { type: Checkbox.FieldType, options: Checkbox.FieldOptions }
    | { type: Collaborator.FieldType, options: Collaborator.FieldOptions }
    | { type: Count.FieldType, options: Count.FieldOptionsreadable }
    | { type: CreatedBy.FieldType, options: CreatedBy.FieldOptionsreadable }
    | { type: CreatedTime.FieldType, options: CreatedTime.FieldOptionsreadable }
    | { type: Currency.FieldType, options: Currency.FieldOptions }
    | { type: Date.FieldType, options: Date.FieldOptionsreadable }
    | { type: DateTime.FieldType, options: DateTime.FieldOptionsreadable }
    | { type: Duration.FieldType, options: Duration.FieldOptions }
    | { type: Email.FieldType, options: Email.FieldOptions }
    | { type: Formula.FieldType, options: Formula.FieldOptionsreadable }
    | { type: LastModifiedBy.FieldType, options: LastModifiedBy.FieldOptionsreadable }
    | { type: LastModifiedTime.FieldType, options: LastModifiedTime.FieldOptionsreadable }
    | { type: LinkToAnotherRecord.FieldType, options: LinkToAnotherRecord.FieldOptionsreadable }
    | { type: LongText.FieldType, options: LongText.FieldOptions }
    | { type: Lookup.FieldType, options: Lookup.FieldOptionsreadable }
    | { type: MultipleCollaborator.FieldType, options: MultipleCollaborator.FieldOptions }
    | { type: MultipleSelect.FieldType, options: MultipleSelect.FieldOptionsreadable }
    | { type: Number.FieldType, options: Number.FieldOptions }
    | { type: Percent.FieldType, options: Percent.FieldOptions }
    | { type: Phone.FieldType, options: Phone.FieldOptions }
    | { type: Rating.FieldType, options: Rating.FieldOptions }
    | { type: RichText.FieldType, options: RichText.FieldOptions }
    | { type: Rollup.FieldType, options: Rollup.FieldOptionsreadable }
    | { type: SingleLineText.FieldType, options: SingleLineText.FieldOptions }
    | { type: SingleSelect.FieldType, options: SingleSelect.FieldOptionsreadable }
    | { type: SyncSource.FieldType, options: SyncSource.FieldOptions }
    | { type: Url.FieldType, options: Url.FieldOptions }

  // Mapping of field type to cell value (readable)
  export type CellValuereadable<T extends FieldType> =
    T extends AiText.FieldType ? AiText.Cellreadable :
    T extends Attachment.FieldType ? Attachment.Cellreadable[] :
    T extends AutoNumber.FieldType ? AutoNumber.Cellreadable :
    T extends Barcode.FieldType ? Barcode.Cell :
    T extends Button.FieldType ? Button.Cellreadable :
    T extends Checkbox.FieldType ? Checkbox.Cell :
    T extends Collaborator.FieldType ? Collaborator.Cellreadable :
    T extends Count.FieldType ? Count.Cellreadable :
    T extends CreatedBy.FieldType ? CreatedBy.Cellreadable :
    T extends CreatedTime.FieldType ? CreatedTime.Cellreadable :
    T extends Currency.FieldType ? Currency.Cell :
    T extends Date.FieldType ? Date.Cell :
    T extends DateTime.FieldType ? DateTime.Cell :
    T extends Duration.FieldType ? Duration.Cell :
    T extends Email.FieldType ? Email.Cell :
    T extends Formula.FieldType ? Formula.Cellreadable :
    T extends LastModifiedBy.FieldType ? LastModifiedBy.Cellreadable :
    T extends LastModifiedTime.FieldType ? LastModifiedTime.Cellreadable :
    T extends LinkToAnotherRecord.FieldType ? LinkToAnotherRecord.Cellreadable[] :
    T extends LongText.FieldType ? LongText.Cell :
    T extends Lookup.FieldType ? Lookup.Cellreadable :
    T extends MultipleCollaborator.FieldType ? MultipleCollaborator.Cellreadable[] :
    T extends MultipleSelect.FieldType ? MultipleSelect.Cellreadable[] :
    T extends Number.FieldType ? Number.Cell :
    T extends Percent.FieldType ? Percent.Cell :
    T extends Phone.FieldType ? Phone.Cell :
    T extends Rating.FieldType ? Rating.Cell :
    T extends RichText.FieldType ? RichText.Cell :
    T extends Rollup.FieldType ? Rollup.Cellreadable :
    T extends SingleLineText.FieldType ? SingleLineText.Cell :
    T extends SingleSelect.FieldType ? SingleSelect.Cellreadable :
    T extends SyncSource.FieldType ? SyncSource.Cellreadable :
    T extends Url.FieldType ? Url.Cell :
    never

  // Mapping of field type to cell value (writeable)
  export type CellValuewriteable<T extends FieldType> =
    T extends AiText.FieldType ? never :
    T extends Attachment.FieldType ? Attachment.Cellwriteable[] :
    T extends AutoNumber.FieldType ? never :
    T extends Barcode.FieldType ? Barcode.Cell :
    T extends Button.FieldType ? never :
    T extends Checkbox.FieldType ? Checkbox.Cell :
    T extends Collaborator.FieldType ? Collaborator.Cellwriteable :
    T extends Count.FieldType ? never :
    T extends CreatedBy.FieldType ? never :
    T extends CreatedTime.FieldType ? never :
    T extends Currency.FieldType ? Currency.Cell :
    T extends Date.FieldType ? Date.Cell :
    T extends DateTime.FieldType ? DateTime.Cell :
    T extends Duration.FieldType ? Duration.Cell :
    T extends Email.FieldType ? Email.Cell :
    T extends Formula.FieldType ? never :
    T extends LastModifiedBy.FieldType ? never :
    T extends LastModifiedTime.FieldType ? never :
    T extends LinkToAnotherRecord.FieldType ? LinkToAnotherRecord.Cellwriteable[] :
    T extends LongText.FieldType ? LongText.Cell :
    T extends Lookup.FieldType ? never :
    T extends MultipleCollaborator.FieldType ? MultipleCollaborator.Cellwriteable[] :
    T extends MultipleSelect.FieldType ? MultipleSelect.Cellwriteable[] :
    T extends Number.FieldType ? Number.Cell :
    T extends Percent.FieldType ? Percent.Cell :
    T extends Phone.FieldType ? Phone.Cell :
    T extends Rating.FieldType ? Rating.Cell :
    T extends RichText.FieldType ? RichText.Cell :
    T extends Rollup.FieldType ? never :
    T extends SingleLineText.FieldType ? SingleLineText.Cell :
    T extends SingleSelect.FieldType ? SingleSelect.Cellwriteable :
    T extends SyncSource.FieldType ? never :
    T extends Url.FieldType ? Url.Cell :
    never

  // Union of all possible field options (writeable)
  export type FieldOptionswriteable =
    | { type: AiText.FieldType, options: AiText.FieldOptionswriteable }
    | { type: Attachment.FieldType, options: Attachment.FieldOptionswriteable }
    | { type: Barcode.FieldType, options: Barcode.FieldOptions }
    | { type: Checkbox.FieldType, options: Checkbox.FieldOptions }
    | { type: Collaborator.FieldType, options: Collaborator.FieldOptions }
    | { type: Currency.FieldType, options: Currency.FieldOptions }
    | { type: Date.FieldType, options: Date.FieldOptionswriteable }
    | { type: DateTime.FieldType, options: DateTime.FieldOptionswriteable }
    | { type: Duration.FieldType, options: Duration.FieldOptions }
    | { type: Email.FieldType, options: Email.FieldOptions }
    | { type: LinkToAnotherRecord.FieldType, options: LinkToAnotherRecord.FieldOptionswriteable }
    | { type: LongText.FieldType, options: LongText.FieldOptions }
    | { type: MultipleCollaborator.FieldType, options: MultipleCollaborator.FieldOptions }
    | { type: MultipleSelect.FieldType, options: MultipleSelect.FieldOptionswriteable }
    | { type: Number.FieldType, options: Number.FieldOptions }
    | { type: Percent.FieldType, options: Percent.FieldOptions }
    | { type: Phone.FieldType, options: Phone.FieldOptions }
    | { type: Rating.FieldType, options: Rating.FieldOptions }
    | { type: RichText.FieldType, options: RichText.FieldOptions }
    | { type: SingleLineText.FieldType, options: SingleLineText.FieldOptions }
    | { type: SingleSelect.FieldType, options: SingleSelect.FieldOptionswriteable }
    | { type: SyncSource.FieldType, options: SyncSource.FieldOptions }
    | { type: Url.FieldType, options: Url.FieldOptions }

  // Generic type for a field definition
  export interface FieldDefinition<T extends FieldType> {
    id: string
    name: string
    type: T
    options?: FieldOptionsreadable
  }

  // Generic type for a record field value (readable)
  export type RecordFieldsreadable = {
    [key: string]: CellValuereadable<FieldType>
  }

  // Generic type for a record field value (writeable)
  export type RecordFieldswriteable = {
    [key: string]: CellValuewriteable<FieldType>
  }
}
