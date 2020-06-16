import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import List from './List'
import Icon from './Icon'

const Div = styled.div`
  width: 12rem;
  background-color: #F2F2F2;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  flex: 0 0 auto;
  white-space: nowrap;
`;

const Title = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  margin-top: -0.5rem;
  font-weight: bold;
  position: relative;
`;

const Container = styled.div`
  margin-top: 1rem;
  position: relative;
  flex: 1 1 auto;
`;

const ContainerList = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;

  > * { 
    margin-bottom: 0.5rem;
  }

  > :last-child { 
    margin-bottom: 0;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

function Sidebar(props) {

  return (
    <Div>
      <Title>
        <FormattedMessage {...messages.title} />
        <ButtonContainer>
          <Icon icon={"bars"} small/>
        </ButtonContainer>
      </Title>
      <Container>
        <ContainerList>
          <List icon='tachometer-alt' to={"/"}>
            <FormattedMessage {...messages.dashboard} />
          </List>
          <List icon='envelope' to={"/keluhan_user"}>
            <FormattedMessage {...messages.keluhan_user} />
          </List>
          <List icon='file-alt' to={"/input_data"}>
            <FormattedMessage {...messages.input_data} />
          </List>
          <List icon='user-cog' to={"/data_control"}>
            <FormattedMessage {...messages.data_control} />
          </List>

        </ContainerList>
      </Container>
    </Div>
  );
}

Sidebar.propTypes = {

};

export default Sidebar;
