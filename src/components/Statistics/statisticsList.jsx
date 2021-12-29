import React from "react";
import PropTypes from "prop-types";
import { Section, SectionTitle, Sectionlist, SectionItem, Label, Percentage } from "./Statistics.styled";

function getRandomColor() {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}

      <Sectionlist>
              {stats.map(({id, label, percentage}) => (
          <SectionItem key={id} style={{backgroundColor:getRandomColor()}}>
            <Label>{label}: </Label>
            <Percentage>{percentage}%</Percentage>
          </SectionItem>
        ))}
      </Sectionlist>
    </Section>
  );
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ).isRequired,
}