interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create bookings.',
    'View available cars.',
    'Leave feedback on bookings.',
    'Report issues with cars.',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage cars', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/dbcd42fa-1899-4a1c-8c30-9835ed0ca286',
};
