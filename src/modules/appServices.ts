import { WebSiteManagementClient } from '@azure/arm-appservice';
import { DefaultAzureCredential } from '@azure/identity';
import { subscriptionId, resourceGroupName, appServicePlanName, appServiceName } from '../config';

const credential = new DefaultAzureCredential();
const client = new WebSiteManagementClient(credential, subscriptionId);

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

export async function webApps_get() {
  await client.webApps.get(resourceGroupName, appServiceName).then((res) => {
    console.log(res);
  });
}

export async function appService_configuration() {
  // const res = await client.webApps.getConfiguration(
  //   resourceGroupName as string,
  //   appServiceName as string
  // );
  // console.log(await client.getSubscriptionDeploymentLocations());
  // // console.log(res);
  // console.log(client.apiVersion);
}

//webApps.startSlot
export async function webApps_startSlot() {
  // await client.webApps.startSlot(resourceGroup, name, soltName).then((res) => {
  // console.log(res);
  // });
}

//webApps.restartSlot
export async function webApps_restartSlot() {
  // await client.webApps.restartSlot(resourceGroup, name, soltName).then((res) => {
  // console.log(res);
  // });
}

//webApps.stopSlot
export async function webApps_stopSlot() {
  // await client.webApps.stopSlot(resourceGroup, name, soltName).then((res) => {
  // console.log(res);
  // });
}
