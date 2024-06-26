import {
  Group,
  Avatar,
  Text,
  Accordion,
  Box,
  Flex,
  Transition,
} from "@mantine/core";
import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { getAllGrammars } from "~/network/grammars/getAllGrammars";

const Grammar = () => {
  const [allgrammars, setAllGrammars] = useState<Grammar[]>();
  type TExampleResponseError = {
    error: string;
  };

  const getGrammar = useCallback(async () => {
    try {
      const grammars = await getAllGrammars();
      console.log(grammars);
      setAllGrammars(grammars);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && "error" in error.response.data) {
          const data = error.response.data.error as TExampleResponseError;
          return data.error;
        }
      }
    }
  }, [setAllGrammars]);

  useEffect(() => {
    getGrammar();
  }, [getGrammar]);

  return (
    <Flex py={80} w="100%" mx="auto" maw={1200}>
      <Accordion
        variant="contained"
        flex={1}
        transitionDuration={500}
        radius="md"
      >
        {allgrammars &&
          allgrammars.map((grammar) => (
            <Accordion.Item value={grammar.id.toString()} key={grammar.id}>
              <Accordion.Control>
                <Text> {grammar.name}</Text>
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
