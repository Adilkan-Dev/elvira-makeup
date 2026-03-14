import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, Palette, Eye, Pencil, Flame, Heart,
  Brush, Droplets, Stethoscope,
  Video, MessageCircle, Infinity,
} from 'lucide-react'

const deliveryFeatures = [
  {
    icon: Video,
    title: 'Видео сабактар',
    description: 'Телеграм каналда видеоформатта',
  },
  {
    icon: MessageCircle,
    title: 'Куратор кайтарым',
    description: 'Куратордон кайтарым байланыш',
  },
  {
    icon: Infinity,
    title: 'Өмүр бою жетки',
    description: 'Сабактар сакталып калат',
  },
]

const modules = [
  {
    id: 'brushes',
    icon: Brush,
    title: 'Кистилерге разбор',
    description: 'Макияжда колдонулуучу бардык кистилерди жана аларды туура тандоону үйрөнөсүз',
    color: 'from-amber-400 to-champagne-500',
  },
  {
    id: 'cosmetics',
    icon: Droplets,
    title: 'Косметикаларга разбор',
    description: 'Сапаттуу косметикаларды тандоо, баалар жана каерден алуу жөнүндө маалымат',
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 'cosmetology',
    icon: Stethoscope,
    title: 'Косметологтун кеңеши',
    badge: 'БОНУС',
    description: 'Бетке туура кам көрүү боюнча косметологдон баалуу кеңештер — башка курстарда жок!',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'light',
    icon: Palette,
    title: 'Легкий макияж',
    description: 'Күнүмдүк жеңил жана табигый макияж техникасы — 1 түрүн толук өздөштүрөсүз',
    color: 'from-sky-400 to-blue-500',
  },
  {
    id: 'aesthetic',
    icon: Eye,
    title: 'Легкий эстет макияж',
    description: 'Эстетикалуу, жеңил жана заманбап макияж стили — 1 түрүн үйрөнөсүз',
    color: 'from-violet-400 to-purple-500',
  },
  {
    id: 'arrow',
    icon: Pencil,
    title: 'Растушёванная стрелка',
    description: 'Жумшак, тартылган стрелка техникасы — көздүн формасына жараша 1 түрү',
    color: 'from-champagne-400 to-amber-500',
  },
  {
    id: 'smokey',
    icon: Flame,
    title: 'Смоки Айс',
    description: 'Классикалык Smokey Eyes техникасы — кечки жана сүрөттөлүш макияж үчүн 1 түрү',
    color: 'from-slate-400 to-charcoal-500',
  },
  {
    id: 'age',
    icon: Heart,
    title: 'Возрастной макияж',
    description: 'Жашка ылайыктуу макияж ыкмалары — жүздүн текстурасына карап 1 түрүн өздөштүрөсүз',
    color: 'from-pink-400 to-rose-500',
  },
]

function AccordionItem({ item, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <button
        onClick={toggle}
        className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
          isOpen
            ? 'bg-white shadow-lg shadow-champagne-500/10'
            : 'bg-white/50 hover:bg-white hover:shadow-md'
        }`}
      >
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-champagne-500/10`}>
          <item.icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-base sm:text-lg font-semibold text-charcoal-700">
              {item.title}
            </h3>
            {item.badge && (
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                {item.badge}
              </span>
            )}
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-charcoal-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 ml-16">
              <p className="font-body text-sm text-charcoal-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Program() {
  const [openId, setOpenId] = useState('cosmetology')

  return (
    <section id="program" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-champagne-200/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-nude-300/15 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-100 text-champagne-600 text-sm font-medium mb-4">
            Курс программасы
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-800 mb-4">
            Макияждын{' '}
            <span className="text-gradient-gold italic">5 түрүн</span>
            <br />
            өздөштүрүңүз
          </h2>
          <p className="font-body text-charcoal-400 max-w-xl mx-auto">
            «Сам себе визажист нөлдөн» курсунда сиз нөлдөн баштап профессионал деңгээлдеги макияж жасоону үйрөнөсүз
          </p>
        </motion.div>

        {/* Delivery format — merged from CourseSystem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 mb-12"
        >
          {deliveryFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center bg-white/60 rounded-2xl p-4 sm:p-5 border border-champagne-100/50"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-champagne-50 border border-champagne-200/30 mb-3">
                <feat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-champagne-500" />
              </div>
              <h4 className="font-display text-xs sm:text-sm font-bold text-charcoal-700 mb-0.5">
                {feat.title}
              </h4>
              <p className="font-body text-[10px] sm:text-xs text-charcoal-400 leading-tight">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Accordion modules */}
        <div className="space-y-3">
          {modules.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="font-body text-sm text-charcoal-400 bg-champagne-50 rounded-2xl p-4 border border-champagne-200/50 inline-block">
            <span className="font-semibold text-charcoal-600">Жыйынтыгында:</span> Макияждын 5 түрүн, косметика & кистилерге разбор жана косметологдон кеңеш алыңыз
          </p>
        </motion.div>
      </div>
    </section>
  )
}
