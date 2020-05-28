import React, {Fragment} from 'react';
import {Grid, Cell} from 'styled-css-grid';
import styled from 'styled-components';
import {getThemeValue as $} from '../libs/theme';

const Root = styled.ul`
  border-left: 1px solid ${$('lighterBorderColor')};
  padding-left: 0;
`;

const WhereAndWhen = styled.div`
  width: calc(100% - 14px);
  margin-left: 14px;
`;

const Name = styled.li`
  font-weight: bold;
`;

const Time = styled.div`
  font-size: 80%;
`;

const Content = styled.div`
  text-align: justify;
`;

const ExperiencesList = ({hasContent = true, items}) => {
  return (
    <Root>
      <Grid columns={3}>
        {items.map(({id, name, time, content}) => (
          <Fragment key={id}>
            <Cell width={hasContent ? 1 : 3}>
              <WhereAndWhen>
                <Name>{name}</Name>
                <Time>{time}</Time>
              </WhereAndWhen>
            </Cell>
            {hasContent && (
              <Cell width={2}>
                <Content>{content}</Content>
              </Cell>
            )}
          </Fragment>
        ))}
      </Grid>
    </Root>
  );
};

export default ExperiencesList;
