import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Clock, Monitor, Users } from 'lucide-react'

const stats = [
  { icon: Clock, number: 10, suffix: '+', label: 'Жыл тажрыйба', delay: 0 },
  { icon: Monitor, number: 5, suffix: ' жыл', label: 'Онлайн окутуу', delay: 0.1 },
  { icon: Users, number: 6500, suffix: '+', label: 'Онлайн окуучу', delay: 0.2 },
  { icon: GraduationCap, number: 500, suffix: '+', label: 'Офлайн окуучу', delay: 0.3 },
]

function AnimatedNumber({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-gold">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-champagne-500 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-nude-400 blur-[80px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-champagne-500/10 mb-4">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-champagne-400" />
              </div>
              <div className="mb-1">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="font-body text-sm text-charcoal-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
