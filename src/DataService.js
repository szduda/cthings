import firebase from "./firebase";
import { plurals } from './appHelper'

const db = {
  things: firebase.ref("/things"),
}

export const DataService = {
  fetchThings: async ({ date }) => {
    let things = { activities: [], feelings: [], thoughts: [] };
    await db.things.child(date).once('value', snapshot => {
      snapshot.forEach(function (childSnapshot) {
        const id = childSnapshot.key;
        const { title, start, end, type } = childSnapshot.val();

        things[plurals[type]].push({ id, title, start, end, type });
      });
    })
    return things
  },
  addThing: async ({ date, thing }) => {
    const { title, start, end, type } = thing
    const response = await db.things.child(date).push({ title, start, end, type });
    return response.key
  }
}

export default DataService