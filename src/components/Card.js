import blog1 from '../assets/images/blog-img1.jpg'


const Card = ()=>(
                    <div className={"card"}>
                    <div className="image-place"><img className={"blog-image"} src={blog1}  alt="first blog image" /></div>
                    <div className={"card-body"}>
                        <div className={"card-category"}>
                            FINANCE
                        </div>
                        <div className={"card-title"}>
                            Filing Expenses
                        </div>
                        <div className={"card-content"}>
                            How to get reimbursed for expenses? 
                            In order to be reimbursed for expenses 
                            incurred on behalf of Status during 
                            the development of the project, you 
                            will need to invoice Status and submit a
                        </div>
                    </div>

                </div>)

export default Card
