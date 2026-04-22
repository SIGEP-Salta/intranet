import { Card } from "../ui/card";

export default function Legend({ items = [] }) {
    return (
        <Card className="my-4 w-full">
            <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2">
                { items.map((item, index) => (
                    <LegendItem key={index} color={ item.color } label={ item.label } />
                ))}
            </div>
        </Card>
    )
}

function LegendItem({ color, label }) {
    return (
      <div className="flex items-center gap-2">
        <div className={`h-3 w-3 rounded-full ${color}`} />
        <span className="text-xs">{label}</span>
      </div>
    );
  }