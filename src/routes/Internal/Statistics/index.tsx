import { Carousel } from "@mantine/carousel";
import { AreaChart, BarChart } from "@mantine/charts";
import {
  Box,
  Card,
  Flex,
  Group,
  Paper,
  Text,
  Title,
  alpha,
  lighten,
} from "@mantine/core";
import { Label, XAxis } from "recharts";
import theme from "~/theme";

type SubLevel = {
  id: string;
  // name: string;
  chapters: Record<string, any>[];
};

const sublevels: Record<string, SubLevel> = {
  A1: {
    id: "A1",
    chapters: [
      {
        id: "C1",
        progress: 40,
      },
      {
        id: "C2",
        progress: 50,
      },
      {
        id: "C3",
        progress: 60,
      },
      {
        id: "C4",
        progress: 100,
      },
    ],
  },

  A2: {
    id: "A2",
    chapters: [
      {
        id: "C1",
        progress: 40,
      },
      {
        id: "C2",
        progress: 30,
      },
      {
        id: "C3",
        progress: 20,
      },
      {
        id: "C4",
        progress: 100,
      },
    ],
  },
  A3: {
    id: "A3",
    chapters: [
      {
        id: "C1",
        progress: 40,
      },
      {
        id: "C2",
        progress: 30,
      },
      {
        id: "C3",
        progress: 20,
      },
      {
        id: "C4",
        progress: 100,
      },
    ],
  },
  B1: {
    id: "B1",
    chapters: [
      {
        id: "C1",
        progress: 40,
      },
      {
        id: "C2",
        progress: 30,
      },
      {
        id: "C3",
        progress: 20,
      },
      {
        id: "C4",
        progress: 100,
      },
    ],
  },
};

const data = [
  {
    level: "A1",
    progress: 30,
  },
  {
    level: "A2",
    progress: 40,
  },
  {
    level: "A3",
    progress: 50,
  },
  {
    level: "B1",
    progress: 20,
  },
  {
    level: "B2",
    progress: 20,
  },
  {
    level: "C1",
    progress: 10,
  },
];

const Statistics = () => {
  return (
    <Flex direction="column" py={80} w="100%" mx="auto" maw={1450}>
      <Box m="sm" p="xs">
        <Title order={3} mb="sm">
          Por Subniveles
        </Title>
        <Carousel
          withIndicators
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="center"
          slidesToScroll={3}
          controlSize={30}
          // bg="green"
          controlsOffset={0}
          styles={{
            indicator: { background: "#052148" },
            control: { border: "2px solid #05214825", background: "#fafafa" },
          }}
          h={380}
          px="xl"
          // mx="auto"
        >
          {/*#d5dbe4 */}

          {Object.values(sublevels).map((sublevel) => (
            <Carousel.Slide key={sublevel.id}>
              <Card
                mt="sm"
                mx="xs"
                shadow="sm"
                padding="xl"
                component="a"
                target="_blank"
                bg="White.3"
                // bg="#05214825"
                withBorder
                style={{ borderRadius: 12, borderWidth: "2px" }}
              >
                <Title order={3}>{sublevel.id}</Title>
                <Box
                  w={300}
                  // h={100}
                  py="xs"
                  pr="sm"
                  // bg="White.3"
                  style={{ borderRadius: 6 }}
                  mx="auto"
                  mt="sm"
                >
                  <BarChart
                    h={200}
                    // mx="auto"
                    // w={200}
                    data={sublevel.chapters}
                    tooltipProps={{
                      content: ({ label, payload }) => (
                        <ChartTooltip label={label} payload={payload} />
                      ),
                    }}
                    dataKey="id"
                    fz="h1"
                    fillOpacity={1}
                    series={[{ name: "progress", color: "ToreaBay.5" }]}
                    // textColor="black"

                    // style={{fontWeight:}}
                    tickLine="xy"
                    gridAxis="xy"
                    textColor="ToreaBay.6"
                  ></BarChart>
                </Box>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
      <Box m="sm" p="xs">
        <Title order={3}>General</Title>

        <Card
          mt="sm"
          shadow="sm"
          pt="xl"
          p="xl"
          component="a"
          target="_blank"
          bg="White.3"
          // bg="#05214825"
          withBorder
          style={{ borderRadius: 12, borderWidth: "2px" }}
          flex={1}
        >
          {/*"indigo.6" */}
          <AreaChart
            h={350}
            data={data}
            dataKey="level"
            series={[{ name: "progress", color: "#a1cfe7" }]}
            curveType="bump"
            tickLine="xy"
            withDots={false}
            textColor="ToreaBay.6"
          />
        </Card>
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
