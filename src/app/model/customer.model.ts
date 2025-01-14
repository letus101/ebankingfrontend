import { AppUser } from "./appUser.model";

export interface Customer {
  id: number;
  name: string;
  surName: string;
  email: string;
  timestamp: string;
  appUser: AppUser;
  adresse: string;
  image: string;
  phoneNumber: string;
}
