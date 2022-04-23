import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTooltip
} from "@progress/kendo-react-charts";
import { COLORS } from "./constant";

const renderTooltip = context => {
  const { category, value } = context.point || context;
  return (
    <div>
      {category}: {value}%
    </div>
  );
};

// Graph data
const applicationsStatusThisMonth = [
  {
    status: "Lada",
    value: 15,
    color: COLORS.accepted,
  },
  {
    status: "Audi",
    value: 15,
    color: COLORS.interviewing,
  },
  {
    status: "BMW",
    value: 70,
    color: COLORS.rejected,
  },
];

const labelContent = e => e.category;

const Charts = props => {
  return (
    <Chart >
      <ChartTitle text="Applications status - this month" />
      <ChartLegend visible={false} />
      <ChartTooltip render={renderTooltip} />
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={applicationsStatusThisMonth}
          categoryField="status"
          field="value"
          size={50}
        >
          <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  );
};

export default Charts;