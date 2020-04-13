import Link from 'next/link';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import PageTitle from '../components/page-title';
import { Stack, StackItem, Bullseye, Level, LevelItem, Title } from '@patternfly/react-core';

export default function Index() {
  return (
    <Stack>
      <StackItem isFilled>
        <Bullseye>
          <PageTitle />
        </Bullseye>
      </StackItem>
      <StackItem>
        <Level gutter="md" className={css(spacingStyles.pMd)}>
          <LevelItem />
          <LevelItem>Level Item</LevelItem>
          <LevelItem />
        </Level>
      </StackItem>
    </Stack>
  );
}