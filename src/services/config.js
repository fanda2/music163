const devBaseUrl="http://192.168.10.3:3100"
const proBaseUrl="http://192.168.10.3:3100"


export const BASE_URL= process.env.NODE_ENV==="development" ? devBaseUrl : proBaseUrl ;

export const TIMEOUT=5000;
