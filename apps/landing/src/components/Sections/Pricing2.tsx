// [Stale]: Backup of Old Pricing page.

'use client';
import { motion } from 'framer-motion';
import { CheckIcon, DollarSign } from '@gorlabs/ui/icons';
// import { HighlightGroup, HighlighterItem } from '@/components/Highlighter';
import Particles from '@/components/Particles/Particles';
import React, { useState } from 'react';
import { cn } from '@gorlabs/utils';
import Link from 'next/link';
import { Container, SectionBadge } from '@gorlabs/ui';

type BilledType = 'monthly' | 'annually';
const pricingData: OfferCardProps[] = [
  {
    title: 'Starter',
    description: 'For small teams',
    price: {
      monthly: 0,
      annually: 0,
    },
    features: [
      'Limited AI usage',
      'Access free tools',
      'Built-in AI Keyword Research',
      'Target latest AI products',
      'Access to 100+ free tools',
    ],
    infos: ['1 user', 'Community support'],
    link: '/starter',
  },
  {
    title: 'Professional',
    description: 'For medium-sized businesses',
    price: {
      monthly: 4.99,
      annually: 1.99,
    },
    features: [
      'Everything in Basic plan',
      'Get 25 premium AI Tools',
      'AI Agent',
      'Professional license',
      'Premium support',
    ],
    infos: ['4 users', 'Phone and email support'],
    link: '/pro',
    isBestValue: true,
  },
  {
    title: 'Enterprise',
    description: 'For large businesses',
    price: {
      monthly: 79,
      annually: 49,
    },
    features: [
      'Everything in Professional plan',
      'Get Unlimited premium AI Tools',
      // 'Add your own AI Model key',
      'Self-hosted AI Tools',
      'Premium license',
      'Premium support & training sessions',
    ],
    infos: ['30 users', 'Phone and email support'],
    link: '/enterprise',
  },
];

export default function Pricing() {
  const [selectedBilledType, setSelectedBilledType] =
    useState<BilledType>('monthly');

  function handleSwitchTab(tab: BilledType) {
    setSelectedBilledType(tab);
  }

  return (
    <section id="plans">
      <Container>
        <div className="relative">
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
            aria-hidden="true"
          >
            <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
              <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
            </div>
          </div>
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
                <SectionBadge title="Pricing plans" />
                <h2 className="pb-4 text-4xl mt-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-zinc-200/60 dark:via-zinc-200 dark:to-zinc-200/60 from-zinc-950/70 via-zinc-950 to-zinc-950/70 group">
                  Fair pricing, unfair advantage.
                </h2>
                <p className="text-lg text-zinc-400">
                  Invite your whole team, we don't do seat-based pricing here.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <SelectOfferTab
                  handleSwitchTab={handleSwitchTab}
                  selectedBilledType={selectedBilledType}
                />
                <div className="h-full grid gap-6 md:grid-cols-12 group">
                  {/* <HighlightGroup className="h-full grid gap-6 md:grid-cols-12 group"> */}
                  {pricingData.map((offer, i) => (
                    <div
                      key={offer.title}
                      className="h-full md:col-span-6 lg:col-span-4 group/item"
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
                    className="h-full md:col-span-6 lg:col-span-12  group/item"
                    data-aos="fade-down"
                  >
                    {/* <HighlighterItem> */}
                    <div className="relative h-full dark:bg-zinc-900 bg-zinc-50 rounded-[inherit] z-20 overflow-hidden">
                      <Particles
                        className="absolute inset-0 -z-10 opacity-10 invert dark:invert-0 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
                        quantity={200}
                      />
                      <div className="flex flex-col">
                        {/* Radial gradient */}
                        <div
                          className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 dark:bg-zinc-800 bg-zinc-200 rounded-full blur-[80px]" />
                        </div>
                        {/* Text */}

                        <div className="p-8">
                          <h3 className="text-lg font-semibold leading-8">
                            Custom
                          </h3>

                          <p className="mt-4 text-sm leading-6 dark:text-zinc-400 text-zinc-600">
                            Custom requirements? We got you covered.
                          </p>
                          <div className="mt-16 ">
                            <Link
                              className="font-medium  whitespace-nowrap transition duration-150 ease-in-out dark:text-zinc-100 dark:hover:text-white group"
                              href="mailto:hello@gorlabs.com"
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
      </Container>
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
  features: string[];
  infos?: string[];
  link: string;
  isBestValue?: boolean;
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
  link,
}: OfferCardProps & {
  selectedBilledType: BilledType;
  index: number;
  link: string;
}) => {
  function getAnnualPrice() {
    return price.annually * 12;
  }

  return (
    <div
      className={cn(
        'rounded-2xl border hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden dark:bg-neutral-800/50 bg-primary dark:hover:bg-neutral-800/100 hover:bg-zinc-100/75 h-full transform-gpu',
        'dark:text-neutral-400 text-zinc-900',
        isBestValue
          ? 'dark:border-[#ed8445]  border:-[#6745ed]'
          : 'border-neutral-500/50'
      )}
    >
      <div
        className={cn('p-6')}
        style={
          isBestValue
            ? {
                background:
                  'radial-gradient(58.99% 10.42% at 50% 100.46%, rgba(251, 188, 5, .07) 0, transparent 100%), radial-gradient(135.76% 66.69% at 92.19% -3.15%, rgba(251, 5, 153, .1) 0, transparent 100%), radial-gradient(127.39% 38.15% at 22.81% -2.29%, rgba(239, 145, 84, .4) 0, transparent 100%)',
              }
            : {}
        }
      >
        <Particles
          className="absolute inset-0 -z-10 opacity-10 invert dark:invert-0 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
          quantity={(index + 1) ** 2 * 10}
          color={['#34d399', '#fde047', '#f43f5e'][index]}
          vy={-0.2}
        />
        <div className="text-lg font-semibold dark:text-neutral-200 text-zinc-800">
          {title}
        </div>
        <div className="mt-2 text-sm dark:text-neutral-400 text-zinc-900">
          {description}
        </div>
        <div className="mt-4">
          <div className="text-4xl font-semibold dark:text-neutral-200 text-zinc-800">
            {price[selectedBilledType]}
            <DollarSign className="inline size-5" />
          </div>
          <div className="text-sm dark:text-neutral-400 text-zinc-900">
            {selectedBilledType === 'monthly'
              ? 'billed monthly'
              : `${getAnnualPrice()}$ billed annually`}
          </div>
        </div>

        <Link
          href={link}
          className={cn(
            'py-2.5 px-12 rounded-full my-12 dark:text-neutral-50 dark:border-neutral-400/20 text-zinc-900 items-center justify-center inline-flex w-full hover:scale-105 transition-all font-semibold tracking-tight border transform-gpu',
            isBestValue
              ? 'bg-gradient-to-br from-[#f6a1a1] to-[#ed4545]'
              : 'dark:bg-neutral-700 bg-neutral-100'
          )}
          style={{ zIndex: 10 }}
        >
          Select
        </Link>

        <p className={cn('text-sm font-semibold tracking-tight mb-4 ')}>
          This plan includes:
        </p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckIcon
                className={cn('h-6 w-5 flex-none', {
                  'text-emerald-400 invert dark:invert-0': index === 0,
                  'text-yellow-300 invert dark:invert-0': index === 1,
                  'text-rose-500 invert dark:invert-0': index === 2,
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
                  <div className="size-1.5 bg-neutral-500 rounded-full" />
                  <div className=" text-sm">{info}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export function SelectOfferTab({
  handleSwitchTab,
  selectedBilledType,
}: Readonly<{
  // eslint-disable-next-line no-unused-vars
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
            ' text-lg tracking-tight font-semibold py-2.5 px-6  relative whitespace-nowrap inline-flex w-fit   transition-colors capitalize transform-gpu',
            selectedBilledType === button
              ? 'dark:text-neutral-50 text-neutral-700'
              : 'text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-300 hover:text-neutral-600 '
          )}
        >
          {button}
          {selectedBilledType === button && (
            <motion.div
              layoutId="paymentTab"
              layout
              className="absolute top-0 left-0 right-0 bottom-0  -z-10 rounded-full  bg-neutral-200  dark:bg-neutral-800 "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className=" size-full rounded-full" />
            </motion.div>
          )}
        </button>
      ))}
    </nav>
  );
}
