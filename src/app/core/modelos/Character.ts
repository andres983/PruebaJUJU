import { Location } from "./Location";

export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: string;
  location?: Location;
  image?: string;
  url?:string;
  created?:string;
}
