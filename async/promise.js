const hasMeeting = true;

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

meetingPromise
    .then((res) => {
        // resolved data
        console.log(res);
        
    })
    .catch((err) => {
        // rejected data
        console.log(err.message);
        
    });

console.log(`this line will be executed first, to show that the promise is working asynchronous`);
