import React from 'react';
import './BlogCard.css';

const BlogItems = [
    {
        title: "Lorem Ipsum Dolor LoremIpsum Dolor Lorem",
        para: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem, lorem ipsum dolcer sit amet"
    },
    {
        title: "Lorem Ipsum Dolor LoremIpsum Dolor Lorem",
        para: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem, lorem ipsum dolcer sit amet"
    },
    {
        title: "Lorem Ipsum Dolor LoremIpsum Dolor Lorem",
        para: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem, lorem ipsum dolcer sit amet"
    },
]

function BlogCard(){
    return(
    <div className="blog-container">
    <h1 className="blog_heading">Our Blog</h1>
    <div className="blog_main_conatiner">
     {BlogItems.map((item, index)=>{
         return(
             <div>
             <div className="blog-post" key={index}>
           <div className="blog-post__info">
               <h1 style={{fontWeight: "bold", fontSize: "20px"}} className="blog-post__title">{item.title}</h1>
               <p style={{fontSize: "12px"}} className="blog-post__text">{item.para}</p>
               <a href="#" className="blog-post__cta">Read more</a>
               

           </div>
        </div>


             </div>

         );
     })}
     </div>  
    </div>
    );

}
export default BlogCard;
