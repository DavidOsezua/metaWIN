import React from 'react';
import { HeaderEmpty } from '../components';
import '../App.css';

const KYCPolicy = () => {
  return (
    <section className={`bg-[#70008C] ${`section`} transition`}>
      <HeaderEmpty />
      <div className='policyContentContainer'>
        <h2 className='title'>Metawin Know Your Customer (KYC) Policy</h2>
        <div className='policyContainer'>
          <h2 className='title'>
            1. Customer identification and verification (KYC)
          </h2>
          <p>
            The formal identification of customers on entry into commercial
            relations is a vital element, both for the regulations relating to
            money laundering and for the KYC policy.
          </p>
          <p>
            This identification relies on the following fundamental principles:
          </p>
          <p>
            A copy of your passport, ID card or driving license, each shown
            alongside a handwritten note displaying six, randomly generated
            numbers. Also, a second picture with the face of the user/customer
            is required. The user/customer may blur out information to secure
            their privacy, besides date of birth, nationality, gender, first
            name, second name and the picture.
          </p>
          <p>
            Please note that all four corners of the ID must be visible in the
            same image and all details must be clearly readable besides the
            information mentioned above. We might ask for all details if
            necessary.
          </p>
          <p>
            An employee may do additional checks if necessary, based on the
            situation.
          </p>
          <p>
            1.2 Proof of Address: <br />
            Proof of address may be carried out via different electronic checks
            using two different databases. If an electronic test fails, the
            user/customer has the option to provide proof manually.
          </p>
          <p>
            A recent utility bill sent to your registered address, issued within
            the last three months, or an official document from the government
            that proves your state of residence.
          </p>
          <p>
            To make the approval process as speedy as possible, please make sure
            the document is sent with a clear resolution where all four corners
            of the document are visible, and all text is readable. For example:
            An electricity bill, water bill, bank statement or any governmental
            correspondence addressed to you.
          </p>
          <p>
            An employee may do additional checks if necessary, based on the
            situation.
          </p>
          <p>
            1.3 - Source of funds
            <br /> Verification may be required by every user who have deposited
            over 5 ETH in any calendar month, there is a process in place to
            understand the source of wealth (SOW).
          </p>
          <p>
            Examples of SOW are: <br />
            •Ownership of a business
            <br /> •Employment
            <br /> •Inheritance
            <br /> •Investment <br />
            •Family
          </p>
          <p>
            It is critical that the origin and legitimacy of that wealth is
            clearly understood. If this is not possible an employee may ask for
            an additional document or proof. The account may be frozen if the
            same user deposits either this amount in one go or multiple
            transactions which amount to this. An email will be sent to them
            manually to go through the above, and information on the website
            itself.
          </p>
          <p>
            1.4 - KYC Trigger:
            <br /> These steps may be triggered if any player attempts to
            withdraw an amount exceeding 5 ETH.
          </p>
          <p>
            1.5 - Contact us: <br/> If you have any questions about our KYC Policy,
            please contact us: support@metawins.app
          </p>
        </div>
      </div>
    </section>
  );
};

export default KYCPolicy;
/* 



























*/
