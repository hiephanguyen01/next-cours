import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const data = [
  {
    slug: "getting-started-with-nextjs",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is the react framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is the react framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is the react framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is the react framework for production",
    date: "2022-02-10",
  },
];
export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Blog personal</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
