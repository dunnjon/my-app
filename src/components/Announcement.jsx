import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: teal;
  font-color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>Flash Sale up to 50% off</Container>;
};

export default Announcement;
