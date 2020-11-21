export const plurals = { activity: 'activities', feeling: 'feelings', thought: 'thoughts' }

export const getNextId = () => generateId.next().value

export const scale =
  [...Array(24)].map((item, index) => ({ time: index * 0.5 + 8, top: 30 * index }))

export const sortThings = (t1, t2) =>
  1000 * (t1.start - t2.start) - (t1.end - t1.start) + (t2.end - t2.start)



function* idGenerator() {
  let i = 1000
  while (true) {
    i = i + 1
    yield `id-${i}`;
  }
}

const generateId = idGenerator()