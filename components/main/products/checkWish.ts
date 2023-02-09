import {useQuery} from "react-query";
import axios from "axios";

const checkWish = async (userId, modelCode) => {
    const {data} = await axios.get(
        `http://localhost:4000/checkWish?userId=${userId}&modelCode=${modelCode}`
    );
    return data;
};

export default (userId:string, modelCode:number, key:any) => {
    console.log("#########" + userId);
    console.log("#####" + modelCode);
    // if(!userId) return {data:undefined};
    const {status, data, error} =
        useQuery("checkWish"+key, ()=>checkWish(userId, modelCode));
    console.log("get wishedList : ");
    console.log(data);
    return {status, data, error};
}