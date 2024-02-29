import React from 'react'
import { Card } from './Card'
import { GenresInDB } from './GenresInDB'


export const ContentRowTop = () => {

    let cardData = [
        {
            title: "Movies in Data Base",
            borderLeft: "primary",
            count: 30,
            icon: "fa-film"
        },
        {
            title: "Total awards",
            borderLeft: "success",
            count: 79,
            icon: "fa-award"
        },
        {
            title: "Actors quantity",
            borderLeft: "warning",
            count: 49,
            icon: "fa-user"
        },

    ]

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/*     <!-- Content Row Movies--> */}
            <div className="row">

                {cardData.map((item, i) => (

                    <Card
                        key={i + item.title}
                        title={item.title}
                        borderLeft={item.borderLeft}
                        count={item.count}
                        icon={item.icon}

                    />

                ))}

            </div>
            {/*     <!-- End movies in Data Base --> */}


            {/*     <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/*         <!-- Last Movie in DB --> */}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src="/images/mandalorian.jpg" alt=" Star Wars - Mandalorian " />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                        </div>
                    </div>
                </div>
                {/*         <!-- End content row last movie in Data Base --> */}

                {/*         <!-- Genres in DB --> */}
                <GenresInDB />
            </div>
        </div>

    )
}
