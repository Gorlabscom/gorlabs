import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/design-system/components/index';
import { Button } from '@repo/design-system/components/index';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    question: 'What does your web3 agency do?',
    answer:
      'We specialize in helping businesses build and deploy decentralized applications (dApps) on popular blockchain networks like BNB, Aptos, Solana, Ethereum, and more. Our services range from smart contract development to complete blockchain infrastructure solutions.',
  },
  {
    question: 'Which blockchains do you support?',
    answer:
      'We support a variety of blockchain platforms including Binance Smart Chain (BNB), Aptos, Solana, Ethereum, Polygon, and more. Our team is experienced in leveraging the unique features of each network to build scalable and secure solutions.',
  },
  {
    question: 'Why should I build my product on blockchain?',
    answer:
      'Blockchain technology offers enhanced security, transparency, and decentralization. It empowers your product with trustless transactions, reduced operational costs, and global accessibility. Additionally, it opens up new revenue models like tokenomics and decentralized finance (DeFi).',
  },
  {
    question: 'How secure are your smart contracts?',
    answer:
      'Security is our top priority. Our smart contracts undergo rigorous testing and third-party audits to ensure they are secure and free from vulnerabilities. We follow industry best practices to safeguard your product and users.',
  },
  {
    question: 'Do you provide custom blockchain development?',
    answer:
      'Yes, we offer custom blockchain development services tailored to your business needs. Whether you need a custom token, decentralized exchange, NFT marketplace, or enterprise-grade dApp, our team can build it for you.',
  },
  {
    question: 'Can you help with tokenomics and launch strategies?',
    answer:
      'Absolutely! We provide strategic guidance on tokenomics design, launch strategies, and community building. Our team ensures your token has sustainable utility and growth potential in the market.',
  },
  {
    question: 'What is the typical development timeline?',
    answer:
      'The timeline varies depending on the project scope and complexity. On average, a dApp or smart contract can take 4-12 weeks to develop. We provide a detailed project plan and timeline after understanding your requirements.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Simply reach out to us through our contact page. We’ll schedule a consultation to understand your business needs and provide a tailored solution to help you succeed in the web3 space.',
  },
];

export const FAQ = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="max-w-xl text-left font-medium text-6xl tracking-tighter md:text-5xl">
                Questions? We&apos;ve got{' '}
                <span className="text-lime-400">answers</span>
              </h2>
              <p className="max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
                Managing a small web3 startup today is already tough. Avoid
                further complications by ditching outdated, tedious trade
                methods. Our goal is to build products on-chain, making it
                easier and faster than ever.
              </p>
            </div>
            <div>
              <Button className="gap-4" variant="outline" asChild>
                <Link href="mailto:hello@gorlabs.com?subject=Hello%20from%20your%20website">
                  Any questions? Reach out <PhoneCall className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} value={`index-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);
