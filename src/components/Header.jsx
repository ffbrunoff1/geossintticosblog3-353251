import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Search, BookOpen, Users, Mail } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '/', icon: BookOpen },
    { name: 'Artigos', href: '#articles', icon: BookOpen },
    { name: 'Sobre', href: '#about', icon: Users },
    { name: 'Contato', href: '#contact', icon: Mail },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754598660237_0.png"
              alt="Geossintéticos.Blog"
              className={`h-10 lg:h-12 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'filter brightness-0 invert'
              }`}
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      : 'text-white hover:text-primary-300 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  : 'text-white hover:text-primary-300 hover:bg-white/10'
              }`}
            >
              <Search className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-primary-600'
                  : 'text-white hover:text-primary-300'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm"
          >
            <div className="py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="px-4 py-2"
              >
                <button className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300">
                  <Search className="w-5 h-5" />
                  <span className="font-medium">Pesquisar</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}