export default function Card({ project }) {
  return (
    <div className="h-[300px] relative rounded-lg md:place-content-center bg-[url('../public/undraw_cloud.svg')] bg-no-repeat bg-left md:bg-center bg-contain bg-origin-content p-8 border-2">
      <div className="grid grid-cols-2 w-full h-full md:block md:relative">
        {/* <div className="col-start-2 flex">
          <p>{project.title}</p>
        </div> */}
      </div>
    </div>
  );
}
