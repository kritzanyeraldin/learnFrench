import {
  Group,
  Avatar,
  Text,
  Accordion,
  Box,
  Flex,
  Transition,
} from "@mantine/core";
import { useState } from "react";

const grammars = [
  {
    id: "1",
    label: "Gramatica 1",
    description: "Fascinated with cooking, though has no sense of taste",
    content:
      "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: "2",
    label: "Gramatica 2",
    description: "One of the richest people on Earth",
    content:
      "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: "3",
    label: "Gramatica 3",
    description: "Overweight, lazy, and often ignorant",
    content:
      "Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.",
  },
];

const Grammar = () => {
  return (
    <Flex py={80} w="100%" mx="auto" maw={1200}>
      <Accordion
        variant="contained"
        flex={1}
        transitionDuration={500}
        radius="md"
      >
        {grammars.map((grammar) => (
          <Accordion.Item value={grammar.id} key={grammar.label}>
            <Accordion.Control>
              <Text> {grammar.label}</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">{grammar.content}</Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Flex>
  );
};

export default Grammar;
