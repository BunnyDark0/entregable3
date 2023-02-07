export const numbersPage = (location, RESIDENTS_PERPAGE) => {
  const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PERPAGE);
  const arrayPages = []
  for (let i = 1; i <= quantityPages; i++) {
    arrayPages.push(i)
  }
  return arrayPages
}