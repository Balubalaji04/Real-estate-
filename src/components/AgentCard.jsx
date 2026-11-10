import { motion } from '../lib/motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function AgentCard({ agent, index }) {
  const reduced = useReducedMotion()

  const card = (
    <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-navy-deep/60 transition duration-300 hover:border-gold/35 hover:shadow-[0_24px_60px_-28px_rgba(212,175,55,0.3)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={agent.image}
          alt={agent.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-70" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
          {agent.role}
        </p>
        <h3 className="font-heading text-xl font-bold text-white">{agent.name}</h3>
        <p className="text-sm text-white/70">{agent.focus}</p>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-white/65">{agent.bio}</p>
        <div className="mt-3 space-y-1 border-t border-white/10 pt-3 text-sm">
          <a href={`mailto:${agent.email}`} className="block text-white/80 hover:text-gold">
            {agent.email}
          </a>
          <a href={`tel:${agent.phone.replace(/[^\d+]/g, '')}`} className="block text-white/80 hover:text-gold">
            {agent.phone}
          </a>
        </div>
      </div>
    </article>
  )

  if (reduced) return card

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      {card}
    </motion.div>
  )
}
