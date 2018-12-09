import styled from 'styled-components'

const CardWrapper = styled.div`
  height: 550px;
  width: 480px;
  margin: 20px;

  .image {
    height: 480px;
    width: 480px;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .delete {
    opacity: 0.2;
    transition: opacity 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .comment {
    width: 22px;
    margin: 10px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;

      .user_details {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          margin: 5px;
        }
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        margin: 10px;
        font-size: 18px;
      }
      .icon {
        margin: 10px;
      }
    }
  }
`
export default CardWrapper
