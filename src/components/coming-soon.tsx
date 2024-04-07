import { Clock } from "lucide-react";

export default function ComingSoon({ msg = "working on update..." }) {
  return (
    <div className="p-4 sm:p-8 flex place-items-center">
      <div className="p-2 sm:p-4">
        <Clock size={48} />
      </div>
      <p className="text-2xl sm:text-4xl font-bold">{msg}</p>
    </div>
  );
}
