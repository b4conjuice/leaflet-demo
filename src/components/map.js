import { useState, useEffect } from 'react'
import L from 'leaflet'
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvent,
} from '@monsonjeremy/react-leaflet'
import 'leaflet/dist/leaflet.css'

import getDistance from '@/lib/getDistance'
import getTotalDistance from '@/lib/getTotalDistance'

// https://github.com/colbyfayock/next-leaflet-starter
const MapComponent = ({ markerList, setMarkerList }) => {
  const map = useMap()
  const [last] = [...markerList].slice(-1)
  const rest = [...markerList].slice(0, -1)
  useMapEvent('click', e => {
    const { latlng } = e
    const marker = L.marker(latlng)
    marker.addTo(map)
    const newMarkers = [...last, [latlng.lat, latlng.lng]]
    marker.bindPopup(`<p>${latlng.lat}, ${latlng.lng}</p>`)
    const newMarkerList = [...rest, newMarkers]
    setMarkerList(newMarkerList)
    L.polyline(newMarkers, { color: 'red' }).addTo(map)
  })
  useMapEvent('contextmenu', () => {
    if (last.length > 1) {
      L.polyline(last, { color: 'blue' }).addTo(map)
      const newMarkerList = [...markerList, []]
      setMarkerList(newMarkerList)
    }
    return false
  })
  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </>
  )
}

const Map = () => {
  const [map, setMap] = useState(null)
  const [markerList, setMarkerList] = useState([[]])
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    })
  }, [])

  return (
    <>
      <MapContainer
        className="h-[50vh] md:h-screen md:w-2/3"
        center={[33.812511, -117.918976]}
        zoom={16}
        whenCreated={setMap}
      >
        <MapComponent markerList={markerList} setMarkerList={setMarkerList} />
      </MapContainer>
      <div className="flex flex-col h-[50vh] md:h-screen p-4 space-y-3 md:w-1/3">
        <button
          type="button"
          className="w-full text-lg bg-blue-900 border-none rounded-lg cursor-pointer group"
          onClick={() => {
            const layers = Object.values(map._layers).filter(
              layer => !layer._url
            ) // exclude TileLayer
            layers.forEach(layer => {
              map.removeLayer(layer)
            })
            setMarkerList([[]])
          }}
        >
          <span
            className="
              block
              px-2
              py-2
              text-lg text-gray-100
              transform
              bg-blue-600
              rounded-lg
              translate-y-[-4px]
              group-active:translate-y-[-2px]
              group-hover:translate-y-[-6px]
              group-hover:duration-[250ms]
              group-active:duration-[34ms]
              duration-[600ms]
              ease-[cubic-bezier(.3,.7,.4,1)]
              hover:ease-[cubic-bezier(.3,.7,.4,1.5)]
            "
          >
            reset
          </span>
        </button>

        <ul className="flex-grow p-2 space-y-2 overflow-scroll bg-cb-off-blue">
          {markerList[0].length > 0 ? (
            markerList.map((markers, index) => (
              <li key={index}>
                {markers.length > 0 && (
                  <>
                    Polyline #{index + 1}
                    <ul>
                      {markers.map((marker, markerIndex) => (
                        <li key={markerIndex}>
                          {marker[0]}, {marker[1]}
                          {', '}
                          {markerIndex > 0 &&
                            `distance: ${getDistance(
                              marker[0],
                              marker[1],
                              markers[markerIndex - 1][0],
                              markers[markerIndex - 1][1]
                            )} meters`}
                        </li>
                      ))}
                    </ul>
                    {index < markerList.length - 1 &&
                      `Total: ${getTotalDistance(markers)} meters`}
                  </>
                )}
              </li>
            ))
          ) : (
            <li>Click on the map to add points!</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Map
