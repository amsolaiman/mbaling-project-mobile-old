export type PostResponse = {
  id: string;
  title: string;
  description: string;
  price: number;
  is_visible: boolean;
  user_id: string;
  housing_name: string;
  avatar_url: string;
  uploads: {
    id: string;
    img_url: string;
  }[];
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
};

// ----------------------------------------------------------------------

export type IPostItem = {
  id: string;
  housing_id: string;
  title: string;
  description: string;
  price: true;
  is_visible: boolean;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at: Date | string | null;
};

export type IPostUploads = {
  id: string;
  post_id: string;
  img_url: string;
};
