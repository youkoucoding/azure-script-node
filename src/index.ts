import {
  getAppServicePlan,
  appServicePlans_list,
  appService_configuration,
} from './modules/appServices';

getAppServicePlan().catch(console.error);

appServicePlans_list().catch(console.error);

appService_configuration().catch(console.error);
