import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      if (res.data?.length > 0) {
        setData((prevItems) => [...prevItems, ...res.data]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-6">
      <h2 className="text-center text-xl mb-4">Infinite Scroll Data</h2>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4 className="text-center my-20">Loading...</h4>}
        endMessage={
          <p className="text-center text-red-500 my-5">No more data!</p>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.map((item) => (
            <div
              key={item.id}
              className="p-4 border border-gray-300 rounded shadow"
            >
              <img
                src="https://s3-cdn.cmlabs.co/page/2024/02/28/infinite-scroll-definition-how-it-works-pros-cons-138272.webp"
                className="w-32 mx-auto rounded-lg"
                alt="fake image"
              />
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollComponent;
