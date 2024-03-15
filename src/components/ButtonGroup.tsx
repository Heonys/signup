import { Box, Button, Flex } from '@chakra-ui/react';

type Props = {
  leftLabel: string;
  rightLabel: string;
  leftFn?: (...args: any) => void;
  rightFn?: (...args: any) => void;
};

const ButtonGroup = ({ leftLabel, rightLabel, leftFn, rightFn }: Props) => {
  return (
    <Flex justifyContent="center" gap={10}>
      <Box flexGrow={1}>
        <Button width="100%" colorScheme="blue" size="sm" onClick={leftFn}>
          {leftLabel}
        </Button>
      </Box>
      <Box flexGrow={1}>
        <Button type="submit" width="100%" colorScheme="blue" size="sm" onClick={rightFn}>
          {rightLabel}
        </Button>
      </Box>
    </Flex>
  );
};

export default ButtonGroup;
