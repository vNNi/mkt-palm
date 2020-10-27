import React from 'react';

import IconList from '../../Icons/list.svg';
import IconAdd from '../../Icons/add.svg';
import IconUser from '../../Icons/user_profile.svg';

import { Container, BottomNavItem, AddButton } from './bottom-nav.styles';

const BottomNav = () => {
  const ListIcon = () => <img src={IconList} alt="Listagem de listas" />;
  const AddIcon = () => <img src={IconAdd} alt="Adicionar nova lista" />;
  const UserIcon = () => <img src={IconUser} alt="Seu perfil" />;

  return <Container>
      <BottomNavItem>
        <ListIcon />
      </BottomNavItem>
      <BottomNavItem mb={"2em"}>
          <AddButton>
              <AddIcon />
          </AddButton>
      </BottomNavItem>
        <BottomNavItem>
          <UserIcon />
      </BottomNavItem>
    </Container>;
};

export default BottomNav;
