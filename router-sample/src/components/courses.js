const courses=(props)=>{
    console.log(props)
    console.log(props.location.pathname) // /courses
    console.log(props.history.action)     //PUSH
    return(
        <>
        Our Courses
        
        </>
    );
}

export default courses;