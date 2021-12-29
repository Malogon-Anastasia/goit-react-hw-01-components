import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 600px;
  margin: 20px auto;
  box-shadow: 5px 5px 15px 5px #5c5858;
  border-radius: 5px;
  text-align: center;
  background-color: #cefc03;
}
`;

export const SectionTitle = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const Sectionlist = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const SectionItem = styled.li`
  padding: 12px;
  box-shadow: 5px 5px 15px 5px #5c5858;
  border-radius: 5px;
  background: white;
  color: black;
  &:not(:last-child) {
    margin-right: 5px;
  } 

  &:hover {
    box-shadow: 0px -2px 32px 1px $accent-color;
    transform: scale(1.1);
  }
`;

export const Label = styled.span`
display: inline-block;
  width: 100%;
`;

export const Percentage = styled.span`
display: inline-block;
  width: 100%;
  font-weight: 700;
`;
