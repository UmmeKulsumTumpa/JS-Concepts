const hasMeeting = false;

const meetingPromise = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: 'Business Meeting',
            location: 'Google Meet',
            time: '10:00 PM',
        };
        resolve(meetingDetails);
    }
    else{
        reject(new Error('meeting already scheduled!'));
    }
});

// this function return a promise
// const addToCalendar = (meetingDetails) => {
//     return new Promise ((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calendar);
//     });
// };

// simplified version of the above snippet
const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
};

meetingPromise
    .then(addToCalendar)
    .then((res) => {
        // resolved data
        console.log(res);
        
    })
    .catch((err) => {
        // rejected data
        console.log(err.message);
        
    });

console.log(`this line will be executed first, to show that the promise is working asynchronous`);
