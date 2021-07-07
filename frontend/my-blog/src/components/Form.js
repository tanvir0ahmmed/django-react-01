import React, { useState, useEffect } from 'react';

const Form = (props) => {
    //console.log(props.formData.title)
    const [title, setTitle] = useState(props.formData.title)
    const [description, setDescription] = useState(props.formData.description)
    console.log(props.upadd)
    useEffect(() => {
        setTitle(props.formData.title)
        setDescription(props.formData.description)
    }, [props])
    return (
        <div className="form-section container">
            <div className="card">
                <div className="card-body">
                    <span type="lable">
                        Title
                    </span>
                    <input type="text"
                        className="form-control"
                        placeholder="Add Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}

                    />

                    <span type="lable">
                        Description
                    </span>
                    <textarea type="textarea"
                        className="form-control"
                        placeholder="Add Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}

                    />
                    {
                    (props.upadd === 'update') 
                    ? <button className="btn btn-primary mt-2" onClick={()=>{props.upAddClick('update')}}>Update</button>
                    :<button className="btn btn-primary mt-2" onClick={()=>{props.upAddClick('add')}}>Add</button>}
                </div>
            </div>

        </div>
    );
}

export default Form;
