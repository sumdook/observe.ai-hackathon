import styled from 'styled-components'
const HeaderWrapper = styled.div`
  height: 170px;
  margin: 40px 0;
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

  .navIcon {
    width: 25px;
    margin: 20px 30px;
    opacity: 0.4;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
    @media (max-width: 753px) {
      width: 25px;
      margin: 20px 20px;
    }
  }
  .active {
    img {
      opacity: 1;
    }
  }

  .home,
  .search {
    opacity: 0.3;
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
