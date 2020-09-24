import faker from 'faker'

export class User {
  // Define properties types
  name: string
  location: {
    lat: number
    lng: number
  }

  // Properties initialization
  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
}
