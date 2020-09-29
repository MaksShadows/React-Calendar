const baseUrl = 'https://5f6b37f901d6570016d0443d.mockapi.io/api/v1/events';

export const createEvent  = eventsDate => {
    return  fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=utf-8', },
        body: JSON.stringify(eventsDate)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Faild to create task')
        }
    }); 
}



export const fetchTasksList = () => {
    return fetch(baseUrl).then(res => {
             if (res.ok) {
                 return res.json()
             }
         })
};

    fetch(baseUrl).then((response) => response.json());



export const deleteEvent  = eventId => {
  return fetch(`${baseUrl}/${eventId}`, {
      method: 'DELETE',
  }).then(response => {
      if (!response.ok) {
          throw new Error('Failed to delete task');
      }
  });
};
