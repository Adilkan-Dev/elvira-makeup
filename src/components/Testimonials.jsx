import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    text: 'Салонго барбай эле өзүмө макияж жасаганды үйрөндүм. Убактым да, акчам да үнөмдөлдү.',
  },
  {
    id: 2,
    text: 'Сабактар түшүнүктүү, этап-этабы менен. Кистилер менен косметика боюнча разбор мага аябай жакты.',
  },
  {
    id: 3,
    text: 'Косметологтун кеңеши өзгөчө пайдалуу болду. Бетиме туура уход кылууну биле баштадым.',
  },
  {
    id: 4,
    text: 'Куратордон кайтарым байланыш алып, катачылыктарымды тез оңдодум. Натыйжа сонун!',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury" />
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-champagne-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-nude-300/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-100 text-champagne-600 text-sm font-medium mb-4">
            Отзывтар
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-800 mb-4">
            Окуучулардын{' '}
            <span className="text-gradient-gold italic">пикирлери</span>
          </h2>
          <p className="font-body text-charcoal-400 max-w-lg mx-auto">
            6500+ окуучу курсту аяктап, натыйжаларын бөлүшүштү
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-champagne-100/70"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-champagne-100 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-4 h-4 text-champagne-500" />
                </div>
                <p className="font-body text-sm sm:text-base text-charcoal-500 leading-relaxed">
                  {review.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
