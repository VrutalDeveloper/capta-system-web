import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../config/firebase";


export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect( () => {

    (async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));

      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setPosts(posts)
    })()
 
  }, [])


  return (
     <div className="bg-red-300">

        {
          posts.map((post) => {
            return <div key={post.id} >{post.title}</div>
          })
        }

       <h1>Hola</h1>
     </div>
  )
}
