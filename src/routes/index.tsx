import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North · Finance Career OS" },
      { name: "description", content: "金融职业方向系统：从学历、实习与技能出发，生成职业坐标、每日行动与可写入简历的成长证据。" },
      { property: "og:title", content: "North · Finance Career OS" },
      { property: "og:description", content: "看见路径，也看见今天这一小步为什么值得。" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/north.html"
      title="North Finance Career OS Demo"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
    />
  );
}
