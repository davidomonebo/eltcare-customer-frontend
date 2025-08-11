interface IBase {
  id: number;
  created_at: string;
  updated_at: string;
}

interface IToken {
  access: string;
  refresh: string;
}

interface IUser {
  id: number;
  email: string;
  username: string;
  last_name: string;
  first_name: string;
  get_full_name: string;
  profile: null | string;
  last_login: null | string;
  readonly password: string;
  phone_number: null | string;
}

interface IReview {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar?: string;
}
