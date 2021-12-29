import styled from '@emotion/styled';

export const FriendsList = styled.ul`
display: block;
width: 500px;
margin: 0 auto;
padding: 0 20px;
margin-bottom: 30px;
`;

export const ItemList = styled.li`
display: flex;
align-items: center;
margin: 0 auto;
width: 250px;
padding: 15px 20px;
-webkit-box-shadow: 5px 5px 15px 5px #5c5858;
box-shadow: 5px 5px 15px 5px #5c5858; 
border-radius: 5px;
background-color: #bca8f7;
cursor: pointer;

&:hover {
  box-shadow: 0px -2px 32px 1px $accent-color;
  transform: scale(1.1);
}


&:not(:last-child) {
  margin-bottom: 15px;
} 
`;

export const ListOnline = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  background-color: #bcf0bb;
  border: 1px solid green;
  border-radius: 50%;
`;

export const ListOffline = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  background-color: #f06c86;
  border: 1px solid red;
  border-radius: 50%;
`;

export const Avatar = styled.img`
margin-right: 15px;
margin-left: 10px;
`;

