import React , { useEffect} from 'react'
import axios from "axios"
import logger from 'use-reducer-logger';


const Popular = () => {

    const [popular , setPopular] = React.useState([])
   
    useEffect(()=> {
        const getPopular = async ()=>{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`)
            const data = await api.json()
            setPopular(data.recipes)
        }
        getPopular()

    } , [])


    
     
  return (
    <div>
       {popular.map((recipe) => {
           return (
               <div key={recipe.id}>
                   <p>{recipe.title}</p>
               </div>
           )
       })}
    </div>
  )
}

export default Popular

// const [state , dispatch] = React.useReducer(logger(reducer) , initState)

// const reducer = (state , action) =>{
//     switch(action.type){
//         case "fetch_request":
//             return{...state , loading : true }

//         case "fetch_success" :
//             return {...state , recipe : action.payload , loading : false}

//         case "fetch_fail" :
//             return {...state , loading : false , error : action.payload}

//         default :
//             return state
//     }
// }

// const initState = {
//     recipe : [],
//     loading : true,
//     error : ""
// }

// const getPopular = async ()=>{
//     dispatch({type : "fetch_request"})

//     try{
//         const api = await axios(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`)
//         const data = await api.data;
//         dispatch({type : "fetch_success" , payload : data})
        
//     }catch(err){
//         dispatch({type : "fetch_fail" , payload : err.message})
//     }
// }  
// getPopular()