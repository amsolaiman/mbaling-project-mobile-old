import { lowerCase } from "lodash";
//
import { _mock } from "./_mock";
import { randomNumberRange } from "./funcs";

// ----------------------------------------------------------------------

export const _users = [...Array(24)].map((_, index) => {
  const role = index % 2 ? "landlord" : "student";

  const gender = index % 2 ? "male" : "female";

  const firstName = _mock.firstName(index);

  const lastName = _mock.lastName(index);

  const middleName = _mock.middleName(index);

  const nameExtension =
    (index % 3 && "Jr.") || (index % 4 && "II") || (index % 5 && "III") || null;

  const fullName = `${firstName} ${middleName.charAt(0) + "."} ${lastName}${
    nameExtension && ", " + nameExtension
  }`;

  return {
    id: _mock.id(index),
    username: `${lowerCase(firstName)}_${lowerCase(lastName)}`,
    role,
    firstName,
    lastName,
    middleName,
    nameExtension,
    fullName,
    birthDate: _mock.birthDate(index),
    gender,
    email: _mock.email(index),
    phoneNumber: _mock.phoneNumber(index),
    addressLine1: "001A Disarip Street",
    addressLine2: "Bubonga Marawi",
    addressLine3: "Marawi City",
    addressLine4: "Lanao del Sur",
    //
    avatarUrl: _mock.image.avatar(index),
  };
});

export const _landlordDetails = [...Array(12)].map((_, index) => {
  const details = _users.filter((_s) => _s.role === "landlord")[index];

  return {
    id: _mock.id(index),
    userId: details.id,
    housingName: _mock.companyName(index),
    mapLink: index % 3 ? "https://m.me/ja.moiz" : null,
    chatLink: index % 5 ? "https://maps.app.goo.gl/KiKAuja3QEP5qCTM7" : null,
  };
});

export const _studentDetails = [...Array(12)].map((_, index) => {
  const details = _users.filter((_s) => _s.role === "student")[index];

  return {
    id: _mock.id(index),
    userId: details.id,
    studentId: `2018124${index + 10}`,
    degree: "BS Information Technology (Database System)",
    department: "Department of Information Sciences",
    college: "College of Computing and Information Sciences",
    housingId: _users.filter((_s) => _s.role === "landlord")[
      randomNumberRange(0, 11)
    ].id,
  };
});

export const _userPhotos = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  userId: _users[index].id,
  pathUrl: _mock.image.avatar(index),
}));
