import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () =>{

    return async dispatch =>{


        dispatch({
            type:categoryConstants.GET_ALL_CATEGORIES_REQUIEST
        });

        const res = await axios.get(`category/getCategories`);
        console.log(res);
        if(res.status === 200){
           const {categoryList} = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: {categories: categoryList}
            });
        }else{

            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload:{error: res.data.error}
            });
        }
    }
}

