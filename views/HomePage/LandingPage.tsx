import { gql, useQuery } from "@apollo/client";

export const LANDING_PAGE_QUERY = gql`
  query MyQuery {
    headers {
      id
      headerType
      title
      paragraph
      buttonText
      buttonUrl
      image {
        url
      }
    }
  }
`;

const LandingPage = () => {
  const { data } = useQuery(LANDING_PAGE_QUERY);
  return (
    <div id="landing-page" className="bg-C4C4C4 bg-opacity-10">
      <section className="grid grid-cols-2 max-w-1440 mx-auto px-20 py-36">
        <section>
          <h1 className="text-5xl leading-56 text-primary">{data?.headers[0]?.title}</h1>
          <p className="mt-6 text-base">{data?.headers[0]?.paragraph}</p>
          <button className="bg-94A2AB text-white px-20 py-3 mt-6 rounded-md">
            <a href={data?.headers[0]?.buttonUrl}>{data?.headers[0]?.buttonText}</a>
          </button>
        </section>
        <section className="flex justify-center items-center">
          <img src={data?.headers[0]?.image?.url} className="w-20 h-20" alt="random image" />
        </section>
      </section>
    </div>
  );
};

export default LandingPage;
