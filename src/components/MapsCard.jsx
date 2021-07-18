import React, { Component } from 'react';
import '../assets/css/maps.scss';
import PropTypes from 'prop-types';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import Polyline from 'ol/format/Polyline';
import Feature from 'ol/Feature';
import { Style, Stroke } from 'ol/style';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';

class MapsCard extends Component {
  static get propTypes() {
    return {
      polyline: PropTypes.string.isRequired,
    };
  }

  componentDidMount() {
    const { polyline } = this.props;

    const vectorSource = new VectorSource();

    const route = new Polyline({
      factor: 1e5,
    }).readGeometry(polyline, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    });
    const feature = new Feature({
      type: 'route',
      geometry: route,
    });
    feature.setStyle(new Style({
      stroke: new Stroke({
        width: 4,
        color: [252, 66, 2, 0.5],
      }),
    }));

    vectorSource.addFeature(feature);
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // eslint-disable-next-line no-new
    new Map({
      target: 'map',
      controls: [],
      interactions: [],
      layers: [
        new Tile({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: this.getCenterOfExtent(route.getExtent()),
        zoom: 13.5,
      }),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getCenterOfExtent(extent) {
    const X = extent[0] + (extent[2] - extent[0]) / 2;
    const Y = extent[1] + (extent[3] - extent[1]) / 2;
    return [X, Y];
  }

  render() {
    return (
      <div id="map" className="map" />
    );
  }
}

export default MapsCard;
