// src/components/NewTaskPage/styled.js
import styled from 'styled-components';

export const NewTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  max-width: 50%; // Change max-width to match the TaskCard width
  margin: 0 auto;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
