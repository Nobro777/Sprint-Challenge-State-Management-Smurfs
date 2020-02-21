import axios from "axios"

export const FETCHING_SMURF_START = "FETCHING_SMURF_START"
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS"
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE"

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: "FETCHING_SMURF_START" })
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log("Local API data :", res.data)
                dispatch({ type: "FETCHING_SMURF_SUCCESS", payload: res.data })
            })
            .catch(err => {
                console.log("There was an error with your Local API :", err)
                dispatch({ typr: "FETCHING_SMURF_FAILURE", payload: err })
            })
}

export const postSmurfs = newSmurf => dispatch => {
    dispatch({ type: "POST_SMURF_START" })
        axios
            .post(`http://localhost:3333/smurfs`, newSmurf)
            .then(res => {
                console.log("Posted data to Local API successfully :", res.data)
                dispatch({ type: "POST_SMURF_SUCCESS", payload: res.data })
            })
            .catch(err => {
                console.log("There was an error with posting to your Local API :", err)
                dispatch({ type: "POST_SMURF_FAILURE", payload: err })
            })
}