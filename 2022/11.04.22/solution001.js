// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }

const whosOnline = (friends) => {
    // variables to push usernames to
    let online = []
    let offline = []
    let away = []

    // mapping thru each object and pushing to approriate array
    friends.map(e => {
        if (e.status === 'online' && e.lastActivity <= 10){
            online.push(e.username)
        } else if (e.status === 'online' && e.lastActivity > 10){
            away.push(e.username)
        } else if (e.status === 'offline'){
            offline.push(e.username)
        }
    })
    
    // setting an object that holds the stats for each username
    let status = {
        online,
        offline,
        away
    }

    // mutes the status object and removes any person that is offline
    for(prop in status){
        if (status[prop].length === 0){
            delete status[prop]
        }
    }
    return status
    
};

console.log(whosOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }]))

console.log(whosOnline([{
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }]))