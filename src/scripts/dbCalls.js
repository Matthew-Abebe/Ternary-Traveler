// const baseURL = "http://0.0.0.0:8088";

const APIManager = {

    getAllInterests: function() {
        return fetch("http://localhost:3000/interests")
                .then(response => response.json())
    },

    addNewTravel: function (newTravelObj) {
        return fetch("http://localhost:3000/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTravelObj)
        }).then(response => response.json());
    },

    editTravel: function () {
        return fetch("http://localhost:3000interests", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        }).then(response => response.json());
    },

    deleteTravel: function (interestsId) {
        return fetch(`http://localhost:3000/interests${interestsId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }
}

export default APIManager