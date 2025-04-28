"use client"
import { use, useEffect, useState } from "react";
import styles from "./page.module.css"

const page = ({params}) => {
    const{name} = use(params);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [nationality, setNationality] = useState(null);

  useEffect(() => {
   fetch(`https://api.agify.io?name=${name}`)
   .then(resp => resp.json())
   .then((result) => setAge(result));

   fetch(`https://api.agify.io?name=${name}`)
   .then((resp) => resp.json())
   .then((res) => setGender(res))

fetch(`https://api.agify.io?name=${name}`)
   .then((resp) => resp.json())
   .then((res) => setNationality(res))
  }, [name]);


    return (
       <div>
        <p>
            სახელი: {age?.name}, რაოდენობა {age?.count}, საშუალო ასაკი {age?.age}       
             </p>
             <p>
            სქესი: {gender?.gender}, 
             </p>    
             <p>
            წარმომავლობა: {nationality?.country?.[0]?.country_id}, 
             </p>    
       </div> 
    );
};

export default page;