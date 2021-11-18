import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerIcon from '../images/map-marker.svg';
import '../styles/pages/Orphanagesmap.css';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerIcon} alt="happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>Cajamar</span>
                </footer>
            </aside>

            <Map 
                center={[-23.3542169,-46.950316]}
                zoom={15}
                style={{width:'100%', height:'100%'}} > 

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/ferferq/ckg8eg56f1o5719pdxv6qx88w/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/ferferq/ckg8eg56f1o5719pdxv6qx88w/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmVyZmVycSIsImEiOiJja2c4ZDY3dmIwMHRsMnlub3ptdmJ6Zno1In0.JipcEwg6KQWnKbaoET0kdA`} />

</Map>

            <Link to="/" className="creat-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;