import React from 'react'

export const AdminSetup = (props)=> {
    
    const Continue = e => {
        e.preventDefault();
        props.nextStep();
    };

    

        return (

            <div className="form-container">
                <br />
                <div className="text-right">
                    <button className="btn btn-primary" onClick={Continue}
                        style={{
                            color: "white",
                            backgroundColor: " #00B87C",
                            padding: "12px",
                            borderRadius: "10%",
                        }}
                    >Report Complaint</button>
                </div>
            </div >


        )
    }

export default AdminSetup;
