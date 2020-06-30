const baseUrl = 'https://5eda0cc898b7f500160dbff5.mockapi.io/tasks';

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
    return fetch(baseUrl).then((response) => {
        if (response.ok) return response.json();
    });

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