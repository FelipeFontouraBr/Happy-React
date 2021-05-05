import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Elije un orfanato</h2>
                    <p>Muchos ninõs esperán vuestras visitas </p>
                </header>

                <footer>
                    <strong>Badajoz</strong>
                    <span>Extremadura</span>
                </footer>
            </aside>

            <MapContainer 
                center={[38.8794416,-7.0226987]}
                zoom={13}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="fff"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;