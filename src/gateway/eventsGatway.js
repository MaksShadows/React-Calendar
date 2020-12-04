//const baseUrl = 'https://5f6b37f901d6570016d0443d.mockapi.io/api/v1/event';
const baseUrl = 'https://5fca2e643c1c220016441d9b.mockapi.io/api/v1/events';

export const createEvent = (taskData) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) throw new Error("Failed to create event");
    });
};


export const fetchTasksList = () => {

  return fetch(baseUrl).then((response) => {
        if (response.ok) return response.json();

        throw new Error("Failed to load tasks");
    });

}
  


 export const deleteEvent  = async id => {
        const response = await fetch(`${baseUrl}/${id}`, {
         method: 'DELETE',
     });
     if (!response.ok) {
         throw new Error('Failed to delete task');
     }
      };
