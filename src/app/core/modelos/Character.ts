import { Location } from "./Location";

export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: any;
  location?: Location;
  image?: string;
  created?:string;
}
