export interface Nanny {
  email: string;
  password: string;
  nannyId?: string;
  name?: string;
  address?: string;
  number?: string;
  gender ?: string;
  town?: string;
  kids?: boolean;
  parents?: boolean;
  pets?: boolean;
  home?: boolean;
  birthdate?: Date
}
