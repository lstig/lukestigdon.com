import { Flex, FlexItem, FlexModifiers, Title } from '@patternfly/react-core';


export default function PageTitle() {
  return (
    <Flex breakpointMods={[{modifier: FlexModifiers["column"]}]}>
      <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-center"]}]}>
        <FlexItem>
          <Title size="4xl" headingLevel="h1">
            <b>Luke Stigdon</b>
          </Title>
        </FlexItem>
      </Flex>
      <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-center"]}]}>
        <FlexItem>
          <Title size="lg" headingLevel="h4">
            Software Developer | DevOps Engineer | Security Specialist
          </Title>
        </FlexItem>
      </Flex>
    </Flex>
  );
}