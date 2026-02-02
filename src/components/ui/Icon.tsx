import { Building2, BarChart3, Lock, TrendingUp } from "lucide-react";

const icons = {
  building: Building2,
  chart: BarChart3,
  lock: Lock,
  trend: TrendingUp,
};

export function Icon({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  const Comp = icons[name];
  return <Comp className={className} />;
}
