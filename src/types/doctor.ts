import { TGender } from "./common";

export type TDoctor = {
  id: string;
  name: string;
  email: string;
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
  averageRating: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  doctorSpecialty?: [];
};

export type TDoctorSpecialties = {
  specialtiesId: string;
  isDeleted?: boolean;
};
