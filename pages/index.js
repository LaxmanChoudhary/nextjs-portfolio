import HeaderCard from '../components/HeaderCard';

export default function Home() {
  const user = {
    "firstName": "laxman",
    "lastName": "choudhary",
  }

  return (
    <section id="home">
      <div className="content">
        <HeaderCard user={user} />
      </div>
    </section>
  );
}
