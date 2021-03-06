const baseUrl = 'https://5f6b37f901d6570016d0443d.mockapi.io/api/v1/event';
//const baseUrl = 'https://5fca2e643c1c220016441d9b.mockapi.io/api/v1/events';


export const  createEvent = taskData => {
  return fetch(baseUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(taskData)
  }).then(response => {
      if (!response.ok) {
          throw new Error("Internal Server Error. Can't display events")
      }
  })
}


export const fetchTasksList  = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
}


export const deleteEvent = (eventId) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
}
