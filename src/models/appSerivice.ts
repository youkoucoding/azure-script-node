import { WebSiteManagementClient } from '@azure/arm-appservice';
import { DefaultAzureCredential } from '@azure/identity';
import { subscriptionId, resourceGroupName, appserviceName } from '../config';

console.log('🚀 ~ file: appSerivice.ts ~ line 4 ~ subscriptionId', subscriptionId);
/**
 * This sample demonstrates how to Description for Get an App Service plan.
 *
 * @summary Description for Get an App Service plan.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-03-01/examples/GetAppServicePlan.json
 */
export default async function getAppServicePlan() {
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServicePlans.get(resourceGroupName, appserviceName);
  console.log(result);
}
