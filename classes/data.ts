/* Conference */

export class MusicCityConference {
  aboutUs: string;
  codeOfConduct: string;
  conferences: ConferenceYear[];
  contactUs: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedIn: string;
    twitter: string;
  };
}

export class ConferenceYear {
  attendees: Attendee[];
  crew: Crew[];
  details: string;
  schedule: ConferenceDay[];
  speakers: Speaker[];
  sponsors: Sponsor[];
  venue: Venue;
  volunteers: Volunteer[];
  year: number;
}

export class ConferenceDay {
  date: Date;
  sessions: Session[];
  volunteerShifts: VolunteerShift[];
  meal: Meal;
}


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

export class PlanningCalendar {
  planningEvents: {};
}

/* Attendee types */

export class Person {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  title: string;
  company: string;
  tshirtSize: string;
  ticketType: string;
  couponCode: string;
  fee: number;
  yearAttended: string;
  paid: boolean;
  roleIds: Roles[];
  needParking: boolean;
  dietaryRestrictions: string;
  accessibilityRequirements: string;
}

export class Roles {
    id: number;
    roleName: string;
}

export class Attendee extends Person {
  personId: number;
  mySessions: Session[];
}

export class Crew extends Person {
  personId: number;
  adminRole: string;
  biography: string;
  imageUrl: string;
}

export class Speaker extends Person {
  personId: number;
  sessions: Session[];
  biography: string;
  imageUrl: string;
}

export class SponsorRep extends Person {
  personId: number;
  sponsor: Sponsor;
}

export class Volunteer extends Person {
  personId: number;
  shifts: VolunteerShift[];
  mySessions: Session[];
}

/* Sponsors */

export class Sponsor {
  name: string;
  address: Address;
  year: string;
  level: string; // Platinum, Gold, Silver, Bronze, Community
  fee: number;
  paid: boolean;
  agreementSent: boolean;
  agreementSigned: boolean;
  boothLocation: string;
}

/* General Details */

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
  rooms: number;
  boothSpaces: number;
}

export class Address {
  street1: string;
  street2: string;
  city: string;
  state: string;
  postalCode: string;
}
