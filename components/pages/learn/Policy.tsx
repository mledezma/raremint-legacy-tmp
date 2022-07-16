import { Container } from '~/components/primitives/Container'
import { Content } from '~/components/shared/Content'
import { Breadcrumb } from '~/components/shared/Breadcrumb'
import { styled } from '~/styles/stitches.config'

const H1 = styled('h1', {
  mb: '$regular',
  mt: '$large',
  textAlign: 'center',
  '@regular-min': {
    mb: '$large',
    mt: '$x-large',
    textAlign: 'left',
  },
})

const PolicyContainer = styled(Container, {
  pb: '$xx-large',
})

export const Policy = () => {
  return (
    <PolicyContainer>
      <Breadcrumb path={[{ url: '/', label: 'Home' }, { label: 'Privacy Policy' }]} />
      <H1>Privacy Policy</H1>
      <Content>
        <p><strong>RareMint Privacy Policy</strong></p>
        <p><strong>Last updated: March 4, 2022</strong></p>
        <p>RareMint Limited (“RareMint,” “we,” or “our”) is a BVI company located in the British Virgin Islands. RareMint operates the website RareMint.com.</p>
        <p>This Privacy Policy refers to the website along with any other RareMint owned website collectively as the “Site” and the Site and the Services collectively as the “Services.”</p>
        <p>RareMint respects your privacy and wants you to be familiar with how we collect, use, store, and share information. As such, this ­privacy policy (the “Privacy Policy”) governs your use of the Services, and any content, interactive features, applications, or services you access on or through the Site that display or link to this Privacy Policy. Please read this Privacy Policy before using the Services. Please also review RareMint’s Terms of Service, which govern your use of the Services.</p>
        <p>Each time you use the Services, you acknowledge that you accept the policies and practices described in this Privacy Policy and consent to RareMint’s collection, use, storage, and sharing of your information, and information and data related to your activities, as described in this Privacy Policy. If you do not agree with the Terms of Service or this Privacy Policy, please do not provide us with any personal information and do not use the Services.</p>
        <p>This Privacy Policy only applies to our use of information you supply to RareMint while using the Services. If you provide information to others, such as providing payment, credit, or banking information to third-party websites you access from the Site, your provision of that information will be governed by the privacy policies for those entities.</p>
        <p>California Notice of Collection of Personal Information: RareMint collects personal information listed below under “Information We Collect” for the purposes described below under “Information Use.” To learn more about your California privacy rights, including your right to opt out of the sale of your personal information, please scroll down to “Your California Privacy Rights.”</p>
        <p>For residents of the United Kingdom (“UK”) or the European Economic Area (“EEA”), RareMint Limited, Trinity Chambers, PO Box 4301, Road Town, Tortola, British Virgin Islands, VG1110, is the data controller responsible for your personal data. This Privacy Policy describes the types of information RareMint collects from and about you, how RareMint may use and disclose such information, and your ability to control certain uses of it.</p>
        <h3>1. INFORMATION WE COLLECT</h3>
        <p>RareMint obtains information about you from (a) you, when you provide it to us directly; (b) information we collect when you use the Services; and (c) information we receive from third parties. The information RareMint collects includes data that identifies you personally, whether directly or indirectly.</p>
        <p><strong>Information You Provide</strong></p>
        <p>RareMint collects information directly from you when you choose to share it with us. This may include when you use the Site, create an account on the Site, making purchases on the Site, request information from us, subscribe to newsletters or our email list, sign up for promotions, request customer support, participate in a survey, or otherwise contact or communicate with us.</p>
        <h3>Information You Share When You Use the Services</h3>
        <p>You may choose to upload or add photos, videos, comments, reviews, or other content to the Site when you use the Services. You may also participate in online communities, including on the Site or on social media (such as Facebook, Twitter, or Discord). Any information you may disclose in a public manner on the Site, in chat rooms, on message boards or blogs, in other public fora, or on third-party websites, applications, or services will be public information. Please exercise caution when disclosing personal information in these public areas. If you choose to associate your digital wallet with an account on the Platform, your wallet address and public key will be shared with RareMint.</p>
        <p><strong>Information You Provide When You Make a Purchase</strong></p>
        <p>If you make a purchase we or a 3 rd party payment provider may collect payment information, such as a routing number and account number for a bank account or a card number and related financial information ( e.g., CVV, expiration date, and billing address) for a credit or debit card, or information for other payment methods. Your interactions with third party wallets, such as MetaMask, and/or any third-party wallet extensions, are governed by the applicable privacy policies of the providers of those wallets.</p>
        <p><strong>Information You Provide about a Third Party</strong></p>
        <p>If you send someone else a communication from the Services, such as sending an invitation to a friend to view a product or to join a promotion, the information you provide ( e.g., name and contact information) may be used to communicate with that person.</p>
        <p><strong>Information You Provide Through Social Aspects of the Site or Social Media</strong></p>
        <p>If you use any communications features offered as part of the Services to communicate or share information with other people, RareMint will collect information on what you communicate or share, including your participation in player forums, messages on message boards, public posts or comments on your profile or other players’ profiles, your nonpublic messages to other players, your chats with other players or RareMint personnel (whether video, live chat, or messaging), and any photos or other content you may post. RareMint may store, record, or access (whether from archives or in real time) this information to protect the integrity of the Site, to protect our rights and the rights of our third-party vendors and service providers (“Contractors”), to protect the safety and welfare of RareMint’s customers, to operate, personalize, or improve the Services and customer experiences, and to manage and deliver relevant content.</p>
        <p>RareMint may give you the option to link to social media accounts through the Services. If you do link a social media account, we may automatically receive certain information about you based on your registration and privacy settings on those third-party services. That information may include, but may not be limited to, name, username, demographic information, address or contact information, location, interests, and social media and online activity.</p>
        <p><strong>Information Automatically Collected</strong></p>
        <ul>
          <li>Whenever you visit or interact with the Site, we and our Contractors may use cookies, web beacons, pixel tags, or other technologies to collect information, automatically or passively, about your online activity. The technologies collect information about your browsing activities over time and across different websites or online services, including after your use of the Services. The technologies assist RareMint in implementing your preferences, keeping track of your purchases, and helping with site administration. RareMint uses the information we collect to improve your interactions with the Site and to deliver information tailored to your needs.</li>
        </ul>
        <p>The information we automatically collect includes the following:</p>
        <ul>
          <li>Computer or Mobile Device. RareMint may automatically collect your IP address or other unique identifier or information from the computer or mobile device you use to access the Services, including your device type, hardware model, mobile device identification, browser type, operating system, software version, mobile network information, time zone, and the domain name from which you accessed the Services.</li>
          <li>Usage Information. RareMint also collects information about your use of the Services, including, but not limited to, the date and time you visit the Services, the areas or pages of the Services you visit, the time you spend viewing or using the Services, the number of times you return to the Services, emails you open, forward or click-through to the Services, other sites you may visit, and other clickstream or site usage data.</li>
          <li>Location. RareMint also collects general information about the origin of traffic and transactions on the Site, which we aggregate and use to better understand our users.</li>
          <li>Third Party Analytics. RareMint may use third party analytics and tracking tools to better understand who is using the Services, how people are using the Services, how to improve the effectiveness of the Services and related content, and how to better engage with our customers. These tools may use cookies, pixel tags, or similar technology to automatically collect and store certain information. They also may combine information they collect based on your interaction with the Services with information they collect from other sources.</li>
        </ul>
        <p><strong>Information RareMint Collects From Other Sources</strong></p>
        <p>RareMint may acquire information about you from its affiliates and from our Contractors (including, for example, our platform providers and analytics vendors). We use the information we collect from other sources for business purposes such as helping us confirm the accuracy of the information you provide to us or that we collect, personalizing your experience with the Services, targeting our communications so we can better inform you of products, services, and offers that might interest you, and for internal business analysis or other business purposes. This information may include data from: consumer reporting agencies relating to your identity, age, and financial information; banks and payment providers with whom you choose to do business in connection with your use of the Services; social media sites ( e.g., Facebook or Instagram), consistent with your privacy settings for those services; and marketing and analytics providers.</p>
        <p><strong>Combination of Information</strong></p>
        <p>RareMint may combine the information we receive from and about you, including information you provide to us and information we automatically collect through the Services, with information collected offline, information collected from other computers or devices you may use, and information obtained from third party sources.</p>
        <h3>2. INFORMATION WE USE</h3>
        <p>RareMint may use the information we collect from and about you for a variety of business purposes, including:</p>
        <ul>
          <li>To comply with applicable law, including, but not limited to, verifying your identity, documenting you are eligible to use the Services, and tax reporting;</li>
          <li>To provide access to other content on the Site, or to provide other services or products we may offer or sell on the Site;</li>
          <li>To help secure your account, such as by using your telephone number or email address to send you a pin code that must be entered on the Site to access your account or to complete a transaction;</li>
          <li>To send administrative information to you ( e.g., information about your account, your wagering activities, and about changes in our Terms of Service, this Privacy Policy, etc.)</li>
          <li>To send you, or otherwise provide you with, personalized messages, news, publications, announcements about promotions, special offers, events, and benefits, including promotions and offers tailored to your preferences and habits when using the Services;</li>
          <li>To publish content you submit or post ( e.g., if you use any chat facilities on the Site);</li>
          <li>To respond to your inquiries, to provide any information or content you may request, and to otherwise contact and communicate with you when necessary;</li>
          <li>To facilitate the processing of online payments, including deposits to your account or withdrawals from your account, to settle wagers, and to prevent fraud;</li>
          <li>To manage, administer, and update your account, including maintaining the accuracy of your account and other information in your profile;</li>
          <li>To assess your benefits, to administer offers, and to implement your decisions about how to use your offers;</li>
          <li>To allow you to participate in promotions and to operate promotions ( e.g., in certain promotions, a patron who encourages a friend to participate in the promotion will be able to see information relating to the friend’s progress in meeting the requirements for the promotion);</li>
          <li>To allow you to send messages to friends through the Services;</li>
          <li>To announce the names of the winners of promotions or competitions and the prizes won by each winner;</li>
          <li>To enforce our Terms of Service;</li>
          <li>To improve the Services and the content of the App and Site; to enhance users’ experiences when using the Services; and to customize the content and layout of the Site for individual users;</li>
          <li>For analytics, to enhance our marketing, to create customer or audience segments, to enhance our business and operational efficiency, and to optimize user experiences;</li>
          <li>For internal troubleshooting, testing, research, and data analysis;</li>
          <li>To comply with obligations to law enforcement and other regulatory bodies, and courts;</li>
          <li>To protect the security or integrity of the Services and our business, such as by protecting against and preventing fraud, unauthorized or unlawful transactions, and claims and other liabilities, and by managing risk exposure, including by identifying unauthorized users and potential hackers.</li>
        </ul>
        <p>RareMint may also use your information for commercial purposes, such as:</p>
        <ul>
          <li>To enhance your experience using the Site, including as a way to recognize you and welcome you to the Services;</li>
          <li>To review the usage and operations of the Services, develop new products or services, or conduct analysis to enhance or improve our content, products, and services;</li>
          <li>To provide you with customized content, targeted offers, or advertising on the Site, across other websites, online services, or platforms, and through direct marketing;</li>
          <li>To contact you with information, newsletters, and promotional materials from RareMint or on behalf of our affiliates and partners; and</li>
          <li>To use your data in an aggregated non-specific format for analytical and demographic purposes.</li>
        </ul>
        <p>Additionally, we may use your information for any other purposes disclosed when you provide information or otherwise with your consent. We are committed to protecting and maintaining the privacy of your information. Therefore, we will process your data only in accordance with applicable data protection law and this Privacy Policy. We will have a lawful basis for processing your data if:</p>
        <ul>
          <li>we are legally obliged to process it;</li>
          <li>we need to process your information in order to provide you with the products or services you have requested;</li>
          <li>you have consented to such processing; and/or</li>
          <li>we have a legitimate business interest for processing your data – e.g., for fraud prevention; direct marketing; network and information systems security; data analytics; enhancing modifying or improving the Services; identifying usage trends; determining the effectiveness of promotional campaigns; and personalizing the Services.</li>
        </ul>
        <h3>3. INFORMATION WE SHARE</h3>
        <p>We may share the information we collect from and about you as described below.</p>
        <ul>
          <li><strong>Our Affiliates:</strong> RareMint may share your information with our affiliates for business, operational, promotional, and marketing purposes.</li>
          <li><strong>Third-party Vendors and Service Providers:</strong> RareMint may share your information with our Contractors that provide business, professional, marketing, analytics, or technical support functions for us, that help us operate our business and the Services, or that administer activities on our behalf, including, but not limited to, payment processors, and email and messaging service providers.</li>
          <li><strong>Legal Obligations; Safety:</strong> We may access and disclose your information to respond to subpoenas, judicial processes, or government requests and investigations, or in connection with an investigation on matters related to public safety or site integrity, as permitted by law or otherwise as required by law. We may disclose your information to protect the security of the Services, servers, network systems, and databases. We also may disclose your information if we believe, or are investigating whether, our Terms of Service have been violated, any other agreement related to the Services has been violated, or the rights of any third party have been violated.</li>
          <li><strong>Fraud Prevention and Security:</strong> RareMint may share your information to aid with the detection or prevention of fraud, to protect the rights or property of RareMint, to protect RareMint’s employees, and to protect other users of RareMint’s Services, including, but not limited to, sharing your information with other companies and organizations for the purpose of fraud prevention, credit risk reduction, or site integrity.</li>
          <li><strong>Sale or Transfer of Business or Assets:</strong> RareMint may sell or purchase assets during the normal course of its business. If RareMint acquires another entity, or if another entity acquires us or any of our assets, the information we have collected about you may be transferred to such entity. In addition, if any bankruptcy or reorganization proceeding is brought by or against us, your information may be considered an asset of ours and may be sold or transferred to third parties. Should such a sale or transfer occur, we will use reasonable efforts to try to require that the transferee use your personal information in a manner that is consistent with this Privacy Policy.</li>
          <li><strong>Aggregate or Anonymous Non-Personal Information:</strong> RareMint may also share aggregate, anonymous, or de-identified non-personal information with third parties for their marketing or analytics uses.</li>
          <li><strong>Other:</strong> RareMint also may share your information in the manner disclosed to you at the time it collects the information.</li>
        </ul>
        <h3>4. YOUR CHOICES</h3>
        <p><strong>Direct Marketing Choices</strong></p>
        <ul>
          <li>
            Email: To opt-out of direct marketing communications by email from RareMint, you may:
            <ul>
              <li>Contact us by e-mail at privacy@raremint.com;</li>
              <li>Contact us by mail at the address below in Section 12 – “How to Contact Us;”</li>
              <li>Unsubscribe from promotional communications by following the instructions contained within an email or message; or</li>
              <li>Log into your account and update your communications preferences.</li>
            </ul>
          </li>
          <li>Telecommunications: When you provide your telephone number to RareMint, you agree to receive text messages or advertising telephone calls from us or our call center agents (including calls using an automatic dialing system or an artificial or prerecorded voice). You do not have to consent to receive text messages or pre-recorded calls using an automatic telephone dialing system to access the Services. If you wish to revoke your consent, contact us by e-mail at privacy@raremint.com or by mail at the address below in Section 12 – “How to Contact Us,”</li>
          <li>Push Notifications: If you use the App on a mobile device, you can choose to receive push notifications (messages delivered to your mobile device even if the App is not open). You can turn off push notifications on your mobile device’s “settings” page or by changing the settings for notifications in the App.</li>
        </ul>
        <p>If you receive marketing communications from an affiliate of RareMint, you must opt-out with each of affiliate from which you are receiving brand-specific marketing communications.</p>
        <p>RareMint does not “sell” your personal information (at least as most people would understand that term), but only shares it with its Contractors who facilitate the delivery of the Services and with its affiliates. Nonetheless, if you would like to opt out of any future sale of your personal information, contact us by e-mail at privacy@raremint.com or by mail at the address below in Section 12 – “How to Contact Us.”</p>
        <p><strong>Advertising Choices</strong></p>
        <p>Some parts of the Services may require cookies, pixels, or similar technologies. For example, we may use cookies or other technologies to confirm your identity, to link data collected across other computers or devices that you may use, or to deliver more relevant content. You may also adjust your mobile device or Internet browser settings to limit certain tracking or to decline cookies, but, if you do so, you may not be able to use certain features or take advantage of all of our offerings. The Site may not respond to Do Not Track requests or headers from some or all web browsers.</p>
        <p>If you need more information on how to stop your device or browser from receiving cookies, to control your tracking preferences, or to delete cookies, please refer to your web browser’s “help” section or your mobile device’s “settings” options.</p>
        <p>For more information about your options for receiving more relevant advertising, please review the information below:</p>
        <ul>
          <li>In your mobile device “settings,” you may adjust your privacy and advertising settings to opt out of receiving targeted advertising.</li>
          <li>To learn more about or to opt out of receiving tailored online ads from Network Advertising Initiative (NAI) member companies, please visit http://www.networkadvertising.org/choices/.</li>
          <li>To learn more about or to control the collection and use of your Internet viewing data for interest-based advertising by Digital Advertising Alliance (DAA) participating companies, please visit http://www.aboutads.info/choices/.</li>
          <li>To opt-out of receiving targeted advertising based on your mobile device ID, please see http://www.aboutads.info/appchoices.</li>
        </ul>
        <p>Even if you opt out, you still may receive non-targeted advertising or targeted advertising from companies that do not participate in the DAA or NAI.</p>
        <p><strong>Analytics Choices</strong></p>
        <p>If you wish to prevent your data from being used by Google Analytics, Google has developed the Google Analytics opt-out browser add-on available here.</p>
        <h3>5. EEA & UK RIGHTS NOTICE</h3>
        <p>If you are a resident of the UK or EEA, we will provide you with reasonable access and rights to the personal data you may have provided to RareMint through your use of the Services. If you live in the UK or the EEA and wish to access, amend, delete, or transfer any personal data we hold about you, contact us by e-mail at support@raremint.com or by mail at the address below in Section 12 – “How to Contact Us.” If you send a written request, you must put the statement “EEA/UK Privacy Rights” in the subject field. We may be unable to fulfill your request if it is not labeled properly or does not have complete information. We may take steps to verify your identity before responding to your requests to know or delete your personal information by asking questions about your interactions with us. You also may be able to update your registration information or preferences by accessing your account settings page on the Site.</p>
        <p>If you have consented to RareMint collecting, processing or transferring your personal data, you may, at any time, fully or partly withdraw your consent. After you have notified RareMint that you have withdrawn your consent, we will no longer process your information for the purpose(s) to which you originally consented, unless there are compelling legitimate grounds for further processing that override your interests, rights, and freedoms (including, but not limited to, complying with legal or regulatory obligations) or to establish, exercise, or defend legal claims. If you fully or partly withdraw your consent, you may be unable to use the Services or you may not be able to use certain features or take advantage of all the features of the Site.</p>
        <p>If you believe there has been a violation of your privacy rights, please contact us by e-mail at support@raremint.com or by mail at the address below in Section 12 – “How to Contact Us.” You also have a right to lodge a complaint with your local data protection authorities. You may decline to share certain personal data with us, in which case we may not be able to provide the Services, or some or all of the features and functionality of the Services, to you.</p>
        <p>We will retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. In some circumstances we may anonymize your personal data (so that it can no longer be associated with you) for analytics purposes, in which case we may use this information indefinitely without further notice to you.</p>
        <h3>6. YOUR CALIFORNIA PRIVACY RIGHTS</h3>
        <p><strong>Your Rights</strong></p>
        <p>If you are a California resident, you may take advantage of the following rights:</p>
        <ul>
          <li><strong>Right to Know:</strong> You may request, up to twice each year, that we disclose to you the categories and/or the specific pieces of personal information that we collect, use, disclose, and may sell. We will respond to your request within forty-five (45) days, unless we need more time, in which case we will let you know.</li>
          <li><strong>Right to Delete:</strong> Subject to certain exceptions, you may request that we delete personal information we have collected from you, but we may not be able to delete all personal information, such as if we need to complete a transaction for you, to detect and protect against fraudulent and illegal activity, to exercise our rights, or to comply with a legal obligation.</li>
          <li><strong>Shine the Light:</strong> You may request and obtain from us once a year, free of charge, information about our disclosure of personal information to affiliates or to third parties for their direct marketing purposes. Not all information sharing is covered by the “Shine the Light” requirements and only information on covered sharing will be included in our response.</li>
          <li><strong>Right to Opt Out:</strong> We may share personal information with certain third parties in ways that are defined as “sales” under California law. You may request to opt out of these “sales” of personal information at any time, including by using the “Do Not Sell My Personal Information” link at the bottom www.raremint.com or at the bottom of this page.</li>
          <li><strong>Right to Non-Discrimination:</strong> If you exercise any of the foregoing rights, RareMint will not discriminate against you, including by denying access to our products or services or restricting your access to products or services of a certain quality or price level.</li>
        </ul>
        <p>To make a Right to Know, Right to Delete, Shine the Light, or Right to Opt Out request, please contact us by email at support@raremint.com, or by mail at the address below in “Contact Us.” If you send a written request, you must put the statement “California Privacy Rights” in the subject field. We may be unable to fulfill your request if it is not labeled properly or does not have complete information. We may take steps to verify your identity before responding to your requests to know or delete your personal information by asking questions about your interactions with us.</p>
        <p>You have the right to use an authorized agent to submit your requests. Authorized agents must submit proof of the consumer’s signed authorization to make a request. We may require you to verify your identity directly with us prior to fulfilling your authorized agent’s request.</p>
        <p><strong>California Consumer Privacy Act Disclosures</strong></p>
        <p>Pursuant to the California Consumer Privacy Act, and in addition to the disclosures elsewhere in this Privacy Policy, this section describes the types of personal information that we may have collected, disclosed for business purposes, or sold to third parties in the last 12 months.</p>
        <p><strong>Personal Information Collected:</strong> Biographical information or identifiers, characteristics of protected classifications under California or federal law (i.e., gender, age), commercial information, financial and payment card information, internet or other electronic network activity information, geolocation information, audio or visual information, and inferences drawn from the foregoing. To learn more about the information RareMint collects, please see “Information We Collect,” above. The sources of the information are users of the Services, our affiliates, and our Contractors.</p>
        <p><strong>Disclosure of Personal Information:</strong> In the last 12 months, RareMint may have disclosed the following categories of personal information to its affiliates or to third-party vendors and service providers for business purposes: Biographical information or identifiers, characteristics of protected classifications under California or federal law (i.e., gender, age), commercial information, financial and payment card information, internet or other electronic network activity information, geolocation information, audio or visual information, and inferences drawn from the foregoing. To learn more, please see “Information We Share” above.</p>
        <p><strong>“ Sale” of Personal Information:</strong> In the last 12 months, RareMint may have “sold” (as defined in the CCPA) the following categories of personal information: Biographical information or identifiers, commercial information, internet or other electronic network activity information, and inferences drawn from the foregoing. We do not have actual knowledge that we sell personal information of consumers under 21 years of age. To learn more, please see “Information We Share” above.</p>
        <p><strong>Explanation of “Sales” under CCPA:</strong> RareMint is not in the business of collecting and selling data, but, in some cases, we may share information with affiliates or third-party vendors and service providers in a transaction that constitutes a “sale” of personal information” under California law.</p>
        <h3>7. EXTERNAL CONTENT</h3>
        <p>The Services may have links to third-party websites, which may have privacy policies that differ from our own. We are not responsible for the practices of such sites. The Services may also offer you the ability to interact with social plugins from social media sites. Your use of social network plugins is subject to each social media website’s privacy policy, which may be different from ours, so please read these policies carefully. We have no control over the information that is collected, stored, or used by social network plugins, and are not responsible for the practices of such social media sites.</p>
        <h3>8. PRIVACY FOR INDIVIDUALS UNDER THE APPROPRIATE AGE</h3>
        <p>We do not direct the Services to persons under eighteen (18) years of age, do not knowingly permit persons under eighteen (18) years of age to use the Services, and do not knowingly collect any personal information from persons under eighteen (18) years of age. If we learn that we have collected any personal information from a person under eighteen (18) years of age, we will use reasonable efforts to remove that information from our files, excepting any information we may need to block such person from accessing the Site and the Services or for legal or regulatory purposes.</p>
        <h3>9. DATA SECURITY AND PRIVACY PROTECTION</h3>
        <p>RareMint takes many physical, technical, and administrative measures to safeguard the information we collect from and about users of the Services. You also must do your part to protect your personal information, by selecting a secure password, securing your password, logging out of your account at the end of each session, and taking reasonable steps to ensure that no other person learns your username and password. You will be fully responsible for all transactions on the Site made using your username and password, whether you authorize them or not. You must notify RareMint immediately if you suspect any unauthorized access to or use of your account or any breaches of security, such as another person obtaining access to your password.</p>
        <h3>10. INTERNATIONAL TRANSFERS</h3>
        <p>RareMint and its third-party vendors and service providers will process, transfer, and store information about users of the Services on servers located in the United States and also may do so on servers located in countries inside of the EEA or the UK. As we are committed to protecting your information, we take steps to ensure there are appropriate safeguards in place wherever information may be processed, transferred, or stored. If you wish to know more about how we safeguard your information when it is transferred outside the United States, please contact us by email at support@raremint.com or by mail at the address below in Section 12 – “How to Contact Us.”</p>
        <h3>11. REVISIONS TO THIS PRIVACY POLICY</h3>
        <p>RareMint may add to, delete from, revise, or otherwise modify all or part of this Privacy Policy at any time. If we do, we will post the change(s) on the Site. If we change the Privacy Policy in a material way, we will notify you that we are doing so. Your continued use of the Services after any changes means you have accepted and agreed to those changes.</p>
        <h3>12. HOW TO CONTACT US</h3>
        <p>If you have any questions or concerns about this Privacy Policy or the practices described herein, you may contact us by email at support@raremint.com (please caption your email “Attn: RareMint Privacy Policy”) or by mail to RareMint Limited, Attn: RareMint Privacy Policy, Trinity Chambers, PO Box 4301, Road Town, Tortola, British Virgin Islands, VG1110.</p>
        <p>Copyright © 2022. RareMint Limited. All Rights Reserved.</p>
      </Content>
    </PolicyContainer>
  )
}
