import React from 'react'

function Cardo() {
  return (
    <div> <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360" }}>
                <img src="https://plus.unsplash.com/premium_photo-1661780307431-c21fd96e4129?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" NameclassName="card-img-top" alt="..." />
                <div NameclassName="card-body">
                    <h5 className='"card-title'>card title</h5>
                    <p NameclassName="card-text">This is important text.</p>
                    <div className='container w-100' >
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })}

                        </select>


                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>

                </div>
            </div>
            </div>
            </div>
  )
}

export default Cardo;