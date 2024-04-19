export interface Badge {
  name: string,
  logo: string
}

export interface User {
  username: string,
  name: string,
  email: string,
  gender: string,
  locationX: number,
  locationY: number,
  badges: Array<Badge>
}