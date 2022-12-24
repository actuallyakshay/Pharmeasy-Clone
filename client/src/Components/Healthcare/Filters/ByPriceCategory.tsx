import { VStack } from "@chakra-ui/layout";
import React from "react";
import { Radio, RadioGroup, Wrap, WrapItem } from "@chakra-ui/react";

interface IProps {
  hanldePriceCategory: Function;
}

const ByPriceCategory: React.FC<IProps> = ({ hanldePriceCategory }) => {
  return (
    <RadioGroup defaultValue="6">
      <Wrap spacing="50px">
        <WrapItem>
          {arr?.map((el: string, i: number) => {
            return (
              <Radio
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  hanldePriceCategory(e)
                }
                key={i + el}
                colorScheme="teal"
                value={el}
              >
                {el}
              </Radio>
            );
          })}
        </WrapItem>
      </Wrap>
    </RadioGroup>
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
