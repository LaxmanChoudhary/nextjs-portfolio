export default function TwoPanel({leftComponent, rightComponent}) {
  return(
    <div className="mx-auto">
      <div className="hidden lg:block absolute left-[max(0px,calc(50%-45rem))] right-auto w-[25rem] h-[100px] bg-slate-500">
        {leftComponent}
      </div>
      <div className="lg:pl-[25.5rem] h-[100px] bg-slate-800">
        {rightComponent}
      </div>
    </div>
  )
}