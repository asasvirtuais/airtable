import { Airtable } from "./types"

export namespace Todo {
    export type readable = {
        id: string
        name: string
    }
    export type writeable = Omit<readable, 'id' | 'createdAt' | 'updatedAt'>
}
export type Todo = Todo.readable

export namespace User {
    export type readable = {
        id: string
        name: string
        auth0_id: string
        chats?: string[] // linked
        presets?: string[] // linked
        diaries?: string[] // linked
    }
    export type writeable = Omit<readable, 'id' | 'auth0_id'>
}
export type User = User.readable

export namespace Diary {
    export type readable = {
        id: string
        name: string
        instructions?: string
        character?: [string]
        schedules?: string[]
        user: [string] // Airtable only supports multiple linked records
        userId: string // rollup
        records: string[]
        timezone: number
    }
    export type writeable = Omit<readable, 'id' | 'userId'>
}
export type Diary = Diary.readable

export namespace Chat {
    export type readable = {
        id: string
        name: string
        createdAt: string
        user: [string]
        diary: [string]
        userId: string
        diaryId: string
        messages?: string[]
        todayDiaryChat: true | false
    }
    export type writeable = Omit<readable, 'id' | 'userId'>
}
export type Chat = Chat.readable

export namespace Message {
    export type readable = {
        id: string
        content: string
        attachments?: Airtable.Attachment.Cellreadable[]
        chat: [string]
        chatId: string
        user: [string]
        role: 'assistant' | 'user'
        createdAt: string
    }
    export type writeable = Omit<readable, 'id' | 'chatId' | 'user' | 'createdAt' >
}
export type Message = Message.readable

export namespace Preset {
    export type readable = {
        id: string
        name: string
        model: string
        temperature: number
        maxTokens: number
        system: string
        user: [string]
        characters: string[]
    }
    export type writeable = Omit<readable, 'id'>
}
export type Preset = Preset.readable

export namespace Character {
    export type readable = {
        id: string
        name: string
        description: string
        gallery?: Airtable.Attachment.Cellreadable[]
        definition: string
        diaries: string[]
        preset: [string]
        about: string
    }
    export type writeable = Omit<readable, 'id'>
}
export type Character = Character.readable

export interface GlobalSchema {
    todos: {
        readable: Todo.readable
        writeable: Todo.writeable
    }
    users: {
        readable: User.readable
        writeable: User.writeable
    }
    diaries: {
        readable: Diary.readable
        writeable: Diary.writeable
    }
    chats: {
        readable: Chat.readable
        writeable: Chat.writeable
    }
    messages: {
        readable: Message.readable
        writeable: Message.writeable
    }
    presets: {
        readable: Preset.readable
        writeable: Preset.writeable
    }
    characters: {
        readable: Character.readable
        writeable: Character.writeable
    }
}

export type TableKey = keyof GlobalSchema
export type writeable<T extends TableKey> = GlobalSchema[T]['writeable']
export type readable<T extends TableKey> = GlobalSchema[T]['readable']
