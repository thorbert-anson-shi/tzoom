export interface Text {
  id: string
  createdAt: Date
  updatedAt: Date
  content: string
  author: string
  title: string
  sentences: Sentence[]
}

export interface Sentence {
  id: string
  createdAt: Date
  updatedAt: Date
  textId: string
  content: string
  length: number
  text: Text
}