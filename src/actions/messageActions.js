import { FETCH_MESSAGES, NEW_POSTS } from './types'

export const fetchMessages = () => dispatch => {
  // var ws = new WebSocket('ws://thawing-ravine-52538.herokuapp.com/ws/notifs/');
  // ws.onmessage = message => {
  //   dispatch({
  //     type: FETCH_MESSAGES,
  //     payload: Object.values(JSON.parse(message.data))
  //   });
  // }

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_MESSAGES,
      payload: data
    }))
}
