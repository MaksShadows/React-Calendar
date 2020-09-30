const baseUrl = 'https://5f6b37f901d6570016d0443d.mockapi.io/api/v1/events';

export const createEvent   = async eventData => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=utf-8', },
        body: JSON.stringify(eventData)
    });
    if (!response.ok) {
        throw new Error('Faild to create task');
    }   
  };


    export const fetchTasksList = async () => {
        const res = await fetch(baseUrl);
        if (res.ok) {
            return res.json();
        }
            
      };



 export const deleteEvent  = async id => {
        const response = await fetch(`${baseUrl}/${id}`, {
         method: 'DELETE',
     });
     if (!response.ok) {
         throw new Error('Failed to delete task');
     }
      };
