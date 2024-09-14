import React from "react";
import styled from "styled-components";

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: color 0.6s ease-in-out;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const Hr = styled.hr`
  margin: 20px 0;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

export default function SkillsList({ separable, list }) {
  let mainSkills, subSkills;

  if (separable) {
    mainSkills = list.filter((el) => el.importance === "main");
    subSkills = list.filter((el) => el.importance === "sub");
  }

  return (
    <>
      {separable == false ? (
        <SkillList>
          {list.map((item) => (
            <SkillItem key={item.name}>
              <SkillImage src={item.image} />
              {item.name}
            </SkillItem>
          ))}
        </SkillList>
      ) : (
        <>
          <SkillList>
            {mainSkills.map((item) => (
              <SkillItem key={item.name}>
                <SkillImage src={item.image} />
                {item.name}
              </SkillItem>
            ))}
          </SkillList>
          <Hr />
          <SkillList>
            {subSkills.map((item) => (
              <SkillItem key={item.name}>
                <SkillImage src={item.image} />
                {item.name}
              </SkillItem>
            ))}
          </SkillList>
        </>
      )}
    </>
  );
}
