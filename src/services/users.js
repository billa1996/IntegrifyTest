import axios from 'axios'

const getAllUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
}

export {getAllUsers}
