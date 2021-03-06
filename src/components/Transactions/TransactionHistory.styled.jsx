import styled from '@emotion/styled';

export const Table = styled.table`
width: 700px;
margin: 0 auto;
-webkit-box-shadow: 5px 5px 15px 5px #5c5858;
box-shadow: 5px 5px 15px 5px #5c5858; 
border-collapse: collapse;

th {
  padding: 15px;
  font-size: 15px;
  font-weight: 600;
  background-color: rgb(68, 185, 206);
  border: 1px solid #fff;
  color: #fff;
  text-transform: uppercase;
}

td {
  padding: 15px;
  font-size: 15px;
  text-align: center;
  border: 1px solid grey;
  text-transform: capitalize; 
 
}

tr:nth-child(2n) {
  background-color: #ebf1f3;
}

`;

export const Title = styled.thead`
    text-align: center;
    text-transform: uppercase;
`;

