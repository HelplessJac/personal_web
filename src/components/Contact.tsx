import { motion } from 'framer-motion'

/**
 * 联系方式组件
 * 包含邮箱、GitHub、社交媒体链接
 */
const Contact = () => {
  const contacts = [
    {
      name: '邮箱',
      value: '957354100@qq.com',
      link: 'mailto:957354100@qq.com',
      icon: '📧',
    },
    {
      name: 'GitHub',
      value: 'GitHub',
      link: 'https://github.com/HelplessJac',
      icon: '💻',
    },
    {
      name: 'CSDN',
      value: 'CSDN博客',
      link: 'https://blog.csdn.net/weixin_51209821?type=blog',
      icon: '📖',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          联系方式
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors border border-gray-800 hover:border-blue-500"
            >
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
              <p className="text-gray-400">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
