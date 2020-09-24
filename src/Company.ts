import faker from 'faker'

export class Company {
  // Define properties types
  name: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  // Properties initialization
  constructor() {
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
}
