export default function() {
  this.get('/token', function() {
  //   return {
  //     data: [{
  //       type: 'rentals',
  //       id: 1,
  //       attributes: {
  //         title: 'Grand Old Mansion',
  //         owner: 'Veruca Saaaaalt',
  //         city: 'San Francisco',
  //         type: 'Estate',
  //         bedrooms: 15,
  //         image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
  //       }
  //     }, {
  //       type: 'rentals',
  //       id: 2,
  //       attributes: {
  //         title: 'Urban Living',
  //         owner: 'Mike Teavee',
  //         city: 'Seattle',
  //         type: 'Condo',
  //         bedrooms: 1,
  //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
  //       }
  //     }, {
  //       type: 'rentals',
  //       id: 3,
  //       attributes: {
  //         title: 'Downtown Charm',
  //         owner: 'Violet Beauregarde',
  //         city: 'Portland',
  //         type: 'Apartment',
  //         bedrooms: 3,
  //         image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
  //       }
  //     }]
  //   };
  // });



    accountsRouter.get('/1', function(req, res) {
      if (/Bearer .+/.test(req.headers.authorization)) {
        const response = {
          data: {
            type: 'accounts',
            id: '1',
            attributes: {
              login: 'test',
              name: 'Achim'
            }
          }
        };

        // delay this a bit so we see the loading template
        setTimeout(function() {
          res.status(200).send(response);
        }, 1000);
      } else {
        res.status(401).end();
      }
    });

    app.use('/accounts', accountsRouter);
  }

);
}
