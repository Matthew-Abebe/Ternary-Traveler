import APIManager from "./dbCalls";

//testing import of dbcalls and calling getAllPlaces
const interestsEl = document.getElementById("interestsContainer")
const editInterestEl = document.getElementById("editInterestContainer")

// const placesHtmlComponent = function (name) {
//     `<h2>${name}</h2>`
// }

APIManager.getAllInterests()
    .then((interests) => {


        for (let i = 0; i < interests.length; i++) {

            const interest = interests[i].location
            const interestId = interests[i].id
            const deleteInterestId = interests[i].id

            console.log(interest)
            console.log(interestId)
            console.log(deleteInterestId)

            const interestHtml = document.createElement("h2")
            interestHtml.innerHTML = interest

            const interestButton = document.createElement("button")
            interestButton.setAttribute("id", `${interestId}`)
            interestButton.innerText = "Edit"

            const interestDeleteButton = document.createElement("button")
            interestDeleteButton.setAttribute("id", `${interestDeleteButton}`)
            interestDeleteButton.innerText = "Delete"

            // let interestHtml  = `<h2>${interest}</h2> <button id=${interestId}>Edit</button> <button>Delete</button>`

            interestsEl.appendChild(interestHtml)
            interestsEl.appendChild(interestButton)
            interestsEl.appendChild(interestDeleteButton)

            const editInterestButton = document.getElementById(`${interestId}`)
            console.log("blah", editInterestButton)

            editInterestButton.addEventListener("click", function (event) {
                console.log("hi")

                const editInputHtml = document.createElement("input")
                editInputHtml.setAttribute("id", "editInput")

                const editInputButton = document.createElement("button")
                editInputButton.innerText = "Submit"
                editInputButton.setAttribute("id", "editInputButton")

                editInterestEl.appendChild(editInputHtml)
                editInterestEl.appendChild(editInputButton)
            })

            // const submitEdit = document.getElementById("editInputButton")

            // submitEdit.addEventListener("click", function (event) {
            //     console.log("hi")
            // })

            const deleteInterestButton = document.getElementById(`${interestDeleteButton}`)
            console.log("hah", deleteInterestButton)

            deleteInterestButton.addEventListener("click", function (event) {
                console.log("hi")

                APIManager.deleteTravel()

            })

const travelEl = document.getElementById("travelContainer")

const addTravel = document.getElementById("addTravel").addEventListener("click", function (event) {
    console.log("hi")

    const travelObject = {
        location: document.getElementById("location").value,
        description: document.getElementById("description").value
    }

    APIManager.addNewTravel(travelObject)

    let travelObjectHtml = `<h2>${travelObject.location}</h2> <h2>${travelObject.description}</h2> <button>Edit</button> <button>Delete</button>`

    travelEl.innerHTML = travelObjectHtml

    console.log(travelObject)
})
}
})
