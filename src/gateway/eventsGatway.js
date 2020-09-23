const baseUrl = 'https://5f6b37f901d6570016d0443d.mockapi.io/api/v1/events';

export const createEvent  = (eventsDate) => 
   fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=utf-8', },
        body: JSON.stringify(eventsDate)
    });


export const fetchTasksList = () => 
    fetch(baseUrl).then((response) => response.json());

export const deleteEvent = (eventId) => 
      fetch(`${baseUrl}/${eventId}`, {
                method: 'DELETE'
            });
