import styled from "styled-components";

const StyledFilterWrapper = styled.div`
  margin-bottom: 25px;
`;

const StyledSubTitle = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  color: rgb(36, 35, 65);
`;

const StyledFiltersWrap = styled.div`
  display: flex;
`;

const StyledFilter = styled.button`
  flex: 1 0 auto;
  padding: 10px 6px;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.3px;
  background-color: ${({ active }) =>
    active ? "rgb(67, 135, 233)" : "rgb(199, 228, 297)"};
  color: ${({ active }) => (active ? "white" : "rgb(36, 35, 65)")};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:nth-last-child(n + 2) {
    margin-right: 10px;
  }
  &:hover {
    color: white;
    background-color: rgb(67, 135, 233);
  }
`;

export default function TodoFilter({ activeFilter, onFilterChange }) {
  const filters = ["Все", "Завершеные", "Незавершеные"];

  return (
    <StyledFilterWrapper>
      <StyledSubTitle>Фильтр задач:</StyledSubTitle>
      <StyledFiltersWrap>
        {filters.map((filter) => (
          <StyledFilter
            key={filter}
            active={activeFilter === filter ? true : false}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </StyledFilter>
        ))}
      </StyledFiltersWrap>
    </StyledFilterWrapper>
  );
}
