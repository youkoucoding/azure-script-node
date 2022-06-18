import dotenv from 'dotenv';

dotenv.config();

export const subscriptionId = process.env.SUBSCRIPTION_ID || 'test';
export const resourceGroupName = process.env.RESOURCCE_GROIP_NAME || 'test';
export const appserviceName = process.env.APP_SERVICES_NAME || 'test';

export const clientId = process.env.AZURE_CLIENT_ID;
export const tanentId = process.env.AZURE_TANENT_ID;
export const clientSecret = process.env.AZURE_CLIENT_SECRET;
