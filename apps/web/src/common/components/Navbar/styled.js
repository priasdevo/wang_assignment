import { styled } from '@mui/material'

export const NavbarContainer = styled('div')`
  padding: 5px 66px;
  position: sticky;
  z-index: 99;
  top: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: min(50px, 3%);
  box-shadow: ${({ theme }) => theme.shadows[3]};
  height: 45px;
`
