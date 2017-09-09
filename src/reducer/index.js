import tasksReducer from './tasks'

export default function(state = {}, action){

  const tasks = tasksReducer(state.tasks, action)
  if (tasks !== state.tasks)
    state = Object.assign({}, state, { tasks })

  return state
}