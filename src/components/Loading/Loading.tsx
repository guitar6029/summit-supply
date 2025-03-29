const loadingStatements = [
  "Lacing up the boots...",
  "Dusting off the trails...",
  "Scaling virtual peaks...",
  "Adjusting your trekking poles...",
  "Waterproofing your experience...",
  "Packing the trail mix...",
  "Navigating the digital wilderness...",
  "Testing boot tread durability...",
  "Clearing digital debris...",
  "Mapping the perfect route...",
];

export default function Loading() {
  const randonStatement =
    loadingStatements[Math.floor(Math.random() * loadingStatements.length)];

  return (
    <div className="min-h-screen p-10 mt-10 flex flex-col items-center justify-center hiking-font text-5xl lg:text-9xl">
      <span>{randonStatement}</span>
    </div>
  );
}
