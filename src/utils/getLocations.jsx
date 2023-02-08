function sortLocations(data) {
  if (!data) return []

  return data
    .sort((a, b) => {
      if (a.country === b.country) {
        return a.city < b.city ? -1 : 1
      }
      return a.country < b.country ? -1 : 1
    })
    .map((el) => el.country + ' → ' + el.city)
}

export default function getLocations(data) {
  return Array.from(new Set(sortLocations(data)))
}
