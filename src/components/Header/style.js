import styled from 'styled-components'
const HeaderWrapper = styled.div`
  height: 170px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 200px;
    margin: 20px;
  }

  .logo_mobile {
    width: 35px;
    margin: 30px;
    display: none;
  }
  .userInfo {
    margin: 20px 50px;
    @media (max-width: 753px) {
      margin: 0;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    width: 100px;
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
  }
  .active {
    opacity: 1;
  }

  @media (max-width: 753px) {
    .logo {
      display: none;
    }
    .logo_mobile {
      display: block;
    }
    .send {
      display: none;
    }
  }
`

export default HeaderWrapper
