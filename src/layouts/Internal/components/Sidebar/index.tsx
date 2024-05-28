import { Box, Divider, Flex, NavLink, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Icon } from "~/components";

const SideBar = () => {
  const { pathname: currentPath } = useLocation();
  const { hovered, ref } = useHover();

  type BarSectionItem = {
    id: string;
    label: string;
    path: string;
    icon: React.ReactNode;
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
          path: "/home",
          icon: <Icon type="book" weight="duotone" />,
        },
        {
          id: "Gramatica",
          label: "Gramatica",
          path: "/grammar",
          icon: <Icon type="grammar" weight="duotone" />,
        },
        {
          id: "Vocabulario",
          label: "Vocabulario",
          path: "/vocabulary",
          icon: <Icon type="vocabulary" weight="duotone" />,
        },
        {
          id: "Estadisticas",
          label: "Estadisticas",
          path: "/statistic",
          icon: <Icon type="statistic" weight="duotone" />,
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
          path: "/settings",
          icon: <Icon type="settings" weight="duotone" />,
        },
      ],
    },
  ];

  return (
    <Flex direction="column" bg="#0f375a" w={300} p="md" h="100vh">
      <Title order={2} mt="md" c="rgb(211,227,253,0.7)">
        Learn French
      </Title>
      {BarSections.map((section, sectionIndex) => {
        const isLast = sectionIndex === BarSections.length - 1;
        return (
          <Fragment key={section.id}>
            <Box mt="xl">
              <Title c="rgba(211,227,253,0.7)" order={6}>
                {section.label}
              </Title>
              {section.items.map((item) => (
                <NavLink
                  key={item.id}
                  component={Link}
                  to={item.path}
                  label={item.label}
                  active={currentPath === item.path}
                  leftSection={item.icon}
                  c="rgba(211,227,253,0.7)"
                  // color="White.4"
                  variant="light"
                  color="#d3e3fd"
                />
              ))}
            </Box>
            {!isLast && <Divider color="#3a3a3a" size="sm" mt="lg" />}
          </Fragment>
        );
      })}
    </Flex>
  );
};

export default SideBar;
