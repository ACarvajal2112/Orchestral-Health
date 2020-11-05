import styled from 'styled-components';

export const InstructorDetailContainer = styled.div`
  display: flex;
  position: relative;
  padding: 4px 0;
  margin-right: 4px;
`;

export const DetailIcon = styled.span`
  display: inline-block;
  margin-right: 4px;
  padding: 1rem;
  border-radius: 50%;
  background: orange;

  i {
    font-size: 1.5em;
  }

  // shrink detail icon on small-to-medium screen sizes
  @media screen and (max-width: 1024px){
    transform: scale(.8)
  }
`;

export const DetailLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
`;
