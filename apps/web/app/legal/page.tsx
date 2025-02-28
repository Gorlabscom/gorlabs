import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Legal Information</h1>

      <div className="space-y-12">
        <section id="terms" className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">
            Terms and Conditions
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Last updated: February 28, 2025
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Introduction</h3>
              <p>
                Welcome to Gorlabs ("Company", "we", "our", "us"). These Terms
                and Conditions ("Terms", "Terms and Conditions") govern your use
                of our website and services (collectively, "Services") operated
                by Gorlabs. By accessing or using our Services, you agree to be
                bound by these Terms. If you disagree with any part of the
                Terms, you may not access the Services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                2. Services Description
              </h3>
              <p>
                Gorlabs provides blockchain development services, including but
                not limited to smart contract development, decentralized
                application (dApp) development, tokenomics design, and
                blockchain infrastructure solutions across various networks
                including Ethereum, Binance Smart Chain, Solana, Polygon, Aptos,
                TON, and other blockchain platforms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                3. Service Engagement
              </h3>
              <p>
                Our services are provided on a project basis as outlined in
                individual agreements with clients. The scope, deliverables,
                timeline, and payment terms for each project will be specified
                in a separate agreement. The terms outlined in this document
                apply to all engagements unless explicitly overridden in a
                specific agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                4. Intellectual Property
              </h3>
              <p>
                Upon full payment of all applicable fees, clients will receive
                ownership rights to the deliverables as specified in their
                individual agreements. However, Gorlabs retains ownership of all
                pre-existing intellectual property, including frameworks,
                development tools, and methodologies used in the creation of
                deliverables.
              </p>
              <p className="mt-2">
                Gorlabs may use general knowledge, skills, and experience
                acquired during the provision of services for future projects,
                provided that we do not disclose any confidential information
                specific to your project.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">5. Payment Terms</h3>
              <p>
                Payment terms are specified in individual client agreements.
                Generally, we require an upfront payment before commencing work,
                with subsequent payments tied to project milestones. All fees
                are non-refundable unless otherwise specified in writing.
              </p>
              <p className="mt-2">
                For subscription-based services, payments are due according to
                the selected billing cycle. Failure to make timely payments may
                result in suspension or termination of services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                6. Blockchain Technology Risks
              </h3>
              <p>
                Client acknowledges that blockchain technology and
                cryptocurrency markets involve significant risks, including but
                not limited to regulatory uncertainty, market volatility,
                technical vulnerabilities, and network changes. Gorlabs does not
                guarantee any specific outcomes, returns, or performance of
                blockchain applications or tokens developed as part of our
                services.
              </p>
              <p className="mt-2">
                While we implement industry best practices for security, we
                cannot guarantee that smart contracts or blockchain applications
                will be entirely free from vulnerabilities or exploits.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                7. Limitation of Liability
              </h3>
              <p>
                To the maximum extent permitted by applicable law, Gorlabs and
                its directors, employees, partners, agents, suppliers, or
                affiliates shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your use or inability to use our services</li>
                <li>Any changes to blockchain networks or protocols</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Statements or conduct of any third party on our service</li>
                <li>The performance or failure of any blockchain network</li>
                <li>
                  Regulatory actions or changes in laws affecting blockchain
                  technology
                </li>
                <li>Any other matter relating to our services</li>
              </ul>
              <p className="mt-2">
                In no event shall our total liability exceed the amount paid by
                you to Gorlabs for the applicable services during the six (6)
                month period prior to the cause of action.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">8. Indemnification</h3>
              <p>
                You agree to defend, indemnify, and hold harmless Gorlabs and
                its licensees and licensors, and their employees, contractors,
                agents, officers, and directors, from and against any and all
                claims, damages, obligations, losses, liabilities, costs or
                debt, and expenses (including but not limited to attorney's
                fees) arising from your use of and access to the Services,
                including any data or content transmitted or received by you,
                any breach of these Terms, or your violation of any third-party
                rights, including intellectual property rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">9. Termination</h3>
              <p>
                We may terminate or suspend your access to our Services
                immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the
                Terms.
              </p>
              <p className="mt-2">
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">10. Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of [Jurisdiction], without regard to its conflict of
                law provisions. Our failure to enforce any right or provision of
                these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">11. Changes to Terms</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
              <p className="mt-2">
                By continuing to access or use our Services after those
                revisions become effective, you agree to be bound by the revised
                terms. If you do not agree to the new terms, please stop using
                the Services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">12. Contact Us</h3>
              <p>
                If you have any questions about these Terms, please contact us
                at{' '}
                <Link
                  href="mailto:hello@gorlabs.com"
                  className="text-primary hover:underline"
                >
                  hello@gorlabs.com
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section id="privacy" className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">
            Privacy Policy
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Last updated: February 28, 2025
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Introduction</h3>
              <p>
                At Gorlabs ("Company", "we", "our", "us"), we respect your
                privacy and are committed to protecting your personal data. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our website and services
                (collectively, "Services").
              </p>
              <p className="mt-2">
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access our
                Services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                2. Information We Collect
              </h3>
              <p>
                We may collect several types of information from and about users
                of our Services, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone
                  number, company name, and other contact information you
                  provide when contacting us or signing up for our services.
                </li>
                <li>
                  <strong>Blockchain Information:</strong> Public blockchain
                  addresses, transaction data, and other on-chain information
                  necessary to provide our services.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type and
                  version, time zone setting, browser plug-in types and
                  versions, operating system and platform, and other technology
                  on the devices you use to access our Services.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website and services.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                3. How We Collect Information
              </h3>
              <p>We collect information through:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Direct interactions when you contact us or sign up for our
                  services
                </li>
                <li>
                  Automated technologies or interactions, including cookies and
                  similar tracking technologies
                </li>
                <li>
                  Public blockchain data when providing blockchain-related
                  services
                </li>
                <li>Third parties or publicly available sources</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                4. How We Use Your Information
              </h3>
              <p>
                We may use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Providing, maintaining, and improving our Services</li>
                <li>
                  Processing and fulfilling your requests and transactions
                </li>
                <li>
                  Communicating with you about our Services, updates, and
                  promotions
                </li>
                <li>
                  Analyzing usage patterns and trends to enhance user experience
                </li>
                <li>
                  Protecting our Services and users from fraud, abuse, and
                  unauthorized access
                </li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                5. Disclosure of Your Information
              </h3>
              <p>We may disclose your personal information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Our subsidiaries and affiliates</li>
                <li>
                  Contractors, service providers, and other third parties we use
                  to support our business
                </li>
                <li>
                  A buyer or other successor in the event of a merger,
                  divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of our assets
                </li>
                <li>Fulfill the purpose for which you provide it</li>
                <li>
                  For any other purpose disclosed by us when you provide the
                  information
                </li>
                <li>With your consent</li>
                <li>
                  To comply with any court order, law, or legal process,
                  including to respond to any government or regulatory request
                </li>
                <li>
                  To enforce or apply our terms of use and other agreements
                </li>
                <li>
                  If we believe disclosure is necessary or appropriate to
                  protect the rights, property, or safety of Gorlabs, our
                  customers, or others
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                6. Blockchain Data and Public Information
              </h3>
              <p>
                Due to the nature of blockchain technology, certain information
                related to blockchain transactions is inherently public. When
                you use our blockchain development services, information such as
                wallet addresses, transaction data, and smart contract
                interactions may be visible on public blockchains. This
                information is not controlled by Gorlabs and cannot be removed
                or modified once recorded on a blockchain.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">7. Data Security</h3>
              <p>
                We have implemented measures designed to secure your personal
                information from accidental loss and from unauthorized access,
                use, alteration, and disclosure. However, the transmission of
                information via the internet is not completely secure. Although
                we do our best to protect your personal information, we cannot
                guarantee the security of your personal information transmitted
                to our Services. Any transmission of personal information is at
                your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                8. Cookies and Tracking Technologies
              </h3>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our Services and hold certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier. You can instruct your browser to
                refuse all cookies or to indicate when a cookie is being sent.
                However, if you do not accept cookies, you may not be able to
                use some portions of our Services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                9. Your Data Protection Rights
              </h3>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  The right to access, update, or delete your personal
                  information
                </li>
                <li>
                  The right to rectification if your information is inaccurate
                  or incomplete
                </li>
                <li>
                  The right to object to our processing of your personal data
                </li>
                <li>
                  The right to request restriction of processing of your
                  personal data
                </li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, please contact us at{' '}
                <Link
                  href="mailto:hello@gorlabs.com"
                  className="text-primary hover:underline"
                >
                  hello@gorlabs.com
                </Link>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                10. Children's Privacy
              </h3>
              <p>
                Our Services are not intended for children under 18 years of
                age. We do not knowingly collect personal information from
                children under 18. If you are a parent or guardian and you are
                aware that your child has provided us with personal information,
                please contact us.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                11. Changes to Our Privacy Policy
              </h3>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">12. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{' '}
                <Link
                  href="mailto:hello@gorlabs.com"
                  className="text-primary hover:underline"
                >
                  hello@gorlabs.com
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
        <div className='mt-16 text-center text-gray-500 text-sm'>
          <p>Last Updated: February 28, 2025</p>
          <p className="mt-2">© 2025 Gorlabs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

