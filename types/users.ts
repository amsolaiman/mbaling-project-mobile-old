export type UserLandlordResponse = {
  id: string;
  username: string;
  role: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  name_extension: string;
  full_name: string;
  date_of_birth: Date | string;
  gender: string;
  email: string;
  phone_number: string;
  address_line_1: string;
  address_line_2: string;
  address_line_3: string;
  address_line_4: string;
  avatar_url: string;
  housing_id: string;
  housing_name: string;
  chat_link: string | null;
  map_link: string | null;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
};

// ----------------------------------------------------------------------

export type IUserItem = {
  id: string;
  username: string;
  role: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  name_extension: string;
  full_name: string;
  date_of_birth: string;
  gender: string;
  email: string;
  phone_number: string;
  address_line_1: string;
  address_line_2: string;
  address_line_3: string;
  address_line_4: string;
  avatar_url: string;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
};

export type IUserLandlordDetails = {
  id: string;
  user_id: string;
  housing_name: string;
  chat_link: string | null;
  map_link: string | null;
};
