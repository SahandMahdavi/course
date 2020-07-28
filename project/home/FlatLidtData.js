import React, {Component} from 'react';
import {Text} from 'react-native';

export default class FlatListData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {name:'Patrick star'},
        {name:'Gallileo'},
        {name:'Einsten'},
        {name:'Peterson'},
        {name:'Schwarzenneger'},
        {name:'Dostoyevsky'}],
    };
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <Text></Text>
    );
  }
}
