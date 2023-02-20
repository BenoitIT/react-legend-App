import React, { useState, useEffect ,useContext} from "react";
import Card from "./Card";
import PageSection from "../section/PageSection";
import axios from "axios";
import '../authForms.css';
const CardListings = () => {
  const [blogs, setBlogs] = useState([]);
  const [clickedBlog, setClickedBlog] = useState();
  const [load,setLoad]=useState(null)
  const handleBlogView = (id) => {
    setClickedBlog(id);
  };
  useEffect(() => {
    setLoad(true)
    axios
      .get("https://dead-jade-coypu-cape.cyclic.app/Api/blogs/all")
      .then((response) => response)
      .then((data) => {
        setLoad(false)
        setBlogs(data.data.data)})
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="page-container">
      <div className={load?"loading":"loader"}>Loading...</div>
    <div>
      <div className="card-listings">
      
        {blogs.length >= 1 ? (
          blogs.map((blog) => {
            return (
              <Card
                key={blog._id}
                imageSrc={blog.blogImage}
                BlogTitle={blog.title}
                BlogDescription={blog.blogDescription.slice(0, 20)}
                category={blog.category}
                handleChoice={handleBlogView}
                cardId={blog._id}
              />
            );
          })
        ) : blogs.length === 1 ? (
          <Card
            key={blogs._id}
            imageSrc={blogs.blogImage}
            BlogTitle={blogs.title}
            BlogDescription={blogs.blogDescription.slice(0, 80)}
            category={blogs.category}
          />
        ) : (
          <Card
            BlogTitle="no blog found"
            BlogDescription="no blog description available"
            category="no category available"
          />
        )}
      </div>
    </div>
      <div>
        {blogs.length > 1 ? (
          blogs.map((blog) => {
            if (blog._id === clickedBlog) {
              return (
                <PageSection
                 key={blog._id}
                  image={blog.blogImage}
                  BlogDescription={blog.blogDescription}
                  blogTitle={blog.title}
                  id={blog._id}
                />
              );
            }
          })
        ) : blogs.length === 1 || clickedBlog === null ? (
          <PageSection
            image={blogs[0].blogImage}
            BlogDescription={blogs[0].blogDescription}
            blogTitle={blogs[0].title}
            id={blogs[0]._id}
          />
        ) : (
          <PageSection blogTitle="no blog available" />
        )}
      </div>
    </div>
  );
};

export default CardListings;
