import logo from "./logo.svg";
import "./App.css";
import "@tremor/react/dist/esm/tremor.css";
import {
  Card,
  Text,
  Metric,
  Flex,
  ProgressBar,
  AreaChart,
  Title,
  BarChart,
  Subtitle,
  LineChart,
} from "@tremor/react";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const lineChartdata = [
  {
    year: 1951,
    "Population growth rate": 1.74,
  },
  {
    year: 1952,
    "Population growth rate": 1.93,
  },
  {
    year: 1953,
    "Population growth rate": 1.9,
  },
  {
    year: 1954,
    "Population growth rate": 1.98,
  },
  {
    year: 1955,
    "Population growth rate": 2,
  },
];

const barChartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];
const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <Card maxWidth="max-w-sm">
          <Text>Sales</Text>
          <Metric>$ 71,465</Metric>
          <Flex marginTop="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar percentageValue={32} marginTop="mt-2" />
        </Card>
        <Card>
          <Title>Newsletter revenue over time (USD)</Title>
          <AreaChart
            data={chartdata}
            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
            dataKey="date"
            height="h-72"
            colors={["indigo", "cyan"]}
            valueFormatter={dataFormatter}
            marginTop="mt-4"
          />
        </Card>
        <Card>
          <Title>Number of species threatened with extinction (2021)</Title>
          <Subtitle>
            The IUCN Red List has assessed only a small share of the total known
            species in the world.
          </Subtitle>
          <BarChart
            data={barChartdata}
            dataKey="name"
            categories={["Number of threatened species"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
            yAxisWidth="w-12"
          />
        </Card>
        <Card>
          <Title>Population growth rate (1951 to 2021)</Title>
          <LineChart
            data={lineChartdata}
            dataKey="year"
            categories={["Population growth rate"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
            yAxisWidth="w-10"
          />
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
