const axios = require('axios');

async function getUserDatas() {
    try {
        const users = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(users);
    } catch(e) {
        console.log('has error', e);
    }
}

getUserDatas()