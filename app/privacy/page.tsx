import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Kwik Plumbing and Heating",
  description:
    "Read the privacy policy for Kwik Plumbing and Heating Inc. Learn how we collect, use, and protect the information you share when you contact us or request service.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "April 27, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE.url}/` },
          { name: "Privacy Policy", url: `${SITE.url}/privacy` },
        ])}
      />

      <PageHeader
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        subtitle={`How ${SITE.name} collects, uses, and protects your information.`}
      />

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card border border-brand-light p-8 md:p-12">
          <div className="prose-content">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Effective Date:</strong> {EFFECTIVE_DATE}
            </p>

            <p>
              {SITE.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
              privacy and is committed to protecting the personal information you share with us.
              This Privacy Policy explains what information we collect, how we use it, and the
              choices you have. It applies to{" "}
              <a href={SITE.url} className="text-brand-blue font-semibold hover:underline">
                {SITE.url.replace(/^https?:\/\//, "")}
              </a>{" "}
              and any related forms, calls, or interactions with our team.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>
                <strong>Contact details</strong> — your name, phone number, email address, and
                service address when you call, text, or submit a form on our website.
              </li>
              <li>
                <strong>Service information</strong> — details about the plumbing or heating issue
                you&apos;re experiencing, your property type, scheduling preferences, and any photos
                or notes you share with us.
              </li>
              <li>
                <strong>Payment information</strong> — billing details collected at the time of
                service. Card payments are processed by a PCI-compliant payment provider; we do not
                store full card numbers on our systems.
              </li>
              <li>
                <strong>Automatically collected data</strong> — when you visit our website, our
                hosting and analytics tools may log standard information such as your IP address,
                browser type, device type, referring URL, and pages viewed.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to service requests, schedule appointments, and dispatch technicians.</li>
              <li>Provide quotes, invoices, receipts, warranty records, and follow-up service.</li>
              <li>
                Communicate with you about your job — confirmations, arrival windows, status
                updates, and post-service satisfaction checks.
              </li>
              <li>
                Improve our website, services, and customer experience based on usage patterns and
                feedback.
              </li>
              <li>Comply with legal, tax, licensing, and recordkeeping obligations.</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We share information only with parties who
              help us run our business or when we are required to do so by law:
            </p>
            <ul>
              <li>
                <strong>Service providers</strong> — scheduling, dispatch, payment processing,
                accounting, hosting, email, SMS, and analytics vendors who handle data on our
                behalf under confidentiality obligations.
              </li>
              <li>
                <strong>Subcontractors</strong> — licensed trade partners we occasionally bring in
                for specialty work, who receive only the information needed to complete the job.
              </li>
              <li>
                <strong>Legal and safety</strong> — when required by subpoena, court order, or
                applicable law, or when needed to protect our rights, property, employees, or
                customers.
              </li>
            </ul>

            <h2>4. Cookies and Tracking</h2>
            <p>
              Our website uses a small number of cookies and similar technologies to keep the site
              functional and to understand how visitors use it. You can disable cookies in your
              browser settings; some site features may not work as expected if you do.
            </p>

            <h2>5. Text Messaging (SMS)</h2>
            <p>
              If you provide your phone number, we may send you transactional text messages about
              your service — such as appointment confirmations and technician arrival updates.
              Standard message and data rates may apply. You can opt out at any time by replying{" "}
              <strong>STOP</strong> or by contacting us directly. We do not share your phone number
              with third parties for their marketing purposes.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We keep service records, invoices, and warranty information for as long as needed to
              provide ongoing service and to meet legal, tax, and licensing requirements. When
              information is no longer needed, we securely delete or anonymize it.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect your
              information. No system is completely secure, but we work to limit access to your data
              to authorized staff and trusted service providers.
            </p>

            <h2>8. Your Choices and Rights</h2>
            <p>
              You may request to access, correct, or delete personal information we have about you,
              and you may opt out of marketing emails or texts at any time. To make a request,
              contact us using the information below. We will respond within a reasonable
              timeframe and in line with applicable law.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our services are intended for adults. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us with
              personal information, please contact us so we can remove it.
            </p>

            <h2>10. Third-Party Links</h2>
            <p>
              Our website may link to third-party sites (for example, our Facebook or YouTube
              pages). We are not responsible for the privacy practices of those sites and encourage
              you to read their privacy policies.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we&apos;ll change
              the Effective Date at the top of this page. Material changes will be highlighted on
              our website.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your information,
              please contact us:
            </p>
            <address className="not-italic leading-relaxed">
              <strong>{SITE.name}</strong>
              <br />
              {SITE.address}
              <br />
              {SITE.city}, {SITE.state} {SITE.zip}
              <br />
              Phone:{" "}
              <a href={SITE.phoneHref} className="text-brand-blue font-semibold hover:underline">
                {SITE.phone}
              </a>
              <br />
              Email:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-brand-blue font-semibold hover:underline"
              >
                {SITE.email}
              </a>
            </address>

            <p className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3 rounded-lg transition-colors no-underline"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
