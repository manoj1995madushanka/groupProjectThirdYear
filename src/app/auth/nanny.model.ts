export interface Nanny {
  id?: string;
  email?: string;
  password?: string;
  nannyId?: string;
  name?: string;
  address?: string;
  number?: string;
  gender ?: string;
  town?: string;
  jobType ?: string;
  birthdate?: Date;
  hourlyRate?: number;
  availability?: string;
  bio?: string;
  imgurl?: string;
}

export interface Fob {
  value: string;
  display: string;
}
