import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import axios from "axios";

const Home = () => {
  const [blogHeaders, setBlogHeaders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dream-json-server.sattpaing.website/blogheaders")
      .then((res) => {
        setBlogHeaders(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-[60px] p-auto m-auto min-h-screen">
      <Hero />
      <Search />
      <div className="max-w-[1440px] p-auto m-auto">
        <hr />
      </div>
      <div className="text-center font-semibold text-gray-700 md:text-2xl text-xl md:mt-12 mt-9 mb-6">
        အက္ခရာစဉ် လိုက် အိမ်မက်များ ကြည့်ရန်
      </div>
      {loading ? (
        <div className="max-w-[1440px] mt-12 flex justify-center">
          <Loading />
        </div>
      ) : (
        <div className="max-w-[1440px] mt-6 p-auto m-auto flex flex-wrap justify-center pb-7">
          {blogHeaders.map((blogHeader, index) => (
            <Link to={`/details/${blogHeader.blog_id}`} key={index}>
              <div
                className="
                        min-w-[350px]
                        flex
                        items-center
                        justify-center
                        md:m-6 
                        md:p-6
                        m-3
                        p-3
                        cursor-pointer 
                        bg-white
                        border
                        border-blue-300
                        rounded-md
                        shadow 
                        hover:bg-gray-100
                      "
              >
                <div className="first-letter:text-blue-600 first-letter:font-medium text-lg">
                  {blogHeader.blog_title.replace(/[\[\]']+/g, "")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
