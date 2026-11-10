import AgentCard from '../components/AgentCard'
import SectionReveal from '../components/SectionReveal'
import { agents } from '../data/content'

export default function Agents() {
  return (
    <section id="agents" className="scroll-mt-24 border-y border-white/5 bg-navy-deep py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-12 max-w-2xl">
          <div className="gold-rule mb-4" />
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
            Our advisors
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Specialist agents
          </h2>
          <p className="mt-3 text-base text-white/70">
            Concierge guidance from brokers who know every corridor of the skyline.
          </p>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
