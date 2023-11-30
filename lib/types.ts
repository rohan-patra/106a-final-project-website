export type User = {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Dob
  phone: string
  cell: string
  id: ID
  picture: Picture
  nat: string
}

export type Dob = {
  date: Date
  age: number
}

export type ID = {
  name: string
  value: string
}

export type Location = {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

export type Coordinates = {
  latitude: string
  longitude: string
}

export type Street = {
  number: number
  name: string
}

export type Timezone = {
  offset: string
  description: string
}

export type Login = {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export type Name = {
  title: string
  first: string
  last: string
}

export type Picture = {
  large: string
  medium: string
  thumbnail: string
}
