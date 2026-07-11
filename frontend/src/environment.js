let IS_PROD=true
const server= IS_PROD ? 
    "https://social-network-6csv.onrender.com" 
    :    
    "http://localhost:8000"


export default server;


//if u want it for development switch IS_PROD=false