import React from "react";

function DonorLists() {
  return (
    <div>
      <div className="lists__container">
        {/* <div className="header-con">
          <div className="list__header">
            <div className="list__header_email">E-mail</div>

            <div className="list__header_date">Date</div>

            <div className="list__header_amount">Amount</div>
          </div>
        </div> */}
        <div className="list__body-contain">
          <div className="list__body">
            <div className="list__body_email">anonymous@gmail.com</div>
            <div className="list__body_date">May 05 2020</div>

            <div className="list__body_amount">#3000</div>
          </div>

          <div className="list__body">
            <div className="list__body_email">anonymous@gmail.com</div>
            <div className="list__body_date">May 05 2020</div>

            <div className="list__body_amount">#3000</div>
          </div>

          <div className="list__body">
            <div className="list__body_email">anonymous@gmail.com</div>
            <div className="list__body_date">May 05 2020</div>

            <div className="list__body_amount">#3000</div>
          </div>
          <div className="list__body">
            <div className="list__body_email">anonymous@gmail.com</div>
            <div className="list__body_date">May 05 2020</div>

            <div className="list__body_amount">#3000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorLists;
