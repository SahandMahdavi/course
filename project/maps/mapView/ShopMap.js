import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text, TouchableOpacity,
} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 35.7193493;
const LONGITUDE = 51.3072108;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const COLORS = [
  '#7F0000',
  '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
  '#B24112',
  '#E5845C',
  '#238C23',
  '#7F0000',
];

const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];


export default class ShopsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      data: [],
      COORDINATES: [
        {
          id: 1,
          coordinates: [
            {
              latitude: 35.7612263,
              longitude: 51.4416052,
            },
          ],
        },
        {
          id: 2,
          coordinates: [
            {
              latitude: 35.7385497,
              longitude: 51.3116651,
            },
          ],
        },
      ],
      shop: '',
      latitude: '',
      longitude: '',
    };
  }

  componentDidMount() {
    fetch('https://class-react.back4app.io/classes/Map', {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'tRAzuwYGenZLCp5xWxPhNQBtXqIwyRQX5jkygeo6',
        'X-Parse-REST-API-Key': 'ZLpDXRc2yCUAfbFZRnARrtYoiqOOiKbhOOoUf9pi',
      },
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson.results,
        });
      }).catch((error) => {
      console.error(error.message);
    });


  };

  mapMarkers = () => {
    const {data} = this.state;
    return data.map((data) =>
      <Marker
        key={data.key}
        coordinate={
          {
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude),
          }
        }
        title={data.title}
        description={data.description}
        onPress={() => {
          this.setState({
            shop: data.storeImage,
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude)
          });
          {this.renderStoreImage();}
        }}>
        <Image source={{uri: data.marker.url}} style={{height: 35, width: 35}}/>
      </Marker>,
    );
  };

  renderStoreImage() {
    const {shop} = this.state;
    return (
        <Image
          style={{
            width: 200,
            height: 150,
            position: 'absolute',
            right: 16,
            bottom: 16,
            borderRadius: 8,
            overflow: 'hidden',
          }}
          source={{uri: shop}}/>
    );
  };

  render() {
    const {region} = this.state;
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => {
            this.map = ref;
          }}
          zoomControlEnabled={true}
          zoomScale={true}
          zoomEnabled={true}
          zoomTapEnabled={true}
          showsMyLocationButton={true}
          showsUserLocation={true}
          followUserLocation={true}
          customMapStyle={customStyle}
          minZoomLevel={5}
          maxZoomLevel={10}
          zoom={16}
          provider={this.props.provider}
          style={styles.map}
          initialRegion={region}>
          {this.mapMarkers()}
          {this.state.COORDINATES.map(polyline => (
            <Polyline
              key={polyline.id}
              coordinates={polyline.coordinates}
              strokeColor="blue"
              strokeWidth={3}
            />
          ))}
        </MapView>
        {this.renderStoreImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width,
    height,
  },
});

