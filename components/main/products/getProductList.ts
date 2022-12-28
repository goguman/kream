import {useQuery} from "react-query";
import axios from "axios";

const getList = async () => {
    const {data} = await axios.get(
        `http://localhost:4000/productList`
    );
    console.log("getProductList");
    console.log(data);
    return data;
}

export default () => {
    const {status, data, error} = useQuery("productList", getList);
    return {status, data, error};
}