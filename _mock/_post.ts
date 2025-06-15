import { _mock } from "./_mock";
import { _users } from "./_user";
import { randomNumberRange } from "./funcs";

// ----------------------------------------------------------------------

export const _posts = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  price: _mock.price(randomNumberRange(0, 23)),
  housingId: _users.filter((_s) => _s.role === "landlord")[
    randomNumberRange(0, 11)
  ].id,
  //
  photos: [...Array(randomNumberRange(1, 5))].map((_p) =>
    _mock.image.product(randomNumberRange(0, 23))
  ),
}));

export const _postPhotos = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  postId: _posts[randomNumberRange(0, 23)].id,
  pathUrl: _mock.image.product(index),
}));
