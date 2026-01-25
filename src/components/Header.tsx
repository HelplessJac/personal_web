import { Link } from 'react-router-dom'

/**
 * 网站头部导航组件
 */
const Header = () => {
  /**
   * 平滑滚动到指定元素
   */
  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80 // Header 高度
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            小杰
          </Link>
          <div className="flex gap-6">
            <a
              href="#about"
              onClick={(e) => scrollToSection('about', e)}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              关于我
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection('projects', e)}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              项目
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection('contact', e)}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              联系
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
