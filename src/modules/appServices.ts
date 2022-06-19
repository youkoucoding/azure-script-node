import { WebSiteManagementClient } from '@azure/arm-appservice';
import { DefaultAzureCredential } from '@azure/identity';
import { subscriptionId, resourceGroupName, appServicePlanName, appServiceName } from '../config';

const credential = new DefaultAzureCredential();
const client = new WebSiteManagementClient(credential, subscriptionId as string);

/**
 * This sample demonstrates how to Description for Get an App Service plan.
 * @summary Description for Get an App Service plan.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-03-01/examples/GetAppServicePlan.json
 */
export async function getAppServicePlan() {
  const result = await client.appServicePlans.get(
    resourceGroupName as string,
    appServicePlanName as string
  );
  console.log(result);
}

//appServicePlans.list
export async function appServicePlans_list() {
  for await (const item of client.appServicePlans.list()) {
    console.log(item);
  }
}

export async function appService_configuration() {
  const res = await client.webApps.getConfiguration(
    resourceGroupName as string,
    appServiceName as string
  );
  console.log(res);
}
