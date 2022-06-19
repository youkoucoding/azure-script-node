import dotenv from 'dotenv';

dotenv.config();
/**
 * app services cosmosdb
 */
export const subscriptionId = process.env.SUBSCRIPTION_ID;
export const resourceGroupName = process.env.RESCOURCE_GROUP_NAME;
export const appServiceName = process.env.APP_SERVICE_NAME;
export const appServicePlanName = process.env.APP_SERVICE_PLAN_NAME;

/**
 * identity
 */
export const clientId = process.env.AZURE_CLIENT_ID;
export const tanentId = process.env.AZURE_TANENT_ID;
export const clientSecret = process.env.AZURE_CLIENT_SECRET;
