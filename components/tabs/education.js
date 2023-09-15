export default function Education() {
  const journey = [
    {
      id: 0,
      major: "Bachelors of Engineering (IT)",
      institute: "Aditya Silver Oak Institute Of Technology",
      durationStart: "2016",
      durationEnd: "2020",
      description: "Grade: 8.16 / 10",
    },
  ];
  return (
    <div>
      <p className="font-semibold mb-4">Education</p>
      <div>
        {journey.map((each) => (
          <div
            key={each.id}
            className="border shadow p-4 hover:bg-slate-200 transition-all ease-in-out duration-200"
          >
            <p className="font-semibold uppercase">{each.major}</p>
            <p className="tracking-wider">{each.institute}</p>
            <p className="font-light text-sm">
              {each.durationStart} - {each.durationEnd}
            </p>
            <p>{each.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
