import { Box, Flex, NavLink, Text, Title } from "@mantine/core";

const SideBar = () => {
  type BarSectionItem = {
    id: string;
    label: string;
  };
  type BarSection = {
    id: string;
    label: string;
    items: BarSectionItem[];
  };
  const BarSections: BarSection[] = [
    {
      id: "General",
      label: "General",
      items: [
        {
          id: "Inicio",
          label: "Inicio",
        },
        {
          id: "Revisar",
          label: "Revisar",
        },
        {
          id: "Vocabulario",
          label: "Vocabulario",
        },
      ],
    },
    {
      id: "Configuración",
      label: "Configuración",
      items: [
        {
          id: "Ajustes",
          label: "Ajustes",
        },
      ],
    },
  ];
  return (
    <Flex direction="column">
      <Title>Learn French</Title>
      {BarSections.map((section) => (
        <Box bg="red" key={section.id}>
          <Title>{section.label}</Title>
          {section.items.map((item) => (
            <NavLink
              key={section.id}
              href="#required-for-focus"
              label={item.label}
              //   leftSection={}
            />
          ))}
        </Box>
      ))}
    </Flex>
  );
};

export default SideBar;
