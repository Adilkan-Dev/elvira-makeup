import { motion } from 'framer-motion'
import elviraBrushes from '../../public/elvira-brushes.webp'
import { Clock, Wallet, Sparkles, Heart } from 'lucide-react'

const cards = [
  {
    icon: Clock,
    title: 'Убактысын үнөмдөгүсү келгендер',
    description: 'Салонго барууга убактысы жок кыз, келиндер жана үй кожейкелери үчүн',
    gradient: 'from-rose-50 to-nude-100',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-500',
  },
  {
    icon: Wallet,
    title: 'Акчасын үнөмдөгүсү келгендер',
    description: 'Салондун секрет фишкасын үйрөнүп, өзүн сулуулагысы келген айымдар',
    gradient: 'from-champagne-50 to-nude-100',
    iconBg: 'bg-champagne-100',
    iconColor: 'text-champagne-600',
  },
  {
    icon: Sparkles,
    title: 'Өзүнө макияж жасагысы келгендер',
    description: 'Өзүнө өзү макияж жасап, уход кылууну каалагандар үчүн курс',
    gradient: 'from-violet-50 to-nude-100',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-500',
  },
  {
    icon: Heart,
    title: 'Жүзүнө туура уход кылгысы келгендер',
    description: 'Косметологтун кеңеши менен жүзүңүзгө туура уход кылууну үйрөнүңүз',
    gradient: 'from-pink-50 to-nude-100',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ForWhom() {
  return (
    <section id="for-whom" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury" />

      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-champagne-200/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-56 h-56 rounded-full bg-nude-300/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: heading + image side by side on desktop */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-100 text-champagne-600 text-sm font-medium mb-4">
              Кимдер үчүн?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-800 mb-4">
              Бул курс{' '}
              <span className="text-gradient-gold italic">сиз</span> үчүн
            </h2>
            <p className="font-body text-charcoal-400 max-w-lg text-base sm:text-lg leading-relaxed">
              Салонго көп акча жумшап, убактыңызды коротпоңуз — бардыгын өзүңүз үйрөнүңүз.
              Эльвира 10 жылдык тажрыйбасын сиз менен бөлүшөт.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full bg-gradient-to-br from-champagne-100 via-nude-100 to-champagne-200 opacity-70" />
              <img
                src={elviraBrushes}
                alt="Эльвира Бакытбековна"
                className="relative z-10 w-56 sm:w-72 h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-3xl bg-gradient-to-br ${card.gradient} p-6 sm:p-8 border border-white/60 shadow-lg shadow-champagne-500/5 hover:shadow-xl hover:shadow-champagne-500/10 transition-shadow`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${card.iconBg} mb-5 group-hover:scale-110 transition-transform`}>
                <card.icon className={`w-7 h-7 ${card.iconColor}`} />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal-700 mb-2">
                {card.title}
              </h3>
              <p className="font-body text-sm text-charcoal-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
