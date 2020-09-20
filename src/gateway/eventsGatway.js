const baseUrl = 'https://5f64dc7cfb1b5700169c9688.mockapi.io/api/v1/event';

export const createEvent  = (events) => {
  return  fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=utf-8', },
        body: JSON.stringify(events)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Faild to create task')
        }
    });   
};

export const fetchTasksList = () => {
   return fetch(baseUrl).then((response) => response.json());

};

export const deleteEvent = (eventId) => {
    return  fetch(`${baseUrl}/${eventId}`, {
                method: 'DELETE'
            }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete task')
            }
    });   
}