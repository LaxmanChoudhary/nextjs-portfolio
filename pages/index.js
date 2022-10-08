import {getNameData} from '../lib/mongoatlasApi';

export default function Home({userdata}) {
  const user = userdata.documents[0]
  const firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1)
  const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1)

  return (
    <section id="home">
      <div className="content">
        <div className="h-title">
          <h1>
            <span>Hi I{"'"}m</span>{firstName} {lastName}
          </h1>
        </div>
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
