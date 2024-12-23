"use client";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
export const GoalMetrics = () => {
  // 目標データと実績データを事前に定義
  const goals = {
    attendance: 20,
    support: 30,
    realsupport: 25,
    approach: 40,
    appoint: 10,
  };

  const achievements = {
    attendance: 15,
    support: 25,
    realsupport: 20,
    approach: 35,
    appoint: 8,
  };

  const calculateProgress = (actual: number, target: number) => {
    if (!target || !actual) return 0;
    return Math.min(Math.round((actual / target) * 100), 100);
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-emerald-500";
    if (progress >= 50) return "bg-amber-500";
    return "bg-rose-500";
  };

  const getStatusColor = (progress: number) => {
    if (progress >= 80) return "text-emerald-600";
    if (progress >= 50) return "text-amber-600";
    return "text-rose-600";
  };

  const getProgressIcon = (progress: number) => {
    if (progress >= 80) {
      return <TrendingUp className="w-5 h-5 text-emerald-500" />;
    } else if (progress >= 50) {
      return <TrendingUp className="w-5 h-5 text-amber-500" />;
    } else {
      return <TrendingDown className="w-5 h-5 text-rose-500" />;
    }
  };

  const metrics = [
    { key: "attendance", label: "出勤" },
    { key: "support", label: "対応数" },
    { key: "realsupport", label: "実対応" },
    { key: "approach", label: "アプ" },
    { key: "appoint", label: "アポ" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {metrics.map(({ key, label }) => {
        const target = goals[key as keyof typeof goals];
        const actual = achievements[key as keyof typeof achievements];
        const progress = calculateProgress(actual, target);

        return (
          <Card
            key={key}
            className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer group relative"
          >
            {/* ヘッダー部分 */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-600">{label}</h3>
              {getProgressIcon(progress)}
            </div>

            {/* 数値表示 */}
            <div className="flex items-baseline space-x-2 mb-3">
              <span
                className={`text-2xl font-bold ${getStatusColor(progress)}`}
              >
                {actual}
              </span>
              <span className="text-sm text-gray-500">/ {target}</span>
            </div>

            {/* プログレスバー */}
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full transition-all duration-500 ${getProgressColor(
                  progress
                )}`}
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* 達成率 */}
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-500">達成率</span>
              <span
                className={`text-sm font-medium ${getStatusColor(progress)}`}
              >
                {progress}%
              </span>
            </div>

            {/* ホバー効果 */}
            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-5 rounded-lg transition-opacity" />
          </Card>
        );
      })}
    </div>
  );
};
