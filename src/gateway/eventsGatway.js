const baseUrl = 'https://5f64b753fb1b5700169c92b6.mockapi.io/api/v1/:events';

export const createTask = taskData => {
  return  fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=utf-8', },
        body: JSON.stringify(taskData)
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