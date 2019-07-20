/* Events */
export class Session {
  title: string;
  details: string;
  type: string; // workshop, keynote, or session
  speakers: Speaker[];
  date: string;
  time: string;
  room: string;
  category: string;
  tags: string[]; // keywords including tech, language, skill
}

export class VolunteerShift {
  date: string;
  time: string;
  location: string;
  duties: string;
}

export class Meal {
  location: string;
}

/* Sponsors */
export class Sponsor {
  name: string;
  address: Address;
  level: string; // Platinum, Gold, Silver, Bronze, Community
  fee: number;
  boothLocation: string;
  returning: boolean; // designation for multi-year partners?
  agreementSent: boolean;
  agreementSigned: boolean;
  paid: boolean;
}

/* Attendee types */
export class Person {
  name: {
    first: string;
    last: string;
  };
  title: string;
  company: string;
  email: string;
  phone: string;
  tshirtSize: string;
  ticketType: string;
  couponCode: string;
  fee: number;
  paid: boolean;
  dietaryRestrictions: string;
  accessibilityRequirements: string;
}

export class SponsorRep extends Person {
  sponsor: Sponsor;
  alsoSpeaking: boolean;
}

export class Speaker extends Person {
  sessions: Session[];
  imageUrl: string;
}

export class Crew extends Person {
  adminRole: string;
  imageUrl: string;
}

export class Volunteer extends Person {
  shifts: VolunteerShift[];
  mySessions: Session[];
}

export class Attendee extends Person {
  mySessions: Session[];
}

/* General Details */
export class Address {
  street1: string;
  street2: string;
  city: string;
  state: string;
  province: string;
  postalCode: string;
  country: string;
}

export class Venue {
  name: string;
  address: Address;
  contact: {
    name: {
      first: string;
      last: string;
    };
    title: string;
    company: string;
    email: string;
    phone: string;
  };
}

export class Conference {
  date: string;
  details: string;
  venue: Venue;
  codeOfConduct: string;
  sponsors: Sponsor[];
  crew: Crew[];
  volunteers: Volunteer[];
}
