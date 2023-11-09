import { BookingInterface } from 'interfaces/booking';
import { ReportInterface } from 'interfaces/report';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  brand: string;
  year: number;
  color: string;
  registration_number: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  report?: ReportInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    report?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  brand?: string;
  color?: string;
  registration_number?: string;
  company_id?: string;
}
