import { sub } from "date-fns";
//
import {
  _id,
  _emails,
  _prices,
  _lastNames,
  _firstNames,
  _postTitles,
  _companyName,
  _middleNames,
  _descriptions,
  _phoneNumbers,
} from "./assets";

// ----------------------------------------------------------------------

export const _mock = {
  id: (index: number) => _id[index],
  // Name
  firstName: (index: number) => _firstNames[index],
  lastName: (index: number) => _lastNames[index],
  middleName: (index: number) => _middleNames[index],
  companyName: (index: number) => _companyName[index],
  // Number
  price: (index: number) => _prices[index],
  // Text
  postTitle: (index: number) => _postTitles[index],
  description: (index: number) => _descriptions[index],
  // Contact
  email: (index: number) => _emails[index],
  phoneNumber: (index: number) => _phoneNumbers[index],
  // Date
  time: (index: number) => sub(new Date(), { days: index, hours: index }),
  birthDate: (index: number) => sub(new Date(), { years: 1990 + index }),
  // Image
  image: {
    avatar: (index: number) =>
      `https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-${
        index + 1
      }.webp`,
    product: (index: number) =>
      `https://api-prod-minimal-v610.pages.dev/assets/images/cover/cover-${
        index + 1
      }.webp`,
  },
};
