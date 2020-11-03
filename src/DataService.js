export const DataService = {
  fetchThings: async () => {
    await new Promise(r => setTimeout(r, 2000))
    return sampleState
  },
  addThing: async ({ date, thing }) => {
    await new Promise(r => setTimeout(r, 500))
    return getId.next().value
  }
}

export default DataService

function* idGenerator() {
  let i = 1000
  while (true) {
    i = i + 1
    yield `id-${i}`;
  }
}

const getId = idGenerator()

const sampleState = ({
  activities: [
    { id: 'id-0001', start: 8, title: 'Shower' },
    { id: 'id-0002', start: 8.5, title: 'Breakfast' },
    { id: 'id-0003', start: 9, end: 17, title: 'Work' }
  ],
  feelings: [
    { id: 'id-0004', start: 12, end: 16, title: 'Motivated' },
    { id: 'id-0005', start: 11, title: 'Hungryyyyy :(' }
  ],
  thoughts: [
    { id: 'id-0006', start: 8, title: 'Nice wake up!' },
    { id: 'id-0007', start: 14, title: 'I should buy a boat' },
    { id: 'id-0008', start: 17.5, title: 'Party or not to party?' }
  ],
})