const { getLocation } = require('rickmortyapi')

async function f(page, limit = 12) {
  const base = page * limit
  const IDs = []
  for (let i = 1; i <= limit; i++) {
    IDs.push(base + i)
  }
  const locations = await getLocation(IDs)
  console.log(locations)
}

f(0)
