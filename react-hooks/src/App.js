import { useState, useEffect } from 'react'
import Banner from './banner';

const App=()=>{
  //console.log(useState());

  let [count,setCount] = useState(1);
  // let [heading, setHeading] = useState("React Hooks")

  // const changeHeading=()=>{
  //   setHeading('Completed React Hooks')
  // }
  let [Address, setAddress]= useState({
    streetNo: 2,
    state: 'UP'
  });

  const changeAddress=()=>{
    setAddress({
      ...Address,
      streetNo: 1
      //state: "UP"
    });
  };

  const changeCounter=()=>{
    setCount(prevCount=> {
      let a=2
      prevCount = prevCount*a;
      return prevCount;
    });
  };

  console.log(count)
  
  let [bannerVisible, setBannerVisible] = useState(true);

  /* Use-Effect
  the function name is square brackets ensures that this method is called when address object is updated otherwise not
  1. if nothing was mentioned then this function would be called at each update, if
  2. if you want it to be called at  multiple updates than mention the name of objects like an arrar in this case [Address, count]
  3. if you want it to behave perfectly like componentDidMount i.e., called only at the beginning then add empty braces denoting an empty array
  4.*/
  useEffect(()=>{   
   console.log("Use Effect")
  });

  return(
    <>
      {console.log("render")}
      <h1>
        { ` ${count}` }
      </h1>

      <p>{Address.streetNo}</p>
      <p>{Address.state}</p>

      <button onClick={changeCounter}>Update</button>
      {/* <button onClick={changeHeading}>Update Heading</button> */}
      <button onClick={changeAddress}>Update Address</button>
      {bannerVisible ? <Banner />: null}
     
      <button onClick=
      {()=> setBannerVisible(false)}
      >Unmount Banner</button>
    
    </>
  );
};
export default App;