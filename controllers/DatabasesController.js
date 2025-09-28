const databaseTypes = [
  'Relational',
  'Key-Value',
  'Document',
  'Time Series',
  'Graph',
  'Search Engine',
  'Vector',
];

const databases = [
  { name: 'MySQL', type: 'Relational' },
  { name: 'MongoDB', type: 'NoSQL' },
  { name: 'PostgreSQL', type: 'Relational' },
  { name: 'Redis', type: 'In-memory' },
  { name: 'SQLite', type: 'Relational' },
  { name: 'Cassandra', type: 'NoSQL' },
  { name: 'MariaDB', type: 'Relational' },
  { name: 'Elasticsearch', type: 'Search Engine' },
];

module.exports = {
  Index: (req, res) => {
    return res.render('index', {
      databases,
    });
  },

  Add: (req, res) => {
    return res.render('addDatabase', {
      databaseTypes,
    });
  },

  AddPost: (req, res) => {
    const { name, type } = req.body;

    if(!name || !type) {
      return res.render('addDatabase', {
        error: 'All fields are required.',
        databaseTypes,
        name,
        type: req.body.type,
      });
    }

    databases.push({ name, type });

    return res.render('addDatabase', {
      databaseTypes,
      name: req.body.name,
      type: req.body.type,
    });
  },
};
