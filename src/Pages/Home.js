import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.svg'
import Navbar from '../components/Navbar';
import blog1 from '../assets/images/blof1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import { blogPost } from '../data/data';



const Home = (props) => {

    let posts = blogPost()

    return <>
                {/* Navbar starts here */}
                <Navbar/>

                <section className="blog-post">
                    <div className="container grid grid-6 gap-2">

                        {posts.map((post,index)=>{
                            console.log(index)

                            if (index == 0){
                            
                                        return ( <div key ={index} className="card flex flex-row span-6">
                                                        <img className={"card-image w-50"} src={post.img} alt="blog1" />
                                                        <div className={"card-body flex flex-column"}>
                                                            <h2 className="card-cat text-muted">{post.cat}</h2>
                                                            <h1 className="card-header">{post.title}</h1>
                                                            <p className="card-text">
                                                                {post.blogContent}</p>

                                                            <div className="card-footer flex justify-content-space-between">
                                                                <img className="card-logo" src={logo}/>
                                                                <h4 className="card-timer text-muted">3&nbsp;MIN</h4>
                                                                </div>
                                                                    </div>
                                                                </div>  )

                            }
                            if (index == 4 | index == 5){
                            
                                return ( <div key ={index} className="card flex flex-column span-3">
                                                <img className={"card-image w-100 small-radius"} src={post.img} alt="blog1" />
                                                <div className={"card-body flex flex-column "}>
                                                    <h2 className="card-cat text-muted">{post.cat}</h2>
                                                    <h1 className="card-header">{post.title}</h1>
                                                    <p className="card-text">
                                                        {post.blogContent}</p>

                                                    <div className="card-footer flex justify-content-space-between">
                                                        <img className="card-logo" src={logo}/>
                                                        <h4 className="card-timer text-muted">3&nbsp;MIN</h4>
                                                        </div>
                                                            </div>
                                                        </div>  )

                    }else {

                                return ( <div key ={index} className="card flex flex-column span-2">
                                                        <img className={"card-image w-100 small-radius"} src={post.img} alt="blog1" />
                                                        <div className={"card-body flex flex-column"}>
                                                            <h2 className="card-cat text-muted">{post.cat}</h2>
                                                            <h1 className="card-header">{post.title}</h1>
                                                            <p className="card-text">
                                                                {post.blogContent}</p>

                                                            <div className="card-footer flex justify-content-space-between">
                                                                <img className="card-logo" src={logo}/>
                                                                <h4 className="card-timer text-muted">3&nbsp;MIN</h4>
                                                                </div>
                                                                    </div>
                                                                </div>  )

                            }
                        })}
                        
                    </div>
                {/* footer starts here */}

                <footer className="footer my-5 py-3">
                        <div className="container flex justify-content-space-between">
                            <h4>People Ops at Status © 2021</h4>
                            <ul className="flex">
                                <li>Latest Post</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Ghost</li>

                            </ul>
                        </div>

                </footer>

                </section>

                

    </>
}

export default Home


// // {/* card starts here */}
// <div className="card flex span-3 ">
// <img className={"card-image"} src={blog1} alt="blog1" />
// <div className={"card-body"}>
//     <h2 className="card-cat text-muted">FINANCE</h2>
//     <h1 className="card-header">Filing Expenses</h1>
//     <p className="card-text">
//         How to get reimbursed for expenses?
//          In order to be reimbursed for expenses
//           incurred on behalf of Status during
//            the development of the project,
//             you will need to invoice Status
//              and submit a</p>

//     <div className="card-footer flex justify-content-space-between">
//         <img className="card-logo" src={logo}/>
//         <h4 className="card-timer text-muted">3&nbsp;MIN</h4>
//     </div>
// </div>
// </div>

// </div>
// {/* Card ends here */}

// {/* sexond */}
// <div className="container grid grid-3 gap-2">
// {/* card starts here */}
// <div className="card flex flex-column">
// <img className={"card-image w-100 small-radius"} src={blog2} alt="blog1" />
// <div className={"card-body flex flex-column"}>
//     <h2 className="card-cat text-muted">FINANCE</h2>
//     <h1 className="card-header">Filing Expenses</h1>
//     <p className="card-text">
//         How to get reimbursed for expenses?
//          In order to be reimbursed for expenses
//           incurred on behalf of Status during
//            the development of the project,
//             you will need to invoice Status
//              and submit a</p>

//     <div className="card-footer flex justify-content-space-between">
//         <img className="card-logo" src={logo}/>
//         <h4 className="card-timer text-muted">3&nbsp;MIN</h4>
//         </div>
// </div>
// </div>
// {/* Card ends here */}


// {/* card starts here */}
// <div className="card flex flex-column ">
// <img className={"card-image w-100 small-radius"} src={blog2} alt="blog1" />
// <div className={"card-body flex flex-column"}>
//     <h2 className="card-cat text-muted">FINANCE</h2>
//     <h1 className="card-header">Filing Expenses</h1>
//     <p className="card-text">
//         How to get reimbursed for expenses?
//          In order to be reimbursed for expenses
//           incurred on behalf of Status during
//            the development of the project,
//             you will need to invoice Status
//              and submit a</p>

//     <div className="card-footer flex justify-content-space-between">
//         <img className="card-logo" src={logo}/>
//         <h4 className="card-timer text-muted">3&nbsp;MIN</h4>
//         </div>
// </div>
// </div>
// {/* Card ends here */}

// {/* card starts here */}
// <div className="card flex flex-column ">
// <img className={"card-image w-100 small-radius"} src={blog2} alt="blog1" />
// <div className={"card-body flex flex-column"}>
//     <h2 className="card-cat text-muted">FINANCE</h2>
//     <h1 className="card-header">Filing Expenses</h1>
//     <p className="card-text">
//         How to get reimbursed for expenses?
//          In order to be reimbursed for expenses
//           incurred on behalf of Status during
//            the development of the project,
//             you will need to invoice Status
//              and submit a</p>

//     <div className="card-footer flex justify-content-space-between">
//         <img className="card-logo" src={logo}/>
//         <h4 className="card-timer text-muted">3&nbsp;MIN</h4>
//         </div>
// </div>
// </div>
// {/* Card ends here */}
// </div>

// <div className="container grid grid-2 gap-2">

// {/* card starts here */}
// <div className="card flex flex-column">
// <img className={"card-image w-100 small-radius"} src={blog2} alt="blog1" />
// <div className={"card-body flex flex-column"}>
//     <h2 className="card-cat text-muted">FINANCE</h2>
//     <h1 className="card-header">Filing Expenses</h1>
//     <p className="card-text">
//         How to get reimbursed for expenses?
//          In order to be reimbursed for expenses
//           incurred on behalf of Status during
//            the development of the project,
//             you will need to invoice Status
//              and submit a</p>

//     <div className="card-footer flex justify-content-space-between">
//         <img className="card-logo" src={logo}/>
//         <h4 className="card-timer text-muted">3&nbsp;MIN</h4>
//         </div>
// </div>
// </div>
{/* Card ends here */}