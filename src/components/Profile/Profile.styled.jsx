import styled from '@emotion/styled';

export const Profile = styled.div`
  width: 500px;
  margin: 0 auto;
  box-shadow: 5px 5px 15px 5px #5c5858;
  border-radius: 5px;
  padding: 20px;
  & img {
    width: 320px;
  }
  background-color: #fcba03;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  margin: 0px;
  `;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  
`;

export const ListItem = styled.li`

 &:not(:last-child) {
margin-right: 10px;
  } 
`;

export const ListItemStats = styled.span`
font-weight: bold;
`;