import React from "react";
import { HeaderEmpty } from "../components";
import "../App.css";

const UnderageGamingPolicy = () => {
  return (
    <section className={`bg-[#70008C] ${`section`} transition`}>
      <HeaderEmpty />
      <div className="policyContentContainer">
        <h2 className="title"> Underage Gaming Policy</h2>
        <div className="policyContainer">
          <p>
            Upon completing the sign-up process for MetaWins.app, you expressly
            declare that you are aged 18 years or above. This statement serves
            as a representation of your legal age and capacity to enter into
            binding agreements in accordance with applicable laws and
            regulations.
          </p>
          <p>
            Underage Gaming Policy (18+ to play clause) MetaWin does not permit
            anyone under the age of 18 (or any other applicable minimum legal
            age required for gambling activity under the law applicable to your
            country) to create an account or use any of the services we provide.
            We take our responsibility in this matter extremely seriously.
          </p>
          <h2 className="title">
            {" "}
            UndPLEASE NOTE THAT ANYONE UNDER THE AGE OF 18 FOUND TO BE USING
            THIS SITE WILL HAVE ANY WINNINGS FORFEITED AND MAY ALSO BE REPORTED
            TO THE POLICE.erage Gaming Policy
          </h2>
          <p>
            Please contact our Customer Experience team if you have any further
            questions relating to our Responsible Gambling Practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderageGamingPolicy;
