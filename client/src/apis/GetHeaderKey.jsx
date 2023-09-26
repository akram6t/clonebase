

const GetHeaderKey = () => {
    const tokenSlice = process.env.REACT_APP_TOKEN_SLICE;
    const token = localStorage.getItem('authToken');

    if(token.length > tokenSlice){
        return [token.slice(0,tokenSlice), tokenSlice];
    }else{
        return [token.toUpperCase(), tokenSlice];
    }

}

export default GetHeaderKey;