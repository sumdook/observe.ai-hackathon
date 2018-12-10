import styled from 'styled-components'

const CardWrapper = styled.div`
  height: 700px;
  width: 1200px;
  margin: 80px;
  display: flex;
  align-items: flex-start;
  .delete {
    opacity: 0.2;
    transition: opacity 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .heart {
    transition: all 0.3s;
    cursor: pointer;
  }
  .image {
    height: 700px;
    width: 700px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    height: 700px;
    width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
      display: flex;

      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      .user_details {
        display: flex;
        align-items: center;

        p {
          margin: 10px;
        }
        .username {
          font-weight: bold;
          font-size: 18px;
          span {
            font-weight: normal;
            font-size: 16px;
            opacity: 0.5;
          }
        }
      }
      .icon {
        margin: 20px;
      }
    }

    .icons {
      display: flex;
      padding: 0 25px;
      .icon {
        margin: 20px 10px;
      }
    }

    .likes {
      display: flex;
      align-items: center;
      margin: 10px 20px;
      p {
        margin: 10px;
        font-size: 16px;
        span {
          font-weight: bold;
        }
      }
    }

    .caption {
      margin: 10px 30px;
      font-size: 16px;
      .username {
        font-weight: bold;
        font-size: 16px;
        margin: 0 2px;
      }
    }

    .comments {
      display: flex;
      flex-direction: column;
      margin: 10px 30px;
      flex-grow: 1;
      overflow: hidden;
      overflow-y: scroll;

      p {
        margin: 2px 10px;
        font-size: 17px;
        span {
          font-weight: bold;
          font-size: 17px;
          margin: 0 10px;
        }
      }
    }
    .add_comment {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        margin: 15px;
        width: 40px;
        transform: rotate(-90deg);
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1400px) {
    height: 500px;

    .image {
      height: 500px;
      width: 500px;
    }
    .content {
      height: 500px;
      width: 300px;
    }
  }

  @media (max-width: 1100px) {
    height: 300px;

    .image {
      height: 300px;
      width: 300px;
    }

    .content {
      height: 300px;
      width: 300px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    height: 50vh;
    margin: 40px;
    .image {
      height: 300px;
      width: 300px;
    }

    .content {
      height: 450px;
      width: 300px;
    }
    .input {
      height: 100px;
    }
    .send {
      width: 10px;
    }
  }
`
export default CardWrapper
