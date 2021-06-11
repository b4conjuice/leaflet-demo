import L from 'leaflet'

import getDistance from '@/lib/getDistance'
import getTotalDistance from '@/lib/getTotalDistance'

it('gets distance correctly', () => {
  const coordinate1 = [33.81559499776208, -117.91956424713136]
  const coordinate2 = [33.812742511384684, -117.9218602180481]
  const expected = L.latLng(coordinate1[0], coordinate1[1]).distanceTo(
    L.latLng(coordinate2[0], coordinate2[1])
  )
  const actual = getDistance(
    coordinate1[0],
    coordinate1[1],
    coordinate2[0],
    coordinate2[1]
  )
  expect(expected).toBe(actual)
})

it('gets total distance correctly', () => {
  const coordinates = [
    [33.81559499776208, -117.91956424713136],
    [33.812742511384684, -117.9218602180481],
    [33.81397265780007, -117.91580915451051],
  ]
  const expected = coordinates.reduce(
    (total, coordinate, coordinateIndex) =>
      coordinateIndex === 0
        ? total
        : total +
          L.latLng(coordinate[0], coordinate[1]).distanceTo(
            L.latLng(
              coordinates[coordinateIndex - 1][0],
              coordinates[coordinateIndex - 1][1]
            )
          ),
    0
  )
  const actual = getTotalDistance(coordinates)
  expect(expected).toBe(actual)
})
