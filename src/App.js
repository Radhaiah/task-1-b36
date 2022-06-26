import React from 'react'

const App = () => {
  const plans=[{
    name:"Free",
    price:0,
    features:[{
      name:"Single User",enabled:true
    },
    {
      name:"5GB Storage",enabled:true
    },
    {
      name:" Unlimited Public Projects",enabled:true
    },
    {
      name:"Community Access",enabled:true
    },
    {
      name:"Unlimited Private Projects",enabled:false
    },
    {
      name:"Dedicated Plan Support",enabled:false
    },
    {
      name:"Free Sub Domain",enabled:false
    },
    {
      name:"Monthly Status Report",enabled:false
    }
    
    ]
  },
  {
    name:"Plus",
    price:5,
    features:[{
      name:"5 Users",enabled:true
    },
    {
      name:"5GB Storage",enabled:true
    },
    {
      name:" Unlimited Public Projects",enabled:true
    },
    {
      name:"Community Access",enabled:true
    },
    {
      name:"Unlimited Private Projects",enabled:true
    },
    {
      name:"Dedicated Plan Support",enabled:true
    },
    {
      name:"Free Sub Domain",enabled:false
    },
    {
      name:"Monthly Status Report",enabled:false
    }
    ]
  },
  {
    name:"Free",
    price:49,
    features:[{
      name:"Unlimited User",enabled:true
    },
    {
      name:"5GB Storage",enabled:true
    },
    {
      name:" Unlimited Public Projects",enabled:true
    },
    {
      name:"Community Access",enabled:true
    },
    {
      name:"Unlimited Private Projects",enabled:true
    },
    {
      name:"Dedicated Plan Support",enabled:true
    },
    {
      name:"Free Sub Domain",enabled:true
    },
    {
      name:"Monthly Status Report",enabled:true
    }
    ]
  }
];
  return (
    <section className="pricing py-5 bg-primary">
      <div className="container bg-dark p-2">
        <div className="row">{
          plans.map((plan,index)=>{
            return <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
        <div className="card body bg-light" >
            <h5 className="card-title text-muted text-uppercase text-center">{plan.name}</h5>
            <h6 className="card-price text-center">{plan.price}$<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
                {
                    plan.features.map((item)=>{
                        return (
                            <li className={!item.enable?"text-muted":""}>
                            <span className="fa-li">
                                <i className={item.enable?"fas-fa-check":"fas-fa-times"}/></span>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
            <ul>
              <a href="#" className="btn btn-primary text-uppercase" style={{textAlign: "center"}}>Buy</a>
            </ul>
        </div>
    </div>

    </div>
          })}
        </div>
      </div>
    </section>
    
  )
}

export default App