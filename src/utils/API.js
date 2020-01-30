import axios from "axios";

export default {
    getEvents: function() {
        return axios.get("http://localhost:3001/api/");
    },
    getEventById: function(id) {
        return axios.get("http://localhost:3001/api/" + id);
    },
    deleteEvent: function(id) {
        return axios.delete("http://localhost:3001/api/" + id);
    },
    saveEvent: function(eventData) {
        return axios.post("http://localhost:3001/api/post", eventData);
    },
    updateEvent: function (id, eventData) {
        return axios.put("http://localhost:3001/api/" + id, eventData)
    }
};
