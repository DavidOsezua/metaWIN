import React from 'react';
import { HeaderEmpty } from '../components';
import '../App.css';

const ResponsibleGambling = () => {
  return (
    <section className={`bg-[#70008C] ${`section`} transition`}>
      <HeaderEmpty />
      <div className='policyContentContainer'>
        <div className='policyContainer'>
          {' '}
          <h2 className='title'>Gaming with responsibility</h2>
          <h2 className='title'>Last updated: February 28, 2023</h2>
          <p>Please read this information carefully for your own benefit.</p>
          <p>
            MetaWin Gaming is operated by Asobi N.V. a company based in Curacao,
            under the Gaming License number: 365/JAZ issued by the Curacao
            Gaming Control Board.
          </p>
          <h2 className='title'>Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </p>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>
          <h2 className='title'>Definitions</h2>
        </div>

        <div className='policyContainer'>
          <h2 className='title'>
            For the purposes of these Terms and Conditions:
          </h2>
          <p>
            - Account means a unique account created for You to access our
            Service or parts of our Service.
            <br /> - Company (referred to as either "the Company", "We", "Us" or
            "Our" in this Agreement) refers to Asobi N.V. <br />
            - Service refers to the Website.
            <br />- Website refers to Metawin.com
            <br />- You means the individual accessing or using the Service, or
            the company, or other legal entity on behalf of which such
            individual is accessing or using the Service, as applicable.
          </p>
        </div>

        <div className='policyContainer'>
          <h2 className='title'>Responsible Gambling and Self Exclusion</h2>
          <p>
            Gambling means for the majority of our Users, entertainment, fun and
            excitement. But we also know that for some of our Users gambling has
            negative side effects. In the medical science is pathologic gambling
            since many years as serious sickness recognised.
          </p>
          <p>
            Since our first day we have thought about this problem and try our
            best to help. Under “Responsible Gambling” We understand multiple
            steps of measures, with which a gambling provider can help to lower
            the possibility of negative side effects appearing. In case they
            already appear we also try to take active steps against them.
          </p>
          <p>
            The most important instrument against negative side effects from
            gambling is knowledge and education about the risks of gambling to
            support our Users self-control in order to make sure they do not
            suffer from negative side effects.
          </p>
        </div>

        <div className='policyContainer'>
          <h2 className='title'>Information and contact</h2>
          <p>
            Our Support will help you via email at all time without any
            additional costs for you:
          </p>
          <p>
            email: support@metawin.com <br />
            Our Support will of course not give out any information about You
            without Your consent to anyone else
          </p>
          <p>
            In addition you also can take a self-test, if You are already
            gambling addicted at:
            https://www.begambleaware.org/gambling-problems/do-i-have-a-gambling-problem/
          </p>
          <p>
            And you can also find additional information about gambling
            addictions at: https://www.begambleaware.org/safer-gambling/
          </p>
        </div>

        <div className='policyContainer'>
          <h2 className='title'>
            Helpful hints for responsible gambling at Metawin.com
          </h2>
          <p>
            We recommend you think about the following hints, before gambling in
            order to insure gambling stays fun for You and without any negative
            side effects:
          </p>
          <ul>
            <li>Set yourself a deposit limit</li>
            <li>
              Before you start to gambling , think about how much you can afford
              to gamble according to Your financial situation. Play with amounts
              which are for fun and for Your entertainment
            </li>
            <li>Do not try to win back a loss at every cost</li>
            <li>
              Try to not take huge risks to win back what You lost before at any
              cost. Play for Entertainment and not to earn money.
            </li>
            <li>Set yourself a time limit</li>
            <li>
              Set yourself a time limit and do not break it. Keep in mind
              gambling should stay in balance with your other hobbies and not be
              Your only hobby.Set yourself a time limit
            </li>
            <li>Play smart</li>
            <li>
              It is smarter to not play when You are extremely stressed,
              depressed or under too much pressure. Also do not play when you
              are under the influence of Medications, Drugs or Alcohol.
            </li>
            <li>Take breaks</li>
            <li>
              You should take breaks when You notice, that You get tired or
              can't concentrate anymore
            </li>
            <li>Only one account</li>
            <li>
              To make it easier to have an overview of how much time and money
              You spend on gambling it is highly advised to not create more than
              one Account per Person.
            </li>
          </ul>
        </div>

        <div className='policyContainer'>
          <h2 className='title'>Minor Protection</h2>
          <p>
            To use our Service, You have to be 18 years or older. To avoid
            abuse, keep Your login data safe from any minors near You.
          </p>
          <p>
            Principally we recommend a filter program to avoid minors,
            especially children, to access any context on the internet, which is
            not healthy for them.
          </p>
          <p>
            For parents we can recommend a list of internet filters, to support
            them, from keeping their children from any context, which was not
            made for them:
          </p>
          <p>
            https://famisafe.wondershare.com/internet-filter/best-internet-filters.html
          </p>
        </div>
        <div className='policyContainer'>
          <h2 className='title'>Self-Exclusion:</h2>
          <p>
            In case You are diagnosed with a gambling addiction or try to stay
            away from gambling for a different reason, we want to assist you to
            stay away from anything that does nothing good for you.
            “Self-Exclusion” means that You exclude yourself, out of Your own
            choice, from all gambling services. This exclusion cannot be undone
            for a set amount of time. If you wish to self-exclude yourself from
            gambling, please message our support and give them a time span
            between 6 months and 5 years. They also will explain to you all
            future steps and what is needed from you.
          </p>
          <p>
            email: support@metawin.com
            <br /> Please keep in mind that Self Exclusion is permanent for the
            set time span and will not be undone for your own protection.
          </p>

          <p>
            During Self Exclusion you are not allowed to create a new Account
            and every attempt to create a new Account during Self Exclusion is a
            violation of our Terms of Service and may result in the permanent
            ban of your original account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleGambling;
/*
//




 */
