import axios from "axios"

export default axios.create({
  baseURL: "https://yard-sale-server-6f9e6e59ab49.herokuapp.com/",
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json"
  }
})