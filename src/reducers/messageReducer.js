import { FETCH_MESSAGES, NEW_POSTS } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      // console.log(action.payload);
      let items = state.items;
      items.splice(0, 0, action.payload);
      // console.log(items);
      return {
        ...state,
        items: items
      }
    default:
      return state;
  }
}