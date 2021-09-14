import { URL_DASHBOARD } from "Helpers/urls";
import Home from "Components/Home";
import { URL_Test } from "Helpers/urls";

export default [
  {
    path: URL_Test,
    name: "Test",
    icon: "tim-icons icon-chart-pie-36",
    component: Home,
    exact: true,
  },
];
