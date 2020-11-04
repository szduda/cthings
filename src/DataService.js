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
    { id: 'id-0001', start: 8, end: 8.5, title: 'Shower' },
    { id: 'id-0002', start: 8.5, end: 9, title: 'Breakfast' },
    { id: 'id-0003', start: 9, end: 17, title: 'Work' },
    { id: 'id-0004', start: 9, end: 12, title: 'Other' },
    { id: 'id-0005', start: 11, end: 13, title: 'Other' },
    { id: 'id-0005', start: 12, end: 14, title: 'Last layer' },
    { id: 'id-0005', start: 13.5, end: 14, title: 'Second layer' },
    { id: 'id-0006', start: 14, end: 14.5, title: 'Other' },
  ],
  feelings: [
    { id: 'id-0004', start: 12, end: 16, title: 'Motivated' },
    { id: 'id-0005', start: 11, end: 11.5, title: 'Hungryyyyy :(' },
    { id: 'id-0005', start: 15, end: 16.5, title: 'Oh no :o' },
    { id: 'id-0005', start: 16, end: 17, title: 'Oh no :o' },
    { id: 'id-0005', start: 16.5, end: 18, title: 'Oh no :o' }
  ],
  thoughts: [
    { id: 'id-0006', start: 8, end: 12, title: 'Nice wake up!' },
    { id: 'id-0006', start: 9.5, end: 10.5, title: 'Nice wake up!' },
    { id: 'id-0006', start: 10, end: 13, title: 'Nice wake up!' },
    { id: 'id-0007', start: 14, end: 14.5, title: 'I should buy a boat' },
    { id: 'id-0008', start: 17.5, end: 18, title: 'Party or not to party?' }
  ],
})