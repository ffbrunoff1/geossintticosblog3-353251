import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  ExternalLink
} from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Artigos Recentes', href: '#articles' },
    { name: 'Sobre o Blog', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ]

  const categories = [
    { name: 'Geotêxtil', href: '/categoria/geotextil' },
    { name: 'Geogrelha', href: '/categoria/geogrelha' },
    { name: 'Geomembrana', href: '/categoria/geomembrana' },
    { name: 'Geocélula', href: '/categoria/geocelula' },
    { name: 'Pesquisas', href: '/categoria/pesquisas' },
    { name: 'Técnico', href: '/categoria/tecnico' },
  ]

  const resources = [
    { name: 'Glossário Técnico', href: '/glossario' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Calculadoras', href: '/calculadoras' },
    { name: 'Normas Técnicas', href: '/normas' },
    { name: 'Casos de Estudo', href: '/casos-estudo' },
    { name: 'Webinars', href: '/webinars' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  const stats = [
    { number: '500+', label: 'Artigos Publicados' },
    { number: '10k+', label: 'Leitores Mensais' },
    { number: '15+', label: 'Especialistas' },
    { number: '5+', label: 'Anos de Experiência' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link to="/" className="inline-block mb-6">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754598660237_0.png"
                  alt="Geossintéticos.Blog"
                  className="h-12 w-auto filter brightness-0 invert"
                />
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                O principal portal de conhecimento técnico sobre geossintéticos no Brasil. 
                Compartilhamos informações especializadas para profissionais da engenharia geotécnica.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span>ffbrunoff@yahoo.com.br</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary-400" />
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary-400" />
                Categorias
              </h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={category.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {category.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-400" />
                Recursos
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link
                      to={resource.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {resource.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Geossintéticos.Blog. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link to="/privacidade" className="hover:text-primary-400 transition-colors duration-300">
                Política de Privacidade
              </Link>
              <span>•</span>
              <Link to="/termos" className="hover:text-primary-400 transition-colors duration-300">
                Termos de Uso
              </Link>
              <span>•</span>
              <span>
                Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300 inline-flex items-center"
                >
                  Papum
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}