import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import ListChild from './ListChild';

class List extends Component {
  state = {
    bool: true,
  };
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        {this.props.data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              this.props.navigation.push('Play', {
                id: item.id,
                backgroundImg: item.al.picUrl,
                title: item.name,
              })
            }>
            <ListChild
              list={index}
              title={item.name}
              ar={item.ar}
              al={item.al}
            />
          </TouchableOpacity>
        ))}
      </Container>
    );
  }
}

export default List;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(229, 229, 229, 0.6);
  border-radius: 5px;
  padding: 0 15px;
`;
const Title = styled.Text`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;
