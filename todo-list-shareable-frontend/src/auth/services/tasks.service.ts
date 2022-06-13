import axios from "axios";
const API_URL = "http://161.97.99.214:3000";

class TasksService {
    async getTasks() {
        await axios.get( API_URL + "/tasks/")
    }
}

export default new TasksService();