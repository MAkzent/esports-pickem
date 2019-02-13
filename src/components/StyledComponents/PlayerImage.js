import styled from 'styled-components';

const PlayerImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: .2rem;
  background-image: url(${props => props.avatarUrl || "https://cdn.dekki.com/uploads/users/58e6f03424d97c518961b435/avatar/original"});
  background-size: cover;
  background-position: center;
`

export default PlayerImage;