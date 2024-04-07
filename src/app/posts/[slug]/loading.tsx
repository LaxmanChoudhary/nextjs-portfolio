export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="max-w-prose mx-auto animate-pulse">
      <div className="mb-8">
        <p className="text-4xl font-bold h-8 w-80 bg-primary opacity-50"></p>
        <p className="text-sm tracking-tight h-4 w-32 bg-primary opacity-50 mt-2"></p>
      </div>
      <div className="prose dark:prose-invert mx-auto">
        <div className="bg-primary opacity-50 h-48"></div>
        <div className="bg-primary opacity-50 mt-4 h-48"></div>
      </div>
    </div>
  );
}
