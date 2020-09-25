import { Company } from './Company'
import { CustomMap } from './CustomMap'
import { User } from './User'

const company = new Company()
const customMap = new CustomMap('map')
const user = new User()

customMap.addMarker(user)
customMap.addMarker(company)
