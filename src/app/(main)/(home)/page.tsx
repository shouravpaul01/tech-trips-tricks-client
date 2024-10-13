"use client"
import PostCard from "@/src/components/cards/PostCard"
import { useEffect, useState } from "react";
import { getAllPost } from "../../services/PostService";
import InfiniteScroll from "react-infinite-scroll-component";
import TTTZLoading from "@/src/components/ui/TTTZLoading";



const HomePage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10; // Set the number of items to load per scroll
console.log(posts)
  useEffect(() => {
    loadMorePosts();
  }, []);

  const loadMorePosts = async () => {
    const {data:newPosts} = await getAllPost(page, limit);
    
    if (newPosts?.length < limit) {
      setHasMore(false); 
    }
    
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setPage((prevPage) => prevPage + 1); // Increment the page for the next scroll
  };

  return (
    <div className="px-2 pt-2">
      <InfiniteScroll
    
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={<TTTZLoading/>}
        endMessage={<p>No more posts</p>}
      >
        <div className="space-y-5">
          {posts.map((post) => (
            <PostCard post={post}/>
          ))}
        </div>
      </InfiniteScroll>
     
    </div>
  )
}

export default HomePage
