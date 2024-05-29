import { Box, Flex, Stack, Switch, Text } from "@mantine/core";

const settings = [
  {
    id: "1",
    name: "Reproduccion Automatica de Voz",
    description: "Reproduccion Automatica de Voz",
  },
  {
    id: "2",
    name: "Continuar una leccion Aumaticamente",
    description: "Continuar una leccion Aumaticamente",
  },
];

const Settings = () => {
  return (
    <Flex direction="column" w="100%" mx="auto" maw={1320} gap="sm" py={80}>
      <Box style={{ border: "2px solid #DAE1EA", borderRadius: 6 }} p="xl">
        <Stack>
          {settings.map((setting) => (
            <Switch
              // bg="red"
              key={setting.id}
              defaultChecked
              color="ToreaBay.5"
              labelPosition="left"
              label={setting.name}
              description={setting.description}
              size="md"
              onLabel="ON"
              offLabel="OFF"
              styles={{
                root: { flex: 1 },
                body: {
                  flex: 1,
                  justifyContent: "space-between",
                  // alignItems: "center",
                },
              }}
            />
          ))}
        </Stack>

        <Text mt="xl">comentarios</Text>
      </Box>
    </Flex>
  );
};

export default Settings;
