import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import 'leaflet/dist/leaflet.css';

export default function Maps() {
  const position = [-27.267,-51.130]
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="info">
              <h1>Situação da Vigilância Genômica no Mapa de Santa Catarina</h1>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  );
};
