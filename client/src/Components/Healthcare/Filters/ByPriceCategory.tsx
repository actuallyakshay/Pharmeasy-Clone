import { VStack } from "@chakra-ui/layout";
import React from "react";
import { Radio, RadioGroup, Wrap, WrapItem } from "@chakra-ui/react";

const ByPriceCategory: React.FC = () => {
  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    // <VStack border={"1px solid red"}>
    <RadioGroup defaultValue="6">
      <Wrap spacing="50px">
        <WrapItem>
          {arr?.map((el: string, i: number) => {
            return (
              <Radio
                onChange={hanldeChange}
                key={i + el}
                colorScheme="teal"
                value={el}
              >
                {el}
              </Radio>
            );
          })}
          {/* </RadioGroup> */}
        </WrapItem>
      </Wrap>
    </RadioGroup>
    // </VStack>
  );
};

export default ByPriceCategory;

const arr: Array<string> = [
  "0 - 200",
  "200 - 800",
  "800 - 1500",
  "1500 - 3000",
  "3000 - 6000",
  "6000 above",
];
