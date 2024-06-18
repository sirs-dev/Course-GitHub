function skillsmembers (req, res) {
  if (req.method === 'GET') {
    res.end('GET request to the homepage');
  } else if (req.method === 'POST') {
    res.end('POST request to the homepage');
  }
}