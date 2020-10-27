import styled from 'styled-components';
import { space } from 'styled-system';

import { colors }  from '../../Theme';

export const Container = styled.div`
  height: 46px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const BottomNavItem = styled.div`
  ${space}
`;

export const AddButton = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 100%;
    background-color: ${colors.primary};
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.12), 0px 14px 14px rgba(0, 0, 0, 0.237602);
`;
