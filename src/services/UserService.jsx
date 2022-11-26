import httpanything from './../httpany.jsx'

const  getAll = () => {
    // console.log("getall called");
    return httpanything.get('https://gorest.co.in/public/v2/users')
}

const  loginUserData = (FormData) => {
    console.log("loginData called", FormData);
    return httpanything.post('http://localhost:3001/posts', FormData)
}


const UserService = {
    getAll,
    loginUserData
    
}

export default UserService;