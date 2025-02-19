'use client';
import { motion } from 'motion/react';
import { CheckIcon, DollarSign } from '@repo/design-system/icons';
// import { HighlightGroup, HighlighterItem } from '@/components/Highlighter';
import Particles from '@/components/particles';
import { useState } from 'react';
import { cn } from '@repo/design-system/lib/utils';
import Link from 'next/link';

type BilledType = 'monthly' | 'annually';
const pricingData: OfferCardProps[] = [
  {
    title: 'Teams',
    description: 'For small teams',
    price: {
      monthly: 1499,
      annually: 14499,
    },
    slots: 2,
    noCardRequired: false,
    features: [
      'Upto 5+ contracts',
      'Development of Solana, Aptos and TON available',
      'commercial license',
      'Premium support',
    ],
    infos: ['Email & slack support'],
    link: '/billing?ref=teams',
  },
  {
    title: 'Startup',
    description: 'For large businesses',
    price: {
      monthly: 11799,
      annually: 79499,
    },
    slots: 1,
    noCardRequired: false,
    features: [
      'Everything in Teams plan',
      'Get Unlimited premium Tools',
      'Upto 20+ contracts',
      'Development of BTC, Eth, Polygon, and Bnb available',
      'Premium license',
      'Premium support & training sessions',
    ],
    infos: ['Phone and email support', 'free 1 year revisions'],
    link: '/billing?ref=startup',
    isBestValue: true,
    closingSoon: true,
  },
];

export default function Pricing() {
  const [selectedBilledType, setSelectedBilledType] =
    useState<BilledType>('monthly');

  function handleSwitchTab(tab: BilledType) {
    setSelectedBilledType(tab);
  }

  // switch between billing toggle and single price mode
  const ENABLE_BILLING_TOGGLE = true; // set to false for single price mode

  return (
    <section id="plans">
      {/* <Container> */}
      <div className="relative">
        <div
          className="-z-10 pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-1/2 flex aspect-square w-1/3 items-center justify-center">
            <div className="translate-z-0 absolute inset-0 rounded-full bg-primary-500 opacity-50 blur-[120px]" />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              {/* <SectionBadge title="Pricing plans" /> */}
              <h2 className="mt-4 mb-4 font-light text-6xl tracking-tighter">
                Fair pricing, unfair advantage.
              </h2>
              <p className="text-lg text-zinc-400 tracking-tight">
                Invite your whole team, we don't do seat-based pricing here.
              </p>
              {/* <h2 className="pb-4 text-4xl mt-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-zinc-200/60 dark:via-zinc-200 dark:to-zinc-200/60 from-zinc-950/70 via-zinc-950 to-zinc-950/70 group">
                  Fair pricing, unfair advantage.
                </h2>
                <p className="text-lg text-zinc-400">
                  Invite your whole team, we don't do seat-based pricing here.
                </p> */}
            </div>
            <div className="flex flex-col items-center gap-4">
              {ENABLE_BILLING_TOGGLE ? (
                <SelectOfferTab
                  handleSwitchTab={handleSwitchTab}
                  selectedBilledType={selectedBilledType}
                />
              ) : (
                <SinglePriceTab />
              )}
              <div className="group grid h-full gap-6 md:grid-cols-12">
                {/* <HighlightGroup className="h-full grid gap-6 md:grid-cols-12 group"> */}
                {pricingData.map((offer, i) => (
                  <div
                    key={offer.title}
                    className="group/item h-full md:col-span-6"
                  >
                    {/* <HighlighterItem> */}
                    <OfferCard
                      {...offer}
                      selectedBilledType={selectedBilledType}
                      index={i}
                      link={offer.link}
                    />
                    {/* </HighlighterItem> */}
                  </div>
                ))}
                <div
                  className="group/item h-full rounded-xl border border-neutral-500/50 md:col-span-12"
                  data-aos="fade-down"
                >
                  {/* <HighlighterItem> */}
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-50 dark:bg-zinc-900">
                    <Particles
                      className="-z-10 absolute inset-0 opacity-10 invert transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100 dark:invert-0"
                      quantity={200}
                    />
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="-translate-x-1/2 -z-10 pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 translate-y-1/2"
                        aria-hidden="true"
                      >
                        <div className="translate-z-0 absolute inset-0 rounded-full bg-zinc-200 blur-[80px] dark:bg-zinc-800" />
                      </div>
                      {/* Text */}

                      <div className="p-8">
                        <div className="font-semibold text-5xl text-zinc-800 dark:text-neutral-200">
                          Enterprise
                        </div>
                        <div className="mt-2 text-sm text-zinc-900 dark:text-neutral-400">
                          Custom requirements? We got you covered.
                        </div>
                        <div className="mt-16 ">
                          <Link
                            className={
                              cn(
                                'inline-block transform-gpu items-center justify-center rounded-lg border border-neutral-700 bg-transparent px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800'
                              )
                              // ,
                              // isBestValue
                              //   ? 'bg-gradient-to-br from-[#f6a1a1] to-[#ed4545]'
                              //   : 'dark:bg-neutral-700 bg-neutral-100')
                            }
                            style={{ zIndex: 10 }}
                            href={'mailto:hello@gorlabs.com'}
                          >
                            Let's talk{' '}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </HighlighterItem> */}
                </div>
              </div>
              {/* </HighlightGroup> */}
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
}

type OfferCardProps = {
  title: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  slots?: number;
  noCardRequired: boolean;
  features: string[];
  infos?: string[];
  link: string;
  isBestValue?: boolean;
  closingSoon?: boolean;
};

const OfferCard = ({
  title,
  description,
  price,
  features,
  infos,
  isBestValue,
  selectedBilledType,
  index,
  noCardRequired,
  link,
  slots,
  closingSoon,
}: OfferCardProps & {
  selectedBilledType: BilledType;
  index: number;
  link: string;
}) => {
  function getAnnualPrice() {
    return price.annually;
  }

  function getMonthlyPrice() {
    return price.monthly;
  }

  return (
    <div
      className={cn(
        'hover:-translate-y-1 h-full transform-gpu overflow-hidden rounded-2xl border bg-white transition-all duration-300 ease-in-out dark:bg-neutral-900',
        'text-zinc-900 dark:text-neutral-400',
        isBestValue
          ? 'border:-[#6745ed] dark:border-[#ed8445]'
          : 'border-neutral-500/50'
      )}
    >
      <div className="relative">
        {closingSoon && (
          <div className='-right-16 absolute top-6 z-10 w-64 rotate-45 bg-red-500 py-2 text-center font-semibold text-sm text-white'>
            Closing Soon
          </div>
        )}
        <div
          className={cn('h-full p-6')}
          style={
            isBestValue
              ? {
                  background:
                    'radial-gradient(58.99% 10.42% at 50% 100.46%, rgba(251, 188, 5, .07) 0, transparent 100%), radial-gradient(135.76% 66.69% at 92.19% -3.15%, rgba(251, 5, 153, .1) 0, transparent 100%), radial-gradient(127.39% 38.15% at 22.81% -2.29%, rgba(239, 145, 84, .4) 0, transparent 100%)',
                }
              : {}
          }
        >
          <div className="hover:-translate-y-2 duration-500">
            <Particles
              className="-z-10 absolute inset-0 opacity-10 invert transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100 dark:invert-0"
              quantity={(index) + 1 ** 2 * 10}
              color={[
                // '#34d399',
                '#fde047',
                '#f43f5e'
              ][index]}
              vy={-0.2}
            />
            <div className="text-5xl text-zinc-800 dark:text-neutral-200">
              {title}
            </div>
            <div className="mt-2 text-sm text-zinc-900 dark:text-neutral-400">
              {description}
            </div>
            <div className="mt-4 space-y-2">
              {/* Show both prices when monthly is selected */}
              {selectedBilledType === 'monthly' ? (
                <>
                  <div>
                    <div className="font-semibold text-4xl text-zinc-800 dark:text-neutral-200">
                      {getMonthlyPrice()}
                      <DollarSign className="inline size-5" />
                    </div>
                    <div className="text-sm text-zinc-900 dark:text-neutral-400">
                      per month
                    </div>
                  </div>
                  <div className="text-sm text-zinc-500">
                    or {getAnnualPrice()}$ billed annually
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="font-semibold text-4xl text-zinc-800 dark:text-neutral-200">
                      {getAnnualPrice()}
                      <DollarSign className="inline size-5" />
                    </div>
                    <div className="text-sm text-zinc-900 dark:text-neutral-400">
                      per year
                    </div>
                  </div>
                  <div className="text-sm text-zinc-500">
                    {(getAnnualPrice() / 12).toFixed(2)}$ per month
                  </div>
                </>
              )}
            </div>

            {/* Add slots information */}
            {slots !== undefined && (
              <div className="mt-4 text-sm">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2 py-1 font-medium text-xs',
                    slots > 0
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  )}
                >
                  {slots > 0
                    ? `${slots} slots available`
                    : 'No slots available'}
                </span>
              </div>
            )}

            <Link
              className={
                cn(
                  'mt-12 inline-block w-full transform-gpu items-center justify-center rounded-lg border border-neutral-700 bg-transparent px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800'
                )
                // ,
                // isBestValue
                //   ? 'bg-gradient-to-br from-[#f6a1a1] to-[#ed4545]'
                //   : 'dark:bg-neutral-700 bg-neutral-100')
              }
              style={{ zIndex: 10 }}
              href={link ?? ''}
            >
              Select
            </Link>
            {noCardRequired && (
              <span className="text-neutral-600 text-sm tracking-tight">
                No credit card required
              </span>
            )}
            <p
              className={cn('mt-8 mb-4 font-semibold text-sm tracking-tight ')}
            >
              This plan includes:
            </p>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon
                    className={cn('h-6 w-5 flex-none', {
                      'text-yellow-300 invert dark:invert-0': index === 0,
                      'text-rose-500 invert dark:invert-0': index === 1,
                    })}
                    aria-hidden="true"
                  />
                  <div className=" text-sm">{feature}</div>
                </li>
              ))}
            </ul>
            {infos && (
              <>
                <div className="my-6 h-px bg-neutral-600" />
                <ul className="space-y-2">
                  {infos.map((info) => (
                    <li key={info} className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-neutral-500" />
                      <div className=" text-sm">{info}</div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// To disable billing toggle, comment out this component and use the SinglePriceTab instead
export function SelectOfferTab({
  handleSwitchTab,
  selectedBilledType,
}: Readonly<{
  handleSwitchTab: (tab: BilledType) => void;
  selectedBilledType: BilledType;
}>) {
  const OfferList = ['monthly', 'annually'] as const;
  return (
    <nav className="flex flex-col sm:flex-row">
      {OfferList.map((button) => (
        <button
          type="button"
          key={button}
          onClick={() => handleSwitchTab(button)}
          className={cn(
            'relative inline-flex w-fit transform-gpu whitespace-nowrap px-6 py-2.5 font-semibold text-lg capitalize tracking-tight transition-colors',
            selectedBilledType === button
              ? 'text-neutral-700 dark:text-neutral-50'
              : 'text-neutral-800 hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-300'
          )}
        >
          {button}
          {selectedBilledType === button && (
            <motion.div
              layoutId="paymentTab"
              layout
              className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-full bg-neutral-200 dark:bg-neutral-800"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="size-full rounded-full" />
            </motion.div>
          )}
        </button>
      ))}
    </nav>
  );
}

// Use this component for single price display without billing toggle
export function SinglePriceTab() {
  return (
    <div className='mb-8 text-center'>
      <h3 className='font-medium text-lg text-zinc-900 dark:text-zinc-100'>
        Current Pricing
      </h3>
      <p className="text-sm text-zinc-500">Q1 2025</p>
    </div>
  );
}
