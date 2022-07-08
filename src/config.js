
export default function getUrl(query,App_Id,App_Key){
    return `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${App_Id}&app_key=${App_Key}`;
}

