export interface Nanny {
  email: string;
  password: string;
  nannyId?: string;
  name?: string;
  address?: string;
  number?: string;
  gender ?: string;
  town?: string;
  jobType ?: string;
  birthdate?: Date;
  imgurl?: string
}

export interface Fob {
  value: string;
  display: string;
}
