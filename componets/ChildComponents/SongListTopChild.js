import React from 'react';
import styled from 'styled-components';

const SongListTopChild = props => {
  // console.log(props.data);
  return (
    <Container>
      <Image source={{uri: props.data.al.picUrl}} />
      <Cover>
        <Title numberOfLines={1}>{props.data.name}</Title>
        <NameCover>
          {props.data.ar.map((item, index) => (
            <Name numberOfLines={1} key={index}>
              {item.name}
            </Name>
          ))}
        </NameCover>
      </Cover>
    </Container>
  );
};
export default SongListTopChild;

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  background: white;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;
const Cover = styled.View`
  width: 200px;
  overflow: hidden;
`;
const Title = styled.Text`
  width: 100%;
  overflow: hidden;
  font-size: 18px;
`;
const NameCover = styled.View`
  width: 100%;
  flex-direction: row;
`;
const Name = styled.Text`
  width: 60px;
  color: rgba(0, 0, 0, 0.5);
`;
