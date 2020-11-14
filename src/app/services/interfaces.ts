export interface CardsResponse {
  cards: Card[]
}

export interface Card {
  id: string,
  name: string,
  text: string,
  number: string,
  manaCost: string,
  colors: string[],
  type: string,
  imageUrl: string,
  artist: string,
  set: string,
  setName: string
}

export interface SetsResponse {
  sets: Set[]
}

export interface Set {
  code: string,
  name: string,
  type: string,
  releaseDate: Date,
  block: string
}
