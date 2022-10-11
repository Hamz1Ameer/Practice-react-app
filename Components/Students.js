const Students = (props) => {
    const myFun = () => {

    }
    return <div>
        <button className='id-btn' onclick={myFun()}>ID: {props.id}</button>
        <div className='div-content'><p>Full Name: {props.fname} {props.lname}</p>
            <p>Grade: {props.grade}</p>
        </div>
        <hr />
    </div>
}

export default Students;