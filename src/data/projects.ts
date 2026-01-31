/**
 * 项目数据
 * 可以根据实际情况修改
 */
export interface Project {
  /** 项目唯一标识 */
  id: number
  /** 项目标题 */
  name: string
  /** 项目描述 */
  description: string
  /** 技术栈标签数组 */
  techStack: string[]
  /** 项目截图 URL */
  image?: string
  /** 项目在线链接 */
  link?: string
  /** GitHub 仓库链接 */
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: '个人作品集网站',
    description: '这是一个很棒的项目描述，展示了项目的核心功能和特点。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    // 方式1: 使用本地图片（将截图放在 public/images/ 目录下）
    image: '/images/project-1.png',
    // 方式2: 使用在线图片 URL
    // image: 'https://example.com/project-screenshot.jpg',
    link: 'https://personal-web-pi-three.vercel.app/',
    github: 'https://github.com/HelplessJac/personal_web',
  },
  {
    id: 2,
    name: '小杰笔记',
    image: '/images/project-2.png',
    description: '这是一个基于markdown的笔记软件，支持实时预览和导出。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://xiaojie-markdown.vercel.app/',
    github: 'https://github.com/HelplessJac/xiaojie_markdown',
  },
  // {
  //   id: 3,
  //   name: '项目名称 3',
  //   description: '第三个项目展示了更多的技术栈和实现细节。',
  //   techStack: ['React', 'TypeScript', 'GraphQL'],
  //   link: 'https://example.com',
  // },
]
