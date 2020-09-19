import { UriChanger } from '../Types'

export class SchemaOrg implements UriChanger {

  check (uri: string): void {
    console.log(uri)
  }

}
