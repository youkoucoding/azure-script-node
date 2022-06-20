import dotenv from 'dotenv';

dotenv.config();

/**
 * app services cosmosdb
 */
export const subscriptionId = process.env.SUBSCRIPTION_ID || 'nothing';
export const resourceGroupName = process.env.RESCOURCE_GROUP_NAME || 'nothing';
export const appServiceName = process.env.APP_SERVICE_NAME || 'nothing';
export const appServicePlanName = process.env.APP_SERVICE_PLAN_NAME || 'nothing';

/**
 * identity
 */
export const clientId = process.env.AZURE_CLIENT_ID || 'more than nothing';
export const tanentId = process.env.AZURE_TANENT_ID || 'more than nothing';
export const clientSecret = process.env.AZURE_CLIENT_SECRET || 'more than nothing';
