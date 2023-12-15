import axios from 'axios';

async function ApiCallComponent(request) {
    // const apiUrl = `http://localhost:8000/v1/api`
    // const apiUrl = `http://localhost/api/v1/api`  
    // const apiUrl = `https://nanotumor.phhp.ufl.edu/pbpk/v1/api`
    // const apiUrl = `http://nano-tumor.phhp.ufl.edu/api/v1/api`
    const apiUrl = process.env.REACT_APP_API_URL;
    // GET, POST, PUT, PATCH, DELETE
    let responseData=null;
    let error;
    const requestType = request.requestType;
    const apiPath = request.apiPath;

    switch (requestType) {
        case "GET":
            console.log(apiUrl+`/aipbpk/${apiPath}`)
            console.log("------------------------------------------------------------getcall")
            await axios.get(apiUrl+`/aipbpk/${apiPath}`)
                .then(response => {
                    responseData = response.data;
                    // console.log(responseData);
                    console.log("$$$$$$$$$$$$$$$$")
                })
                .catch(error => {
                    console.error('Error in GET request:', error);
                });
            break;
        case "POST"://https://dev-121kzskg8654455.api.raw-labs.com/json-programming-heroes
            const body = request.body ? request.body : {}
            console.log("------------------------------------------------------------")
            console.log("body:",body);
            console.log(`path:${apiUrl}/aipbpk/${apiPath}`)
            await axios.post(apiUrl+`/aipbpk/${apiPath}`, body)
                .then(response => {
                    responseData = response.data;
                    console.log(responseData);
                })
                .catch(error => {
                    console.error('Error in POST request:', error);
                });
            break;
        case "PUT":
            break;
        case "PATCH":
            break;
        case "DELETE":
            break;
        default:
      }
      
      return responseData;
}

export default ApiCallComponent;
