import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [detailDatas, setDetailDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dream-json-server.sattpaing.website/blogdetails`)
      .then((res) => {
        setDetailDatas(res.data);
      });
  }, []);

  return (
    <div className="max-w-[1440px] mt-[-20px] mb-[60px] p-auto m-auto">
      <div className="md:max-w-[700px] p-auto m-auto">
        <ReactSearchAutocomplete
          items={detailDatas}
          fuseOptions={{ keys: ["blog_content"] }}
          resultStringKeyName="blog_content"
          placeholder="သင့်အိမ်မက်ထဲက အဓိက အကြောင်းအရာ ရိုက်ထည့်ပါ ။ ဥပမာ နွား ၊ ငရုတ် စသဖြင့်"
          className="mx-1"
        />
      </div>
    </div>
  );
};

export default Search;
