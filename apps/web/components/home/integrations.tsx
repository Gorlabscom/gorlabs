'use client';

import { Tag } from '@/components/tag';
import Image from 'next/image';
import { cn } from '@repo/design-system/lib/utils';
import { motion } from 'motion/react';
import { Fragment } from 'react';

const INTEGRATIONS = [
  {
    name: 'BNB',
    icon: '/assets/bnb.svg',
    description: 'BNB powers the Binance ecosystem for trading and payments.',
  },
  {
    name: 'Solana',
    icon: '/assets/solana.svg',
    description:
      'Solana offers fast, scalable blockchain solutions for decentralized apps.',
  },
  {
    name: 'ETH',
    icon: '/assets/eth.svg',
    description:
      'Ethereum enables smart contracts and decentralized applications globally.',
  },
  {
    name: 'TON',
    icon: '/assets/ton.svg',
    description: 'TON is a scalable blockchain for fast, secure transactions.',
  },
  {
    name: 'Aptos',
    icon: '/assets/aptos.svg',
    description:
      'Aptos provides secure, scalable blockchain solutions for Web3 applications.',
  },
  {
    name: 'Polygon',
    icon: '/assets/polygon.svg',
    description:
      'Polygon scales Ethereum with fast, low-cost blockchain infrastructure.',
  },
  {
    name: 'zkSync',
    icon: '/assets/zksync.svg',
    description:
      'zkSync enhances Ethereum scalability with low-cost, secure transactions.',
  },
];

type IntegrationType = typeof INTEGRATIONS;

interface IntegrationColumnProps {
  integrations: IntegrationType;
  className?: string;
  reverseAnimation?: boolean;
}

function IntegrationColumn({
  integrations,
  className,
  reverseAnimation,
}: IntegrationColumnProps) {
  return (
    <motion.div
      initial={{ y: reverseAnimation ? '-50%' : 0 }}
      animate={{ y: reverseAnimation ? 0 : '-50%' }}
      transition={{ duration: 15, ease: 'linear', repeat: Number.POSITIVE_INFINITY }}
      className={cn('flex flex-col gap-4', className)}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className='rounded-3xl border bg-neutral-200 p-6 dark:bg-neutral-900'
            >
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={24}
                  height={24}
                  className="size-24"
                />
              </div>
              <h3 className="mt-6 text-center text-3xl">{integration.name}</h3>
              <p className="mt-2 text-balance text-center text-foreground/50">
                {integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}

export function Integrations() {
  return (
    <section className='overflow-hidden py-24'>
      <div className="container">
        <div className='grid items-center lg:grid-cols-2 lg:gap-16'>
          <section className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <Tag>Integrations</Tag>
            <h2 className='mt-6 text-balance font-medium text-6xl max-md:text-center'>
              Integrate your favorite <span className="text-purple-400">tools</span>
            </h2>
            <p className='mt-4 text-balance text-lg text-muted-foreground max-md:text-center'>
              Gorlabs seamlessly connects with your favorite blockchains, and web3 tools
              without worrying about the stacks.
            </p>
          </section>
          <section>
            <div className='mt-8 grid h-[400px] gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-2 lg:mt-0 lg:h-[800px]'>
              <IntegrationColumn integrations={INTEGRATIONS} />
              <IntegrationColumn
                integrations={INTEGRATIONS.slice().reverse()}
                className="max-md:hidden"
                reverseAnimation={true}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
