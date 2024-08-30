import { TGender } from "./common";

export type TDoctor = {
  id: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number | undefined;
  gender: TGender;
  appointmentFee: number | undefined;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specialties?: TDoctorSpecialties[];
};

export type TDoctorSpecialties = {
  specialtiesId: string;
  isDeleted?: boolean;
};
