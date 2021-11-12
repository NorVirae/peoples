import blog1 from '../assets/images/blog-img1.jpg'
import blog2 from '../assets/images/blof1.jpg'
import logo from '../assets/images/logo.svg';



export const Card1 = ()=>(
                    <div className={"card"}>
                        <div className="image-place"><img className={"blog-image"} src={blog1}  alt="first blog image" /></div>
                            <div className={"card-body"}>
                                <div className={"card-category py-small "}>
                                    FINANCE
                                </div>
                                <div className={"card-title"}>
                                    Filing Expenses
                                </div>
                                <div className={"card-content my-2"}>
                                    How to get reimbursed for expenses? 
                                    In order to be reimbursed for expenses 
                                    incurred on behalf of Status during 
                                    the development of the project, you 
                                    will need to invoice Status and submit a
                                </div>
                                <div className={"card-footer"}>
                                    <div><img className={"footer-logo"} src = {logo} alt="logo" /></div>
                                    <div className={"footer-timer"}>3 MINS READ</div>
                                </div>
                    </div>

                </div>)


export const Card2 = ()=>(
    <div className={"card"}>
        <div className="image-place"><img className={"blog-image"} src={blog2}  alt="first blog image" /></div>
            <div className={"card-body"}>
                <div className={"card-category py-small "}>
                    FINANCE
                </div>
                <div className={"card-title"}>
                    Filing Expenses
                </div>
                <div className={"card-content my-2"}>
                    How to get reimbursed for expenses? 
                    In order to be reimbursed for expenses 
                    incurred on behalf of Status during 
                    the development of the project, you 
                    will need to invoice Status and submit a
                </div>
                <div className={"card-footer"}>
                    <div><img className={"footer-logo"} src = {logo} alt="logo" /></div>
                    <div className={"footer-timer"}>3 MINS READ</div>
                </div>
    </div>

</div>)


