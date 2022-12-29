import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5%;
  border: #222 1px solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px 20px;
  height: 100%;
  width: 20%;
  .header {
    padding: 15px;
  }
  .buttons {
    margin-top: 5px;
    max-width: 250px;
    a,
    button {
      margin-bottom: 12px;
      color: #222;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      border-radius: 30px;
      font-size: 18px;
      padding-right: 25px;
      text-decoration: none;
      --icon-size: 25px;
      .btn--icon {
        margin-right: 15px;
        height: var(--icon-size);
        width: var(--icon-size);
        position: relative;
      }
    }
  }
  .tweet-btn {
    background-color: var(--theme-color);
    margin-top: 10px;
    border-radius: 30px;
    color: #222;
    text-align: center;
    padding: 15px 0;
    font-size: 16px;
  }
`;
