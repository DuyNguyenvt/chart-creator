import { FaChartPie, FaChartLine } from "react-icons/fa";
export const DEFINE_NAV_ITEMS = {
  SAMPLE_1: "SAMPLE_1",
  SAMPLE_2: "SAMPLE_2",
};

export const DEFINE_NAV_CHART_TYPE = {
  DOUGHNUT_CHART: {
    ENUM: "DOUGHNUT_CHART",
    name: "Doughnut Chart",
    icon: FaChartPie,
  },
  SPLINE_CHART: {
    ENUM: "SPLINE_CHART",
    name: "Spline Chart",
    icon: FaChartLine,
  },
};
