import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../config/firebase";
import Layout from "../components/layout/Layout";
import SectionCategories from "../components/home/SectionCategories";
import SectionNews from "../components/home/SectionNews";
import SectionPostForCategory from "../components/home/SectionPostForCategory";
import Newsletter from "../components/home/Newsletter";


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
     <Layout>
       <SectionCategories/>
       <SectionNews/>
       <SectionPostForCategory title="Advertising" link="/categories/adver"/>
         <SectionPostForCategory title="Case Studies" link="/categories/case"/>
         <SectionPostForCategory title="Innovation" link="/categories/innovation"/>
         <Newsletter/>
     </Layout>
  )
}
