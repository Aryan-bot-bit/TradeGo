import React from 'react'

function Universe() {
    return ( 
       <div className="container mt-5">
      <div className="row text-center">
        <h1>The TRADGOO Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">SmallCase platform</p>
        </div>
        <div className="col-4 p-3 mt-5" >
          <img src="media/images/streakLogo.png" style={{ width: '130px', height: '40px', objectFit: 'contain' }}/>
          <p className="text-small text-muted">Streak platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">sensibull platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/Gemini_Generated_Image_jjm212jjm212jjm2.png" />
          <p className="text-small text-muted">TRADGO platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Golden Pi platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: '80px', height: '40px', objectFit: 'contain' }} />
          <p className="text-small text-muted">Ditto platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
     );
}

export default Universe;