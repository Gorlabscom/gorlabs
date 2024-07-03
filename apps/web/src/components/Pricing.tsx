'use client'

import { cn } from '@repo/ui/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from '@repo/ui/icons'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Start with essential tools to boost your online presence.',
    monthlyPrice: "0",
    annualPrice: "0",
    link: '#',
    features: [
      'Limited AI usage',
      'Access free tools',
      'Built-in AI Keyword Research',
      'Target latest AI products',
      'Access to 100+ free tools',
    ],
  },
  {
    name: 'Professional',
    description:
      'Unlock enhanced features and premium content to supercharge your business.',
    monthlyPrice: 4.99,
    annualPrice: 1.99,
    link: '#',
    features: [
      'Everything in Basic plan',
      'Get 25 premium AI Tools',
      'Index upto 1000 pages',
      'Professional license',
      'Premium support',
      'AI Agent',
    ],
  },
  {
    name: 'Premium',
    description:
      'Ultimate customization and dedicated support for enterprises.',
    monthlyPrice: 79,
    annualPrice: 49,
    link: '#',
    features: [
      'Everything in Professional plan',
      'Get Unlimited premium AI Tools',
      'Add your own AI Model key',
      'Self-hosted AI Tools',
      'Premium license',
      'Premium support & training sessions',
    ],
  },
]

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M')

  const Heading = () => (
    <div className="relative z-10 my-8 flex flex-col items-center justify-center gap-2 px-2 md:px-4">
      <div className="flex w-full flex-col items-start justify-center space-y-2 md:space-y-4 md:items-center">
        <div className="mb-2 inline-block rounded-full bg-[#7f57f1]/10 px-2 py-[0.20rem] text-xs font-medium uppercase text-[#7f57f1]/50 dark:bg-[#7f57f1]/20">
          {' '}
          Pricing
        </div>
        <p className="mt-2 text-lg font-bold tracking-tight text-gray-800 sm:text-2xl dark:text-gray-200">
          Fair pricing, unfair advantage.
        </p>
        <p className="text-xs max-w-sm text-gray-700 md:text-center dark:text-gray-300">
          Get started with Gorlabs today and take your business to the next level.
        </p>
      </div>
      <div className="flex items-center justify-center gap-1 md:gap-3">
        <button
          onClick={() => setBillingCycle('M')}
          className={cn(
            `rounded-lg px-2 py-1 text-xs font-medium md:px-4 md:py-2 md:text-sm`,
            billingCycle === 'M'
              ? 'relative bg-[#7f57f1]/50 text-white '
              : 'text-gray-700 hover:bg-[#7f57f1]/10 dark:text-gray-300 dark:hover:text-white',
          )}
        >
          Monthly
          {billingCycle === 'M' && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          onClick={() => setBillingCycle('A')}
          className={cn(
            `rounded-lg px-2 py-1 text-xs font-medium md:px-4 md:py-2 md:text-sm`,
            billingCycle === 'A'
              ? 'relative bg-[#7f57f1]/50 text-white '
              : 'text-gray-700 hover:bg-[#7f57f1]/10 dark:text-gray-300 dark:hover:text-white',
          )}
        >
          Annual
          {billingCycle === 'A' && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  )

  const PricingCards = () => (
    <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-2 px-1 sm:gap-4 sm:px-2 lg:grid-cols-3">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="flex flex-col w-full rounded-xl border-[1px] border-gray-300 p-2 text-left dark:border-gray-600 sm:p-4"
        >
          <p className="mb-1 mt-0 text-xs font-medium uppercase text-[#7f57f1]/90 sm:text-sm">
            {plan.name}
          </p>
          <p className="my-0 mb-2 text-xs text-gray-600 sm:mb-4 sm:text-sm">{plan.description}</p>
          <div className="mb-4 overflow-hidden sm:mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="my-0 text-lg font-semibold text-gray-900 dark:text-gray-100 sm:text-xl"
              >
                <span>
                  ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-xs font-medium sm:text-sm">
                  /{billingCycle === 'M' ? 'month' : 'year'}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link)
              }}
              className="mt-4 w-full rounded-lg bg-[#7f57f1]/50 py-1 text-xs font-medium text-white hover:bg-[#7f57f1]/90 sm:mt-6 sm:py-2 sm:text-sm"
            >
              Get Started
            </motion.button>
          </div>
          <div className="flex-grow">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="mb-1 flex items-center gap-1 sm:gap-2 sm:mb-2">
                <Check className="text-[#7f57f1]/50" size={12} />
                <span className="text-xs text-gray-600 sm:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="relative w-full overflow-hidden py-6 text-black sm:py-8 lg:px-2 lg:py-12">
      <Heading />
      <PricingCards />
    </section>
  )
}

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className=" absolute inset-0 -z-10 rounded-lg bg-[#7f57f1]/50"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  />
)

export default function PricingPage() {
  return <Pricing />
}
