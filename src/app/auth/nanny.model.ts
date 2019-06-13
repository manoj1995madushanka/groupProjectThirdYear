export interface Nanny {
  email?: string;
  password?: string;
  Id?: string;
  name?: string;
  address?: string;
  number?: string;
  gender ?: string;
  town?: string;
  jobType ?: string;
  birthdate?: Date;
  hourlyRate?: string;
  availability?: string;
  bio?: string;
  imgurl?: string;
}

export interface Fob {
  value: string;
  display: string;
}
