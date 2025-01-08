export interface RestCountry {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: never
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  languages: Languages
  translations: { [key: string]: Translation }
  latlng: number[]
  landlocked: boolean
  area: number
  demonyms: never;
  flag: string
  maps: Maps
  population: number
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: never;
  startOfWeek: string
  capitalInfo: CapitalInfo
}

export interface Name {
  common: string
  official: string
  nativeName: {[key: string]: string}
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  eng: string
}

export interface Translation {
  official: string
  common: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}
