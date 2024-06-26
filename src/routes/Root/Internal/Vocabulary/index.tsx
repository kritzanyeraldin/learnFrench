import { Accordion, Button, Flex, Text } from "@mantine/core";
import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { getAllVocabularies } from "~/network/vocabularies/getAllVocabularies";

const vocabularies = [
  {
    id: "1",
    label: "Vocabulario 1",
    description: "Fascinated with cooking, though has no sense of taste",
    content:
      "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: "2",
    label: "Vocabulario 2",
    description: "One of the richest people on Earth",
    content:
      "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: "3",
    label: "Vocabulario 3",
    description: "Overweight, lazy, and often ignorant",
    content:
      "Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.",
  },
];

const Vocabulary = () => {
  const [allVocabularies, setAllVocabularies] = useState<Vocabulary[]>();
  type TExampleResponseError = {
    error: string;
  };
  const getVocabularies = useCallback(async () => {
    try {
      const grammars = await getAllVocabularies();
      console.log(grammars);
      setAllVocabularies(grammars);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && "error" in error.response.data) {
          const data = error.response.data.error as TExampleResponseError;
          return data.error;
        }
      }
    }
  }, [setAllVocabularies]);

  const cleanData = (data: string): Record<string, string> => {
    // Remover caracteres innecesarios (comillas dobles al principio y al final)
    const cleanedData = data.replace(/^"|"$/g, "");

    // Parsear el JSON limpio a un objeto
    const parsedData = JSON.parse(cleanedData);
    console.log(parsedData);
    Object.entries(parsedData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
      // Aquí puedes realizar cualquier operación con key y value
    });

    return parsedData;
  };

  useEffect(() => {
    getVocabularies();
  }, [getVocabularies]);
  return (
    <Flex py={80} w="100%" mx="auto" maw={1200}>
      <Accordion
        variant="contained"
        flex={1}
        transitionDuration={500}
        radius="md"
      >
        {allVocabularies &&
          allVocabularies.map((vocabulary) => (
            <Accordion.Item
              value={vocabulary.id.toString()}
              key={vocabulary.id}
            >
              <Accordion.Control>
                <Text> {vocabulary.name}</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm">{vocabulary.content}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
      </Accordion>
    </Flex>
  );
};

export default Vocabulary;
