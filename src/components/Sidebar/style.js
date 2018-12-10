import styled from 'styled-components'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  padding: 10px;
  margin: 0 80px 0 70px;
  height: 85vh;
  justify-content: space-between;

  .viewNav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon {
    width: 25px;
    margin: 15px 0;
    opacity: 0.3;
    transition: opacity 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 753px) {
      display: none;
    }
  }
  .active {
    opacity: 1;
  }

  .add_icon {
    cursor: pointer;
    width: 60px;
    @media (max-width: 753px) {
      margin: 15px;
      width: 40px;
      display: none;
    }
  }

  @media (max-width: 753px) {
    justify-content: flex-end;
    margin: 0 20px 0 10px;
    display: none;
  }
`

export default SidebarWrapper
