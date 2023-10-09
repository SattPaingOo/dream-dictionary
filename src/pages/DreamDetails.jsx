import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const DreamDetails = () => {
  const { blogId } = useParams();
  const [detailDatas, setDetailDatas] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Get Blog Title By ID
    axios
      .get(
        `https://dream-json-server.sattpaing.website/blogheaders?blog_id=${blogId}`
      )
      .then((res) => {

        setTitle(res.data[0].blog_title);
      });
    // Get Blog Details By ID
    axios
      .get(
        `https://dream-json-server.sattpaing.website/blogdetails?blog_id=${blogId}`
      )
      .then((res) => {
        setDetailDatas(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-[1440px] md:p-14 p-3 pt-[100px] p-auto m-auto min-h-[calc(100vh-50px)]">
        <div className="md:text-2xl text-xl md:mt-12 md:mb-12 mb-6 font-bold text-center first-letter:text-blue-600">
          {title.replace(/[\[\]']+/g,'')}
        </div>
        {loading ? 
          (
            <div className="max-w-[1440px] mt-12 flex justify-center">
              <Loading />
            </div>
          ) 
          :
          (
            <div>
              {detailDatas.map((detailData, index) => (
                    <div key={index} className="md:py-4 py-3 flex md:text-lg leading-8">
                      <div className="md:w-[30px] md:h-[30px] w-[27px] h-[27px] mt-1 md:mt-0 rounded-xl border border-blue-600 shadow-sm flex justify-center items-center mr-3 text-blue-600">
                          {index + 1}
                      </div>
                      <div className="w-full">{detailData.blog_content}</div>
                    </div>
                ))}
            </div>
          )
        }
    </div>
  );
};

export default DreamDetails;
