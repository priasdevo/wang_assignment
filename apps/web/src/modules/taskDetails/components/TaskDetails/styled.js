import styled from 'styled-components'

export const DetailContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`
