
const sampleState = {
  /*"abc": {
    id: "abc",
    startDate: "2017-09-08T22:45:22.466Z",
    endDate: "2017-09-08T22:45:22.466Z",
    text: "Go to the gym with Sally",
  },
  "xyz": {
    id: "xyz",
    startDate: "2017-09-08T22:45:22.466Z",
    endDate: "2017-09-08T22:45:22.466Z",
    text: "Do some work on my plan",
  },*/
}

export default function(state = sampleState, action){

  if (action.type === 'ADD_TASK'){
    const { id, startDate, endDate, text } = action
    state = Object.assign({}, state)
    state[id] = {
      startDate,
      endDate,
      text,
      id,
    }
  }

  return state
}