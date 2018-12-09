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
      }
    }

    .caption {
      margin: 10px 30px;
    }

    .comments {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      margin: 10px 30px;

      p {
        margin: 2px 10px;
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
`
export default CardWrapper
