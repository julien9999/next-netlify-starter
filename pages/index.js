import Image from '@components/Image'
import Content from '@components/Content'
import axios from "axios";

export default function Home({ data }) {

  return (
    <div className="container-fluid g-0">
        <div className="row g-0">
          <Image {...data?.data?.attributes?.image?.data?.attributes} />
          <Content 
            name={data?.data?.attributes?.name} 
            title={data?.data?.attributes?.title} 
            description={data?.data?.attributes?.description} 
            socials={data?.data?.attributes?.socials ?? []} 
          />
          </div>

    </div>
  )
}

export const getServerSideProps  = async () => {
  const res = await axios.get("https://strapi-production-9e2a.up.railway.app/api/home-page?populate=deep,10");
  return { props: { data: res.data ?? {} } }
}