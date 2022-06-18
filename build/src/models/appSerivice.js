"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arm_appservice_1 = require("@azure/arm-appservice");
const identity_1 = require("@azure/identity");
const config_1 = require("../config");
console.log('🚀 ~ file: appSerivice.ts ~ line 4 ~ subscriptionId', config_1.subscriptionId);
/**
 * This sample demonstrates how to Description for Get an App Service plan.
 *
 * @summary Description for Get an App Service plan.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-03-01/examples/GetAppServicePlan.json
 */
async function getAppServicePlan() {
    const credential = new identity_1.DefaultAzureCredential();
    const client = new arm_appservice_1.WebSiteManagementClient(credential, config_1.subscriptionId);
    const result = await client.appServicePlans.get(config_1.resourceGroupName, config_1.appserviceName);
    console.log(result);
}
exports.default = getAppServicePlan;
