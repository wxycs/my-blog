export type Project = {
  title: string;
  description: string;
  href: string;
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "MyBlog",
    description: "一个深色优先的个人主页、博客和作品集入口。",
    href: "/",
    stack: ["Astro", "MDX", "TypeScript"],
    featured: true,
  },
  {
    title: "GitHub",
    description: "代码、实验和长期维护项目的集中入口。",
    href: "https://github.com/wxycs",
    stack: ["Open Source", "Notes"],
    featured: true,
  },
  {
    title: "Reading Notes",
    description: "阅读、摘录和想法整理的占位项目。",
    href: "/blog/",
    stack: ["Writing", "Knowledge"],
    featured: true,
  },
  {
    title: "Daily Tools",
    description: "未来可以放常用工具、书签和工作流捷径。",
    href: "/projects/",
    stack: ["Dashboard", "Links"],
    featured: false,
  },
];
