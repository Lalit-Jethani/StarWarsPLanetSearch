const calculateSizeForPlanet = population => {
  const MaxPopulation = Math.max(...population)
  const MinPopulation = Math.min(...population)

  const calcSize = planetpopulation => {
    if (planetpopulation) {
      let factor = MaxPopulation / planetpopulation
      return 100 / factor
    } else return 100
  }
  return calcSize
}

export default calculateSizeForPlanet
