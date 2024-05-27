import { BarChart } from "@mantine/charts";
import { Box, Flex, Paper, Text } from "@mantine/core";

const data = [
  { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
  // { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  // { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
  // { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
  // { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  // { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
const Statistics = () => {
  return (
    <Flex direction="column" py={80} w="100%" mx="auto">
      <Box h={300} bg="ToreaBay.2">
        <Text>Por subniveles</Text>
        <Box bg="green" w={600} p="sm">
          <BarChart
            h={500}
            // w={200}
            data={data}
            tooltipProps={{
              content: ({ label, payload }) => (
                <ChartTooltip label={label} payload={payload} />
              ),
            }}
            withLegend
            legendProps={{
              verticalAlign: "top",
              // width: 300,
            }}
            dataKey="month"
            series={[
              { name: "Smartphones", color: "violet.6" },
              { name: "Laptops", color: "blue.6" },
              { name: "Tablets", color: "teal.6" },
            ]}
            tickLine="none"
            gridAxis="none"
            withYAxis={false}
          />
        </Box>
      </Box>
    </Flex>
  );
};

interface ChartTooltipProps {
  label: string;
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="lg" radius="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

export default Statistics;
