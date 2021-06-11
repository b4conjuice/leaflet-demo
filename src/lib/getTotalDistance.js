import getDistance from './getDistance'

const getTotalDistance = coordinateList =>
  coordinateList.reduce(
    (total, coordinate, index) =>
      index === 0
        ? total
        : total +
          getDistance(
            coordinate[0],
            coordinate[1],
            coordinateList[index - 1][0],
            coordinateList[index - 1][1]
          ),
    0
  )

export default getTotalDistance
