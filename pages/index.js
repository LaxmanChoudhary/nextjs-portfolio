import {getNameData} from '../lib/mongoatlasApi';
import HeaderCard from '../components/HeaderCard';

export default function Home({userdata}) {
  const user = userdata.documents[0]

  return (
    <section id="home">
      <div className="content">
        <HeaderCard user={user} />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const userdata = await getNameData();

  return {
    props: {
      userdata,
    },
  }
}
