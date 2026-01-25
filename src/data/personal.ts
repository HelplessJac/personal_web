/**
 * 个人信息配置
 * 可以在这里修改个人信息，包括头像、标题、简介等
 */

export interface PersonalInfo {
  /** 头像图片路径或 URL */
  avatarUrl?: string
  /** 主标题/姓名 */
  title: string
  /** 副标题/简介 */
  subtitle: string
}

export const personalInfo: PersonalInfo = {
  // 方式1: 使用本地图片（将图片放在 public/images/ 目录下）
  avatarUrl: '/images/avatar.jpg',
  
  // 方式2: 使用在线图片 URL
  // avatarUrl: 'https://example.com/avatar.jpg',
  
  // 方式3: 不设置则显示默认图标
  // avatarUrl: undefined,
  
  title: '小杰',
  subtitle: '测试开发工程师 | 热爱测试开发',
}
