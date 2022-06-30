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
  margin-left: 11px;
  padding-top: 7px;
`;

const Name = styled.li`
  font-weight: bold;
`;

const Time = styled.div`
  font-size: 80%;
`;

const Content = styled.div`
  text-align: left;

  .title {
    margin-bottom: 10px;
    font-size: 120%;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  li {
    font-size: 90%;
    list-style: none;
    &:before {
      content: '-';
      margin-right: 4px;
    }
  }

  i {
    font-size: 75%;
    line-height: 15px;
  }
`;

const ExperiencesList = ({hasContent = true, items}) => {
  return (
    <Root>
      <Grid columns={5}>
        {items.map(({id, name, time, content}) => (
          <Fragment key={id}>
            <Cell width={hasContent ? 1 : 5}>
              <WhereAndWhen>
                <Name>{name}</Name>
                <Time>{time}</Time>
              </WhereAndWhen>
            </Cell>
            {hasContent && (
              <Cell width={4}>
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
