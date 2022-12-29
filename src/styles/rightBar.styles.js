import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px 15px;
  width: 20%;
  margin-top: 4%;
  .search-container {
    position: sticky;
    border: #222222 1px solid;
    border-radius: 20px;
    width: var(--right);
    padding-right: 5px;
    top: 0;
    z-index: 1100;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 5%;
    .search-form {
      width: 100%;
      position: relative;
      .search-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        left: 15px;
        width: 18px;
        height: 18px;
      }
      input {
        width: 80%;
        background: none;
        border: none;
        font-size: 15px;
        padding: 15px 10px;
        margin-left: 40px;
        border-radius: 30px;
        color: #fff;
        &:focus {
          outline: none;
          border: 1px solid var(--theme-color);
        }
      }
      .submit-btn {
        position: absolute;
        right: 18px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        background-color: var(--theme-color);
        color: #222;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        font-weight: bold;
      }
    }
  }
  .trends,
  .follows {
    background-color: white;
    border: #222222 1px solid;
    border-radius: 20px;
    padding: 15px;
    h2 {
      font-size: 20px;
      color: #222;
    }
  }
  .trends {
    margin-top: 10px;
    &-list {
      margin-top: 30px;
    }
    .trend {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      &__details {
        &__category {
          font-size: 13px;
          display: flex;
          color: #222;
          &--label {
            margin-left: 20px;
            position: relative;
            &::after {
              content: '';
              width: 2px;
              height: 2px;
              background-color: #222;
              border-radius: 50%;
              left: -10px;
              top: 0;
              bottom: 0;
              margin: auto 0;
              position: absolute;
            }
          }
        }
        &__title {
          font-weight: bold;
          color: #222;
          font-size: 16px;
          margin: 2px 0;
          display: block;
        }
        &__tweets-count {
          color: #222;
          font-size: 12px;
        }
      }
      .more-btn {
        opacity: 0.5;
      }
    }
  }
  .follows {
    margin-top: 20px;
    .show-more-text {
      font-size: 14px;
      color: var(--theme-color);
    }
  }
`;
